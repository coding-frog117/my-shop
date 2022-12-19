import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/itemSlice";

function Cart(){

    let stateList=useSelector((state)=>{return state});
    let dispatch=useDispatch();
    
    return(
        <div>
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
                    {stateList.item.map((a,i)=>{
                         return(
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td>
                                    <button onClick={(e)=>{
                                        return(console.log(e.target.id));
                                    
                                        }}
                                        // if (n) {
                                        //     stateList[n].count}
                                        // dispatch(increaseCount()) 

                                    >+</button>
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