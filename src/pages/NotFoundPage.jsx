import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"

export default function NotFoundPage() {


    return (
        <>
            <Header />
            <div className="main ">

                <div className="container text-button-not-found">

                    <h1 className="title-not-found">Non abbiamo ancora scoperto quest'isola, ma ne abbiamo molte già scoperte!</h1>

                    <NavLink to={'/'}>

                        <button className="btn-not-found">Torna alla home!</button>
                    </NavLink>


                </div>
            </div>
            <Footer />
        </>
    )
}