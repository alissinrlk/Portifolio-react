import React from "react";
import "../index.css";

export default function Div(props) {
    return (
        <div className="div-container">
            <img className="div-image" src={props.img} alt="logo" />
            <div className="div-text">
                <h1 className="div-title">{props.titulo}</h1>
                <p className="div-paragraph">{props.paragrafo}</p>
            </div>
        </div>
    );
}
