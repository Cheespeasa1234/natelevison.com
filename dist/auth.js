"use strict";
// goal: securely save a pair of coordinates. ensure those who update their coordinates are the same person.
// needs signup and auth keys
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
exports.signup = signup;
exports.login = login;
exports.dothings = dothings;
exports.getTodaysKey = getTodaysKey;
const crypto_1 = require("crypto");
const hash = (i) => (0, crypto_1.createHash)('sha256').update(i).digest('hex');
exports.hash = hash;
/*
    @returns user the user that was created.
    @param name: the username to create
    @param pass: the password to create (not hashed)
    Not responsible for saving the user data.
    Not responsible to check if the user is valid.
*/
function signup(name, pass) {
    const salt = (0, crypto_1.randomBytes)(16).toString('hex');
    const hash = (0, crypto_1.scryptSync)(pass, salt, 16).toString('hex');
    const uuidhex = (0, crypto_1.createHash)('sha256').update(name).update((0, crypto_1.randomBytes)(16)).digest('hex');
    const uuid = [uuidhex.slice(0, 4), uuidhex.slice(4, 8), uuidhex.slice(8, 12), uuidhex.slice(12, 16)].join('-');
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
function login(user, pass) {
    const [salt, key] = user.pass.split(":");
    const hashedBuffer = (0, crypto_1.scryptSync)(pass, salt, 16);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = (0, crypto_1.timingSafeEqual)(hashedBuffer, keyBuffer);
    if (!match)
        return "Fail: Wrong password.";
    // make a session ID to store info under
    const pepper = (0, crypto_1.randomBytes)(16).toString('hex');
    const sessionID = (0, exports.hash)(pass + pepper);
    const session = { sessionID, pepper, user, data: {}, expire: Date.now() + 86400000 };
    return { pepper, session };
}
function dothings(session, data) {
    if (session.expire < Date.now())
        return "Fail: Session expired";
    session.data = Object.assign(Object.assign({}, session.data), data);
    return session;
}
function getTodaysKey(password) {
    const day = String(new Date().getDate()).padStart(2, '0');
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const year = new Date().getFullYear();
    const hash = (0, crypto_1.createHash)('sha256').update(`${day}${month}${year}:${password}`).digest('hex');
    return hash;
}
module.exports = {
    signup: signup,
    login: login,
    dothings: dothings,
    hash: exports.hash,
    getTodaysKey: (password) => {
        const day = String(new Date().getDate()).padStart(2, '0');
        const month = String(new Date().getMonth() + 1).padStart(2, '0');
        const year = new Date().getFullYear();
        const hash = (0, crypto_1.createHash)('sha256').update(`${day}${month}${year}:${password}`).digest('hex');
        return hash;
    }
};
