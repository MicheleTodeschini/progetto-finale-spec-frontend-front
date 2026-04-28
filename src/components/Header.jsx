import { NavLink, Link } from "react-router-dom"

export default function Header() {


    return (

        <>
            <div className="d-flex p-3 justify-content-between align-items-center">
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <NavLink to={'/preferiti'}>

                    <button>
                        <i className="bi bi-heart"></i>
                    </button>
                </NavLink>
            </div>
        </>
    )
}