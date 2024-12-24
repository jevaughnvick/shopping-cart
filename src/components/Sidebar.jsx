import { NavLink, Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

export default function Sidebar({ setShowSidebar }){


    return(
        <ul id="sidebar">
            <li>
                <CgClose id="close-btn" onClick={() => setShowSidebar(false)} />
            </li>
            <li>
                <NavLink to={"/"}
                onClick={() => setShowSidebar(false)}
                className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/shop"}
                onClick={() => setShowSidebar(false)}
                className={({ isActive }) => isActive ? "active" : ""}>
                    Shop
                </NavLink>
            </li>
        </ul>
    )
}