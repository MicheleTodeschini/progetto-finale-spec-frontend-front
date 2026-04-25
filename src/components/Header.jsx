import { NavLink, Link } from "react-router-dom"

export default function Header() {


    return (

        <>
            <NavLink to={'/preferiti'}>

                <button>
                    <i className="bi bi-heart"></i>
                </button>
            </NavLink>
        </>
    )
}