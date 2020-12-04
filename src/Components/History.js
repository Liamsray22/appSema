import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Css/historial.css'

const History =()=>{

  const [data, setData] = useState([]);
  const [place, setPlace] = useState("");


  useEffect(()=>{
    axios.post('http://localhost:3001/History',{idUsuario:window.$aidi}).then(
    function (response) {
    console.log(response.data)
    setData(response.data)
    setPlace(response.data[0].lugar)
  }).catch(
    function (error) {
    console.log(error);
  });
  },[])
  





return (
<>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<div class="containel">
	<div class="row">
		
        
        <div class="col-md-12">
        <center><b><h1 className="letra">Historial de Usuario</h1></b></center>
    
<h3><i class="fas fa-road"></i><strong>Numero de Cruces:</strong> {data.length}</h3>
<br/>
<hr/>    
<h3><i class="fas fa-shoe-prints"></i><strong>Distancia recorrida:</strong> {data.length} metros</h3>    
<br/>
<hr/> 
<h3><i class="fas fa-map-marked-alt"></i><strong>Ubicacion mas frecuentada:</strong> {place}</h3>    


                
            
        </div>
	</div>
</div>

</>


)

}

export default History