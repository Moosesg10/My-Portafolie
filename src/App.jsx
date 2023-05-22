import React from "react";
import Container from "@mui/material/Container";
import Headers from "./components/Header";
import Presentacion from "./components/Presentacion";
import Stack from "@mui/material/Stack";
import data from "./assets/Conocimietos.json";
import Titulos from "./components/Titulos";
import Conocimientos from "./components/Conocimientos";

function App() {
  return (
    <>
      <Headers />
      <Container fixed maxWidth="xl" disableGutters={true} id="Presentacion">
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Titulos content={"Presentacion"} tamano={"2em"} textdecore={"underline"}/>
          <Presentacion />
        </Stack>
      </Container>
      <Container fixed maxWidth="xl" disableGutters={true} id="Conocimientos">
      <Titulos key={1} content={"Conocimientos"} tamano={"2em"}
        textdecore={"underline"}/>
      <Conocimientos data={data.conocimientos} contenido={data.Lenguaje} visible={"scroll"} border={"none"} tamaño={180}/>
      <Conocimientos data={data.farmeworksCss} contenido={data.Frameworks} visible={"scroll"} border={"none"} tamaño={180}/>
      <Conocimientos data={data.libreriasJS} contenido={data.Librerias} visible={"hidden"} border={"solid 2px white"} tamaño={205}/>
      </Container>
     
    </>
  );
}

export default App;
