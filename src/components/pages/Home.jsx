import styled from "styled-components";
import { useHistory } from "react-router";
import { Button } from "../atoms/button/Button";
import logo from "./../../logo.svg";

export const Home=()=>{
    const history=useHistory();

    const startButtle=()=>{
        history.push("/buttle");
    }

    return(
        <SContainer>
            <SH1>POKER</SH1>
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <Button onClick={startButtle}>START</Button>
        </SContainer>
    )
}

const SContainer=styled.div`
    min-height: 100vh;
    text-align:center;
`;
const SH1=styled.h1`
    font-size: 24vh;
    padding-top: 2vh;
    font-family: 'Ewert', cursive;
`;