import { useState, useEffect } from 'react';
import '../Css/blogs.css';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Using RSS2JSON API to convert Medium RSS feed to JSON
                const RSS_URL = 'https://medium.com/feed/@poushali02';
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.status === 'ok') {
                    // Process blogs to extract relevant information
                    const processedBlogs = data.items.map((item) => {
                        // Extract first image from content if available
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.description;
                        const img = tempDiv.querySelector('img');
                        const imageUrl = img ? img.src : null;

                        // Get text content without HTML tags
                        const textContent = tempDiv.textContent || tempDiv.innerText || '';
                        const excerpt = textContent.substring(0, 150) + '...';

                        return {
                            title: item.title,
                            link: item.link,
                            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }),
                            excerpt: excerpt,
                            image: imageUrl,
                            categories: item.categories || []
                        };
                    });

                    setBlogs(processedBlogs);
                } else {
                    setError('Failed to fetch blogs');
                }
            } catch (err) {
                setError('Error loading blogs: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div id="blogs" className="portfolio-bg">
                <section className="blogs-section">
                    <div className="blogs-title">
                        <h2>My Blog Posts</h2>
                    </div>
                    <div className="blogs-loading">Loading blogs...</div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div id="blogs" className="portfolio-bg">
                <section className="blogs-section">
                    <div className="blogs-title">
                        <h2>My Blog Posts</h2>
                    </div>
                    <div className="blogs-error">{error}</div>
                </section>
            </div>
        );
    }

    return (
        <div id="blogs" className="portfolio-bg">
            <section className="blogs-section">
                <div className="blogs-title">
                    <h2>My Blog Posts</h2>
                </div>
                <p className="blogs-subtitle">Thoughts and insights on AI, development, and technology</p>

                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
                        <article key={index} className="blog-card">
                            {blog.image && (
                                <div className="blog-image-wrapper">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="blog-image"
                                    />
                                </div>
                            )}

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{blog.pubDate}</span>
                                    {blog.categories.length > 0 && (
                                        <span className="blog-category">{blog.categories[0]}</span>
                                    )}
                                </div>

                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>

                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-read-more"
                                >
                                    Read More
                                    <svg className="read-more-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blogs-cta">
                    <a
                        href="https://medium.com/@poushali02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blogs-view-all"
                    >
                        View All Posts on Medium
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Blogs;
