import { TiShoppingCart } from "react-icons/ti";


export default function CartIcon(){

    return(
        <>
            <div id="cart-icon-wrap">
                <TiShoppingCart style={{ fontSize: "2rem" }} />
                <p id="number-of-items">0</p>
            </div>
            <button id="checkout-btn">Check Out</button>
        </>
    )
}