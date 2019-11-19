import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Aluno from "./components/Alunos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/alunos" component={Aluno} />
    </BrowserRouter>
  );
}
