import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ModuloRegistro from './Pages/ModuloRegistro'
import ModuloLogin from './Pages/ModuloLogin'
import Historial from './Pages/Historial'
import SideBarContainer from './Components/Containers/SideBarContainer'
import Config from './Components/Config'
import Button from './Components/Button'
import PantallaBocina from './Components/PantallaBocina'



const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ModuloLogin} />
            <Route exact path="/registro" component={ModuloRegistro} />
            <Route exact path="/principal" component={SideBarContainer} />
            <Route exact path="/historial" component={Historial} />
            <Route exact path="/config" component={Config} />
            <Route exact path="/funcion" component={Button} />
            <Route exact path="/pbocina" component={PantallaBocina} />
        </Switch>
        </BrowserRouter>
)

export default App;
