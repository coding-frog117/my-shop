import {Link} from 'react-router-dom'

const detail=function Datail(){
    return(
    <div className="container">
    <Link to="/">홈</Link>
    <div className="row">
        <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
        </div>
    </div>
    </div> 
    )
}

export default detail;