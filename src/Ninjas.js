import React from "react";

// UI Component
function Ninjas({ ninjas }) {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ ninja.id }>
                    <p>Name: { ninja.name }</p>
                    <p>Age: { ninja.age }</p>
                    <p>Belt: { ninja.belt }</p>
                </div>
            );
        } else {
            return null;
        }
    });

    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    );
}

export default Ninjas;