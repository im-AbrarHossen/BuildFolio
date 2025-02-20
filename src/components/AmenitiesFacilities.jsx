const AmenitiesFacilities = () => {
    return (
        <section className="py-[50px] bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-6">Amenities & Facilities</h2>
                <p className="text-gray-600 mb-8">
                    Experience top-class living with our modern amenities and premium facilities.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Swimming Pool</h3>
                        <p className="text-gray-500 mt-2">Enjoy a refreshing dip in our luxurious pool.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">24/7 Security</h3>
                        <p className="text-gray-500 mt-2">Ensuring your safety with round-the-clock surveillance.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Gym & Fitness</h3>
                        <p className="text-gray-500 mt-2">Stay fit with our fully-equipped gym and trainers.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Parking Space</h3>
                        <p className="text-gray-500 mt-2">Spacious parking available for residents and guests.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">High-Speed Internet</h3>
                        <p className="text-gray-500 mt-2">Enjoy seamless connectivity with ultra-fast internet.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">Children’s Play Area</h3>
                        <p className="text-gray-500 mt-2">Safe and fun play areas for kids.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmenitiesFacilities;  