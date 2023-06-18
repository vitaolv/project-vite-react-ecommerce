import { useState } from "react"


export function Contador() {

    const [contador, setContador] = useState(1)

    function aumento() {
        setContador(contador + 1)
    }

    function desfazAumento() {
        setContador(contador - 1)

        if (contador === 1) {
            setContador(1)
        }
    }

    return (
        <div className="content-button-contador-item">
            <div id="buttonAumentoOuDesfaz">
                <button onClick={desfazAumento}>-</button>
                <button onClick={aumento}>+</button>
            </div> 
            <h5> Quantidade: {contador} </h5>
        </div>
    )
}