import React, {Component} from "react";

export default class RegisterClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.targer.value});
    }

    handleSubmit(event) {
        console.log(event.target.values);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Registro de Classes</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Nome
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Salvar"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}
