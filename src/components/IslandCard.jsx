import React from "react";
import { NavLink } from "react-router-dom";
import { useFavouritesContext } from "../context/FavouritesContext";
import { useComparativeContext } from "../context/ComparativeContext";

const IslandCard = React.memo(({ isola, setShow }) => {

    const { favourites, handleFavourites, isFavourite } = useFavouritesContext()

    const { handleCompare } = useComparativeContext()

    function openModal() {
        if (handleCompare.length === 2) {
            setShow(true)
        } else {
            alert('aggiungi un altra da comparare')
        }
    }

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
                        <button onClick={handleCompare}>Compara</button>
                    </div>
                </div>
            }
        </>
    )

})

export default IslandCard