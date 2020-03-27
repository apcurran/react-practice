import React from "react";
import { Component } from "react";

class Ninjas extends Component {
    render() {
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ ninja.id }>
                    <p>Name: { ninja.name }</p>
                    <p>Age: { ninja.age }</p>
                    <p>Belt: { ninja.belt }</p>
                </div>
            );
        });

        return (
            <div className="ninja-list">
                { ninjaList }
            </div>
        );
    }
}

export default Ninjas;