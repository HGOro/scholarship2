import React, { Component } from 'react';
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes'
import GuestRoutes from './routes/GuestRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
//import Heading from './components/Header'
import './App.css';

class App extends Component {
  
  state = {
    isLoggedIn: false
  }
  
  componentWillMount(){
    this.checkAuth();
    //URL fixed remove anything from url, we want just "/"
    //let location = window.location.href.split("3000")
    //location = location[1]
    //if(this.state.isLoggedIn === false && location !== "/"){
    //  window.location.href = "/"
    //}
  }

  checkAuth(){
    API.checkAuth()
    .then(data => {return data.json()})
    .then(response => {
      this.setState({
        isLoggedIn: response
      })
    })
    .catch(err => console.log("err", err));
  }

  guestRouting = () => {
    return(
      <Router>
        <div className="content">
          <Header isLoggedIn={this.state.isLoggedIn}/>
          <div className="main">
            <Switch>
              <Route path="*" component={GuestRoutes} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }

  userRouting = () => {
    return(
      <Router>
        <div className="content">
          <Header isLoggedIn={this.state.isLoggedIn} />
          <div className="main"> 
            <Switch>
              <Route exact path="/" component={UserRoutes} />
              <Route exact path="/dashboard" component={UserRoutes} />
              <Route path="/dashboard/*" component={UserRoutes} />
              <Route exact path="/subjects" component={GuestRoutes} />
              <Route exact path="/math/quiz" component={GuestRoutes} />
              <Route path="/math/*" component={GuestRoutes} />
              <Route path="/math" component={GuestRoutes} />
              <Route path="*" component={GuestRoutes} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }

  render() {
    switch(this.state.isLoggedIn){
      case false:
       return this.guestRouting()
      case true:
       return this.userRouting()
      default:
       return this.guestRouting()
    }
   }

}

export default App;
