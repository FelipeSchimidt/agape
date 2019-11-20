import React, {Component} from "react";

import Header from "../pages/Header";
import RegistroClasse from "../pages/RegisterClasses";

export default class Classes extends Component {
    render() {
        return (
            <div>
                <Header />
                <RegistroClasse />
            </div>
        );
    }
}
