import styled from "styled-components";
import "@fontsource/roboto/700.css";
import Stack from "@mui/material/Stack";
import { Avatar, Divider } from "@mui/material";

const Myh2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;
font-weight: bolder;
font-style: oblique;
font-size: 2em;
color: #fcfcfcfc;
   padding-top: 1em;
`;

const Mydiv = styled.div`
display: flex;
justify-content: center;
margin: 1rem auto;
width: 85%;
height: 100%;
padding: 2em;
background-color: #fcfcfc ;
border-radius: 5em;
border: solid 2px #000000;
&:hover {
  filter: drop-shadow(0 0 0.5em #646cffaa);
}
`;

const Myparagraph = styled.p`
display: flex;
justify-content: center;
align-items: end;
text-align: center;
font-weight: bolder;
color: #222121 ;
font-style: italic;
font-size: 1rem;
`;

export default function Presentacion() {
 
  return (
    <>
      
      <Mydiv>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Avatar sx={{ width: 100, height: 100 }}>
            <img src="./public/desarrollador-web-0F9B9A1C55F7C19D61373E686DCF3405172613thumbnail.jpeg" />
          </Avatar>
          <Myparagraph sx={{color:"#222121" }}>
            Soy un desarrollador front-end con un estilo minimalista y versatil
            dispuesto a seguir aprendiendo las nuevas tecnologias emergentes en
            el mercado muy proactivo y capaz de asumir cualquier reto donde
            pueda emplear el 100% de mis conocimientos amante de el desarrollo
            front-end y en proceso de aprendizaje de el desarrollo back-end
            <br />
            <br />
            "La inteligencia consiste no sólo en el conocimiento, sino también
            en la destreza de aplicar los conocimientos en la práctica"
          </Myparagraph>
        </Stack>
      </Mydiv>
    </>
  );
}
