import { useFavouritesContext } from "../context/FavouritesContext"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import IslandCard from "../components/IslandCard"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"

export default function PaginaPreferiti() {

    const { favourites, setFavourites, handleFavourites, clearFavourites } = useFavouritesContext()

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className="main">

                <div className="container">
                    <button className="btn btn-back mb-4  mt-4" onClick={() => navigate(-1)}>

                        <i className="bi bi-arrow-left back-arrow arrow-back"></i>Torna indietro
                    </button>
                    <div className="row">
                        {favourites.length === 0 ? (
                            <div className="text-center w-100 pt-5">
                                <h2 className="mt-4">
                                    Nessun'isola aggiunta ai preferiti
                                </h2>

                                <NavLink to="/isole">
                                    <button className="btn-full-island mt-3">
                                        Torna alle isole e aggiungine qualcuna!
                                    </button>
                                </NavLink>
                            </div>

                        ) : (
                            favourites.map(favourite => (
                                <IslandCard key={favourite.id} isola={favourite} />
                            ))
                        )}
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}