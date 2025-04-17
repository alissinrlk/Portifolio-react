import React from "react";
import "../index.css";

export default function Section(props) {
    return (
        <section className="section">
            <div className="section-content">
                <div className="text-block">
                    <h2>{props.titulo}</h2>
                    <p>{props.paragrafo}</p>
                </div>
                <div className="image-block">
                    <img src={props.link} alt={props.alt} />
                </div>
            </div>
        </section>
    );
}
