import React from 'react'
import '../css/Boton.css'

export const Boton = (props) => {

    const esOp=valor=>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };


    return (
        <div className={`boton-contenedor ${esOp(props.children) ? 'operador' : null}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}
