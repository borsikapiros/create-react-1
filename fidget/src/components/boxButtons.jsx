import React, { useState } from "react";


function SingleButton({ defaultColor, szoveg }) {
    const [hex, setHex] = useState(defaultColor);
    const changeColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
        setHex(randomColor);
    };

    return (
        <div className="tile1"><button className="btn1" onClick={changeColor} style={{ backgroundColor: `${hex}` }}>{ szoveg }</button></div>
    )

}

function BoxButtons() {
    return (
        <div className="colorWrapper">
            <SingleButton defaultColor="lightblue" szoveg="Click me"/>
            <div className="tile2"></div>
            <SingleButton defaultColor="#6a3b9f" szoveg="Or me"/>
            <div className="tile4"></div>
            <SingleButton defaultColor="violet" szoveg="No, me"/>
            <div className="tile6"></div>
            <SingleButton defaultColor="lightcoral" szoveg="I'm the best"/>
            <div className="tile8"></div>
            <SingleButton defaultColor="greenyellow" szoveg="Please me!!!"/>
        </div>
    );
    }


export default BoxButtons;