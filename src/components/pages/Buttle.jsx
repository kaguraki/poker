import { useState } from "react";
import { Link } from "react-router-dom";
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
import rule from "./../../card/rule.jpg";
import { Player1 } from "../organisms/Player1";
import { Player2 } from "../organisms/Player2";

export const Buttle=()=>{
    const [count,setCount]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const id=[...Array(52).keys()];
    const mark=["スペード","ダイヤ","ハート","クローバー"];
    const number=[...Array(13).keys()].map((num)=>num+1);

    let cardObjArr=[]

    for(let i in mark){
        for(let j in number){
            let cardObj={};

            cardObj.mark=mark[i];
            cardObj.number=number[j];

            cardObjArr=[...cardObjArr,cardObj]
        }
    }
    for(let i in id){
        cardObjArr[i].id=i;
        cardObjArr[i].height=200;
    }
    cardObjArr[0].img=pic1;
    cardObjArr[1].img=pic2;
    cardObjArr[2].img=pic3;
    cardObjArr[3].img=pic4;
    cardObjArr[4].img=pic5;
    cardObjArr[5].img=pic6;
    cardObjArr[6].img=pic7;
    cardObjArr[7].img=pic8;
    cardObjArr[8].img=pic9;
    cardObjArr[9].img=pic10;
    cardObjArr[10].img=pic11;
    cardObjArr[11].img=pic12;
    cardObjArr[12].img=pic13;
    cardObjArr[13].img=pic14;
    cardObjArr[14].img=pic15;
    cardObjArr[15].img=pic16;
    cardObjArr[16].img=pic17;
    cardObjArr[17].img=pic18;
    cardObjArr[18].img=pic19;
    cardObjArr[19].img=pic20;
    cardObjArr[20].img=pic21;
    cardObjArr[21].img=pic22;
    cardObjArr[22].img=pic23;
    cardObjArr[23].img=pic24;
    cardObjArr[24].img=pic25;
    cardObjArr[25].img=pic26;
    cardObjArr[26].img=pic27;
    cardObjArr[27].img=pic28;
    cardObjArr[28].img=pic29;
    cardObjArr[29].img=pic30;
    cardObjArr[30].img=pic31;
    cardObjArr[31].img=pic32;
    cardObjArr[32].img=pic33;
    cardObjArr[33].img=pic34;
    cardObjArr[34].img=pic35;
    cardObjArr[35].img=pic36;
    cardObjArr[36].img=pic37;
    cardObjArr[37].img=pic38;
    cardObjArr[38].img=pic39;
    cardObjArr[39].img=pic40;
    cardObjArr[40].img=pic41;
    cardObjArr[41].img=pic42;
    cardObjArr[42].img=pic43;
    cardObjArr[43].img=pic44;
    cardObjArr[44].img=pic45;
    cardObjArr[45].img=pic46;
    cardObjArr[46].img=pic47;
    cardObjArr[47].img=pic48;
    cardObjArr[48].img=pic49;
    cardObjArr[49].img=pic50;
    cardObjArr[50].img=pic51;
    cardObjArr[51].img=pic52;

    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    let cardObjArrShuffle=shuffle(cardObjArr);

    //useState
    const [myHand,setMyHand]=useState(cardObjArrShuffle.splice(0,5));
    const [yourHand,setYourHand]=useState(cardObjArrShuffle.splice(0,5));
    const [changeMyHandBool,setChangeMyHandBool]=useState(true);
    const [changeYourHandBool,setChangeYourHandBool]=useState(false);
    const [myTurn,setMyTurn]=useState(true);

    const willChangeMyHand=(index)=>{
        const newMyHand=[...myHand];

        if(newMyHand[index].height===200){
            newMyHand[index].height=240;
        }else{
            newMyHand[index].height=200;
        }

        setMyHand(newMyHand);
    }

    const willChangeYourHand=(index)=>{
        const newYourHand=[...yourHand];
        if(newYourHand[index].height===200){
            newYourHand[index].height=240;
            setYourHand(newYourHand);
        }else{
            newYourHand[index].height=200;
            setYourHand(newYourHand);
        }
    }

    const changeHand=(hand,setHand,changeHandBool,setChangeHandBool)=>{
        const newHand=[...hand];
        newHand.map((card,index)=>{
            if(card.height===240){
                newHand[index]=cardObjArrShuffle.splice(0,1)[0];
            }
        })
        setHand(newHand);
        setChangeHandBool(!changeHandBool);
    }

    const myTurnEnd=()=>{
        setChangeMyHandBool(true);
        setChangeYourHandBool(true);
        setMyTurn(!myTurn);
        setCount(count+1);
    }

    if(count===4){
        setShowResult(true);
        setCount(0);
    }

    return(
        <SContainer>
            {!showResult &&
                <div>
                    {myTurn &&
                        <Player1 
                            myHand={myHand}
                            setMyHand={setMyHand}
                            changeMyHandBool={changeMyHandBool}
                            setChangeMyHandBool={setChangeMyHandBool}
                            changeHand={changeHand}
                            myTurnEnd={myTurnEnd}
                            willChangeMyHand={willChangeMyHand}
                        />
                    }
        
                    {!myTurn &&
                        <Player2
                            yourHand={yourHand}
                            setYourHand={setYourHand}
                            changeYourHandBool={changeYourHandBool}
                            setChangeYourHandBool={setChangeYourHandBool}
                            changeHand={changeHand}
                            myTurnEnd={myTurnEnd}
                            willChangeYourHand={willChangeYourHand}
                        />
                    }

                    <SRole src={rule} width={300} />
                </div>
            }

            {showResult && <SLink to={{pathname:"/result",state:{myHand,yourHand}}}><SButton2>RESULT</SButton2></SLink>}
        </SContainer>
    )
}

const SContainer=styled.div`
    text-align: center;
`;
const SButton2=styled.button`
    background-color: blue;
    font-weight: bold;
    color: white;
    margin-top: 100px;
    padding: 30px 40px;
    border-radius:9999px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;
const SLink=styled(Link)`
    
`;
const SRole=styled.img`
    margin-top: 20px;
`;