import { createContext, useContext, useState } from "react";


const FavouritesContext = createContext()

function PreferitiProvider({ children }) {

    const [favourites, setFavourites] = useState([])

    function handleFavourites(island) {
        const alreadyFavourites = favourites.some(favourite => favourite.id === island.id)

        if (alreadyFavourites) {
            setFavourites(curr => curr.filter(favourite => favourite.id !== island.id))
        } else {
            setFavourites(curr => [...curr, island])


        }
    }

    function clearFavourites() {
        setFavourites([])
    }

    function isFavourite(island) {
        return favourites.some(favourite => favourite.id === island.id)
    }


    return (

        <FavouritesContext.Provider value={{ favourites, setFavourites, handleFavourites, clearFavourites, isFavourite }}>
            {children}
        </FavouritesContext.Provider>

    )

}

function useFavouritesContext() {
    return useContext(FavouritesContext)
}



export { PreferitiProvider, useFavouritesContext }