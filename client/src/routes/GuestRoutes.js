import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Guest/Home/Home'
import Subject from '../pages/Guest/Subject/Subject'
import Mathematics from '../pages/Guest/Subject/Mathematics'
import NoMatch from '../pages/Guest/NoMatch/NoMatch'



class GuestRoutes extends Component {
    render(){
        return(
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subjects" component={Subject}/>
            <Route exact path="/math/quiz" component={Mathematics}/>
            <Route path="/math/*" component={Mathematics}/>
            <Route path="/math" component={Mathematics}/>
            <Route path="*" component={NoMatch} />
          </Switch>
        );
    }
}

export default GuestRoutes;