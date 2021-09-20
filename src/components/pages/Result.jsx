import { useLocation,Link } from "react-router-dom";
import styled from "styled-components";
import { Result1 } from "../organisms/Result1";
import { Result2 } from "../organisms/Result2";

//役のオブジェクト
const roleObj=[
    {name:"ロイヤルストレートフラッシュ",power:9},
    {name:"ストレートフラッシュ",power:8},
    {name:"フォーカード",power:7},
    {name:"フルハウス",power:6},
    {name:"フラッシュ",power:5},
    {name:"ストレート",power:4},
    {name:"スリーカード",power:3},
    {name:"ツーペア",power:2},
    {name:"ワンペア",power:1},
    {name:"ハイカード",power:0}
]

//ロイヤルストレートフラッシュ
const rsf=(marks,numbers)=>{
    //マークがすべて同じ
    const sameMarks=marks.every((mark)=> mark===marks[0]);

    //数字が10,11,12,13,1
    const rsfNums=[10,11,12,13,1];
    const rsfNumbers=numbers.every((number)=>rsfNums.includes(number));

    //ロイヤルストレートフラッシュか判定
    const rsfBool=sameMarks && rsfNumbers;
    
    return rsfBool
}

//ストレートフラッシュ
const sf=(marks,numbers)=>{
    //マークがすべて同じ
    const sameMarks=marks.every((mark)=> mark===marks[0]);

    //公差1が等差数列
    const sortNumbers=[...numbers].sort((a,b)=>b-a);
    const difference1=sortNumbers.every((sortNumber,index)=>{
        if(index===sortNumbers.length-1){
            return true
        }else{
            return sortNumber-sortNumbers[index+1]===1
        }
    });

    //ストレートフラッシュか判定
    const sfBool=sameMarks && difference1;

    return sfBool
}

//フォーカード
const fc=(numbers)=>{
    let count={};
    numbers.map((number)=>{
        count[number]=(count[number] || 0)+1;
    })

    //フォーカードか判定
    const fsBool=Object.values(count).includes(4);

    return fsBool
}

//フルハウス
const fh=(numbers)=>{
    let count={};
    numbers.map((number)=>{
        count[number]=(count[number] || 0)+1;
    })

    //フルハウス=スリーカード+ワンペア
    const threeCard=Object.values(count).includes(3);
    const onePair=Object.values(count).includes(2);

    //フルハウスか判定
    const fhBool=threeCard && onePair
    
    return fhBool
}

//フラッシュ
const f=(marks)=>{
    //フラッシュか判定
    const fBool=marks.every((mark)=> mark===marks[0]);

    return fBool
}

//ストレート
const s=(numbers)=>{
    const sa=[10,11,12,13,1];
    const sortNumbers=[...numbers].sort((a,b)=>b-a);

    //ストレートか判定
    //公差が1の等差数列　or [10,J,Q,K,A]
    let sBool=(sortNumbers.every((sortNumber,index)=>{
        if(index===sortNumbers.length-1){
            return true
        }else{
            return sortNumber-sortNumbers[index+1]===1
        }
    })) || (sa.every((number)=>sortNumbers.includes(number)));

    return sBool
}

//スリーカード
const tc=(numbers)=>{
    let count={};
    numbers.map((number)=>{
        count[number]=(count[number] || 0)+1;
    })

    //スリーカード=同じの数字3枚+残りがワンペアじゃない
    const threeCard=Object.values(count).includes(3);
    const notOnePair=Object.values(count).includes(1);

    //スリーカードか判定
    const tcBool=threeCard && notOnePair

    return tcBool
}

//ツーペア
const tp=(numbers)=>{
    //各カード何枚ずつあるかのオブジェクト
    let count={};
    numbers.map((number)=>{
        count[number]=(count[number] || 0)+1;
    })

    //何枚ずつあるかが何個あるかのオブジェクト
    let count2={};
    Object.values(count).map((c)=>{
        count2[c]=(count2[c] || 0)+1;
    })

    //ツーペアか判定
    //ワンペアが2個あるとtrue
    const tpBool=(count2[2]===2);

    return tpBool
}

//ワンペア
const op=(numbers)=>{
    //各カード何枚ずつあるかのオブジェクト
    let count={};
    numbers.map((number)=>{
        count[number]=(count[number] || 0)+1;
    })

    //何枚ずつあるかが何個あるかのオブジェクト
    let count2={};
    Object.values(count).map((c)=>{
        count2[c]=(count2[c] || 0)+1;
    })

    //ワンペア=同じの数字2枚+残りがバラバラ
    const one=(count2[2]===1);
    const disjoint=(count2[1]===3);

    //ワンペアか判定
    const opBool=one && disjoint

    return opBool
}

//役を定義
const Role=(hand)=>{
    let marks=[];
    let numbers=[];

    hand.map((card)=>{
        marks=[...marks,card.mark];
        numbers=[...numbers,card.number];
    })

    if(rsf(marks,numbers)){
        return roleObj[0]
    }else if(sf(marks,numbers)) {
        return roleObj[1]
    }else if(fc(numbers)){
        return roleObj[2]
    }else if(fh(numbers)){
        return roleObj[3]
    }else if(f(marks)){
        return roleObj[4]
    }else if(s(numbers)){
        return roleObj[5]
    }else if(tc(numbers)){
        return roleObj[6]
    }else if(tp(numbers)){
        return roleObj[7]
    }else if(op(numbers)){
        return roleObj[8]
    }else{
        return roleObj[9]
    }
}

//勝敗を定義
//myHandが勝ち　→　0
//yourHandが勝ち　→　1
//引き分け　→　2

//ストレートフラッシュの勝敗
const CompetitionSf=(myNumbers,yourNumbers)=>{
    const myMax=Math.max(...myNumbers);
    const yourMax=Math.max(...yourNumbers);

    //判定
    if(myMax > yourMax){
        return 0
    }else if(myMax < yourMax){
        return 1
    }else{
        return 2
    }
}

//フォーカードの勝敗
const CompetitionFc=(myNumbers,yourNumbers)=>{
    //myNumbersとyourNumbersの数字(key)と枚数(value)のオブジェクト
    let myCount={};
    let yourCount={};

    myNumbers.map((number)=>{
        myCount[number]=(myCount[number] || 0)+1;
    })
    yourNumbers.map((number)=>{
        yourCount[number]=(yourCount[number] || 0)+1;
    })

    //4枚ある数字をmyFourNumberとyourFourNumberに代入
    const myEntries=Object.entries(myCount);
    let myFourNumber;
    if(myEntries[0][1]===4){
        myFourNumber=myEntries[0][0];
    }else{
        myFourNumber=myEntries[1][0];
    }

    const yourEntries=Object.entries(yourCount);
    let yourFourNumber;
    if(yourEntries[0][1]===4){
        yourFourNumber=yourEntries[0][0];
    }else{
        yourFourNumber=yourEntries[1][0];
    }

    //判定
    if(myFourNumber==="1"){
        return 0
    }else if(yourFourNumber==="1"){
        return 1
    }else if(myFourNumber > yourFourNumber){
        return 0
    }else{
        return 1
    }
}

//フルハウスの勝敗
const CompetitionFh=(myNumbers,yourNumbers)=>{
    //myNumbersとyourNumbersの数字(key)と枚数(value)のオブジェクト
    let myCount={};
    let yourCount={};

    myNumbers.map((number)=>{
        myCount[number]=(myCount[number] || 0)+1;
    })
    yourNumbers.map((number)=>{
        yourCount[number]=(yourCount[number] || 0)+1;
    })

    //3枚ある数字をmyThreeNumberとyourThreeNumberに代入
    const myEntries=Object.entries(myCount);
    let myThreeNumber;
    if(myEntries[0][1]===3){
        myThreeNumber=myEntries[0][0];
    }else{
        myThreeNumber=myEntries[1][0];
    }

    const yourEntries=Object.entries(yourCount);
    let yourThreeNumber;
    if(yourEntries[0][1]===3){
        yourThreeNumber=yourEntries[0][0];
    }else{
        yourThreeNumber=yourEntries[1][0];
    }

    //判定
    if(myThreeNumber > yourThreeNumber){
        return 0
    }else{
        return 1
    }
}

//フラッシュの勝敗
const CompetitionF=(myNumbers,yourNumbers)=>{
    const mySortNumbers=[...myNumbers].sort((a,b)=>b-a);
    const yourSortNumbers=[...yourNumbers].sort((a,b)=>b-a);

    let winner;
    
    if(mySortNumbers.every((val,index)=>val===yourSortNumbers[index])){
        winner=2;
    }else{
        for(let i=0;i<myNumbers.length;i++){
            if((mySortNumbers[4]===1) && !(yourSortNumbers[4]===1)){
                winner=0;
                break;
            }else if(!(mySortNumbers[4]===1) && (yourSortNumbers[4]===1)){
                winner=1;
                break;
            }else if(mySortNumbers[i] > yourSortNumbers[i]){
                winner=0;
                break;
            }else if(mySortNumbers[i] < yourSortNumbers[i]){
                winner=1;
                break;
            }
        }
    }

    return winner
}

//ストレートの勝敗
const CompetitionS=(myNumbers,yourNumbers)=>{
    const sa=[10,11,12,13,1];
    const mySortNumbers=[...myNumbers].sort((a,b)=>b-a);
    const yourSortNumbers=[...yourNumbers].sort((a,b)=>b-a);

    let winner;

    //判定
    if(sa.every((number)=>myNumbers.includes(number)) && sa.every((number)=>yourNumbers.includes(number))){
        winner=2;
    }else{
        for(let i=0;i<myNumbers.length;i++){
            if((mySortNumbers[4]===1) && !(yourSortNumbers[4]===1)){
                winner=0;
                break;
            }else if(!(mySortNumbers[4]===1) && (yourSortNumbers[4]===1)){
                winner=1;
                break;
            }else if(mySortNumbers[i] > yourSortNumbers[i]){
                winner=0;
                break;
            }else if(mySortNumbers[i] < yourSortNumbers[i]){
                winner=1;
                break;
            }
        }
    }

    return winner
}

//スリーカードの勝敗
const CompetitonTc=(myNumbers,yourNumbers)=>{
    let myCount={};
    let yourCount={};

    myNumbers.map((number)=>{
        myCount[number]=(myCount[number] || 0)+1;
    })
    yourNumbers.map((number)=>{
        yourCount[number]=(yourCount[number] || 0)+1;
    })

    const myEntries=Object.entries(myCount);
    const yourEntries=Object.entries(yourCount);

    //3枚の数字をmyThreeとyourThreeに代入
    let myThree;
    let yourThree;

    for(let i=0;i<myEntries.length;i++){
        if(myEntries[i][1]===3){
            myThree=myEntries[i][0];
        }
        if(yourEntries[i][1]===3){
            yourThree=yourEntries[i][0];
        }
    }

    //判定
    //myThreeとyourThreeを比較
    if(myThree==="1"){
        return 0
    }else if(yourThree==="1"){
        return 1
    }else if(myThree > yourThree){
        return 0
    }else{
        return 1
    }
}

//ツーペアの勝敗
const CompetitionTp=(myNumbers,yourNumbers)=>{
    //myNumbersとyourNumbers=数字(key)と枚数(value)のオブジェクト
    let myCount={};
    let yourCount={};

    myNumbers.map((number)=>{
        myCount[number]=(myCount[number] || 0)+1;
    })
    yourNumbers.map((number)=>{
        yourCount[number]=(yourCount[number] || 0)+1;
    })

    //myEntries,yourEntries=myCount,yourCountのEntries
    const myEntries=Object.entries(myCount);
    const yourEntries=Object.entries(yourCount);

    //myTwo,yourTwo=ツーペアの数字の配列
    let myTwo=[];
    let yourTwo=[];

    for(let i=0;i<myEntries.length-1;i++){
        if(myEntries[i][1]===2){
            myTwo=[...myTwo,Number(myEntries[i][0])];
        }
        if(yourEntries[i][1]===2){
            yourTwo=[...yourTwo,Number(yourEntries[i][0])];
        }
    }

    //myRest,yourRest=残りの1枚
    let myRest;
    let yourRest;

    for(let i=0;i<myEntries.length;i++){
        if(myEntries[i][1]===1){
            myRest=Number(myEntries[i][0]);
        }
        if(yourEntries[i][1]===1){
            yourRest=Number(yourEntries[i][0]);
        }
    }

    //判定
    const sortMyTwo=[...myTwo].sort((a,b)=>b-a);
    const sortYourTwo=[...yourTwo].sort((a,b)=>b-a);
    let winner;

    if(myTwo.includes(1) && yourTwo.includes(1)){
        if(sortMyTwo[0] > sortYourTwo[0]){
            winner=0;
        }else if(sortMyTwo[0] < sortYourTwo[0]){
            winner=1;
        }else{
            if(myRest > yourRest){
                winner=0;
            }else if(myRest < yourRest){
                winner=1;
            }else{
                winner=2;
            }
        }
    }else if(myTwo.includes(1)){
        winner=0;
    }else if(yourTwo.includes(1)){
        winner=1;
    }else{
        for(let i=0;i<sortMyTwo.length-1;i++){
            if(sortMyTwo[i] > sortYourTwo[i]){
                winner=0;
                break;
            }else if(sortMyTwo[i] < sortYourTwo[i]){
                winner=1;
                break;
            }
        }
        if(!winner){
            if(myRest > yourRest){
                winner=0;
            }else if(myRest < yourRest){
                winner=1;
            }else{
                winner=2;
            }
        }
    }

    return winner
}

//ワンペアの勝敗
const CompetitionOp=(myNumbers,yourNumbers)=>{
    //myNumbersとyourNumbers=数字(key)と枚数(value)のオブジェクト
    let myCount={};
    let yourCount={};

    myNumbers.map((number)=>{
        myCount[number]=(myCount[number] || 0)+1;
    })
    yourNumbers.map((number)=>{
        yourCount[number]=(yourCount[number] || 0)+1;
    })

    //myEntries,yourEntries=myCount,yourCountのEntries
    const myEntries=Object.entries(myCount);
    const yourEntries=Object.entries(yourCount);

    //myOne,yourOne=ワンペアの数字
    let myOne;
    let yourOne;

    for(let i=0;i<myEntries.length;i++){
        if(myEntries[i][1]===2){
            myOne=Number(myEntries[i][0]);
        }
        if(yourEntries[i][1]===2){
            yourOne=Number(yourEntries[i][0]);
        }
    }

    //判定
    if(myOne===1 && yourOne===1){
        return 2
    }else if(myOne===1){
        return 0
    }else if(yourOne===1){
        return 1
    }else if(myOne > yourOne){
        return 0
    }else if(myOne < yourOne){
        return 1
    }else{
        return 2
    }
}

const Competition=(myHand,yourHand)=>{
    const myRole=Role(myHand);
    const yourRole=Role(yourHand);

    let myNumbers=[];
    let yourNumbers=[];
    myHand.map((card)=>{
        myNumbers=[...myNumbers,card.number];
    })
    yourHand.map((card)=>{
        yourNumbers=[...yourNumbers,card.number];
    })

    if(myRole.power > yourRole.power){
        return 0
    }else if(myRole.power < yourRole.power){
        return 1
    }else if((myRole.power===yourRole.power) && (myRole.power===9)){ 
        //ロイヤルストレートフラッシュ
        return 2
    }else if((myRole.power===yourRole.power) && (myRole.power===8)){
        //ストレートフラッシュ
        return CompetitionSf(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===7)){
        //フォーカード
        return CompetitionFc(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===6)){
        //フルハウス
        return CompetitionFh(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===5)){
        //フラッシュ
        return CompetitionF(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===4)){
        //ストレート
        return CompetitionS(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===3)){
        //スリーカード
        return CompetitonTc(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===2)){
        //ツーペア
        return CompetitionTp(myNumbers,yourNumbers)
    }else if((myRole.power===yourRole.power) && (myRole.power===1)){
        //ワンペア
        return CompetitionOp(myNumbers,yourNumbers)
    }else{
        //ハイカード
        return 2
    }
}

export const Result=()=>{
    const { state }=useLocation();

    const myHand=state.myHand;
    const yourHand=state.yourHand;

    //勝敗
    let winSentence;
    switch(Competition(myHand,yourHand)){
        case 0:
            winSentence="Player1の勝利！";
            break;
        case 1:
            winSentence="Player2の勝利！";
            break;
        case 2:
            winSentence="ドロー！";
            break;
    }

    //役
    const role1=Role(myHand).name;
    const role2=Role(yourHand).name;

    return(
        <SContainer>
            <SH1>{winSentence}</SH1>

            <Result1 role1={role1} myHand={myHand} />

            <Result2 role2={role2} yourHand={yourHand} />

            <Link to="/"><SButton>TOP</SButton></Link>
        </SContainer>
    )
}

const SContainer=styled.div`
    text-align: center;
`;
const SH1=styled.h1`
    font-size: 60px;
    color: yellow;
    margin-top: 20px;
`;
const SButton=styled.button`
    font-size: 40px;
    background-color: blue;
    color: white;
    border-radius: 9999px;
    margin-top: 70px;
    padding: 20px 50px;
    &:hover{
        opacity: 0.8;
    }
`;