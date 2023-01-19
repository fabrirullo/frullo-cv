import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";
import { useNavigate } from 'react-router-dom';
import "./Proyectos.css"
import { Button } from 'react-bootstrap';
import Particles from "../Particles/Particles";


function Proyectos() {

    const [proyecto, setProyecto] = useState("")

    const [show, setShow] = useState(false)

    let navigate = useNavigate()



    function handleShow(e) {
        setProyecto(e.target.name)
        setShow(true)
    }


    return (
        <section className='containerProyectos' id='proyectos'>
            <div className="sobremi">
                <section className="number">03.</section>
                <section>PROYECTOS</section>
            </div>
            
            <div className='container-proyects1'>


                <div className='card-videogame' name='videogame' onClick={handleShow} >
                    <div className='content'>
                        <h2 className='letra'>Videogames</h2>
                    <Button>
                        <a href='https://github.com/fabrirullo/PI-videogames'  className='Buttonn'> Codigo</a>
                    </Button>
                    </div>
                </div>
                <span className='texto1'>Este proyecto consistió en el desarrollo de una SPA, en la cual utiliza datos de una API ("RAWG Video
    Games") y toda la información extraída es almacenada en una Base de Datos, para luego ser utilizada a conveniencia. Implementando:
✔️ Paginado,
✔️ Ordenamientos,
✔️ Filtrados
✔️ Detalle de videojuego,
✔️ Creación de nuevos juegos en la base de
datos
    </span>
            </div>
        </section>

    )
}

export default Proyectos;
