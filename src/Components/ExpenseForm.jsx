import React, { useState, useEffect } from 'react';

const ExpenseForm = () => {
    const [expenseName, setExpenseName] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    // Load expenses from local storage on component mount
    useEffect(() => {
        let savedExpenses = localStorage.getItem('expenses');
        if (savedExpenses) {    // Attempt to parse JSON data
            const parsedExpenses = JSON.parse(savedExpenses);
            if (Array.isArray(parsedExpenses)) {
                setExpenses(parsedExpenses);
            } else {
                console.log('Invalid data format in local storage');
            }
        }
    }, []);

    // Save expenses to local storage whenever expenses change
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new expense object
        const newExpense = {
            name: expenseName,
            date: date,
            amount: amount
        };

        // Add the new expense to the list of expenses
        setExpenses([...expenses, newExpense]);
        console.log(newExpense)
        console.log(expenses)

        // Clear the form fields
        setExpenseName('');
        setDate('');
        setAmount('');
    };

    const handleDelete = (index) => {
        // Remove the expense from the list
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
    };

    return (
        <div className='w-full h-96 md:flex mt-4 items-center justify-center gap-3 md:px-0 px-2'>
            <form className='bg-zinc-500 md:w-[50%] h-full rounded-3xl p-3 flex flex-col gap-5' onSubmit={handleSubmit}>
                <h1 className='md:text-4xl text-xl'>Add your expenses 💲💲💲</h1>
                <input
                    type="text"
                    required
                    className='outline-none h-12 p-3 text-2xl rounded-full'
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                />
                <input
                    type="date"
                    required
                    className='outline-none h-12 p-3 text-2xl rounded-full'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    required
                    className='outline-none h-12 p-3 text-2xl rounded-full'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit" className='bg-white rounded-full w-40 text-2xl'>
                    Add Expense
                </button>
            </form>
            <div className='md:w-[40%] h-full bg-zinc-500 rounded-3xl p-3 flex flex-col gap-5 md:mt-0 mt-5'>
                <h1 className='md:text-4xl text-xl'>Your expenses 🤑</h1>
                <ul className='flex flex-col gap-2'>
                    {expenses.map((expense, index) => (
                        <li key={index} className='w-full h-12 bg-white list-none rounded-full flex items-center justify-between p-3'>
                            <span>{expense.name} - {expense.date} - ${expense.amount}</span>
                            <button 
                                onClick={() => handleDelete(index)}
                                className='bg-red-500 text-white rounded-full px-3 py-1'>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpenseForm;
