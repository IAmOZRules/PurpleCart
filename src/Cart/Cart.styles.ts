import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 30px;
    margin-bottom: 0;
    padding-top: 0px;

    h2 {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 1.5px;
        padding-bottom: 1rem;
        border-bottom: 3px lightblue solid;
    }

    h3 {
        text-align: center;
    }

    .cart-total {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .total-dollar {
        margin-left: 0.5rem;
        font-size: 1.6rem;
        color: darkgreen;
    }

    .total-value {
        font-size: 1.5rem;
        color: green;
    }
`