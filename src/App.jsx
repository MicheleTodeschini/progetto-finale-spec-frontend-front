import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import IsolePage from "./pages/IsolePage"
import DettaglioIsola from "./pages/DettaglioIsola"
import PaginaPreferiti from "./pages/PaginaPreferiti"
import { GlobalProvider } from "./context/GlobalContext"

export default function App() {


  return (
    <>
      <GlobalProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/isole" element={<IsolePage />} />
            <Route path="/isola/:id" element={<DettaglioIsola />} />
            <Route path="/preferiti" element={<PaginaPreferiti />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )


}


