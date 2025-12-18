const projects = [
    {
        title: "Paisa Flow MCP Server", // 1
        description: ` 
            A comprehensive personal finance management 
            system built with FastMCP (Model Context Protocol) for 
            Claude Desktop integration. 
            This server provides secure, 
            authenticated transaction tracking with advanced analytics 
            and reporting capabilities.
        `,
        technologies: ["MCP Server", "AI", "FastMCP", "Postgres"],
        link: "https://paisa-flow.vercel.app/",
        github: "https://github.com/Poushali-02/Expense-Tracker-MCP-Server"
    },
    {
        title: "Fake News Detector", // 2
        description: `
            A web application that analyzes news 
            articles to determine if they are real or fake. 
            Users can input either a URL to a news article or 
            paste the article text directly. The application uses 
            machine learning to analyze the content and provide a 
            prediction on whether the news is real or fake.
        `,
        technologies: ["Flask", "XGBoost", "Scikit-Learn"],
        link: "",
        github: "https://github.com/Poushali-02/Fake-News-Detection"
    },
    {
        title: "AI-USAGE CLUSTERING", // 3 
        description: `
            This project implements clustering algorithms to identify 
            and analyze patterns in AI tool usage data. By grouping 
            similar usage behaviors, the system helps understand how 
            different users interact with AI systems, enabling better 
            insights for optimization and personalization.
        `,
        technologies: ["pandas", "K-Means Clustering", "numpy"],
        link: "https://ai-usage-clustering.onrender.com/",
        github: "https://github.com/Poushali-02/AI-USAGE-CLUSTERING"
    },
    {
        title: "Crop recommendation", // 4
        description: `
            This project implements an intelligent crop prediction system using
            machine learning algorithms to recommend the most suitable crops for 
            cultivation based on various soil and climatic parameters. By analyzing 
            factors such as NPK values (Nitrogen, Phosphorus, Potassium), pH levels, 
            temperature, humidity, and rainfall, the system provides personalized crop 
            recommendations to maximize agricultural productivity and profitability.
        `,
        technologies: ["pandas", "random-forest", "numpy"],
        link: "https://whattogrow.onrender.com/",
        github: "https://github.com/Poushali-02/crop-prediction-ml/"
    },
    {
        title: "Screen time analyzer", // 5
        description: `
            Screen Time Analysis is a powerful web application that helps users understand 
            their digital habits by analyzing app usage, screen time patterns, and notification 
            behaviors. By providing detailed insights through interactive visualizations, 
            the application enables users to make informed decisions about their device 
            usage and promote healthier digital habits
        `,
        technologies: ["pandas", "random-forest", "numpy"],
        link: "https://whattogrow.onrender.com/",
        github: "https://github.com/Poushali-02/crop-prediction-ml/"
    }
]
export default projects;