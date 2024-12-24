import { TiShoppingCart } from "react-icons/ti";


export default function CartIcon({ cartQuantity }){

    return(
        <div id="shop-wrap">
            <div id="cart-icon-wrap">
                <TiShoppingCart style={{ fontSize: "2rem" }} />
                <p id="number-of-items">{cartQuantity}</p>
            </div>
            <button
            id="checkout-btn"
            onClick={() => alert("You thought that was gonna do something?")}>
                Check Out
            </button>
        </div>
    )
}