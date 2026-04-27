import { createContext, useContext, useState } from "react";

const ComparativeContext = createContext()

function ComparativeProvider({ children }) {
    const [islandToCompare, setIslandToCompare] = useState([])



    return (
        <ComparativeContext.Provider value={{ islandToCompare, setIslandToCompare }} >
            {children}
        </ComparativeContext.Provider>
    )

}

function useComparativeContext() {
    return useContext(ComparativeContext)
}

export { ComparativeProvider, useComparativeContext }