import React, { useEffect, useState } from "react";

const CounterApp = () =>{

const [counter, setCounter] = useState(0);

const handlerCounterDown = () => {
    if(counter < 1){
        counter = 0
    }else{
        setCounter(counter - 1)
    }
    
    
}

const handlerCounterUp = () => { 
    let stock = 10
    if(counter < 10)
    setCounter(counter + 1)
    
}


    return(
        <>
        <h2>Contador <b>{counter}</b></h2>
        <button onClick={handlerCounterUp} className="btn btn-primary mx-1 px-3">Aumentar +</button>
        <button onClick={handlerCounterDown} className="btn btn-danger px-4">Disminuir-</button>
        </>
    )
}

export default CounterApp;