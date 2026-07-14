import { Link, useLocation, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
function PlayGame(){

    // const {state} = useLocation();
    const {wordList, word}=useContext(WordContext);



    //we want our component to rerender when guessedLetters state changes. So we will use useState hook to create a state variable guessedLetters and a function setGuessedLetters to update it.
    const [guessedLetters,setGuessedLetters]= useState([]);

    const [step,setStep]=useState(0);
    function handleLetterClick(letter){
        setGuessedLetters(previousLetters => {
            if(word?.toUpperCase().includes(letter)){
                console.log('Correct');
            }
            else{
                console.log('Wrong');
                setStep(step+1);
            }
            return  ([...guessedLetters,letter]);
        });
    } 
    return(
        <>
        <h1>Play Game</h1>


        {wordList.map(wordObject=> <li key={wordObject.id}>{wordObject.wordValue}</li> )}
        {word && (
            <>
                <MaskedText text={word} guessedLetters={guessedLetters}/>
        <div>
            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
        </div>
        <div> <Hangman step={step}/> </div>
            </>
        )}
        <Link to='/' className="text-blue-400">Home</Link>
        <Link to='/start' className="text-blue-400">Start game link</Link>
        </>
    )
}
export default PlayGame;