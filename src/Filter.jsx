import React, { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Filter = () => {
    const [expenses] = useContext(ExpenseContext);

    const [key, setkey] = useState("");
    const [value, setvalue] = useState("");

    const [filterexpenses, setfilterexpenses] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const filterExpenses = expenses.filter((e) => e[key] == value);
        setfilterexpenses(filterExpenses);
    };

    const deleteHandler =(index) => {
        const copyexpenses = [...filterexpenses]
        copyexpenses.splice(index, 1)
        setfilterexpenses(copyexpenses)
      };

return (
    <div>
        <form className='text-center mt-8' onSubmit={SubmitHandler}>
            <select className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' onChange={(e) => setkey(e.target.value)} value={key}>
                <option value="amount">Amount</option>
                <option value="remark">Remark</option>
                <option value="payment">Payment</option>
                <option value="category">Category</option>
            </select>
            <input className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' onChange={(e) => setvalue(e.target.value)} value={value} type="text" placeholder="Enter Value"/>
            <button className='bg-black text-white px-4 py-1 text-2xl font-bold rounded m-5'>Filter</button>
            </form>
            <hr />
            {filterexpenses.length === 0
                ? "no filter selected"
                : filterexpenses.map((e, index) => (
                      <p className='text-center text-lg font-normal' key={index}>
                          ⚡{e.remark} ({e.payment}) - {e.category} - {e.amount}{" "}
                          <span className='cursor-pointer' onClick={()=>{deleteHandler(index)}}>❌</span>
                      </p>
                  ))}
            <Link className='text-blue-400 text-2xl font-semibold flex items-center justify-center mt-4' to="/show">Go back</Link>
        </div>
    );
};

export default Filter;