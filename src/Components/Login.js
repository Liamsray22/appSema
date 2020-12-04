import React, { useState } from 'react'
import LoginContainer from './Containers/LoginContainer'
import {Redirect} from 'react-router-dom';

//Installed
import axios from 'axios'

const Login =()=>{ 
    
    const [datos, setDatos] = useState(
        {   
         clave:"",
         usuario:""})
     const [clave, setClave] = useState(false)
     const [usuario, setUsuario] = useState(false)
     const [errol, setErrol] = useState(false)
     const [vamonos, setVamonos] = useState(false)


     const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setDatos(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(name + ": " + value)
     }

     const validarForm =()=>{

         
         if(datos.usuario){
            setUsuario(false)
         }else{
            setUsuario(true)
         }
         if(datos.clave){
            setClave(false)
         }else{
            setClave(true)
         }
         if(datos.clave && datos.usuario){
            Enviar()
         }
        }
        const Enviar =()=>{
            const pass = datos.clave
            const user = datos.usuario
         var enviarDatos ={
               eclave:pass,
             eusuario:user
         }

         console.log("=====enviarDatos====== ", enviarDatos)

         axios.post('http://localhost:3001/Login', enviarDatos)
          .then(function (response) {
            console.log(response.status);
            console.log(response.data);
            window.$aidi = response.data._id
            console.log(window.$aidi)
            setVamonos(true)
          })
          .catch(function (error) {
              setErrol(true)
            console.log(error);
          });

     }
    
    return(
       <>
       {!vamonos?
      <LoginContainer
         handleChange= {handleChange}
         usuario ={usuario}
         clave ={clave}
         validarForm ={validarForm}
         errol ={errol}
      />
      :
      <Redirect to="/principal"/>
       }
      </>
)
}



export default Login