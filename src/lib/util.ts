export const alphanum = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
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

export function onlyHasGivenChars(text: string, chars: string): boolean {
    const charsApproved: string[] = (chars || alphanum).split("");
    const charsText: string[] = text.split("");

    for (let char of charsText) {
        if (!charsApproved.includes(char)) {
            return false;
        }
    }

    return true;
}

export function sanitize(text: string): string {
    return text.match(/[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890 ]/g)?.join('') || '';
}