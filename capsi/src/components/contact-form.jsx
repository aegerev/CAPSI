import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utils/helper'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function App() {
const [formState, setFormState] = useState({name: '', email: '', subject: '', message: ''});
const [formMessage, setFormMessage] = useState('');

function handleChange(e) {
  if(e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    if(!isValid){
      setFormMessage("Invalid Email.");
    } else {
      setFormMessage('');
    }
  } else {
    if(!e.target.value.length){
      const name = e.target.name;
      setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
    } else {
      setFormMessage('');
    }
  }
  if(!formMessage){
    setFormState({...formState, [e.target.name]: e.target.value});
  }
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_895eiqf', '#contactForm').then(
    function (response) {
      console.log("Email Sent Successfully!", response.status, response.text);
    },
    function(err){
      console.log("Your message couldn't be sent. Please email Alex directly at alexandersegerev@gmail.com", err)
    }
  )
}
  return (
    <div className="App">
      <script type="text/javascript">
      (function() {
        emailjs.init({
          publicKey: 'elmFjcAZ6EDcjTN4s'
        })
      })
      </script>

<Form id="contactForm">
  <Form.Group controlId="name">
    <Form.Label>Name: </Form.Label>
    <Form.Control required name="name" placeholder="Alexander E." onBlur = {handleChange}/>
  </Form.Group>

  <Form.Group controlId="email">
    <Form.Label>Email: </Form.Label>
    <Form.Control required name="email" placeholder="alexandersegerev@gmail.com" onBlur = {handleChange}/>
  </Form.Group>

  <Form.Group controlId="subject">
    <Form.Label>Subject: </Form.Label>
    <Form.Control required name="subject" placeholder="About Me" onBlur = {handleChange}/>
  </Form.Group>

  <Form.Group controlId="message">
    <Form.Label>Message: </Form.Label>
    <Form.Control required name="message" as="textarea" rows="10" placeholder="An aspriring computer programmer." onBlur = {handleChange}/>
  </Form.Group>

  {formMessage && <p className='form-message'>{formMessage}</p>}

  <Button type="submit" className="btn" onClick={sendEmail}>Send Email</Button>
</Form>

    </div>
  );
}

export default App;
