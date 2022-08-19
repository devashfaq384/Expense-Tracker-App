import { createContext, useReducer } from "react"
import TransReducer from "./TransReducer"

const firstTransaction = [
    { amount: "500", description: "Cash" },
    { amount: "40", description: "Book" },
    { amount: "-200", description: "Camera" }
]


export const TransContext = createContext(firstTransaction)


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransReducer, firstTransaction)

    function addTransaction(transObj) {
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                description: transObj.description
            }
        })
    }

    return (
        <TransContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </TransContext.Provider>
    )
}