import React from 'react'
import ItemCount from './ItemCount'




const ItemListContainer = (props) =>{

    return(
    <>
    <h2>{props.saludo}</h2>
    <ItemCount/>
    </>
    )
}


export default ItemListContainer