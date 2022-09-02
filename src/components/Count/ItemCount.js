import React, {useState } from "react";



const CounterApp = ({ stock, initial, onAdd}) =>{

    const [number, setNumber] = useState(initial)


    const addProduct = (num) =>{
        setNumber(number + num)
    };


return(
    <div>

        <div className="my-4 ">
            <button onClick={() =>addProduct(-1)} disabled={number === initial} className="btn btn-primary px-3">-</button>
            
            <span className="m-3 text-center text-black h5 p-2">{number}</span>
            
            <button onClick={() => addProduct(+1)} disabled={number === stock} className="btn btn-primary px-3 ">+</button>
        </div>

        <button onClick={() => onAdd(number)} disabled={stock === 0 ? true : null} className="btn btn-warning px-5">Añadir</button>

    </div>
)
}

export default CounterApp;