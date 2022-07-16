import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import images from '../connectImages/images';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--contaier">
                    <Form style={{ width: '100%' }}>
                        <h1>Create an account</h1>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit">Login</Button>
                        </Form.Group>
                        <p pt-3 text-center>Already have an account !<Link to='/login'>Login</Link></p>{" "}
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container">
                    <img src={images.signPageImg} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Signup