const LEVEL_MAP = {
  Beginner: 40,
  Intermediate: 70,
  Pro: 90
};

const skills = [
    {
        category: "Tech",
        subCategory: "language",
        skillname: "Python", // 1
        requirement: ["Backend", "Machine Learning", "Deep Learning"],
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "Scikit-Learn", // 2
        requirement: ["Machine Learning"],
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "tensorflow", // 3
        requirement: ["Deep Learning"],
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "keras", // 4
        requirement: ["Deep Learning"],
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "LLM fine tuning", // 5
        requirement: ["LLM"],
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    { 
        category: "Tech",
        subCategory: "skill",
        skillname: "Flask", // 6
        requirement: ["Backend", "APIs"],
        level: "Pro",
        score: LEVEL_MAP['Pro']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "Fastapi", // 7
        requirement: ["Backend", "APIs"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "Django", // 8
        requirement: ["Backend", "Database"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
    {
        category: "Tech",
        subCategory: "skill",
        skillname: "FastMCP", // 9
        requirement: ["MCP Server", "AI"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
    {
        category: "Tech",
        subCategory: "language",
        skillname: "JavScript", // 10
        requirement: ["Frontend"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
    {
        category: "Tech",
        subCategory: "language",
        requirement: ["DSA"],
        skillname: "C++", // 11
        level: "Intermediate",
        score: LEVEL_MAP['Intermediate']
    },
    {
        category: "Tech",
        subCategory: "language",
        skillname: "Sql", // 13
        requirement: ["Database"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
    {
        category: "Tech",
        subCategory: "language",
        skillname: "Postgresql", // 13
        requirement: ["Database"],
        level: "Beginner",
        score: LEVEL_MAP['Beginner']
    },
]
export default skills;