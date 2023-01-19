import React from "react";
import "./Home.css"
import NavBar from "../NavBar/NavBar";
import Particles from "../Particles/Particles";
import Redes from "../Redes/Redes";



function Home() {
    return (
        <section id='home'  >
            <div className="particle-container">
            <Particles />
            </div>
            <NavBar />
            <div className="containerHome">
                <div className="hs">
                    <h1>Fabrizio Rullo</h1>
                    <h2>Full Stack Developer.<span>&#160;</span></h2>
                </div>
                </div>
        </section>


    )
}


export default Home;