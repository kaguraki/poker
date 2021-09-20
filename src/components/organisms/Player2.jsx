import styled from "styled-components";

export const Player2=(props)=>{
    const {yourHand,setYourHand,changeYourHandBool,setChangeYourHandBool,changeHand,myTurnEnd,willChangeYourHand}=props;

    return(
        <div>
            <SP style={{color:"blue"}}>Player2</SP>
            <SOl>
                {yourHand.map((card,index)=>{
                    return(
                        <SLi key={card.id}>
                            <SImg onClick={()=>willChangeYourHand(index)} src={card.img} height={card.height} />
                        </SLi>
                    )
                })}
            </SOl>
            {changeYourHandBool && <SButton onClick={()=>changeHand(yourHand,setYourHand,changeYourHandBool,setChangeYourHandBool)}>CHANGE HAND</SButton>}
            {!changeYourHandBool && <SEnd onClick={myTurnEnd}>Turn End</SEnd>}
        </div>
    )
}

const SP=styled.p`
    margin-top:20px;
    font-size: 40px;
    font-weight: bold;
`;
const SOl=styled.ul`
    list-style: none;
    justify-content: center;
    display: flex;
    height:300px;
`;
const SImg=styled.img`
    margin: 0 40px;
    margin-top: 40px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
        height: 220px;
    }
`;
const SLi=styled.li`
    &:nth-child(1){
    }
`;
const SButton=styled.button`
    background-color: green;
    font-weight: bold;
    color: white;
    padding: 30px 40px;
    border-radius:9999px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;
const SEnd=styled.button`
    background-color: blue;
    font-weight: bold;
    color: white;
    padding: 30px 40px;
    border-radius:9999px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;