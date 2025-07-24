import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
               <div className='topnav'>
            <div className='topnav-left'>
                <NavLink
                    activeclassname="navbar__link--active"
                    className="navbar__link"
                    to="/home"
                >
                    HOME
                </NavLink>
            </div>
            
            <div className='topnav-right'>
                <NavLink
                    activeclassname="navbar__link--active"
                    className="navbar__link"
                    to="/portfolio"
                >
                    MY PORTFOLIO
                </NavLink>
                <NavLink
                    activeclassname="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                >
                    CONTACT ME
                </NavLink>
                <NavLink
                    activeclassname="navbar__link--active"
                    className="navbar__link"
                    to="/CurriculumVitae"
                >
                    MY RESUME
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;