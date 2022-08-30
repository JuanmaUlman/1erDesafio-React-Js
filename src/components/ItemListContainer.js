import React from 'react'
import ItemCount from './ItemCount'




const ItemListContainer = (props) =>{

    const onAdd = (number) =>{
        alert(`Agregaste ${number} productos`)
      }
    
    

    return(
    <>
        <h2>{props.saludo}</h2>
        <ItemCount
            onAdd={onAdd}
            initial={1}
            stock={10}
        />
    </>
    )
}


export default ItemListContainer