import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { changeName,changeAge } from "../store";

function Cart(){

    let stateList=useSelector((state)=>{return state});
    let dispatch=useDispatch();
    
    return(
        <div>
            {stateList.user.name}의 장바구니
            {stateList.user.age}살
            <button onClick={()=>
                dispatch(changeAge(100))}>버튼</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th> 변경하기</th>
                    </tr>
                </thead> 
                <tbody>
                    {stateList.item.map((a)=>{
                         return(
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <t d>{a.count}</t>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeName());
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                
                </tbody>
            </table>
        </div>
    )
}

export default Cart;