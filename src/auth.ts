// goal: securely save a pair of coordinates. ensure those who update their coordinates are the same person.
// needs signup and auth keys

import { createHash, scryptSync, randomBytes, timingSafeEqual, createHmac } from 'crypto';
import { User, Session } from './util/consts';

export const hash = (i: string) => createHash('sha256').update(i).digest('hex');

/*
    @returns user the user that was created.
    @param name: the username to create
    @param pass: the password to create (not hashed)
    Not responsible for saving the user data.
    Not responsible to check if the user is valid.
*/
export function signup(name: string, pass: string): User {
    const salt: string = randomBytes(16).toString('hex');
    const hash: string = scryptSync(pass, salt, 16).toString('hex');

    const uuidhex: string = createHash('sha256').update(name).update(randomBytes(16)).digest('hex');
    const uuid: string = [uuidhex.slice(0, 4), uuidhex.slice(4, 8), uuidhex.slice(8, 12), uuidhex.slice(12, 16)].join('-');
    const user = {
        uuid,
        pass: `${salt}:${hash}`,
        name,
        priveledges: 0, // 0 0 0 0 0 0 0 0
        contact: {
            email: "",
            email_verified: false,
            phone: "",
        },
        dates: {
            account_created: Date.now(),
            account_last_login: Date.now(),
        },
        settings: {
            theme: "dark",
            language: "en",
            timezone: "America/New_York",
            email_lists: 0, // 0 0 0 0
        },
    };

    return user;
}

/*
    @returns {pepper, session} the pepper to generate the session, and the session object
    @param user: the user object to login to
    @param pass: the password to login with (not hashed)

    The client recieves the pepper and generates the session,
    so that the sessionID is never sent over the network.
    Not responsible for saving the session data.
    Not responsible to check if the user is valid.
*/
export function login(user: User, pass: string): string | { pepper: string, session: Session } {

    const [salt, key] = user.pass.split(":");
    const hashedBuffer = scryptSync(pass, salt, 16);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (!match) return "Fail: Wrong password.";

    // make a session ID to store info under
    const pepper = randomBytes(16).toString('hex');
    const sessionID = hash(pass + pepper)

    const session = { sessionID, pepper, user, data: {}, expire: Date.now() + 86400000 };
    return { pepper, session };
}

export function dothings(session: Session, data: any) {
    if (session.expire < Date.now()) return "Fail: Session expired";
    session.data = { ...session.data, ...data };
    return session;
}

export function getTodaysKey(password: string) {
    const day = String(new Date().getDate()).padStart(2, '0');
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const year = new Date().getFullYear();
    
    const hash = createHash('sha256').update(`${day}${month}${year}:${password}`).digest('hex');
    return hash;
}

module.exports = {
    signup: signup,
    login: login,
    dothings: dothings,
    hash: hash,
    getTodaysKey: (password: string) => {
        const day = String(new Date().getDate()).padStart(2, '0');
        const month = String(new Date().getMonth() + 1).padStart(2, '0');
        const year = new Date().getFullYear();
        
        const hash = createHash('sha256').update(`${day}${month}${year}:${password}`).digest('hex');
        return hash;
    }
}