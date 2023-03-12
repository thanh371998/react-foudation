import React from "react";

function Button(props) {
    console.log("button props", props);
    return (
        <>
        <button type="button">{props.text}</button>
        <span>
            {props.isAddproduct &&(<div> do you want add</div>)}
        </span>
        </>
    )
}
export default Button;