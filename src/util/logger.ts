import { Request, Response, NextFunction } from 'express';
import { ansi, privateFolder } from './consts';
import fs from 'fs';

export function padIP(IP: string): string {
    return IP.split('.')
        .map(segment => segment.toString().padStart(3, '0'))
        .join('.');
}

export function logger(req: Request, res: Response, next: NextFunction) {
    // Basic log
    const forwardedAddress: string | string[] | undefined = req.headers['x-forwarded-for'];
    const remoteAddress: string | undefined = req.socket.remoteAddress;
    
    if (forwardedAddress === undefined || remoteAddress === undefined) {
        console.error('No IP address found in request');
        return res.status(400).send('No IP address found in request');
    }
    const ipString: string | string[] = forwardedAddress || remoteAddress;
    if (Array.isArray(ipString)) {
        console.error('Multiple IP addresses found in request');
        return res.status(400).send('Multiple IP addresses found in request');
    }

    const ips = ipString.split(', ').map(padIP);
    const ip = ips.join(' -> ');
    const url = req.originalUrl;
    const time = new Date();

    const partBody = JSON.stringify(req.body);
    const partQuery = JSON.stringify(req.query);
    const partParams = JSON.stringify(req.params);
    const partCookie = JSON.stringify(req.cookies);
    
    let body = '';
    if (partBody !== '{}') body += `\tBODY: ${partBody}\n`;
    if (partQuery !== '{}') body += `\tQUERY: ${partQuery}\n`;
    if (partParams !== '{}') body += `\tPARAMS: ${partParams}\n`;
    if (partCookie !== '{}') body += `\tCOOKIES: ${partCookie}\n`;
    
    let out = `[${ansi.FGBLUE}${time.toLocaleString('en-US', { timeZone: 'EST' })}${ansi.RESET}] ${ansi.FGMAGENTA}${ip}${ansi.RESET} requested ${ansi.FGMAGENTA}${url}${ansi.RESET}\n`;
    
    // Get cookies
    for (const cookieName in req.cookies) {
        if (Object.hasOwnProperty.call(req.cookies, cookieName)) {
            const cookieValue = req.cookies[cookieName];
            out += `\t${ansi.FGGRAY}${cookieName}: ${cookieValue}${ansi.RESET}\n`;
        }
    }
    
    console.log(out);

    const title = `${time.toISOString()} ${ip} ${req.protocol}/${req.method} ${url}\n`;
    fs.appendFileSync(`${privateFolder}/logs/access.log`, title + body);

    next();
};