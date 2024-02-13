import { useContext, useState} from 'react'
import { ExpenseContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [ expenses, setexpenses ] = useContext(ExpenseContext);

  const [amount, setamount] = useState("");
  const [remark, setremark] = useState("");
  const [category, setcategory] = useState("");
  const [payment, setpayment] = useState("cash");

  const submitHandler = (e)=>{
    e.preventDefault();

    const newexpense = { amount, remark, category, payment };

    const copyexpenses = [...expenses];
    copyexpenses.push(newexpense);
    setexpenses(copyexpenses);
    localStorage.setItem("expenses", JSON.stringify(copyexpenses));
    navigate("/show");
  };

  return (
    <form onSubmit={submitHandler} className='text-center mt-8'>
      <input onChange={(e) => setamount(e.target.value)} value={amount} type="number" placeholder='Amount' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'/>
      <input onChange={(e) => setremark(e.target.value)} value={remark} type="text" placeholder='Remark' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'/>
      <input onChange={(e) => setcategory(e.target.value)} value={category} type="text" placeholder='Category' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' />
      <select className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' onChange={(e) => setpayment(e.target.value)} value={payment} name="payment">
        <option value="cash">Cash</option>
        <option value="online">Online</option>
        <option value="card">Card</option>
      </select>
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add expense</button>
    </form>
  )
}

export default Create