import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 3px solid lightblue;
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
        width: 150px;
        object-fit: cover;
        margin-left: 40px;
    }
`