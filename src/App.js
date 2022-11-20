import React from 'react';
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
            <li className="product-list">
              <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_1.png`}></img>
              <h2>{clothes[0].title}</h2>
              <p>{clothes[0].content}</p>
            </li>
            <li className="product-list">
              <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_2.png`}></img>
              <h2>{clothes[1].title}</h2>
              <p>{clothes[1].content}</p>
            </li>
            <li className="product-list">
              <img className='list' src={process.env.PUBLIC_URL+`/img/clothes_2.png`}></img>
              <h2>{clothes[2].title}</h2>
              <p>{clothes[2].content}</p>
            </li>
          </ul>
        </section>
      </main>
    </div>

  );
}
export default App;
 