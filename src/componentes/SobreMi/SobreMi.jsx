import React from "react";
import NavBar from "../NavBar/NavBar";
import fotoperfilblack from "../imgs/fotoperfil.jpg"
import "./SobreMi.css"
import cv from "./cv.pdf";
import Redes from "../Redes/Redes";


function SobreMi() {
    return (
        <>
            <section className="containerSobreMi" id="sobremi">
                <div className="sobremi">
                    <section className="number">01.</section>
                    <section>SOBRE MI</section>
                </div>
                <div className="info">
                    <img className="fotoPerfil" src={fotoperfilblack} width="400px" height="270px" />
                    <div className="texto">
                        <div>
                            <span>Hola a todos! Mi nombre es:</span> <span className="fabri">FABRIZIO RULLO.</span>
                        </div>
                        <p>Soy un desarrollador full-stack ubicado en Argentina. Tengo una gran pasión por la creación de aplicaciones web y siempre estoy buscando nuevos desafíos.

Bien organizado y enfocado, siempre estoy listo para aprender nuevas tecnologías y compartir mis conocimientos con los demás.

Interesado en el diseño Front-End y las interacciones con los usuarios, quiero crear sitios web dinámicos y escalables. También interesado en el Back-End y DBs.
                        </p>
                        <div>
                            <div>
                                <span className="s1">Edad:</span>
                                <span className="s2">20 años.</span>
                            </div>
                            <div>
                                <span className="s1">Lenguajes:</span>
                                <span className="s2" >Español/Ingles.</span>
                            </div>
                            <div>
                                <span className="s1">Lugar:</span>
                                <span className="s2">Villa Allende, Cordoba, Argentina.</span>
                            </div>
                            <div>
                                <span className="s1">Email:</span>
                                <span className="s2">fabriziorullo@hotmail.com</span>
                            </div>
                        </div>
                        <div className="divBoton">
                            <a href={cv} download="fabriziorulloCV" className="descarga-boton">DESCARGAR CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SobreMi;