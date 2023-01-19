import React from 'react';
import './Redes.css'
import outlook from '../imgs/Outlook.png'
import wpp from "../imgs/wpp.png"
import linkedin from "../imgs/linkedin.png"
import git from "../imgs/git.png"

function Redes() {
    return (
        <div className="nav-contacto">
        <a target="_blank" href='https://api.whatsapp.com/send?phone=543516085342'>
            <img src={wpp} width='30'/>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/fabrizio-rullo-88728222a/'>
        <img src={linkedin} width="30"  />
        </a>
        
        <a target="_blank" href='mailto:fabriziorullo@hotmail.com'>
            <img  src={outlook} width="30"  />
        </a>
        <a target="_blank" href='https://github.com/fabrirullo'>
            <img  src={git} width="30"  />
        </a>
        </div>
    )
}

export default Redes;