export interface StoredUser {
  username: string
  avatar: string
  score: number
  repos: number
  followers: number
  timestamp: number
  highlight: string
  badge: string
}

const STORAGE_KEY = "gitfame_users"

export function saveUser(userData: {
  username: string
  avatar: string
  score: number
  repos: number
  followers: number
}) {
  if (typeof window === "undefined") return

  const users = getStoredUsers()

  // Check if user already exists
  const existingIndex = users.findIndex((u) => u.username === userData.username)

  const badge =
    userData.score >= 90
      ? "Legend 🚀"
      : userData.score >= 80
        ? "Tech Lead 👑"
        : userData.score >= 70
          ? "Senior 🥷"
          : userData.score >= 60
            ? "Mid-Level 💻"
            : "Junior 🌱"

  const newUser: StoredUser = {
    ...userData,
    timestamp: Date.now(),
    highlight: `${userData.repos} repos`,
    badge,
  }

  if (existingIndex >= 0) {
    // Update existing user
    users[existingIndex] = newUser
  } else {
    // Add new user
    users.push(newUser)
  }

  // Sort by score (highest first)
  users.sort((a, b) => b.score - a.score)

  // Keep only top 100 users
  const topUsers = users.slice(0, 100)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(topUsers))
}

export function getStoredUsers(): StoredUser[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function clearStoredUsers() {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
