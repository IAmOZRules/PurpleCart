import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    
    .head-appbar{
        background-color: #451e5d;
        padding: 10px 0;
    }

    .heading {
        font-size: 2rem;
        color: white;
        padding-left: 3rem;
    }

    .heading:hover {
        text-decoration: none;
    }

    Button {
        position: fixed;
        right: 4.5rem;
        color: black;
        padding: 0.8rem;
        background-color: #c89ce4;
        border: 3px aliceblue solid;
        transition: background-color 0.5s ease, border-color 0.5s ease;
    }

    Button:hover {
        border-color: lightblue; 
        background-color: white;
    }

    @media only screen and (max-width: 640px) {
        Button {
            right: 1.4rem;
        }
    }
`