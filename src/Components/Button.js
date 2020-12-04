import React, { useState} from 'react'
import Menu from './Menu'
import '../Css/Button.css'
import axios from 'axios'


const Button = () => {

  const [time, setTime] = useState("")
  const [txt, setTXT] = useState("PUSH")
  const hola = "Hola"
  const tiempo = time;
  const tx=txt 

 function clickbutton()  {
  if (txt=="PUSH"){
   setTime(5);
    setTXT("");
    setTimeout(()=>{

      var enviarDatos ={
        lugar :"Avenida 27 de Febrero",
          uso:1,
          fecha:"03/12/2020",
          idUsuario:window.$aidi
     }
      
      axios.post('http://localhost:3001/Boton', {mensaje:"Me presione"})
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

          

         console.log("=====enviarDatos====== ", enviarDatos)

         axios.post('http://localhost:3001/Historial', enviarDatos)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            console.log(enviarDatos)
          });

      return(speechSynthesis.speak(new SpeechSynthesisUtterance("Espere, Cambiando a verde")));
      
      
    },5000)
  

  }
 
   if (tiempo>0){
    clearTimeout(timeout);
    window.location.reload()
    return(speechSynthesis.speak(new SpeechSynthesisUtterance("!Cancelar!")));
   }
  }

//   var tiempo =0
// function click(){
//   if (tiempo > 0){
//     window.location.reload()
//   }
//   tiempo = 10
//   setTimeout(()=>{
//     console.log('que haga la vaina')
//   },tiempo)
// }

 
  const timeout = setTimeout(()=>{
      
    if(tiempo>0){
    setTime(tiempo - 1)
    }else{
      setTXT("PUSH")
      setTime("")
    }
   
    
  },1000)
   
return(
    <>
        <Menu />
        <div className="App">
      <header className="App-header">
      <div className="fletrero">
        <div className="letrero">
          <strong>PUSH BUTTON FOR</strong>
          <br/><i class="fas fa-walking"></i>
        </div>
        </div>
        <button onClick={clickbutton}  className="am" id="bt">
        {tiempo} {tx}</button> 
              
      </header>
    </div>
    </>
      )
    }
    
  export default Button;