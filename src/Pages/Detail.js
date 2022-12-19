import { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'

let YellowBtn= styled.button`
    background: ${props=>props.bg};
    color: ${props=>props.bg==="blue"? 'white' : 'black'};
    padding:10px;
`

  function Detail(props){

    let [inputVal,setInputVal]=useState('');
    let [tab,setTab]=useState(0);

    useEffect(()=>{
        let timer=setTimeout(()=>{setAlert(false)},2000)

        return (
            ()=>{
                clearTimeout(timer)
            }
        )
    },[])

    useEffect(()=>{
        if (isNaN(inputVal) === true){
            alert("숫자만 입력 가능합니다")
        }
    },[inputVal])

    let [count,setCount]=useState(0);
    let [myAlert,setAlert]=useState(true);  
    
    let {id}=useParams();
    // const found=props.clothes.find(index=>
    //     index.id==id
    // )

    return(
    <div className="container">
        {myAlert==true
        ?<div className="alert alert-warning">2초 이내 구매시 할인</div>
        : null
        }
        <YellowBtn bg="blue" onClick={()=>{setCount(count+1)}}>{count}</YellowBtn>
        <YellowBtn bg="yellow"></YellowBtn>
        <YellowBtn bg="pink"></YellowBtn>
        <input placeholder='입력해주세요' onChange={(e)=>{
            // inputVal=e.target.value;
            setInputVal(e.target.value);

        }}></input>

    <Link to="/">홈</Link>
    <div className='detail-cont'>
        <img src={process.env.PUBLIC_URL+`/img/clothes_${id}.png`} className="detail-img" width="100%" />
        <div className="datail-desc">
        <h4 className="pt-5">
            
        </h4>
        <p></p>
        <p></p>
        <button className="btn btn-danger">주문하기</button> 
        </div>
    </div>

    <button className='btn btn0' onClick={()=>{
        setTab(0)
    }}>버튼0</button>
    <button className='btn btn1' onClick={()=>{
        setTab(1)
    }}>버튼1</button>
    <button className='btn btn2' onClick={()=>{
        setTab(2)
    }}>버튼2</button>
    <Tab tab={tab}></Tab>
    </div> 

    )
}

function Tab({tab}){ 
    let [fade,setFade]=useState('');

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)
        
        return()=>{
            setFade('')
        }
    },[tab])
    return(<div className={`start ${fade}`}>{
    [<section className='nav0'>내용0</section>,
    <section className='nav1'>내용1</section>,
    <section className='nav2'>내용2</section>][tab]}</div>
    )
}
export default Detail; 