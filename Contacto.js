import React from 'react'

function Contacto({contacto}){
return(
    <div className='container'>
        <div className='row'>
            <div className='col-sm=6 offset-3'>
            <ul className='list-group'>
                <li className='list-group-item'>{contacto.idcontacto}</li>
                <li className='list-group-item'>{contacto.nombre}</li>
                <li className='list-group-item'>{contacto.telefono}</li>
                <li className='list-group-item'>{contacto.email}</li>
            </ul>
<button className="btn btn-success"> editar</button>
<button className="btn btn-danger"> borar</button>
<hr className='mt-4'></hr>
        </div>

            </div>
     

    </div>
)
}

export default Contacto;