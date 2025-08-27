function caesarCipher(string,shiftFactor){
    let transformedString = '';
    let i = 0;

    function shiftChar(char, shiftFactor){
        // Initialzation and function definitions
            // let shiftFactor = shiftFactor
            let oldCharNum = 0
            let shiftedChar = ''
            
            
            function getAlphabetIndex(char) {
                let index = 0
                // Function returns the index of a character from the alphabet: like c -> 3
                // Ensure it's a single character a–z
                if (!/^[a-zA-Z]$/.test(char)) {
                  throw new Error("Input must be a single alphabet character (a-z or A-Z)");
                }
              
                // Normalize to lowercase so it's case-insensitive
                
                index = char.toLowerCase().charCodeAt(0) - 96;
                console.log('Char to index done',index)

                return index
              }

            function getAlphabetLetter(n=0) {
            let letter = ''
            // Function returns a character based on numeric index input: like 6 --> f
            // Ensure n is between 1 and 26
            if (n < 1 || n > 26) {
                throw new Error("n must be between 1 and 26");
            }
            letter = String.fromCharCode(96 + n); // 97 = 'a'
            console.log('Index to char done',letter)

            return letter
            }
        // -----------------------------------

            // Transformation steps 
            
            oldCharNum = getAlphabetIndex(char)  
            //  Calculate the index of the shifted new character
            let shiftedCharNum = oldCharNum + shiftFactor
            shiftedChar = getAlphabetLetter(shiftedCharNum)
            return shiftedChar
        }

    // Take the string go thorugh all the characters and 
    // Take one latter at a step: while loop and string.charAt()
    while(i<string.length){
        // shiftedChar = 
        if (string.charAt(i)!=','){
            transformedString = transformedString + shiftChar(string.charAt(i),3)
            console.log(shiftChar(string.charAt(i)))
            console.log(string.charAt(i))
        }
        else{
            transformedString = transformedString+string.charAt(i)
        }
        i++
    }
    console.log(transformedString)
    return transformedString
}

console.log(caesarCipher('car',3))

module.exports = caesarCipher