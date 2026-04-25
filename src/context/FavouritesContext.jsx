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


    return (

        <FavouritesContext.Provider value={{ favourites, setFavourites, handleFavourites, clearFavourites }}>
            {children}
        </FavouritesContext.Provider>

    )

}

function useFavouritesContext() {
    return useContext(FavouritesContext)
}



export { PreferitiProvider, useFavouritesContext }