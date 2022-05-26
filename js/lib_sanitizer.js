/**
 * @name sanitizeText
 * @description Sanitizes a string of text in order to be put back into html.
 * @param {string} text
 * @param {string[]} charsToRemove 
 * @version 1.0
 * 
 * @returns {string} sanitizedText
 */
function sanitizeText(text, charsToRemove) {

    if(typeof text != "string")
        return "error"

    let sanitizedText = ""

    for(let i = 0; i < text.length; i++) {

        let foundBadChar = false;

        // scan charsToRemove and if it detects bad char
        for(let j = 0; j < charsToRemove.length; j++) 
            if(text.charAt(i) == charsToRemove[j])
                foundBadChar = true;

        // then don't add it to the new text
        if(!foundBadChar)
            sanitizedText += text.charAt(i);
        
    }

    return sanitizedText;

}