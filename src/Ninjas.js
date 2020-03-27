import React from "react";

// UI Component
function Ninjas(props) {
    const { ninjas } = props;
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

export default Ninjas;