import { createContext, useContext, useEffect, useState } from "react";

const ComparativeContext = createContext()

function ComparativeProvider({ children }) {
    const [islandToCompare, setIslandToCompare] = useState([])

    function handleCompare(island) {
        const alreadySelectedToCompare = islandToCompare.some(toCompare => toCompare.id === island.id)

        if (alreadySelectedToCompare) {
            setIslandToCompare(curr => curr.filter(toCompare => toCompare.id !== island.id))
        } else {
            setIslandToCompare(curr => [...curr, island])
        }
    }

    function isToCompare(island) {
        return islandToCompare.some(toCompare => toCompare.id === island.id)
    }



    return (
        <ComparativeContext.Provider value={{ islandToCompare, setIslandToCompare, handleCompare, isToCompare }} >
            {children}
        </ComparativeContext.Provider>
    )

}

function useComparativeContext() {
    return useContext(ComparativeContext)
}

export { ComparativeProvider, useComparativeContext }