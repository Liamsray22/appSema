import React, { useState } from 'react'

const History =()=>(
<>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>

<div class="containerr">
	<div class="row">
		
        
        <div class="col-md-12">
        <h1>Historial de Usuario</h1>

                
                   
                   <thead>
                   
                   <th>Seleccion</th>
                   <th>Id</th>
                    <th>Distancia</th>
                     <th>Lugar</th>
                     <th>Usos</th>
                     <th>Hora</th>                      
                       <th>Delete</th>
                   </thead>
    
    <tr>
    <td><input type="checkbox" class="checkthis" /></td>
    <td>0</td>
    <td>10mt</td>
    <td>Avenida 27 de febrero</td>
    <td>1</td>
    <td>22:50:60</td>
    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
    </tr>
    
    

                
            
        </div>
	</div>
</div>
</>


)

export default History