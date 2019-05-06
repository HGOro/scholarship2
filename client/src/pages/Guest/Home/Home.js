import React, { Component } from 'react';
import './Home.css'

import API from "../../../utils/API";
//import Panel from '../../../components/Panel'
//import Input from '../../../components/Input'
//import Button from '../../../components/Button'

import { TextInput, Button, Icon, Row, Col, Container } from 'react-materialize'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            local_pw: "",
            message: "",
            buttonStatus: true
        }
    }
    handleInputChange=(e)=>{
        let value = e.target.value
        let name = e.target.name
        if (name === "local_pw" && value.length > 5){
          this.setState({buttonStatus: false})
        }
        this.setState({
            [name]: value
        })
    }

    handleSubmitAccess=(e)=>{
      
          e.preventDefault();
    
          const payload = {
            email:   this.state.email,
            local_pw: this.state.local_pw
          }
        
          let selectedButton = e.target.innerText;
          selectedButton = selectedButton.toLowerCase();
    
          this.refs.submitForm.reset();
    
          selectedButton === "signup" ?  this.handleSignup(payload) : this.handleLogin(payload)
      }
    
      handleLogin(userData){
        API.handleLogin(userData)
        .then(data => {return data.json()})
        .then(response=>{
          if(response === true){
            window.location.href = "/dashboard"
          }
          else {
              this.setState({message:"UH-OH! Please try again."})
            const errorWrap = document.getElementById("form-error");
            errorWrap.className += "error";
          } 
        })
        .catch(err=> console.log("err",err));
      }
    
      handleSignup(userData){
        API.handleSignup(userData)
        .then(data => {return data.json()})
        .then(response=>{
          if(response === true){
            window.location.href = "/dashboard"
          }
          else {
            this.setState({message:"UH-OH! Please try again."})
            const errorWrap = document.getElementById("form-error");
            errorWrap.className += "error";
          }  
        })
        .catch(err=> console.log("err",err));
      }
        
      resetError(){
        const errorWrap = document.getElementById("form-error");
        this.setState({message:""});
        errorWrap.classList.remove("error");
      }
    
      renderLoginForm(){
        return(
          <Container>
            <form ref="submitForm" onClick={this.resetError.bind(this)}>
              <p id="form-error">{this.state.message}</p>
              <TextInput icon="mail_outline" label="Email" name="email" validate label="Email" email onChange={this.handleInputChange} minLength="4" />
              <TextInput icon="lock_outline" password label="Password" name="local_pw" onChange={this.handleInputChange} minLength="6" required/>
              <Button disabled={this.state.buttonStatus} waves="light" style={{marginRight: '5px'}} onClick={this.handleSubmitAccess} >
                LOGIN
              </Button>
              <Button className="teal accent-3" disabled={this.state.buttonStatus} waves="light" style={{marginRight: '5px'}} onClick={this.handleSubmitAccess}>
                SIGNUP
              </Button>
            </form>
          </Container>
        )
      }

      render(){
        return(
            <div>
                HOME
                {this.renderLoginForm()}
            </div>
        )
    }
}

export default Home;
