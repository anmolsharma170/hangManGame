import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useState } from "react";
function TextInputFormContainer(){
    
    const [inputType,setInputType] = useState("password");
// useState use 1st->state variable 2nd->state Updater function

    const [value,setValue] = useState("");

    const navigate = useNavigate(); 

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted",value);
        // if(value){
        //     setTimeout(() => {
        //         navigate('/play')
        //     }, 5000);   //once submit form is click it is directed to play page after 5 sec
        // }
        if(value){
            navigate(`/play`,{state: {wordSelected: value}});
        }
    }
    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);  // as soon as user types anything in input field its value is set 
    }

    function handleShowHideClick(){
        console.log("Show/Hide button clicked");
        if(inputType=="password"){
            setInputType("text"); 
        }
        else{
            setInputType("password");
        }
    }
    return <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />;
}

export default TextInputFormContainer;