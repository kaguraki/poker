import styled from "styled-components";

export const Button=(props)=>{
    const {children,onClick}=props;

    return <SButton onClick={onClick}>{children}</SButton>
}

const SButton=styled.button`
    font-size: 8vh;
    font-weight: bold;
    background-color: #eee;
    color: blue;
    border-radius: 9999px;
    margin-top: 5vh;
    padding: 3vh 6vw;
    &:hover{
        background-color: blue;
        color: white;
    }
`;