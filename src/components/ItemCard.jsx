import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function ItemCard({ product }){

    return(
        <div className="item-card">
            <div id="img-wrap">
                <img src={product.image} alt={`Photo of ${product.title}`} />
            </div>
            <h3>{product.title.slice(0, 30) + "..."}</h3>
            <div id="btns-wrap">
                <button>Add to cart</button>
                <button><MdOutlineRemoveShoppingCart /></button>
            </div>
            <p>{"$" + product.price}</p>
        </div>
    )
}