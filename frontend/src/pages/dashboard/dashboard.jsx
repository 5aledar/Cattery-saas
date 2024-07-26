import React from "react";
import { Nav } from "../../componants/Nav";
import { Table } from "../../componants/Table";
import { Link } from "react-router-dom";
import { Fotter } from "../../componants/Fotter";
export const Dashboard = () => {
  return (
    <>
      <Nav></Nav>
      <Table></Table>
      {/* <Fotter></Fotter> */}
    </>
  );
};
