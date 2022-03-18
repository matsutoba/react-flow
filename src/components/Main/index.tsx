import React from "react";
import { Flow } from "../Flow";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 48px;
  background: #ddd;
`;

export const Main: React.VFC = () => {
  return (
    <>
      <Header />
      <Flow />
    </>
  );
};
