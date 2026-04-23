import { Link, NavLink } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <h1>Vieni a scoprire le nostre isole esotiche e inusuali!</h1>

            <NavLink to={`/isole`}>
                <button>Premi per vedere la lista completa di isole</button>
            </NavLink>
        </>
    )
}