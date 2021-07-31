import React from "react";
import { Wrapper } from "./Header.styles";
import { AppBar, Toolbar, Typography, Badge, Link, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

type Props = {
    setCartOpen: any;
    getTotalItems: any;
    cartItems: any;
}

const Header: React.FC<Props> = ({ setCartOpen, getTotalItems, cartItems }) => {
    return (
        <header>
            <Wrapper>
                <AppBar style={{ backgroundColor: "#451e5d", padding: '10px 0' }}>
                    <Toolbar>
                        <Typography >
                            <Link className="heading" href="/">PurpleCart</Link>
                        </Typography>
                        <Button size="large"
                            disableElevation variant="contained" onClick={() => setCartOpen(true)}>
                            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                                <AddShoppingCartIcon fontSize="large" />
                            </Badge>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Wrapper>
        </header>
    );
}

export default Header;