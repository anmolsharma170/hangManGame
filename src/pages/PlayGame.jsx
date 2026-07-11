import { Link, useLocation, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../components/HangMan/HangMan";
function PlayGame(){

    const {state} = useLocation();

    //we want our component to rerender when guessedLetters state changes. So we will use useState hook to create a state variable guessedLetters and a function setGuessedLetters to update it.
    const [guessedLetters,setGuessedLetters]= useState([]);

    const [step,setStep]=useState(0);
    function handleLetterClick(letter){
        setGuessedLetters(previousLetters => {
            if(state?.wordSelected?.toUpperCase().includes(letter)){
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

        {state?.wordSelected && (
            <>
                <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>
        <div>
            <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
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