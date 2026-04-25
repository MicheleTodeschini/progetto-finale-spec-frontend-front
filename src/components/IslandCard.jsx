import React from "react";
import { NavLink } from "react-router-dom";

const IslandCard = React.memo(({ id, title, category, }) => {

    return (
        <>
            {
                <div className="col-3 mb-2 ">
                    <div className="card border border-secondary">

                        <p className="text-dark">{title}</p>
                        <p>{category}</p>
                        <i className="bi bi-heart"></i>
                    </div>
                </div>
            }
        </>
    )

})

export default IslandCard