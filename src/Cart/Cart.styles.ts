import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 30px;
    margin-bottom: 0;
    padding-top: 0px;

    .cart-heading {
        display: inline-flex;
        font-size: 1.5rem;
        letter-spacing: 1.5px;
    }
    
    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px #451e5d solid;
    }

    h3 {
        text-align: center;
        margin-top: 2.8rem;
    }

    .cart-total {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 20px;
    }

    .total-dollar {
        margin-left: 0.5rem;
        font-size: 1.6rem;
        color: #72286f;
    }

    .total-value {
        font-size: 1.5rem;
        color: green;
    }

    Button {
        background-color: #9452a5;
        transition: background-color 0.5s ease, color 0.5s ease;
        color: white;
        padding: 10px;
        border: 2px solid #451e5d;
    }

    Button:hover {
        background-color: #c89ce4;
        color: black;
    }

    @media only screen and (max-width: 640px) {
        width: 80%;

        .cart-heading {
            display: inline-flex;
            font-size: 1.2rem;
        }
    }
`

export const StyledButton = styled(IconButton)`
    background-color: #9452a5;
    transition: background-color 0.5s ease;
    color: white;
    border: 2px black solid;

    :hover {
        background-color: #c89ce4;
    }
`