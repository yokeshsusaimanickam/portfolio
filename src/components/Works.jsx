import React, { useState } from 'react'
import { styled } from 'styled-components';
import Map from "./Map.jsx";
import WebDesign from './WebDesign.jsx';
import Development from './Development.jsx';
import ProductDesign from './ProductDesign.jsx';
const data=[
  "web design",
  "development",
  "illustration",
  "product design",
  "social media"
]

const Section=styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
position:relative;
color:black;
font-size:14px;
font-weight:300;
`;

const Container=styled.div`
width:1400px;
display:flex;
justify-content:space-between;
@media only screen and (max-width:768px){
  width:100%;
  flex-direction:column;
  }
`;
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:768px){
  padding:20px;
  justify-content:center;
  }
`;
const Right=styled.div`
flex:1;

`;
const List=styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:20px;


`;
/* if we give postion absolute the parent should be position relative */
const ListItem=styled.li`
font-size:90px;
font-weight:bold;
cursor:pointer;
color:transparent;
-webkit-text-stroke:1px white;
position:relative;
@media only screen and (max-width:768px){
  font-size:25px;
  color:white;
  -webkit-text-stroke:0px;
  }

&:after{
  content:"${(props)=>props.text}";
  position:absolute;
  top:0;
  left:0;
  color:pink;
  width:0px;
  overflow:hidden;
  white-space:nowrap;
}
&:hover{
  &:after{
    animation:moveText 0.5s linear both;
    @keyframes moveText{
      to{
width:100%;
      }
    }
  }
}
`;
const Works = () => {
  const [work,setWork]=useState("web design");
  return (
    <Section>
<Container>
  <Left>
<List>
  {data.map((item)=>
  (<ListItem key={item} text={item} onClick={()=>setWork(item)}>
    {item}
  </ListItem>))}
</List>
  </Left>
  <Right>
{work==="web design"?(<WebDesign/>):work==="development"?(<Development/>):(<ProductDesign/>)}
  </Right>
</Container>
    </Section>
  )
}

export default Works