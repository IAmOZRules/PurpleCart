import { CartItemType } from "../API"
import { useState } from "react";
import { Wrapper } from "./Item.styles";
import Button from "@material-ui/core/Button"

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    addToCart: any;
    removeFromCart: any;
}

const Item: React.FC<Props> = ({ item, handleAddToCart, removeFromCart, addToCart }) => {
    const [quantity, setQuantity] = useState(0);

    return (
        <Wrapper>
            <div className="product-image">
                <img className="actual-image" src={item.image} alt={item.title} />
            </div>
            <div className="product-details">
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <div className="buttons">
                <Button className="quantity-buttons" size="small"
                    disableElevation variant="contained"
                    onClick={() => {
                        removeFromCart(item.id)
                        if (quantity > 0) setQuantity(quantity - 1)
                    }}><b>-</b></Button>

                <p><b>{quantity}</b></p>

                <Button className="quantity-buttons" size="small"
                    disableElevation variant="contained"
                    onClick={() => {
                        addToCart(item)
                        setQuantity(quantity + 1)
                    }}><b>+</b></Button>
            </div>
            <Button className="add-to-cart" onClick={() => {
                handleAddToCart(item)
                setQuantity(quantity + 1)
            }}>Add to Cart</Button>
        </Wrapper>
    );
}

export default Item;
