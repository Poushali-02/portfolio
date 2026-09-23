const projects = [
  {
    title: "Vestigium", // 1
    description: ` 
            Vestigium is an enterprise-grade AI code provenance, threat intelligence, and autonomous remediation platform. It cryptographically binds Git commits to AI model identities and prompt hashes using in-toto DSSE attestations, while a real-time Sentinel Daemon intercepts vulnerable or hallucinated dependencies via live OSV.dev feeds. When threats are detected, it executes test-gated remediation and publishes isolated Draft PRs to GitHub under a strict **Zero Auto-Merge** guarantee.
        `,
    technologies: ["FastAPI", "in-toto DSSE", "Postgres", "OSV.dev", "GitHub Actions", "OAuth 2.0/OIDC"],
    link: "",
    github: "https://github.com/rehodra/vestigium",
  },
  {
    title: "Angizo", // 1
    description: ` 
            Angizo is an audio-first AI accessibility layer that sits between blind developers and the AI tools they already use — the missing translation layer between what those tools do and what a screen-reader user can actually perceive. It's built around a 7-node LangGraph state machine (understand → context → reason → confirm → execute → verify → narrate), Sarvam AI for low-latency streaming speech, ElevenLabs for expressive risk-modulated narration, and Gemini flash for diff intelligence and architectural summaries — all delivered through a custom VS Code extension.
        `,
    technologies: ["VS Code Extension","TypeScript", "LangGraph",  "Sarvam AI", "ElevenLabs"],
    link: "",
    github: "https://github.com/rehodra/nuro_code",
  },
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
    link: "",
    github: "https://github.com/Poushali-02/Expense-Tracker-MCP-Server",
  },
  {
    title: "Ramen Art",
    description:
    `AI-Powered Story Creation: Generate complete stories with customizable parameters including genre, tone, length, and target audience. Save, view, and organize all your generated stories in one place. Each story includes title, genre, synopsis, and detailed content. User-Specific Stories: All stories are tied to your account for privacy and organization`,
  
    technologies: ["ReactJs", "FastAPI", "Gemini API", "Pydantic"],
    link: "",
    github: "https://github.com/ramenartai/Ramen_Art"
  }
];
export default projects;
