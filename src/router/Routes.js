import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../Home.js'
import ALineBLine from '../ALineBLine.js'




const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ALineBLine" component={ALineBLine} />
    </Switch>
  )
}

export default Routes
