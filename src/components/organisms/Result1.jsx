import styled from "styled-components";
import pic1 from "./../../card/card1.png";
import pic2 from "./../../card/card2.png";
import pic3 from "./../../card/card3.png";
import pic4 from "./../../card/card4.png";
import pic5 from "./../../card/card5.png";
import pic6 from "./../../card/card6.png";
import pic7 from "./../../card/card7.png";
import pic8 from "./../../card/card8.png";
import pic9 from "./../../card/card9.png";
import pic10 from "./../../card/card10.png";
import pic11 from "./../../card/card11.png";
import pic12 from "./../../card/card12.png";
import pic13 from "./../../card/card13.png";
import pic14 from "./../../card/card14.png";
import pic15 from "./../../card/card15.png";
import pic16 from "./../../card/card16.png";
import pic17 from "./../../card/card17.png";
import pic18 from "./../../card/card18.png";
import pic19 from "./../../card/card19.png";
import pic20 from "./../../card/card20.png";
import pic21 from "./../../card/card21.png";
import pic22 from "./../../card/card22.png";
import pic23 from "./../../card/card23.png";
import pic24 from "./../../card/card24.png";
import pic25 from "./../../card/card25.png";
import pic26 from "./../../card/card26.png";
import pic27 from "./../../card/card27.png";
import pic28 from "./../../card/card28.png";
import pic29 from "./../../card/card29.png";
import pic30 from "./../../card/card30.png";
import pic31 from "./../../card/card31.png";
import pic32 from "./../../card/card32.png";
import pic33 from "./../../card/card33.png";
import pic34 from "./../../card/card34.png";
import pic35 from "./../../card/card35.png";
import pic36 from "./../../card/card36.png";
import pic37 from "./../../card/card37.png";
import pic38 from "./../../card/card38.png";
import pic39 from "./../../card/card39.png";
import pic40 from "./../../card/card40.png";
import pic41 from "./../../card/card41.png";
import pic42 from "./../../card/card42.png";
import pic43 from "./../../card/card43.png";
import pic44 from "./../../card/card44.png";
import pic45 from "./../../card/card45.png";
import pic46 from "./../../card/card46.png";
import pic47 from "./../../card/card47.png";
import pic48 from "./../../card/card48.png";
import pic49 from "./../../card/card49.png";
import pic50 from "./../../card/card50.png";
import pic51 from "./../../card/card51.png";
import pic52 from "./../../card/card52.png";

export const Result1=(props)=>{
    const {role1,myHand}=props;

    return(
        <SDiv>
            <SRole style={{color:"red"}}>Player1: {role1}</SRole>
            <SOl>
                {myHand.map((card)=>{
                    return(
                        <SLi key={card.id}>
                            <SImg src={card.img} height={card.height} />
                        </SLi>
                    )
                })}
            </SOl>
        </SDiv>
    )
}

const SDiv=styled.div`
    margin-top:50px;
`;
const SRole=styled.p`
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
`;
const SOl=styled.ul`
    list-style: none;
    justify-content: center;
    display: flex;
    height:240px;
`;
const SLi=styled.li`
    &:nth-child(1){
    }
`;
const SImg=styled.img`
    margin: 0 30px;
    margin-top: 40px;
`;