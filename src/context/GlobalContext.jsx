import { createContext, useState } from "react";

const URL = import.meta.env.VITE_URL_API

const GlobalContext = createContext()

const [isole, setIsole] = useState([])


function GlobalProvider({ children }) {

    return (

        <GlobalContext.Provider value={{ ...isole }}>
            {children}
        </GlobalContext.Provider>

    )
}

async function getIsole(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Errore http ${response.status}`)
        }
        const data = await response.json()
        setIsole(data)
    } catch (error) {
        console.error('Non ho trovato le isole che cercavi,', error.message)
    }
}