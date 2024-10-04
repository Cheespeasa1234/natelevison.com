function replaceAt(str: string, replacement: string, index: number, length: number): string {
    const beforeSlice = str.slice(0, index);
    const afterSlice = str.slice(index + length);

    return beforeSlice + replacement + afterSlice;
}

function setCensorMode(content: string, mode: boolean): string {
    // Find all instances of &{option1}{option2}
    const regex: RegExp = /&{[^{}]*}{[^{}]*}/gm;
    const matches = Array.from(content.matchAll(regex));

    console.log(`Swear matches: ${matches.length}`);

    let replaced = content;
    for (let i = matches.length - 1; i >= 0; i--) {
        // Get the information about the match
        const match = matches[i];
        const matchContent = match[0];
        const matchIndex = match.index;
        const matchLength = matchContent.length;

        // Get what we need to replace it with
        const optionOne = matchContent.slice(2, matchContent.indexOf("}"));
        const optionTwo = matchContent.slice(matchContent.lastIndexOf("{") + 1, -1);
        // console.log(`"${optionOne}", "${optionTwo}"`);
        const option = mode ? optionOne : optionTwo;

        replaced = replaceAt(replaced, option, matchIndex, matchLength);
    }
    return replaced;
}

export function compile(input: string, variables: { [key: string]: any }, censorMode: boolean): string {
    // Replace variables
    let output = input;
    for (let key in variables) {
        output = output.replace(new RegExp("\\$\\{" + key + "\\}", 'g'), variables[key]);
    }

    // Censor
    return setCensorMode(output, censorMode);
}