import getButtonStyling from "./getButtonStyling";
function Button({text,onClickHandler,styleType="primary",type="button"}){
    return(
        <button 
        onClick={onClickHandler}
        type={type}
        className={`${getButtonStyling(styleType)} text-white font-bold py-2 px-4 rounded`}
        >
            {text}
        </button>
    );
}
export default Button;