import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function AgregarContactos(){

     //hooks
const [nombre,setNombre]= useState('')
const [email,setEmail]= useState('')
const [telefono,setTelefono]= useState('')


     function agregarContactos(){
          var contacto={
               nombre:nombre,
               email:email,
               telefono:telefono,
               idcontacto: uniqid()
           
          }
          console.log(contacto)
          axios.post('/api/contacto/agregarcontacto',contacto)
          .then (res =>{
          alert(res.data)
          })
          .then(err =>{console.log(err)})
     }


return(
    <div className='container '>
         <h2>Contactos Turma #16</h2>
    <for>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Nombre Completo</label>
    <input type="text"  class="form-control" placeholder='ingrese nombre' value={nombre}  onChange={(e)=> {setNombre(e.target.value)}}/>
   </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email</label>
    <input type="text"  class="form-control" placeholder='ingrese email' value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
   </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Telefono</label>
    <input type="text"  class="form-control" placeholder='ingrese telefono' value={telefono} onChange={(e)=> {setTelefono(e.target.value)}} />
   </div>
   
    </for>
    <button onClick={agregarContactos} class='btn btn-success'> Guardar </button>
     </div>    

   
   
)
}

export default AgregarContactos;