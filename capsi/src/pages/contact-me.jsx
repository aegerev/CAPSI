import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactForm from '../components/contact-form';
import '../App.css';



function contactMe() {

    return (
        <div className='container'>
            <Container className="text-center">
                <div className = "p-md-5">
                    <h1>Let's Talk.</h1>
                </div>
            </Container>

        <Container fluid className="bg-light-mb-5">
            <Container className="p-4">
                <Row>
                    <Col>
                    <Container>
                        <h2 style = {{color: "#ec2020"}}>Contact Info</h2>
                        <p>
                            <a href="mailto: alexandersegerev@gmail.com">
                                <span className='pr-3'>
                                    <FaEnvelope/>
                                </span>
                                alexandersegerev@gmail.com
                            </a>
                        </p>

                        <p>
                            <a href='https://github.com/aegerev' target='_blank'>
                                <span className = "pr-3">
                                    <FaGithub/>
                                </span>
                                aegerev
                            </a>
                        </p>
                        
                        <p>
                            <a href="https://www.linkedin.com/in/alexander-egerev-3494aa301/" target='_blank'>
                                <span className="pr-3">
                                    <FaLinkedin/>
                                </span>
                                alexander-egerev-3494aa301
                            </a>
                        </p>

                        <p>Phone: +1(609)475-2220</p>
                    </Container>
                    </Col>

                    <Col sm={12} md={6} lg={8} className='pt-sm-4 pt-lg-0'>
                        <Container>
                            <h4 style={{color: "#D70000"}}>Send Me A Message </h4>
                            <ContactForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
        </div>

    )
};

export default contactMe;