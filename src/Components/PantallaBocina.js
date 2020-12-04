import React, { useState} from 'react'
import Menu from './Menu'
import sema1 from '../images/SemaforoLuzRoja.png'
import sema2 from '../images/semaforoLuzVerde.png'
import '../Css/bocina.css'

const PantallaBocina = ()=>{

    const[cruzar, setCruzar] = useState(true)
    return(
        <div>
            <Menu/>
            <div className="bocina">
                <img src={cruzar?sema1:sema2} />
            </div> 
        </div>
    )
}

export default PantallaBocina