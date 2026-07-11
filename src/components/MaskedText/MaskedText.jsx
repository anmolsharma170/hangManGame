import { getMaskedString } from "./MaskingUtility";

function MaskedText({text,guessedLetters}){
    const maskedString= getMaskedString(text,guessedLetters);
    console.log(text);
    console.log(guessedLetters);
    console.log(getMaskedString(text, guessedLetters));
    return(
        <>
            {maskedString.map((letter,index)=>{
                return(
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText; 