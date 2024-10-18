export const folderRoot = "D:/website/natelevison.com";
export const publicFolder = "public_html";
export const privateFolder = "private_html";
export const relevanceThreshold = 0.4;
export const thresholdIncreaseAttempts = 4;
export const panic = 0.1;
export const ansi = {
    RESET: "\x1b[0m",
    BRIGHT: "\x1b[1m",
    DIM: "\x1b[2m",
    UNDERSCORE: "\x1b[4m",
    BLINK: "\x1b[5m",
    REVERSE: "\x1b[7m",
    HIDDEN: "\x1b[8m",
    FGBLACK: "\x1b[30m",
    FGRED: "\x1b[31m",
    FGGREEN: "\x1b[32m",
    FGYELLOW: "\x1b[33m",
    FGBLUE: "\x1b[34m",
    FGMAGENTA: "\x1b[35m",
    FGCYAN: "\x1b[36m",
    FGWHITE: "\x1b[37m",
    FGGRAY: "\x1b[90m",
    BGBLACK: "\x1b[40m",
    BGRED: "\x1b[41m",
    BGGREEN: "\x1b[42m",
    BGYELLOW: "\x1b[43m",
    BGBLUE: "\x1b[44m",
    BGMAGENTA: "\x1b[45m",
    BGCYAN: "\x1b[46m",
    BGWHITE: "\x1b[47m",
    BGGRAY: "\x1b[100m"
};

export type User = {
    uuid: string,
    pass: string,
    name: string,
    priveledges: number,
    contact: {
        email: string,
        email_verified: boolean,
        phone: string
    },
    dates: {
        account_created: number,
        account_last_login: number
    },
    settings: {
        theme: string,
        language: string,
        timezone: string,
        email_lists: number
    }
};

export type Session = {
    sessionID: string,
    pepper: string,
    user: User,
    data: any,
    expire: number
};

export type Post = {
    id: number,
    created: string,
    tags: string[],
    title: string,
    name: string,
    starred?: boolean,
    link?: string,
    disableGlossary?: boolean,
    unlisted?: boolean,
    relevance?: number,
    views?: number
};

export type PostWithRelevance = Post & { relevance: number };