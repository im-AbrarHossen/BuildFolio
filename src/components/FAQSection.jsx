import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is the minimum lease term?", answer: "Our minimum lease term is 6 months, but flexible options are available." },
        { question: "Are utilities included in the rent?", answer: "Some utilities are included. Contact us for detailed information on your specific apartment." },
        { question: "Do you allow pets?", answer: "Yes, we are pet-friendly! A small pet deposit may apply." },
        { question: "Is parking available?", answer: "Yes, we provide dedicated parking spaces for tenants." },
        { question: "How do I schedule a tour?", answer: "You can schedule a tour by contacting us through our website or calling our office." },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-[50px] bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left font-semibold text-gray-700"
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;