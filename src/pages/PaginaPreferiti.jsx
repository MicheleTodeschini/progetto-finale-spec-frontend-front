import { useFavouritesContext } from "../context/FavouritesContext"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import IslandCard from "../components/IslandCard"

export default function PaginaPreferiti() {

    const { favourites, setFavourites, handleFavourites, clearFavourites } = useFavouritesContext()

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className="container">
                <button className="btn btn-outline-info mb-4 mt-4" onClick={() => navigate(-1)}>

                    <i className="bi bi-arrow-left back-arrow text-info"></i>Torna indietro
                </button>
                <div className="row">
                    {
                        favourites.map(favourite => (
                            <IslandCard isola={favourite} />
                        ))
                    }

                </div>

            </div>


        </>
    )
}