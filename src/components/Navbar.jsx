import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "./CartIcon";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Sidebar from "./Sidebar";

export default function Navbar({ cartQuantity }){

    const [ showSidebar, setShowSidebar ] = useState(false);

    return(
        <nav>
            {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
            <ul>
                <li>
                    <Link id="logo" to={"/"}>
                        Cart
                    </Link>
                </li>
                <li>
                    <NavLink to={"/"}
                    className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/shop"}
                    className={({ isActive }) => isActive ? "active" : ""}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <CgMenu id="menu-btn" onClick={() => setShowSidebar(true)} />
                </li>
            </ul>
            <CartIcon cartQuantity={cartQuantity} />
        </nav>
    )
}