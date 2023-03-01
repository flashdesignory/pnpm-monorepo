import React from "react";

export const Button = (props) => {
    return <button onClick={() => props.onClick()}>{props.children}</button>
}

export default Button;