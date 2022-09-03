import React from 'react';
import './App.css';
import ListaContactos from'./componetes/ListaContactos';
import AgregarContactos from './componetes/AgregarContactos';
import EditarContactos from './componetes/EditarContactos'
import ContactoTrurma from './componetes/ContactoTurma';

import{BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
   <h1>Agenda de contacto</h1>
 
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="agregarContacto">Agregar Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contactoTrurma">Agregar Contacto1</a>
        </li>
       
       
      </ul>
    


  </div>
</nav>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ListaContactos/>}exact></Route>
      <Route path='/agregarContacto'element={<AgregarContactos/>}exact></Route>
      <Route path='/contactoTrurma'element={<ContactoTrurma/>}exact></Route>
    <Route path='/editarContactos'element={<EditarContactos/>}exact></Route>
    
     </Routes>
     </BrowserRouter>

    
     

    </div>
  );
}

export default App;
