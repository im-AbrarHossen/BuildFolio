import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newCoupon, setNewCoupon] = useState({
        code: '',
        discount: '',
        description: '',
    });

    useEffect(() => {
        axios.get('https://building-management-server-seven.vercel.app/coupons')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setCoupons(response.data);
                } else {
                    console.error('Invalid data format received from backend');
                    setCoupons([]);
                }
            })
            .catch(error => {
                console.error('Error fetching coupons:', error);
                setCoupons([]);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCoupon((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://building-management-server-seven.vercel.app/coupons', newCoupon)
            .then(response => {
                setCoupons([...coupons, response.data]);
                setModalOpen(false);
                setNewCoupon({ code: '', discount: '', description: '' });
            })
            .catch(error => console.error('Error adding coupon:', error));
    };

    const toggleAvailability = (couponId) => {
        const updatedCoupons = coupons.map(coupon =>
            coupon._id === couponId
                ? { ...coupon, available: !coupon.available }
                : coupon
        );
        setCoupons(updatedCoupons);

        axios.put(`https://building-management-server-seven.vercel.app/coupons/${couponId}`, {
            available: updatedCoupons.find(coupon => coupon._id === couponId).available
        })
            .catch(error => console.error('Error updating coupon availability:', error));
    };

    return (
        <div className="w-11/12 mx-auto mt-[120px] mb-10">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Add Coupon
            </button>

            {modalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Add Coupon</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block font-medium">Coupon Code</label>
                                <input
                                    type="text"
                                    name="code"
                                    value={newCoupon.code}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">Discount Percentage</label>
                                <input
                                    type="number"
                                    name="discount"
                                    value={newCoupon.discount}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium">Coupon Description</label>
                                <textarea
                                    name="description"
                                    value={newCoupon.description}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 w-full rounded-lg"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {Array.isArray(coupons) && coupons.length > 0 ? (
                    coupons.map((coupon) => (
                        <div key={coupon._id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800">{coupon.code}</h3>
                            <p className="text-gray-600">{coupon.description}</p>
                            <p className="mt-2 text-blue-600 font-bold">{coupon.discount}% Off</p>
                            <div className="mt-4">
                                <button
                                    onClick={() => toggleAvailability(coupon._id)}
                                    className={`px-4 py-2 rounded-lg ${coupon.available ? 'bg-green-500' : 'bg-red-500'} text-white`}
                                >
                                    {coupon.available ? 'Available' : 'Unavailable'}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No Coupons Available</p>
                )}
            </div>
        </div>
    );
};

export default ManageCoupons;