import React, { useEffect,useState } from 'react'
import axios from 'axios'

import Contacto from './Contacto'

function ListaContactos(){


   //hooks
   const [datacontacto,setdatacontacto]= useState([])
   
   useEffect(()=>{
  axios.get ('api/contacto/obtenercontacto').then(res =>{
    console.log(res.data)
    setdatacontacto(res.data)
  }) .catch(err =>{
  console.log(err)

  })
   },[])
   
   // mapear lista de contactos en  objeto contacto

 const listacontacto =datacontacto.map(contacto =>{
  return(
    <div>
    <Contacto contacto = {contacto }/>
  
    </div>
  )
 })

   return(
    <div>
   <h2> Lista de  los Contactos </h2>
  {listacontacto}
 </div>
)
}

export default  ListaContactos;