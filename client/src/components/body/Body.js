import React, { useState } from 'react';
import './Styles.css';

function Body() {

    // Hook que controla o estado da Seed
    const [seed, setSeed] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,])
    const [seedStack, setSeedStack] = useState([])

    const [mbr, setMbr] = useState(0)
    const [mar, setMar] = useState(0)
    const [ir, setIr] = useState(0)
    const [ibr, setIbr] = useState(0)
    const [pc, setPc] = useState(0)


    // Função que gera uma seed aleatória
    const generateSeed = () => {
        var newSeed = []
        for (var i = 0; i <= 39; i++) {
            newSeed.push(Math.floor(Math.random() * 2))
        }
        setSeed(newSeed)
        setSeedStack([...seedStack, newSeed])
    }


    return (
        <div className="body">

            <div className="generator">

                <h3>{seed}</h3>

                <button className="button" onClick={generateSeed}>
                    Gerar Instrução
                </button> 

            </div>

            

            <div className="instrucao">
                <div className="esquerda">

                    <p>ESQUERDA</p>

                    <p> Instrução: {seed.indexOf(1) != -1 ? seed.slice(0, 7) : "OPCODE ES"}</p>
                    <p> Endereço de Memória: {seed.indexOf(1) != -1? seed.slice(8, 19) : "ENDEREÇO ES"}</p>

                </div>
                <div className="direita">

                    <p>DIREITA</p>

                    <p> Instrução: {seed.indexOf(1) != -1? seed.slice(20, 27) : "OPCODE DR"}</p>
                    <p> Endereço de Memória: {seed.indexOf(1) != -1? seed.slice(28, 39) : "ENDEREÇO DR"}</p>

                </div>
            </div>

            <div className="seed-stack">
                <ol>
                    {
                    seedStack != [] ? 
                    
                    seedStack.map( (element, index) => <li key={index}> {element} </li> ) 
                    
                    : <p>Lista de SEEDS</p>
                    }

                </ol>
            </div>

        </div>
    );
}

export default Body;