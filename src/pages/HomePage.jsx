import { Link, NavLink } from "react-router-dom"
import Header from "../components/Header"
import gif from '../img/vid_socotra.gif'
import Footer from "../components/Footer"


export default function HomePage() {
    return (
        <>
            <Header />

            <div className="hero">
                <img src={gif} className="bg-gif" />
                <div className="overlay">
                    <h1 className="title">
                        Vieni a scoprire le nostre isole esotiche e inusuali!
                    </h1>

                    <NavLink to="/isole">
                        <button className="btn-full-island">
                            Premi per vedere la lista completa di isole
                        </button>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
}