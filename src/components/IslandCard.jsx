import React from "react";
import { NavLink } from "react-router-dom";
import { useFavouritesContext } from "../context/FavouritesContext";

const IslandCard = React.memo(({ isola, setShow }) => {

    const { favourites, handleFavourites, isFavourite } = useFavouritesContext()

    const checkIfIsFavourite = isFavourite(isola)

    return (
        <>
            {
                <div className="col-3 mb-2 ">
                    <div className="card border border-secondary">

                        <p className="text-dark">{isola.title}</p>
                        <p>{isola.category}</p>
                        <button onClick={() => handleFavourites(isola)}>
                            <i className={`bi ${checkIfIsFavourite ? 'bi-heart-fill' : ' bi-heart'} `}></i>

                        </button>
                        <button onClick={() => setShow(true)}>Compara</button>
                    </div>
                </div>
            }
        </>
    )

})

export default IslandCard