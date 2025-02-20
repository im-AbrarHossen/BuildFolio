const WhyChooseUs = () => {
    return (
        <section className="mt-[50px] py-[50px] bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
                <p className="text-gray-600 mb-8">
                    We provide top-quality apartments with modern amenities and hassle-free rental experiences.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Affordable Pricing</h3>
                        <p className="text-gray-500 mt-2">We offer competitive rental prices without hidden charges.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Prime Locations</h3>
                        <p className="text-gray-500 mt-2">Find apartments in the best areas with easy access to transportation.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">24/7 Support</h3>
                        <p className="text-gray-500 mt-2">Our customer support team is available round the clock.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;  