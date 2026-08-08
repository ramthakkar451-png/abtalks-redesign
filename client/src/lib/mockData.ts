// Mock data for ABTalks platform
export const mockStudentProfile = {
  id: "student_001",
  name: "Rahul Kumar",
  email: "rahul.kumar@example.com",
  track: "Full Stack Web Development",
  joinedDate: "2026-07-10",
  currentStreak: 12,
  longestStreak: 15,
  totalDaysCompleted: 45,
  totalDaysInChallenge: 60,
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
};

export const mockChallengeDay = {
  dayNumber: 12,
  title: "Build a Todo App with React Hooks",
  description:
    "Create a fully functional todo application using React Hooks (useState, useEffect). The app should allow users to add, delete, and mark todos as complete. Store todos in localStorage for persistence.",
  requirements: [
    "Use React Hooks (useState, useEffect) for state management",
    "Implement add, delete, and toggle complete functionality",
    "Persist data using localStorage",
    "Add CSS styling (Tailwind or custom CSS)",
    "Deploy to a live URL (Vercel, Netlify, or similar)",
  ],
  resources: [
    {
      title: "React Hooks Documentation",
      url: "https://react.dev/reference/react/hooks",
    },
    {
      title: "localStorage API Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    },
  ],
  submissionDeadline: "2026-08-09T23:59:59Z",
  isCompleted: false,
  submission: null,
};

export const mockChallengeProgress = {
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  missedDays: [],
  currentDay: 12,
  totalDays: 60,
  completionPercentage: 18.33,
};

export const mockSubmission = {
  dayNumber: 12,
  githubUrl: "https://github.com/rahul-kumar/todo-app",
  linkedinPostUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7123456789/",
  submittedAt: "2026-08-09T14:30:00Z",
  status: "submitted",
};

export const mockLeaderboard = [
  {
    rank: 1,
    name: "Priya Singh",
    streak: 25,
    daysCompleted: 45,
    track: "Full Stack Web Development",
  },
  {
    rank: 2,
    name: "Arjun Patel",
    streak: 20,
    daysCompleted: 42,
    track: "Mobile App Development",
  },
  {
    rank: 3,
    name: "Neha Sharma",
    streak: 18,
    daysCompleted: 40,
    track: "Full Stack Web Development",
  },
  {
    rank: 4,
    name: "Rahul Kumar",
    streak: 12,
    daysCompleted: 45,
    track: "Full Stack Web Development",
  },
  {
    rank: 5,
    name: "Vikram Desai",
    streak: 10,
    daysCompleted: 35,
    track: "Data Science",
  },
];

export const mockUpcomingDays = [
  {
    dayNumber: 13,
    title: "Add State Management with Redux",
    difficulty: "Intermediate",
  },
  {
    dayNumber: 14,
    title: "API Integration with Fetch & Axios",
    difficulty: "Intermediate",
  },
  {
    dayNumber: 15,
    title: "Authentication Implementation",
    difficulty: "Advanced",
  },
];

export const mockAchievements = [
  {
    id: "streak_7",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: "🔥",
    unlockedAt: "2026-08-04",
  },
  {
    id: "streak_14",
    name: "Two Week Champion",
    description: "Maintain a 14-day streak",
    icon: "⭐",
    unlockedAt: null,
  },
  {
    id: "first_submit",
    name: "First Step",
    description: "Submit your first day",
    icon: "🚀",
    unlockedAt: "2026-07-11",
  },
];
