import React, { useContext } from 'react'
import { TransContext } from './trContext'
import { useForm } from 'react-hook-form'

const Expense = () => {
    let transactionList = useContext(TransContext)
    let { addTransaction } = useContext(TransContext)
    // console.log(transactionList)
    let data = useForm()
    let saveData = (transactionData) => {
        // console.log(transactionData)
        if (transactionData.amount == 0) {
            alert("Please Enter the amount")
            return false
        } else {
            addTransaction(transactionData)
        }
    }
    // console.log(transactionList.length)
    let arr = transactionList.transaction
    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].amount > 0) {
                income += +arr[i].amount
            }
        }
        return income
    }
    const getExpense = () => {
        let expense = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].amount < 0) {
                expense += +arr[i].amount
            }
        }
        return expense
    }


    return (
        <div className='main'>
            <h1>Expense Tracker</h1>
            <div>Balance <br /> {getIncome() + getExpense()} </div>
            <div className='boxes'>
                <div>Income <br /> {getIncome()}</div>
                <div>Expense <br />{getExpense()}</div>
            </div>
            <div>History</div>
            <ul className='list'>
                {transactionList.transaction.map((obj, index) => {
                    return (<li onClick={()=>{
                        
                    }} key={index}>
                        <span>{obj.description}</span>
                        <span>{obj.amount}</span>
                    </li>
                    )
                })
                }
            </ul>
            <hr />
            <div>New Transaction</div>
            <hr />
            <form className='values' onSubmit={data.handleSubmit(saveData)} >
                <label>Description</label><br />
                <input type="text" {...data.register("description")} /><br />
                <label>Amount</label><br />
                <input type="num" {...data.register("amount")} /><br /><br />
                <input type="submit" value="Perform Transaction" />
            </form>
        </div>
    )
}

export default Expense