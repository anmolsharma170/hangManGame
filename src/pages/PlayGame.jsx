import { Link, useLocation, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButttons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
function PlayGame(){

    const {state} = useLocation();

    //we want our component to rerender when guessedLetters state changes. So we will use useState hook to create a state variable guessedLetters and a function setGuessedLetters to update it.
    const [guessedLetters,setGuessedLetters]= useState([]);
    function handleLetterClick(letter){
        setGuessedLetters(previousLetters => {
            if(previousLetters.includes(letter)){
                return previousLetters;
            }
            return [...previousLetters,letter];
        });
    }
    return(
        <>
        <h1>Play Game</h1>
        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>
        <div>
            <LetterButttons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
        </div>
        <Link to='/start' className="text-blue-400">Start game link</Link>
        </>
    )
}
export default PlayGame;