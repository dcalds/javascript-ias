import React, { useState } from 'react';
import './Styles.css';

function Body(){

    // Hook que controla o estado da Seed
    const [seed, setSeed] = useState([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1])

    // Função que gera uma seed aleatória
    const generateSeed = () => {
        var newSeed = []
        for (var i = 0; i <= 39; i++){
            newSeed.push(Math.floor(Math.random() * 2))
        }
        setSeed(newSeed)
    }

    return(
        <div className="body">

            <p>{seed}</p>

            <button onClick={generateSeed}>
                Generate Seed
            </button>

        </div>
    );
}

export default Body;