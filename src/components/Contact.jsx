
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from 'styled-components';
import Map from "./Map.jsx";
const Section=styled.div`
height:100vh;
scroll-snap-align:center;
`;
const Container=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
gap:50px;
`;
const Left=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;

@media only screen and (max-width: 768px) {
  justify-content:center;
}
`;
const Right=styled.div`
flex:1;
@media only screen and (max-width: 768px) {
  display: none;
}
`;
const Title=styled.h1`
font-weight:200;
`;
const Form=styled.form`
width:500px;
display:flex;
flex-direction:column;
gap:25px;

@media only screen and (max-width: 768px) {
  width:300px
}
`;
const Input=styled.input`
padding:20px;
bakcground-color:#e8e6e6;
border:none;
border-radius:5px;
`;
const TextArea=styled.textarea`
padding:20px;
bakcground-color:#e8e6e6;
border:none;
border-radius:5px;
`;
const Button=styled.button`
background-color:#da4ea2;
color:white;
border:none;
font-weight:bold;
cursor:pointer;
border-radius:5px;
padding:20px;
`;
const Contact = () => {
  const ref=useRef();
  const [success,setSuccess]=useState(null);
const handleSubmit=(e)=>{
  e.preventDefault();
  emailjs.sendForm('service_o9fwdba', 'template_ahxh0mu', ref.current, 'muhRlVWJJnOMrn8pa')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
}


  return (
    <Section>
      <Container>
        <Left>
<Form ref={ref} onSubmit={handleSubmit}>
  <Title>Contact Us</Title>
  <Input placeholder='Name' name="name"/>
  <Input placeholder='Email' name="email"/>
  <TextArea placeholder='Write Your Message' name="message" rows={10}/>
  <Button type='submit'>Send</Button>
  {success&&"Your message has been sent. we'll get back to you soon :)"}
</Form>
        </Left>
        <Right>
      <Map></Map>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact