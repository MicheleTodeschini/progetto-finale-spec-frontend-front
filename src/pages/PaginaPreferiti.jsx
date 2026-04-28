import { useFavouritesContext } from "../context/FavouritesContext"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

export default function PaginaPreferiti() {

    const { favourites, setFavourites, handleFavourites, clearFavourites } = useFavouritesContext()

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <button className="btn btn-outline-info mb-4" onClick={() => navigate(-1)}>

                <i className="bi bi-arrow-left back-arrow text-info"></i>Torna indietro
            </button>
            <p>qui vci vanno i preferiti</p>


            {
                favourites.map(favourite => (
                    <p>{favourite.title}</p>
                ))
            }
        </>
    )
}