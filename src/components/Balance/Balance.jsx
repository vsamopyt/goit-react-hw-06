
import {  useDispatch, useSelector } from "react-redux";


export default function Balance() {
  
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();
  const handleDispatch = () =>{dispatch({
    type: "balance/dispatch",
    payload: 5,
  })}


  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input
        type="number"
       
        
      />
      <button onClick ={handleDispatch}>Deposit  credits</button>
      <button >Withdraw  credits</button>
      <button >Reset</button>
    </div>
  );
}