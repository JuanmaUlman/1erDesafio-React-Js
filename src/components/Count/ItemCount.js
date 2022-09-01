import React, {useState } from "react";



const CounterApp = ({ stock, initial, onAdd}) =>{

    const [number, setNumber] = useState(initial)


    const addProduct = (num) =>{
        setNumber(number + num)
    };


return(
    <div>
        <>
        <h3>Contador de productos</h3>
        </>
        <div className="my-4">
            <button onClick={() =>addProduct(-1)} disabled={number === initial} className="btn btn-danger px-3">Disminuir -</button>
            
            <span className="m-3 text-center">{number}</span>
            
            <button onClick={() => addProduct(+1)} disabled={number === stock} className="btn btn-success px-3">Aumentar +</button>
        </div>

        <button onClick={() => onAdd(number)} disabled={stock === 0 ? true : null} className="btn btn-light px-5">Añadir</button>

    </div>
)
}

export default CounterApp;