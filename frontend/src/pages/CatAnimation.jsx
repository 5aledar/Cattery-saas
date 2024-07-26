import React from "react";
// import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import Card from "../componants/Card";
import Container from "../componants/Container";
import KawaiiAnimation from "../componants/KawaiiAnimation";

export function CatAnimation() {
  return (
    <Container>
      <Normalize />
      <Card>
        <KawaiiAnimation />
      </Card>
      <h2>Hello there! My name is Rayman the cat!!</h2>
    </Container>
  );
}


