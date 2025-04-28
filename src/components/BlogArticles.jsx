import { useEffect, useState } from "react";
import axios from "axios";

const BlogArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch articles from the backend
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("https://building-management-server-seven.vercel.app/articles"); // Adjust the URL based on your backend
                setArticles(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load articles");
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
                                <h3 className="text-xl font-semibold text-gray-700 line-clamp-1">{article.title}</h3>
                                <p className="text-gray-500 mt-2 line-clamp-2">{article.excerpt}</p>
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