import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import CardsConocimiento from "./Cards";
import Titulos from "./Titulos";

const Divs = styled.div`
  display: flex;
  overflow: ${props => props.visible};
  overflow-y: hidden;
  border-radius: 1em;
  border: solid 2px white;
  border-bottom:${props => props.border};
  padding: 0.5rem;
  background-color: transparent;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: #797979;
    border-radius: 1em;
    width: 200px;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
    border-radius: 1em;
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
`;

export default function Conocimientos({ data, contenido,visible, border,tamaño }) {
  const [contenidos, setContenidos] = useState("");
  useEffect(() => {
    setContenidos(contenido.map((el) => el.name));
  }, []);

  return (
    <>
      <Titulos
        key={1}
        content={contenidos}
        tamano={"1.5em"}
        textdecore={"none"}
      />
      <Divs visible={visible} border={border}>
        <Stack
          key={2}
          direction="row"
          spacing={4}
          useFlexGap
          flexWrap="no-wrap"
          sx={{ minWidth: "auto", margin: "auto 1rem" }}
        >
          {data.map((el) => (
            <CardsConocimiento key={el.id} el={el} tamaño={tamaño}/>
          ))}
        </Stack>
      </Divs>
    </>
  );
}
