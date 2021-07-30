import { CartItemType } from "../API";
import { Wrapper } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <h3>No Items in to Show in Cart!</h3> : null}
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
            {cartItems.length === 0 ? null : (
                <div className="cart-total">
                    <div className="total-title">
                        <h3>Total: </h3>
                    </div>
                    <div className="total-dollar">
                        <h3>$</h3>
                    </div>
                    <div className="total-value">
                        <h3>{calculateTotal(cartItems).toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </Wrapper>
    );
}

export default Cart;