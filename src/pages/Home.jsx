import { useEffect, useState } from "react";
import Button from "../components/Buttons/Button";
import {Link} from "react-router-dom";
function Home(){
    const [word,setWord] = useState('');
    async function fetchWords(){
        //we can raise a network call through browsers using fetch
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(randomIndex);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);

    }
    useEffect(()=>{
        fetchWords(); 
    },[]);
    return(
        <>
            <Link to="/play" state={{wordSelected: word}}>
                <div className="mt-4 w-52">
                    <Button text="Single player Game"/>
                </div>
                
            </Link>
            <br />
            <Link to="/start">
            <div className="mt-4 w-52">
                <Button text="Multiplayer Game"styleType="secondary"/>
            </div>
                
            </Link>
        </>
    )
}

export default Home;