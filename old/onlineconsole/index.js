const zero = '+[]'
const one = '+!![]'
const t = '![]'
const f = '!+[]'

let numToStr = (num) => {

    return String.fromCharCode(num);

}

// compile a Number to JSFuck
let numToFuck = (num) => {

    let result = '+!![]'

    // if it is a zero
    if( num == 0 )
        return zero;
    if( num == 1 )
        return one;

    while ( num > 1 ) {
        num = num - 1;
        result = result + ' + ' + one;
    }

    return result;
}

log(numToFuck(4))