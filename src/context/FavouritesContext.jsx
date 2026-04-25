import { createContext, useContext, useState } from "react";
import { prefetchDNS } from "react-dom";

const FavouritesContext = createContext()

function PreferitiProvider({ children }) {

    const [favourites, setFavourites] = useState([])

    function handleFavourites(island) {
        const alreadyFavourites = () => {
            return favourites.some(favourite => favourite.id === island.id)
        }

        if (alreadyFavourites(island)) {
            setFavourites(curr => curr.filter(favourite => favourite.id !== island.id))
        } else {
            setFavourites(curr => [...curr, island])
        }
    }

    function clearFavourites() {
        setFavourites([])
    }


    return (

        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </FavouritesContext.Provider>

    )

}

function useFavouritesContext() {
    return useContext(FavouritesContext)
}



export { PreferitiProvider, useFavouritesContext }