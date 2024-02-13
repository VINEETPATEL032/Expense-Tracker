import { useContext } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Show = () => {
    const [expenses, setexpenses] = useContext(ExpenseContext);

    const deleteHandler =(index) => {
        const copyexpense = [...expenses]
        copyexpense.splice(index, 1)
        setexpenses(copyexpense)
      };
    return (
        <>
            <Link className='text-blue-400 text-2xl font-semibold flex items-center justify-center mt-10' to="/filter">Filter Expenses</Link>
            <h2 className='text-center mt-2 text-lg font-normal'>
                Total Spent: {expenses.reduce((ac, cv) => ac + +cv.amount, 0)}{" "}
            </h2>
            <ol>
                {expenses.length === 0
                    ? "No Data Present"
                    : expenses.map((e, index) => (
                          <li className='text-center text-lg font-normal' key={index}>
                              ⚡{e.remark} ({e.payment}) - {e.category} -{" "}
                              {e.amount} <span className='cursor-pointer' onClick={()=>{deleteHandler(index)}}>❌</span>
                          </li>
                      ))}
            </ol>
        </>
    );
};

export default Show;