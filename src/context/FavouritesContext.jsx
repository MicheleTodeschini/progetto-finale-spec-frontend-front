import { createContext, useContext, useEffect, useState } from "react";


const FavouritesContext = createContext()

function FavouritesProvider({ children }) {

    const [favourites, setFavourites] = useState(() => {

        //Controllo se ho dei preferiti salvati nel localStorage
        const saved = localStorage.getItem('favourites')
        return saved ? JSON.parse(saved) : []
    })

    //Aggiungo dei prefiti nel localStorage
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])



    //Funzione che aggiunge o rimuove un preferito
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



export { FavouritesProvider, useFavouritesContext }