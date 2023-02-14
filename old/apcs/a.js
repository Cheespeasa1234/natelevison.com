let run = () => {
    let input = document.getElementById("in").value;
    let f = (x) => {
        let b = ""
        for(let i =0; i <x.length; i++) {
            b += x.charAt(i)
            if(i==3||i==5)
                b+="-"
        }
        return b
    }

    location.href="https://pascack.instructure.com/courses/7033/pages/" + f(input)
}