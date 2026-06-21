import { Link } from "react-router-dom";
function PlayGame(){
    return(
        <>
        <h1>Play Game</h1>
        <Link to='/start' className="text-blue-400">Start game link</Link>
        </>
    )
}
export default PlayGame;