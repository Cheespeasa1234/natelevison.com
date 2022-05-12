let input = document.getElementById("in").value;

let output = document.getElementById("output");

let checkAsUsername = (username) => {

    let nums = "1234567890".split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = alphabet.split("").concat(alphabet.toUpperCase().split(""));
    let chars = "~!@#$%^&*()_+`-={}|[]<>?,.".split("");

    let allowedChars = nums.concat(letters).concat(chars);

    

}