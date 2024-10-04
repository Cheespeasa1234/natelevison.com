function replaceAt(str, replacement, index, length) {
    var beforeSlice = str.slice(0, index);
    var afterSlice = str.slice(index + length);
    return beforeSlice + replacement + afterSlice;
}
function setCensorMode(content, mode) {
    // Find all instances of &{option1}{option2}
    var regex = /&{[^{}]*}{[^{}]*}/gm;
    var matches = Array.from(content.matchAll(regex));
    var replaced = content;
    for (var i = matches.length - 1; i >= 0; i--) {
        // Get the information about the match
        var match = matches[i];
        var matchContent = match[0];
        var matchIndex = match.index;
        var matchLength = matchContent.length;
        // Get what we need to replace it with
        var optionOne = matchContent.slice(2, matchContent.indexOf("}"));
        var optionTwo = matchContent.slice(matchContent.lastIndexOf("{") + 1, -1);
        // console.log(`"${optionOne}", "${optionTwo}"`);
        var option = mode ? optionOne : optionTwo;
        replaced = replaceAt(replaced, option, matchIndex, matchLength);
    }
    return replaced;
}
console.log(replaceAt("abcdefghijklmnop", "HELLO", 3, 5));
console.log(setCensorMode("Hello, World! I am so &{fucking }{}happy! I &{love}{hate} cursing.", true));
console.log(setCensorMode("Hello, World! I am so &{fucking }{}happy! I &{love}{hate} cursing.", false));
