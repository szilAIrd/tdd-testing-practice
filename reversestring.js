function reverseString(string){
    let reverseString = ''
    console.log(string.length)
    console.log(string.charAt(2))
    let i=0;
    
    while(i<string.length){
        // reverseString = reverseString+string.charAt(string.length-i-1)
        reverseString=reverseString.concat(string.charAt(string.length-i-1))
        console.log(reverseString)
        // console.log(i)
        i++;
    }
    return  reverseString

}

// console.log(reverseString('sdaddd'))

module.exports = reverseString;