const BlogArticles = () => {
    const articles = [
        {
            title: "11 Tips for First-Time Renters",
            excerpt: "Renting your first apartment? Here are some essential tips to help you navigate the process smoothly.",
            image: "https://www.apartments.com/blog/sites/default/files/styles/x_large/public/image/2025-01/11_Tips_for_First-Time_Renters.jpeg.webp?itok=VZEa6Hmm",
            link: "https://www.apartments.com/blog/first-time-apartment-renter-tips",
        },
        {
            title: "How to Make Your Apartment Feel Like Home",
            excerpt: "Simple decoration ideas and space-saving tips to personalize your apartment and maximize comfort.",
            image: "https://www.bhg.com/thmb/bmQRN8RxJOo3orYDSU0-zRoUPWA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-gallery-wall-54c992e8-4d20770f517442c19fb00beffd4b12f4.jpg",
            link: "https://www.bhg.com/decorating/small-spaces/strategies/ideas-to-steal-for-your-apartment/",
        },
        {
            title: "Essential Moving Checklist for a Stress-Free Move",
            excerpt: "A step-by-step guide to make your moving day hassle-free and organized.",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbjOIJB69NKhLbodpXZ3gXdbik1iM_p3PHKhrOf6vO3TSrK8892n3lYW8hfCSYCoDR_UyngZOunK0Zo3a9uGVqaABFjna6HRQCL-SmcDyV3tSEbOHUGHmMhabZeHZq3GlRrQCr4EnhF-4/s640/IMG_8758.jpg",
            link: "https://www.aclassyfashionista.com/2018/07/moving-checklist-tips-for-stress-free-move.html",
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog & Articles</h2>
                <p className="text-gray-600 mb-8">
                    Stay informed with expert tips on renting, moving, and maintaining your apartment.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-700">{article.title}</h3>
                                <p className="text-gray-500 mt-2">{article.excerpt}</p>
                                <a href={article.link} target="_blank" className="text-[#026C84] font-medium mt-3 inline-block">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogArticles;  