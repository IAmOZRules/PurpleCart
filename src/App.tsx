import { useState } from "react";
import { useQuery } from 'react-query';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Drawer, LinearProgress, Badge, Grid } from "@material-ui/core";

// Components
import { CartItemType, getProducts } from "./API";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";

// Styles
import { Wrapper, StyledButton } from "./App.styles";

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

    const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            // check if item already in cart
            const isItemInCart = prev.find(item => item.id === clickedItem.id)

            if (isItemInCart) {
                return prev.map(item =>
                    item.id === clickedItem.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            };

            // First time the item is added
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        ))
    };

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong 😥. Please try again in a little while...</div>;

    return (
        <Wrapper>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                    <AddShoppingCartIcon />
                </Badge>
            </StyledButton>
            <Grid container direction="row" justifyContent="center" spacing={3}>
                {data?.map(item => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} handleAddToCart={handleAddToCart} ></Item>
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
}

export default App;
