import { useOutletContext } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function ItemCard({ product }){

    const [ cartQuantity, setCartQuantity ] = useOutletContext();

    function addToCart(){

        setCartQuantity(cartQuantity + 1);
    }

    function removeFromCart(){

        if(cartQuantity > 0) setCartQuantity(cartQuantity - 1);
    }

    return(
        <div className="item-card">
            <div id="img-wrap">
                <img src={product.image} alt={`Photo of ${product.title}`} />
            </div>
            <h3>{product.title.slice(0, 30) + "..."}</h3>
            <div id="btns-wrap">
                <button onClick={addToCart}>Add to cart</button>
                <button onClick={removeFromCart}><MdOutlineRemoveShoppingCart /></button>
            </div>
            <p>{"$" + product.price}</p>
        </div>
    )
}