import { createContext, useState, useContext, useEffect } from "react";

const URL = import.meta.env.VITE_URL_API

const GlobalContext = createContext()



function GlobalProvider({ children }) {

    const [isole, setIsole] = useState([])

    async function getIsole() {
        try {
            const response = await fetch(URL)

            if (!response.ok) {
                throw new Error(`Errore http ${response.status}`)
            }
            const data = await response.json()
            setIsole(data)
        } catch (error) {
            console.error('Non ho trovato le isole che cercavi,', error.message)
        }
    }

    async function getIsolaById(id) {
        try {
            const response = await fetch(`${URL}/${id}`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Errore nel fetch dell'isola:", error.message);
            return null;
        }
    }

    //getIsolaById(2)

    useEffect(() => {
        getIsole();
    }, []);

    return (

        <GlobalContext.Provider value={{ isole, getIsolaById }}>
            {children}
        </GlobalContext.Provider>

    )
}


function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext }