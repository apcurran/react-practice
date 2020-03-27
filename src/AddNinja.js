import React from "react";
import { Component } from "react";

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addNinja(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="belt">Belt:</label>
                        <input type="text" id="belt" onChange={ this.handleChange } />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;