import React from "react";

// UI Component
function Ninjas({ ninjas, deleteNinja }) {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ ninja.id }>
                    <p>Name: { ninja.name }</p>
                    <p>Age: { ninja.age }</p>
                    <p>Belt: { ninja.belt }</p>
                    <button onClick={ () => deleteNinja(ninja.id) }>Delete Ninja</button>
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