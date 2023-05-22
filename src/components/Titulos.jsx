import React from 'react'
import styled from 'styled-components';

const Myh2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;
font-weight: bolder;
font-style: oblique;
font-size: ${({tamano}) => tamano };
color: #fcfcfcfc;
text-decoration:  ${({textdecore}) => textdecore };
   padding-top: 1em;
`;

export default function Titulos({content,tamano,textdecore}) {
   
  return (
    <Myh2 tamano={tamano} textdecore={textdecore}>{content}</Myh2>
  )
}
