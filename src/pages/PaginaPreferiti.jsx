import { useFavouritesContext } from "../context/FavouritesContext"

export default function PaginaPreferiti() {

    const { favourites, setFavourites, handleFavourites, clearFavourites } = useFavouritesContext()

    return (
        <>
            <p>qui vci vanno i preferiti</p>


            {
                favourites.map(favourite => (
                    <p>{favourite.title}</p>
                ))
            }
        </>
    )
}