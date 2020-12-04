import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SideBarContainer from './Components/Containers/SideBarContainer'
import Button from './Components/Button'
import PantallaBocina from './Components/PantallaBocina'



const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SideBarContainer} />
            <Route exact path="/funcion" component={Button} />
            <Route exact path="/pbocina" component={PantallaBocina} />
        </Switch>
        </BrowserRouter>
)

export default App;
