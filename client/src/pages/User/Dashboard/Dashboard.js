import React, {Component} from 'react'

import { TextInput, Button, Icon, Row, Col, Container } from 'react-materialize'

class Dashboard extends Component {

    render(){
        return(
            <Container>
                <h1>Dashboard</h1>
                <h3>Account Information:</h3>
                <h4>Name:</h4>
                <p>First: Test | Last: Test</p>
                <span>
                    <h4>email:</h4>
                    <p>test@test.com</p>
                </span>
            </Container>
            
        )
    }
}

export default Dashboard;