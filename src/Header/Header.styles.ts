import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    background-color: darkgray;

    .heading {
        font-size: 2rem;
        text-decoration: none;
        color: white;
    }

    .heading:hover {
        text-decoration: none;
    }
`

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 4.5rem;
    background-color: #c89ce4;
    transition: background-color 0.5s ease;
    color: black;
    border: 3px aliceblue solid;

    :hover {
        background-color: white;
    }
`