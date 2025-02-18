import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MakePayment = () => {
  const [member, setMember] = useState(null);
  const [coupons, setCoupon] = useState([]);
  const [month, setMonth] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountedRent, setDiscountedRent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/members/{memberId}') // Fetch member details
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    axios.get(`https://building-management-server-seven.vercel.app/coupons`) // Fetch coupon details
      .then(res => setCoupon(res.data))
      .catch(err => console.error(err));
  }, []);

  const applyCoupon = async () => {
    try {
      const res = await axios.get(`https://building-management-server-seven.vercel.app/coupons/${couponCode}`);
      if (res.data) {
        const discount = res.data.discount;
        setDiscountedRent(member.rent - (member.rent * discount / 100));
      } else {
        alert('Invalid coupon!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    const paymentData = {
      memberId: member._id,
      month,
      amount: discountedRent || member.rent,
      couponApplied: couponCode || null,
    };

    try {
      await axios.post('/payments', paymentData);
      navigate('/payment-history'); // Redirect to payment history
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  if (!member) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg mt-[100px]">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      <div className="mb-2"><strong>Email:</strong> {member.email}</div>
      <div className="mb-2"><strong>Floor:</strong> {member.floor}</div>
      <div className="mb-2"><strong>Block:</strong> {member.block}</div>
      <div className="mb-2"><strong>Room No:</strong> {member.roomNo}</div>
      <div className="mb-2"><strong>Rent:</strong> ${discountedRent || member.rent}</div>
      <select className="border p-2 w-full" value={month} onChange={e => setMonth(e.target.value)}>
        <option value="">Select Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        {/* Add all months */}
      </select>
      <div className="flex mt-3">
        <select
          className="border p-2 flex-grow"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        >
          <option value="">Select a coupon code</option>
          {coupons.map((coupon) => (
            <option key={coupon._id} value={coupon.code}>
              {coupon.code} - {coupon.description}
            </option>
          ))}
        </select>
        <button className="bg-blue-500 text-white p-2 ml-2" onClick={applyCoupon}>Apply</button>
      </div>
      <button className="mt-4 bg-green-500 text-white p-2 w-full" onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default MakePayment;