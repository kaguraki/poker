import styled from "styled-components";

export const Player1=(props)=>{
    const {myHand,setMyHand,changeMyHandBool,setChangeMyHandBool,changeHand,myTurnEnd,willChangeMyHand}=props;

    return(
        <div>
            <SP style={{color:"red"}}>Player1</SP>
            <SOl>
                {myHand.map((card,index)=>{
                    return(
                        <SLi key={card.id}>
                            <SImg onClick={()=>willChangeMyHand(index)} src={card.img} height={card.height} />
                        </SLi>
                    )
                })}
            </SOl>
            {changeMyHandBool && 
                <SButton onClick={()=>changeHand(myHand,setMyHand,changeMyHandBool,setChangeMyHandBool)}>
                    CHANGE HAND
                </SButton>
            }
            {!changeMyHandBool && <SEnd onClick={myTurnEnd}>Turn End</SEnd>}
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