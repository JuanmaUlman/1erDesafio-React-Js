import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({productsDetail}) => {


  return (
  
    
    <div >
<h2 className='detalles'>Detalles del juego</h2>

<div className='detailContainer'>
<div >
        <img src={productsDetail.pictureURL} alt="DBZ" className='imageContainer'/>
      </div>

      <div className='infoContainer'>
        <h2> <b>{productsDetail.title}</b> </h2>
        <p>{productsDetail.description} </p>
        <p>Voces: <b>{productsDetail.Voices}</b> </p>
        <p>Textos: <b>{productsDetail.Texts}</b> </p>
        <p>Tamaño: <b>{productsDetail.size}</b> </p>
        <p>Espacio requerido en consola: <b>{productsDetail.RequiredInConsole}</b> </p>
        <p>Instalacion: <b>{productsDetail.installation}</b> </p>  
        <p className='precioDetail1'>Precio: <b className='precioDetail2'>${productsDetail.price}</b> </p>

      </div>

    </div>

</div>
      
  )}
  


export default ItemDetail

