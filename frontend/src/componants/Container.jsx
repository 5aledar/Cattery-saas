import React from "react";
import styled from "styled-components";

const ContainerEl = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower");

  font-family: "Indie Flower", cursive;
  background: #f4f9fb;
  height: 100vh;
  padding: 20px;
  color: #596881;
  text-align: center;
`;

const Container = ({ children }) => <ContainerEl>{children}</ContainerEl>;

export default Container;
