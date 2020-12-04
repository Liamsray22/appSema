import React, { useState ,useEffect} from 'react'
import Menu from './Menu'
import sema1 from '../images/SemaforoLuzRoja.png'
import sema2 from '../images/semaforoLuzVerde.png'
import '../Css/bocina.css'
import axios from 'axios'

const PantallaBocina = ()=>{

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
        setCruzar(false)

    }
  }).catch(
    function (error) {
    console.log(error);
  });
        },3000)
        
    })
    

    const[cruzar, setCruzar] = useState(false)
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