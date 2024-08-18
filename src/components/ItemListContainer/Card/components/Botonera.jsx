import { useState } from "react"

export const Botonera = () => {

    const [mensaje, setMensaje] = useState("Ir a perfil")

    return (
        <>
        <button onClick={()=>{
            setMensaje("Abrirá Nueva Pestaña");
        }}>
            {mensaje}
        </button>
        </>
    )
}