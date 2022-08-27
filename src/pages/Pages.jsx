import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import List from "../components/list/List";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/:id" element={<List />} />
    </Routes>
  );
};

export default Pages;
