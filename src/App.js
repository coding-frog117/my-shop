import React, { useTransition } from 'react';
import './App.css';
import data from './data';
import Cart from './Pages/Cart'
import {useState} from 'react';
import ProductList from './Component/ProductList';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './Pages/Detail';
import axios from 'axios'

function App() {
  let [clothes,setClothes]=useState(data); 
  let navigate=useNavigate();
  let [clickCount,setClickCount]=useState(1);
  let [loading,setLoading]=useState(false);
  let [fadeIn,setFadeIn]=useState('');

  return (
    <div className="shop"> 
      <nav className="shop-nav">
        <ul className="nav-list">
          <li className="header">
            <h1 onClick={()=>{
              navigate('/');
            }}>예은쇼핑몰</h1></li>
          <li>outer</li>
          <li>top</li>
          <li>bottom</li>
          <li onClick={()=>{
            navigate('/detail');
          }}>Detail</li>

          <li onClick={()=>{
            navigate(-1);
          }}>뒤로가기</li>
          <li onClick={()=>{
            navigate(1);
          }}>앞으로가기</li>
        </ul>
      </nav>

      <button onClick={()=>{
        setClickCount(clickCount+1);
        setLoading(true);
        console.log(clickCount)

        if (clickCount===1){
          axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          let newArray=clothes.concat(result.data);
          //let new Array=[...clothes, ...result.data]
          setClothes(newArray);
          // console.log(newArray);
          setLoading(false);
        })
        .catch(()=>{
          setLoading(false);
          alert("상품을 불러오는데 실패했습니다");       
        })
        }

        else if (clickCount===2){
          axios.get('https://codingapple1.github.io/shop/data3.json')
          .then((result)=>{
            let newArray2=clothes.concat(result.data);
            setClothes(newArray2);
            setLoading(false);
          })
          .catch(()=>{
            setLoading(false);
            alert("상품을 불러오는데 실패했습니다");       
          })
        }
        else if (clickCount>=3){
            setLoading(false);
            alert("마지막 페이지입니다")
        }
        // Promise.all([axios.get('url1'),axios.get('url2')])
        // axios.post('url2', {name:'Song'})
        // axios.get('url',)
      }}>더보기</button>  

      <Routes>  
        <Route path="/" element={
        <>
          <Link to="/detail" element={
            <Detail clothes={clothes}/>
          }>상세페이지</Link >
          <main className="shop-main">
            <img className='main-img' src={process.env.PUBLIC_URL+`/img/main_img.jpg`}></img>

            {loading===true
              ? <p>로딩중입니다</p>
              : null}

            <section className="main-product">
            <ul className="product-listgroup">
            {
              clothes.map((a,i)=>{
                return(
                <ProductList clothes={clothes[i]} i={i}></ProductList>
                )  
              })
            }
            
            </ul>
          </section>
        </main>
          
      </>}></Route>

        <Route path="/detail" element={
          
          <Detail></Detail>
          }/>
        <Route path="/detail/:id" element={<Detail clothes={clothes} className={`start ${fadeIn}`}></Detail>}></Route>
        <Route path="*" element={
          <div>없는 페이지입니다. 404 error</div>
        }></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>
        
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes> 
    
    </div>

  );
}

function Event(){
  return(
  <div>오늘의 이벤트
    <Outlet></Outlet>
  </div>
  )
}

export default App;