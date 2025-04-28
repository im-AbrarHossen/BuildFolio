const CustomerTestimonials = () => {
    return (
        <section className="py-[50px] bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Tenants Say</h2>
                <p className="text-gray-600 mb-8">
                    Hear from our satisfied tenants about their experience living in our apartments.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <p className="text-gray-600 italic">
                            "The apartment is amazing! Great location and fantastic amenities."
                        </p>
                        <h3 className="mt-4 font-semibold text-gray-700">- Sarah J.</h3>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <p className="text-gray-600 italic">
                            "I feel safe and secure here. The management is very responsive!"
                        </p>
                        <h3 className="mt-4 font-semibold text-gray-700">- Mark R.</h3>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <p className="text-gray-600 italic">
                            "The best rental experience I've had. Highly recommended!"
                        </p>
                        <h3 className="mt-4 font-semibold text-gray-700">- Lisa M.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;  