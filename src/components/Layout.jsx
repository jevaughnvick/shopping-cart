import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


export default function Layout(){

    const [ cartQuantity, setCartQuantity ] = useState(0);

    return (
        <>
            <Navbar cartQuantity={cartQuantity} />
            <main>
                <Outlet context={[ cartQuantity, setCartQuantity ]}/>
            </main>
            <Footer />
        </>
        )
}