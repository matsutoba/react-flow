import React from "react";
import ReactFlow from "react-flow-renderer";
import styled from "styled-components";

const elements = [
  { id: "1", data: { label: "test" }, position: { x: 10, y: 10 } },
];

export const Flow: React.VFC = () => {
  return <ReactFlow elements={elements} nodesDraggable />;
};
