import { Code, Activity, TrendingUp, Users, Award } from "lucide-react"

export function getMockUserData(username: string) {
  const score = Math.floor(Math.random() * 40) + 60 // 60-100

  const roasts = [
    "You call yourself full-stack but your GitHub says 'README.md developer'. 73% commits on Saturday nights - do you have friends? At least you're consistent with TypeScript... consistently avoiding tests.",
    "Your commit history looks like a heart rate monitor during a panic attack. 'fix bug' appears 47 times - maybe try fixing it right the first time? But hey, at least you're keeping Stack Overflow in business.",
    "I see you're a fan of console.log debugging. Your code has more logs than a lumber yard. Your most used command is probably 'git commit -m \"asdfasdf\"'. But credit where it's due - you've mastered the art of copy-paste.",
    "Your GitHub profile is like a graveyard of abandoned projects. Started 23 repos, finished 2. Your commit messages read like a cry for help. But at least you're consistent... consistently inconsistent.",
  ]

  return {
    username,
    avatar: `/placeholder.svg?height=200&width=200&query=${username}`,
    repos: Math.floor(Math.random() * 50) + 10,
    followers: Math.floor(Math.random() * 500) + 50,
    overallScore: score,
    roast: roasts[Math.floor(Math.random() * roasts.length)],
    flameIntensity: Math.floor(score / 20),
    scores: [
      {
        title: "Commit Quality",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <Code className="h-5 w-5" />,
        description: "Code quality and commit practices",
        submetrics: [
          { label: "Commit message quality", value: 85 },
          { label: "Code review participation", value: 72 },
          { label: "Test coverage", value: 68 },
        ],
      },
      {
        title: "Code Consistency",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <Activity className="h-5 w-5" />,
        description: "Coding style and patterns",
        submetrics: [
          { label: "Style consistency", value: 90 },
          { label: "Documentation", value: 65 },
        ],
      },
      {
        title: "Activity Level",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Contribution frequency",
        submetrics: [
          { label: "Commits per week", value: 78 },
          { label: "Active days", value: 82 },
        ],
      },
      {
        title: "Impact Score",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <Award className="h-5 w-5" />,
        description: "Project impact and reach",
        submetrics: [
          { label: "Stars received", value: 88 },
          { label: "Forks", value: 75 },
        ],
      },
      {
        title: "Learning Growth",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Skill development",
        submetrics: [
          { label: "New languages", value: 70 },
          { label: "Framework diversity", value: 80 },
        ],
      },
      {
        title: "Community",
        score: Math.floor(Math.random() * 30) + 70,
        icon: <Users className="h-5 w-5" />,
        description: "Open source contributions",
        submetrics: [
          { label: "Pull requests", value: 85 },
          { label: "Issues resolved", value: 72 },
        ],
      },
    ],
    achievements: [
      {
        name: "Console.log Warrior",
        description: "500+ console.log statements found",
        icon: "🔥",
        rarity: "common" as const,
        unlocked: true,
      },
      {
        name: "Speed Demon",
        description: "50+ commits in one day",
        icon: "⚡",
        rarity: "rare" as const,
        unlocked: true,
      },
      {
        name: "Night Owl",
        description: "80% commits after midnight",
        icon: "🌙",
        rarity: "epic" as const,
        unlocked: true,
      },
      {
        name: "README Master",
        description: "READMEs longer than code",
        icon: "📝",
        rarity: "rare" as const,
        unlocked: false,
      },
      {
        name: "Bug Factory",
        description: '"fix bug" mentioned 100+ times',
        icon: "🐛",
        rarity: "common" as const,
        unlocked: true,
      },
      {
        name: "Commit Message Poet",
        description: "Creative commit messages",
        icon: "💀",
        rarity: "legendary" as const,
        unlocked: false,
      },
      {
        name: "Polyglot",
        description: "10+ programming languages",
        icon: "🌈",
        rarity: "epic" as const,
        unlocked: true,
      },
      {
        name: "Open Source Hero",
        description: "1000+ stars earned",
        icon: "🏆",
        rarity: "legendary" as const,
        unlocked: false,
      },
      {
        name: "Ghost Contributor",
        description: "3+ months inactive",
        icon: "👻",
        rarity: "common" as const,
        unlocked: false,
      },
    ],
    patterns: {
      heatmap: Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 10))),
      languages: [
        { name: "TypeScript", value: 45, color: "#3178c6" },
        { name: "JavaScript", value: 25, color: "#f7df1e" },
        { name: "Python", value: 15, color: "#3776ab" },
        { name: "CSS", value: 10, color: "#1572b6" },
        { name: "Other", value: 5, color: "#888888" },
      ],
      timeline: [
        { month: "Jan", commits: 45 },
        { month: "Feb", commits: 52 },
        { month: "Mar", commits: 38 },
        { month: "Apr", commits: 65 },
        { month: "May", commits: 58 },
        { month: "Jun", commits: 72 },
        { month: "Jul", commits: 48 },
        { month: "Aug", commits: 55 },
        { month: "Sep", commits: 68 },
        { month: "Oct", commits: 75 },
        { month: "Nov", commits: 62 },
        { month: "Dec", commits: 50 },
      ],
      timeOfDay: [
        { hour: "0-6", commits: 45, label: "Night Owl" },
        { hour: "6-12", commits: 25, label: "Morning Person" },
        { hour: "12-18", commits: 55, label: "Afternoon Hustler" },
        { hour: "18-24", commits: 75, label: "Evening Coder" },
      ],
    },
    topRepos: [
      {
        name: "awesome-project",
        description: "A really awesome project that does amazing things",
        stars: 1234,
        forks: 234,
        language: "TypeScript",
        comment: "More stars than commits. Suspicious.",
      },
      {
        name: "todo-app-v47",
        description: "Yet another todo app because the world needed one more",
        stars: 12,
        forks: 3,
        language: "JavaScript",
        comment: "The 47th iteration. Maybe this time it will be different.",
      },
      {
        name: "my-portfolio",
        description: "Personal portfolio website",
        stars: 5,
        forks: 1,
        language: "HTML",
        comment: 'Last updated 2 years ago. Still says "Coming Soon".',
      },
    ],
    bestCommits: [
      "feat: implement comprehensive user authentication with OAuth2",
      "refactor: optimize database queries for 50% performance improvement",
      "docs: add detailed API documentation with examples",
      "test: increase test coverage to 95%",
      "fix: resolve critical security vulnerability in auth flow",
    ],
    worstCommits: ["fix", "asdfasdf", "idk anymore", "PLEASE WORK", "final final FINAL version"],
    personality: {
      type: "The Perfectionist",
      traits: [
        { label: "Writes detailed commit messages", positive: true },
        { label: "Obsesses over code formatting", positive: true },
        { label: "Refactors working code", positive: false },
        { label: "Has strong opinions on semicolons", positive: false },
        { label: "Actually writes tests", positive: true },
        { label: "Spends hours on naming variables", positive: false },
        { label: "Reviews PRs thoroughly", positive: true },
      ],
      similarTo: "Linus Torvalds (but nicer)",
      advice:
        "Your attention to detail is admirable, but remember: done is better than perfect. Ship that code! The world doesn't need another perfectly formatted TODO app that never launches. Your future self will thank you for shipping imperfect code over perfecting unshipped code.",
    },
  }
}

export function getMockLeaderboard() {
  return Array.from({ length: 50 }, (_, i) => ({
    rank: i + 1,
    username: `developer${i + 1}`,
    avatar: `/placeholder.svg?height=40&width=40&query=dev${i}`,
    score: 100 - i * 2,
    highlight: `${Math.floor(Math.random() * 1000)} commits`,
    badge: i < 3 ? "Legend 🚀" : i < 10 ? "Tech Lead 👑" : "Senior 🥷",
  }))
}
