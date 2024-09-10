import { useState, useRef, useEffect } from "react";

const Calculator = () => {
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateReturns = () => {
        const amountValue = parseFloat(amount);
        let monthlyReturnRate, yearlyReturnRate;

        if (amountValue < 2000 || amountValue > 1000000) {
            setResult("Invalid amount. Please enter an amount between Rs 2000 and Rs 1000000.");
            return;
        }

        if (amountValue >= 2000 && amountValue <= 59999) {
            monthlyReturnRate = 3.16 / 100;
            yearlyReturnRate = 38 / 100;
        } else if (amountValue >= 60000 && amountValue <= 299999) {
            monthlyReturnRate = 3.5 / 100;
            yearlyReturnRate = 42 / 100;
        } else if (amountValue >= 300000 && amountValue <= 1000000) {
            monthlyReturnRate = 3.83 / 100;
            yearlyReturnRate = 46 / 100;
        }

        const monthlyReturn = amountValue * monthlyReturnRate;
        const yearlyReturn = amountValue * yearlyReturnRate;

        setResult(
            `Investment Amount: Rs ${amountValue.toFixed(2)}\n
        Monthly Return: Rs ${monthlyReturn.toFixed(2)}\n
        Yearly Return: Rs ${yearlyReturn.toFixed(2)}`
        );
    };

    return (
        <div style={{ height: "461px", width: "657px" }} className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div style={{ width: "400px" }} className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-center">
                <h1 className="text-2xl font-bold mb-4">Investment Calculator</h1>
                <div className="calculator">
                    <label htmlFor="amount" className="block font-semibold mb-2">
                        Enter the investment amount (Rs):
                    </label>
                    <input
                        type="number"
                        id="amount"
                        className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={calculateReturns}
                    >
                        Calculate
                    </button>
                    <div
                        id="result"
                        className="mt-4 font-semibold whitespace-pre-line"
                    >
                        {result}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
