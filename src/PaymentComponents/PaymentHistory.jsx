import { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get('/payments/{memberId}')
            .then(res => setPayments(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment History</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Month</th>
                        <th className="border p-2">Amount</th>
                        <th className="border p-2">Coupon</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index} className="text-center">
                            <td className="border p-2">{payment.month}</td>
                            <td className="border p-2">${payment.amount}</td>
                            <td className="border p-2">{payment.couponApplied || 'None'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;