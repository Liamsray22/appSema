import React from 'react'
import {Link} from 'react-router-dom'
import {Functions} from '../../Data/functions'
import Card from '../Card'
import Menu from '../Menu'

const SideBarContainer =()=>(
    <>
            <Menu/>

    <div  className="page">
        {Functions.map((item, index)=>{
            return(<Card
                imagen = {item.img}
                texto = {item.text}
                clase = {item.className}
                link = {item.link}
            />
            )
        })
    
    }
    </div>
    </>

)

export default SideBarContainer