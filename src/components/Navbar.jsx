import { Link } from "react-router-dom"
export default function Navbar(){

    return(
        <div id="navbar">
            Navbar
            <nav>
                <ul>
                    <li><Link to={"/"} viewTransition>Home</Link></li>
                    <li><Link to={"/shop"} viewTransition>Shop</Link></li>
                </ul>
            </nav>
        </div>
    )
}