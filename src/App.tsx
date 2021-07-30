import { useState } from "react";
import { useQuery } from 'react-query';
import { Drawer, LinearProgress, Grid } from "@material-ui/core";

// Components
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import { CartItemType, getProducts } from "./API";

// Styles
import { Wrapper } from "./App.styles";

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
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        ))
    };

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong 😥. Please try again in a little while...</div>;

    return (
        <div className="">
            <Header setCartOpen={setCartOpen} getTotalItems={getTotalItems} cartItems={cartItems}/>
            <Wrapper>
                <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                    <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} setCartOpen={setCartOpen}/>
                </Drawer>
                <h1>All Items</h1>
                <Grid container direction="row" justifyContent="center" spacing={3}>
                    {data?.map(item => (
                        <Grid item key={item.id} xs={12} sm={4}>
                            <Item item={item} handleAddToCart={handleAddToCart} ></Item>
                        </Grid>
                    ))}
                </Grid>
            </Wrapper>
        </div>
    );
}

export default App;
