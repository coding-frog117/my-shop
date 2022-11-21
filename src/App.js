import React, { useTransition } from 'react';
import './App.css';
import data from './data';
import {useState} from 'react';

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
    </div>

  );
}

function ProductList(props){
  return(
    <li className="product-list">
          <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_${props.i}.png`}></img>
            <h2>{props.clothes.title}</h2>
            <p>{props.clothes.content}</p>
      </li>
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