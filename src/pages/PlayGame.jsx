import { Link, useLocation, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame(){

    const {state} = useLocation();
    // console.log(searchParams.get("text"));
    return(
        <>
        <h1>Play Game</h1>
        <MaskedText text={state.wordSelected} guessedLetters={[]}/>
        <Link to='/start' className="text-blue-400">Start game link</Link>
        </>
    )
}
export default PlayGame;