import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    
    .add-to-cart {
        border-radius: 0 0 20px 20px;
        background-color: #9452a5;
        color: white;
        transition: color 0.3s ease, background-color 0.3s ease;
    }
    
    .add-to-cart:hover {
        background-color: #c89ce4;
        color: black;
    }
    
    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .quantity-buttons {
        height: 3rem;
        background-color: #9452a5;
        color: white;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    .quantity-buttons:hover {
        background-color: #c89ce4;
        color: black;
    }

    .product-image {
        display: flex;
        justify-content: center;
    }

    .actual-image {
        display: flexbox;
        margin: auto;
        width: 50%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
        transition: width 0.3s, height 0.3s;
    }


    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
        line-height: 1.5rem;
    }

    .description {
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        line-height: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`;