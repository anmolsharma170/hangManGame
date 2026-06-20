import TextInputForm from "./TextInputForm";
import { useState } from "react";
function TextInputFormContainer(){
    
    const [inputType,setInputType] = useState("password");
// useState use 1st->state variable 2nd->state Updater function
    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
    }
    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
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