import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from '../pages/User/Dashboard/Dashboard'
//import Quiz from '../pages/User/Quiz/Quiz'
//import Subject from '../pages/Guest/Subject/Subject'

class UserRoutes extends Component {
    render(){
        return(
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/quiz" component={Quiz} /> */}
            {/* <Route exact path="/quiz/:id" component={Quiz} /> */}
            {/* <Route exact path="/subjects" component={Subject} /> */}
  
            <Route path="*" component={Dashboard} />
          </Switch>
        );
    }
}

export default UserRoutes;