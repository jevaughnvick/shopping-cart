import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
export default function Navbar(){

    return(
        <div id="navbar">
            <div id="logo">
                Cart.
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}
                        className={({ isActive }) => isActive ? "active" : ""}
                        viewTransition>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/shop"}
                        className={({ isActive }) => isActive ? "active" : ""}
                        viewTransition>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}