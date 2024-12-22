import { NavLink } from "react-router-dom"
import CartIcon from "./CartIcon";

export default function Navbar({ cartQuantity }){


    return(
        <div id="navbar">
            <div id="logo">
                Cart.
            </div>
            <div id="navbar-second-child">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}
                            className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}
                            className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Shop
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div id="shop-wrap">
                    <CartIcon cartQuantity={cartQuantity} />
                </div>
            </div>
        </div>
    )
}