import { CartItemType } from "../API"
import { Wrapper } from "./Item.styles";
import Button from "@material-ui/core/Button"

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <div className="product-image">
            <img className="actual-image" src={item.image} alt={item.title} />
        </div>
        <div className="product-details">
            <h3>{item.title}</h3>
            <p className="description">{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
)

export default Item;
