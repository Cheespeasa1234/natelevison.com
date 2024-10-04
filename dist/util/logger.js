"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.padIP = padIP;
exports.logger = logger;
const consts_1 = require("./consts");
const fs_1 = __importDefault(require("fs"));
function padIP(IP) {
    return IP.split('.')
        .map(segment => segment.toString().padStart(3, '0'))
        .join('.');
}
function logger(req, res, next) {
    // Basic log
    const forwardedAddress = req.headers['x-forwarded-for'];
    const remoteAddress = req.socket.remoteAddress;
    if (forwardedAddress === undefined || remoteAddress === undefined) {
        console.error('No IP address found in request');
        return res.status(400).send('No IP address found in request');
    }
    const ipString = forwardedAddress || remoteAddress;
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
    if (partBody !== '{}')
        body += `\tBODY: ${partBody}\n`;
    if (partQuery !== '{}')
        body += `\tQUERY: ${partQuery}\n`;
    if (partParams !== '{}')
        body += `\tPARAMS: ${partParams}\n`;
    if (partCookie !== '{}')
        body += `\tCOOKIES: ${partCookie}\n`;
    let out = `[${consts_1.ansi.FGBLUE}${time.toLocaleString('en-US', { timeZone: 'EST' })}${consts_1.ansi.RESET}] ${consts_1.ansi.FGMAGENTA}${ip}${consts_1.ansi.RESET} requested ${consts_1.ansi.FGMAGENTA}${url}${consts_1.ansi.RESET}\n`;
    // Get cookies
    for (const cookieName in req.cookies) {
        if (Object.hasOwnProperty.call(req.cookies, cookieName)) {
            const cookieValue = req.cookies[cookieName];
            out += `\t${consts_1.ansi.FGGRAY}${cookieName}: ${cookieValue}${consts_1.ansi.RESET}\n`;
        }
    }
    console.log(out);
    const title = `${time.toISOString()} ${ip} ${req.protocol}/${req.method} ${url}\n`;
    fs_1.default.appendFileSync(`${consts_1.privateFolder}/logs/access.log`, title + body);
    next();
}
;
