import React, { useState ,useEffect} from 'react'
import Menu from './Menu'
import sema1 from '../images/SemaforoLuzRoja.png'
import sema2 from '../images/semaforoLuzVerde.png'
import '../Css/bocina.css'
import axios from 'axios'

const PantallaBocina = ()=>{

    const[cruzar, setCruzar] = useState(false)

    var num = 3
    useEffect(()=>{
        setInterval(()=>{
            axios.get('http://localhost:3001/Bocinas').then(
    function (response) {
    console.log(response.data)
    if(response.data == "verde"){
        setCruzar(true)
        speechSynthesis.speak(new SpeechSynthesisUtterance(num))
        
    }else{
        setTimeout(()=>{
        setCruzar(false)
        },5000)
    }
  }).catch(
    function (error) {
    console.log(error);
  });
        },4000)
        
    })
    

    return(
        <div>
            <Menu/>
            <div className="bocina">
                <div className="imgpantalla">
                <img  src={cruzar?sema1:sema2} />
                </div>
            </div> 
        </div>
    )
}

export default PantallaBocina