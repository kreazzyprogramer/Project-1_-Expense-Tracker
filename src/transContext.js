import React, { createContext, useReducer } from "react";

import TransReducer from "./transReducer";

const initialTransaction = [
   
   

]
export let TransactionContext = createContext(initialTransaction);


export let TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransReducer, initialTransaction);
    function addtransaction(transObj) {
        console.log("transoBj", transObj);
        dispatch({
            type: "Add_Transaction",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addtransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )


}










