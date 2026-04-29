import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-white">
                            <img src={logo} className='logo-footer' />
                            <p className='fs-6'> Copyright © 2026 Michele Todeschini. All Rights Reserved</p>

                        </div>
                        <div className="col-6 text-white d-flex flex-column">
                            <NavLink to={'/'} className='text-white mb-3 mt-5'>
                                Vai alla Home
                            </NavLink>

                            <NavLink to={'/isole'} className='text-white'>
                                Vai alla lista di Isole
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}