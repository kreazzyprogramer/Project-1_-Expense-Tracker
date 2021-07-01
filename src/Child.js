import React, { useState, useContext } from "react";
import { TransactionContext } from "./transContext";

function Child() {
    let { transaction, addtransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        addtransaction({
            amount: Number(newAmount),
            desc: newDesc,
        });

        setDesc("");
        setAmount("");
    };
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0) income = income + transaction[i].amount;
        }
        return income;
    };
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) expense += transaction[i].amount;
        }
        return expense;
    };

    return (
        <div>

            <div className="Container">
                <h1 className="text-center">Expense Tracker</h1>

                <div className="balance">
                    <h3>Remaning Balance</h3>
                    <h3 style={{ color: "white", fontSize: "20px" }}>
                        {getIncome() + getExpense()}
                    </h3>
                </div>

                <div className="Expnce-container">
                    <h3 style={{ color: "green" }}>
                        Income <br /> {getIncome()}{" "}
                    </h3>
                    <h3 style={{ color: "RED" }}>
                        Expense <br /> {getExpense()}
                    </h3>
                </div>
                <h3>Transaction History</h3>
                <hr />
                <ul className="Transaction-list">
                    {transaction.map((transObj, ind) => {
                        return (
                            <li>
                                <span> {transObj.desc} </span>
                                <span style={{ marginLeft: "160px" }}> {transObj.amount} </span>
                            </li>
                        );
                    })}
                </ul>

                <h3>Add New Transaction</h3>
                <hr />

                <form className="transaction-form" onSubmit={handleSubmit}>
                    <label>
                        <span className="input-heading"> Enter Description </span>
                        <br />
                        <input
                            type="text"
                            value={newDesc}
                            placeholder="Enter Description"
                            required
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </label>
                    <br />

                    <label>
                        <span className="input-heading"> Enter Amount </span>
                        <br />
                        <input
                            type="number"
                            value={newAmount}
                            placeholder="Enter Amount"
                            required
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <h5 style={{ textAlign: "center", letterSpacing: "2px" }}> Use + For Income | - For Expense</h5>
                    </label>
                    <br />
                    <button className="btn" type="submit">

                        ADD NEW TRANSACTION
                    </button>
                </form>
            </div>
            <h3 className="mainHeading">MADE WITH ❤️</h3>

        </div >
    );
}

export default Child;
