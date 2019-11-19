import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">SISTEMA DE ENSINO AGAPE</h1>
          <h3 className="subtitle">EXCELENCIA EM EDUCAÇÃO CRISTÃ</h3>
        </header>
        <hr />
      </div>
    );
  }
}
