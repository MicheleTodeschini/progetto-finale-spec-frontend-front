import React from "react";
import { NavLink } from "react-router-dom";
import { useFavouritesContext } from "../context/FavouritesContext";
import { useComparativeContext } from "../context/ComparativeContext";

import { useEffect } from "react";

const IslandCard = React.memo(({ isola, setShow }) => {

    const { favourites, handleFavourites, isFavourite } = useFavouritesContext()

    const { handleCompare, islandToCompare, isToCompare } = useComparativeContext()

    useEffect(() => {

        //Condizione che attiva la modale
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
                    <div className="card border  h-100 w-100">

                        <div className="card-body d-flex flex-column">
                            <section className="d-flex justify-content-between">
                                <p className="fw-bold">{isola.title}</p>
                                <button className="btn heart" onClick={() => handleFavourites(isola)}>
                                    <i className={`bi ${checkIfIsFavourite ? 'bi-heart-fill heart-active' : ' bi-heart'} `}></i>

                                </button>
                            </section>
                            <p>{isola.category}</p>

                        </div>

                        <div className="card-body d-flex gap-2">

                            <button
                                className={`btn btn-sm ${checkIfIsToCompare ? 'compara-selected' : 'compara-not-selected'} flex-fill`}
                                onClick={() => handleCompare(isola)}
                            >

                                {checkIfIsToCompare ? 'Selezionato' : 'Compara'}
                            </button>
                            <NavLink to={`/isola/${isola.id}`}>

                                <button className="btn btn-sm btn-dark flex-fill">
                                    <i className="bi bi-eye me-1"></i>
                                    Dettagli
                                </button>
                            </NavLink>

                        </div>


                    </div>
                </div>
            }
        </>
    )

})

export default IslandCard