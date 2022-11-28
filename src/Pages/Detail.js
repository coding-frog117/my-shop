import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn= styled.button`
    background: ${props=>props.bg};
    color: ${props=>props.bg==="blue"? 'white' : 'black'};
    padding:10px;
`

function Detail(props){
    useEffect(()=>{
        let timer=setTimeout(()=>{setAlert(false)},2000)

        return (
            ()=>{
                clearTimeout(timer)
            }
        )
    },[])

    let [count,setCount]=useState(0);
    let [alert,setAlert]=useState(true);  
    
    let {id}=useParams();
    const found=props.clothes.find(index=>
        index.id==id
    )

    return(
    <div className="container">
        {alert==true
        ?<div className="alert alert-warning">2초 이내 구매시 할인</div>
        : null
        }
        <YellowBtn bg="blue" onClick={()=>{setCount(count+1)}}>{count}</YellowBtn>
        <YellowBtn bg="yellow"></YellowBtn>
        <YellowBtn bg="pink"></YellowBtn>

    <Link to="/">홈</Link>
    <div className="row">
        <div className="col-md-6">
        <img src={process.env.PUBLIC_URL+`/img/clothes_${id}.jpg`} width="100%" />
        </div>
        
        <div className="col-md-6">
        <h4 className="pt-5">
            {found.title}
        </h4>
        <p>{found.content}</p>
        <p>{found.price}</p>
        <button className="btn btn-danger">주문하기</button> 
        </div>
    </div>
    </div> 
    )
}

export default Detail;