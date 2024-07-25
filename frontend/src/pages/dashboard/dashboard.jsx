import React from "react";
import { Nav } from "../../componants/Nav";
import { Table } from "../../componants/Table";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <>
      <Nav></Nav>
      <Table></Table>
      <Link to='/'>
      <button className="btn btn-outline w-full mt-2 text-lg btn-s">
        Home
      </button>
      </Link>
    </>
  );
};
