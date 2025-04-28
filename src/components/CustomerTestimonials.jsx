import { useEffect, useState } from "react";
import axios from "axios";

const CustomerTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('https://building-management-server-seven.vercel.app/testimonials');
                setTestimonials(response.data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return (
            <section className="py-[50px] bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-lg">Loading testimonials...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="py-[50px] bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Tenants Say</h2>
                <p className="text-gray-600 mb-8">
                    Hear from our satisfied tenants about their experience living in our apartments.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            <h3 className="mt-4 font-semibold text-gray-700">- {testimonial.author}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;