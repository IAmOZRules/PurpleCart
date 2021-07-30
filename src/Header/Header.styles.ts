import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;

    .heading {
        font-size: 2rem;
        color: white;
        padding-left: 3rem;
    }

    .heading:hover {
        text-decoration: none;
    }

    .cart-button {
        position: fixed;
        right: 4.5rem;
    }

    Button {
        color: black;
        padding: 0.5rem 1rem;
        background-color: #c89ce4;
        border: 3px aliceblue solid;
        transition: background-color 0.5s ease, border-color 0.5s ease;
    }

    Button:hover {
        border-color: lightblue; 
        background-color: white;
    }

    .CART {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
        padding-right: 0.7rem;
        font-size: 1.2rem;
    }
`