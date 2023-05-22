import React from "react";
import styled from "styled-components";


const MyHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  position: sticky;
  top: 2vh;
  color: #222121;
  z-index: 999;
  background-color: #fcfcfc;
  border-radius: 3em;
  border: solid 2px #000000;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

const MyNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;
const MyBottom = styled.a`
  padding: 1rem;
  color: inherit;
  font-weight: bolder;
  cursor: pointer;
  font-size: 1em;
  background-color: transparent;
  text-decoration: none;
  transition: color 0.2s ease-in;
  flex-wrap: wrap;
  flex-shrink: 1;
  &:hover {
    color: #959497f8;
    filter: drop-shadow(0 0 0.5em #fdfdfdaa);
  }
`;

export default function Headers() {
  return (
    <MyHeader key={"header"}>
      <MyNav key={"nav"}>
        <MyBottom
          href="#Presentacion"
        
          key={"a1"}
        >
          Presentacion
        </MyBottom>
        <MyBottom
          href="#Conocimientos"
        
          key={"a2"}
        >
          Conocimientos
        </MyBottom>
        <MyBottom
          href="./index.html"
        
          key={"a3"}
        >
          Proyectos
        </MyBottom>
        <MyBottom
          href="./index.html"
          onClick={(e) => {
            e.preventDefault();
          }}
          key={"a4"}
        >
          Contacto
        </MyBottom>
      </MyNav>
    </MyHeader>
  );
}
