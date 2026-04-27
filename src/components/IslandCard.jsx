import React from "react";
import { NavLink } from "react-router-dom";
import { useFavouritesContext } from "../context/FavouritesContext";
import { useComparativeContext } from "../context/ComparativeContext";

import { useEffect } from "react";

const IslandCard = React.memo(({ isola, setShow }) => {

    const { favourites, handleFavourites, isFavourite } = useFavouritesContext()

    const { handleCompare, islandToCompare, isToCompare } = useComparativeContext()

    useEffect(() => {
        if (islandToCompare.length === 2) {
            setShow(true);
        }
    }, [islandToCompare]);

    const checkIfIsFavourite = isFavourite(isola)
    const checkIfIsToCompare = isToCompare(isola)

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
                        <button onClick={() => handleCompare(isola)}>{checkIfIsToCompare ? 'selezionato' : 'compara'}</button>
                    </div>
                </div>
            }
        </>
    )

})

export default IslandCard