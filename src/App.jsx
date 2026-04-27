import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import IsolePage from "./pages/IsolePage"
import DettaglioIsola from "./pages/DettaglioIsola"
import PaginaPreferiti from "./pages/PaginaPreferiti"
import { GlobalProvider } from "./context/GlobalContext"
import { PreferitiProvider } from "./context/FavouritesContext"
import { ComparativeProvider } from "./context/ComparativeContext"

export default function App() {


  return (
    <>
      <GlobalProvider>
        <PreferitiProvider>
          <ComparativeProvider>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/isole" element={<IsolePage />} />
                <Route path="/isola/:id" element={<DettaglioIsola />} />
                <Route path="/preferiti" element={<PaginaPreferiti />} />
              </Routes>
            </BrowserRouter>
          </ComparativeProvider>

        </PreferitiProvider>

      </GlobalProvider>

    </>
  )


}


