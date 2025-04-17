import React from "react";
import "../index.css"
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Section from "../componentes/Section";
import Div from "../componentes/Div";

export default function Home() {
    return (
        <div>
        <Header/>

        <Div 
        titulo="ANDREW"
        paragrafo="KEVynn"
        img="https://media.istockphoto.com/id/1166257074/pt/vetorial/barcode-vector-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=mBGSpo0ukIarb-hR66PQg-8NPQ27AMptRxooU63kb6o="
        ></Div>

        <Div
        titulo="ALISSON"
        paragrafo="MAZA"
        img="https://blog.qualisign.com.br/wp-content/uploads/2024/12/img-dest-codigo-hash-1200x687.jpg"
        ></Div>
        
        <Div
        titulo="Cara de galo"
        paragrafo="cenoura"
        img="https://web-assets.esetstatic.com/tn/-x700/wls/2024/2-2024/ofuscacion-codigo/ofuscacion-codigo-jpeg.jpeg"
        ></Div>


        <Section
        titulo="Qualquer coisa"
        paragrafo="paragrafo"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9j-MaBgcbO2s9Tknk86ykDxks4EoeIp22MA&s"
        alt="foto"
        />


        <Section
            titulo="Qualquer outra  coisa"
            paragrafo="paragrafo 2"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJbtwmp9RCDunqti3EWXKlE-dperlSiFMRw&s"
            alt="foto"
        />
        <Section
            titulo="Qualquer outra , outra coisa"
            paragrafo="paragrafo 3"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5neEEJH-yRxLxWwzUtRviakZrHym_buXLg&s"
            alt="foto"
        
        />
        <Footer/>
        </div>
    )
}

