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

/**
 * Returns whether or not a string is composed of exclusively a set of characters.
 * @param text The text to check
 * @param chars The characters to scan for
 * @returns Whether or not the string is exclusively those characters
 */
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


/**
 * Removes all invalid characters from a string.
 * @param text The text to scan
 * @param validChars The valid characters to allow
 * @param replacementChar The character to replace invalid characters with
 * @returns The cleaned up string
 */
export function removeAllInvalidCharacters(
    text: string,
    validChars: string,
    replacementChar: string
): string {
    const validCharSet = new Set(validChars);
    return [...text]
        .map(char => validCharSet.has(char) ? char : replacementChar)
        .join('');
}

export function sanitize(text: string) {
    return removeAllInvalidCharacters(text, alphanum + " ", '');
}


/**
 * Returns true if a given string is defined, and not empty
 * @param str A string to check
 * @returns Returns whether or not a string has something in it
 */
export function stringHasContent(str: string | undefined | null): boolean {
    if (str === undefined || str === null) return false;
    if (str.length === 0) return false;
    return true;
}

/**
 * Returns how many edits away from s1 is s2.
 * @param s1 The first string
 * @param s2 The second string
 * @returns How many edits away from s1 is s2
 * @see {@link similarity}
 */
function editDistance(s1: string, s2: string): number {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

/**
 * Returns a similarity value based on the edit distance between two strings.
 * @param s1 First string
 * @param s2 Second string
 * @returns The similarity. Higher = more similar
 * @see {@link editDistance}
 */
export function similarity(s1: string, s2: string) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength: number = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength;
}

/**
 * Computes and returns the average similarity of each query word's closest word in the source.
 * The query string is sanitized and broken into words, and each word is scanned.
 * For each query word, the highest similarity to a source word is taken and added.
 * Those similarities are averaged and returned. 
 * @param source The text to check against
 * @param query The text to query with
 * @returns The average similarity, or 0 if no words are in the query
 */
export function wordSimilarity(source: string, query: string): number {
    // Get cleaned text
    const sourceSan = removeAllInvalidCharacters(source, alphanum + " ", '').toLowerCase();
    const querySan = removeAllInvalidCharacters(query, alphanum + " ", '').toLowerCase();

    // Find how many words in the query are in the source
    const sourceWords = sourceSan.split(" ");
    const queryWords = querySan.split(" ");
    const total = queryWords.length;
    if (total === 0) return 0;
    if (sourceWords.length === 0) return 0;

    let sumsim = 0;
    for (const queryWord of queryWords) {
        // Find the max similarity to another word in the list
        let maxSimilarity = 0;
        for (const sourceWord of sourceWords) {
            const sim = similarity(queryWord, sourceWord);
            if (sim > maxSimilarity) {
                maxSimilarity = sim;
            }
        }
        sumsim += maxSimilarity;
    }

    return sumsim / total;
}