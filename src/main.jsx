import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/700.css";
import Container from "@mui/material/Container";
import {  createGlobalStyle ,keyframes} from "styled-components";

const ChangeBG= keyframes`
0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}
`
const GlobalStyled= createGlobalStyle`
  html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: #797979;
    width: 200px;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
   
  }

  &::-webkit-scrollbar-button:increment,
  .contenedor::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 1em;
    border: 2px solid #989a9b;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1em;
  }
  }
  body{
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 3em;
    margin: 0;
    background-image: linear-gradient(to right, #021825, #01204ffa, #02305b,  #033b62,  #04081c,  #022f39, #013126);
    background-size:500%;
    background-repeat: no-repeat;
    animation:${ChangeBG} 24.5s infinite ;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <GlobalStyled/>
    <Container fixed >
       <App />
    </Container>
  </React.StrictMode>
);
