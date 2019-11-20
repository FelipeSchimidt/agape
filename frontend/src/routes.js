import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Aluno from "./components/Alunos";
import Classe from "./components/Classes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/alunos" component={Aluno} />
      <Route path="/classes" component={Classe} />
    </BrowserRouter>
  );
}
