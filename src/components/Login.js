import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="center login" >

                <Row>
                    <Col s={4}></Col>
                    <Input s={3} label='User Name' />
                    <Col s={4}></Col>
                </Row>
                <Row>
                    <Col s={4}></Col>
                    <Input s={3} label='Password' type="password" />
                    <Col s={4}></Col>
                </Row>
                <Row>
                    
                    <Link to="/add" >
                        <Button className="blue-grey darken-2" >Login</Button>
                    </Link>
                    
                </Row>

            </div>

        )
    }
}

export default Login;