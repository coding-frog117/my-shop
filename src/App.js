import React, { useTransition } from 'react';
import './App.css';
import data from './data';
import {useState} from 'react';
import ProductList from './Component/ProductList';
import {Routes, Route, Link} from 'react-router-dom'
import detail from './Component/datail';

function App() {
  let [clothes]=useState(data); 
  return (
    <div className="shop">
      <nav className="shop-nav">
        <ul className="nav-list">
          <li className="header">
            <h1>예은쇼핑몰</h1></li>
          <li>outer</li>
          <li>top</li>
          <li>bottom</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
        <>
          <Link to="/detail">상세페이지</Link>
          <main className="shop-main">
            <img className='main-img' src={process.env.PUBLIC_URL+`/img/main_img.jpg`}></img>

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

        <Route path="/detail" element={detail()}></Route>
      </Routes>

      
    </div>

  );
}



// function ProductList(props){
//   clothes.map((a,i)=>{
//     return(
//       <li className="product-list">
//           <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_${props.i}.png`}></img>
//             <h2>{props.clothes[i].title}</h2>
//             <p>{props.clothes[i].content}</p>
//       </li>
//     )
//   })}
export default App;