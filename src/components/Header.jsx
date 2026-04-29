import { NavLink, Link } from "react-router-dom"
import logo from "../img/logo.png";

export default function Header() {


    return (

        <>
            <div className="header d-flex justify-content-center align-items-center gap-4 px-4">

                <NavLink to="/" className="text-white text-decoration-none">
                    Home
                </NavLink>

                <img src={logo} className="logo" alt="logo" />

                <NavLink to="/preferiti">
                    <button className="btn text-white header-heart">
                        <i className="bi bi-heart"></i>
                    </button>
                </NavLink>

            </div>
        </>
    )
}