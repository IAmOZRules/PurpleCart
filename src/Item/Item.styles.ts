import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;


    button {
        border-radius: 0 0 20px 20px;
        background-color: lightgray;
    }

    /* .product-image {
        height: 50%;
    }
     */
    .actual-image {
        display: flexbox;
        margin: auto;
        height: 200px;
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