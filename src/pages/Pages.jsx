import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Detail from "../components/detail/Detail";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default Pages;
