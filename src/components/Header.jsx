import { NavLink, Link } from "react-router-dom"
import logo from "../img/logo.webp";

export default function Header() {


    return (

        <>
            <div className="d-flex p-3 justify-content-between align-items-center">
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <img src={logo} className="logo" />
                <NavLink to={'/preferiti'}>

                    <button className="btn">
                        <i className="bi bi-heart"></i>
                    </button>
                </NavLink>
            </div>
        </>
    )
}