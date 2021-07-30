import React from "react";
import { Wrapper, StyledButton } from "./Header.styles";
import { AppBar, Toolbar, Typography, Badge, Link } from "@material-ui/core";
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
                <AppBar style={{ backgroundColor: "#451e5d", padding: '10px 3rem' }}>
                    <Toolbar>
                        <Typography >
                            <Link className="heading" href="/">Shop</Link>
                        </Typography>
                        <StyledButton onClick={() => setCartOpen(true)}>
                            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                                <AddShoppingCartIcon />
                            </Badge>
                        </StyledButton>
                    </Toolbar>
                </AppBar>
            </Wrapper>
        </header>
    );
}

export default Header;