import React, {Component} from "react";

import RegisterAlunos from "../pages/RegisterAlunos";
import Header from "../pages/Header";

export default class Alunos extends Component {
    render() {
        return (
            <div>
                <Header />
                <RegisterAlunos />
            </div>
        );
    }
}
