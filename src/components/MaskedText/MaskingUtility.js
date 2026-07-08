// original word -> the word which is given as an input and is expected to be guessed
//guessed letters -> these are the letters that users have already guessed
//eg original word: HUMBLE
// guessedletters: ['H','M','E']
// it will return "H _ M _ _ E" 
export function getMaskedString(originalWord,guessedLetters){
    guessedLetters=guessedLetters.map(letter=> letter.toUpperCase());
    const guessedLetterSet = new Set(guessedLetters);
    const result = originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }
        else return "_";
    })
    return result; //will return something like "H _ M _ _ E" masked string
}