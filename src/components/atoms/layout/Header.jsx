import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header=()=>{
    return <SLink to="/"><SHeader>POKER</SHeader></SLink>
}

const SLink=styled(Link)`
    text-decoration:none;
`;
const SHeader=styled.header`
    font-size: 30px;
    font-family: 'Ewert', cursive;
    height: 60px;
    line-height: 60px;
    background-color: lightgreen;
    color: white;
    text-align: center;
    background-image: radial-gradient(lightgreen,green);
`;