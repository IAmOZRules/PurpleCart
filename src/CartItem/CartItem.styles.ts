import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 3px solid #451e5d;
    padding: 20px 0;

    h3 {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    div {
        flex: 1;
    }

    .information,
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 30%;
        object-fit: cover;
        margin-left: 30px;
    }

    Button {
        padding: 0;
        background-color: #9452a5;
        color: white;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    Button:hover {
        background-color: #c89ce4;
        color: black;
    }

    .amount {
        padding: 0 1rem;
    }
`