import React from "react";
import styled from "styled-components";
import { ReactComponent as CardBg } from "../assets/card-bg.svg";

const CardEl = styled.div`
  min-width: 240px;
  max-width: 680px;
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 auto;

  > svg {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 24px 0 rgba(79, 86, 89, 0.16);
  }
`;

const Card = ({ children }) => (
  <CardEl>
    <CardBg />
    {children}
  </CardEl>
);

export default Card;
