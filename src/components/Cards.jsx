import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

const Cards = styled(Card)`
  background: ${(props) => props.color};
  &:hover {
    filter: drop-shadow(0 0 1.5em ${(props) => props.color});
  }
`;

export default function CardsConocimiento({ el,tamaño }) {
  const [colors, setColors] = useState("#fcfcfc");
  useEffect(() => {
    if (el.color) {
      let colores;
      colores = setColors(el.color);
    }
  }, []);

  return (
    <>
      <Cards
        sx={{ maxWidth: 205, border: "solid 1px #fff", borderRadius: "1rem" }}
        color={colors}
      >
        <CardActionArea>
          <CardMedia component="img" height={tamaño} src={el.Img} alt={el.name} />
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ bgcolor: "#fcfcfc", height: "0.05rem",width: "400px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              sx={{
                color: `${el.textcolor}`,
                textAlign: "center",
                fontSize: "1em",
              }}
            >
              {el.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Cards>
    </>
  );
}
