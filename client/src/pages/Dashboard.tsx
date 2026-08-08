import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  mockStudentProfile,
  mockChallengeProgress,
  mockLeaderboard,
  mockAchievements,
  mockUpcomingDays,
} from "@/lib/mockData";
import { ArrowRight, Flame, Target, Award, LogOut } from "lucide-react";

export default function Dashboard() {
  const completionPercentage = Math.round(
    (mockChallengeProgress.completedDays.length /
      mockChallengeProgress.totalDays) *
      100
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">ABTalks</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {mockStudentProfile.name}!
          </h2>
          <p className="text-gray-600">
            Track: <span className="font-semibold">{mockStudentProfile.track}</span>
          </p>
        </div>

        {/* Streak Card */}
        <div className="mb-8 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-700 mb-2">
                Current Streak
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-orange-600">
                  {mockStudentProfile.currentStreak}
                </span>
                <span className="text-xl text-orange-600">days</span>
              </div>
              <p className="text-sm text-orange-600 mt-2">
                Personal best: {mockStudentProfile.longestStreak} days 🔥
              </p>
            </div>
            <div className="text-6xl">🔥</div>
          </div>
        </div>

        {/* Today's Task */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-500" />
            Today's Task
          </h3>
          <Link href="/day/12">
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="inline-block mb-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                    Day 12 of 60
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Build a Todo App with React Hooks
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Create a fully functional todo application using React Hooks.
                    Store todos in localStorage for persistence.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 ml-4" />
              </div>
            </Card>
          </Link>
        </div>

        {/* Progress Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Overall Progress */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Challenge Progress
            </h3>
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {mockChallengeProgress.completedDays.length} of{" "}
                    {mockChallengeProgress.totalDays} days completed
                  </span>
                  <span className="text-sm font-bold text-orange-600">
                    {completionPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Completed</p>
                  <p className="text-2xl font-bold text-green-500">
                    {mockChallengeProgress.completedDays.length}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Remaining</p>
                  <p className="text-2xl font-bold text-blue-500">
                    {mockChallengeProgress.totalDays -
                      mockChallengeProgress.completedDays.length}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              Achievements
            </h3>
            <Card className="p-6">
              <div className="space-y-3">
                {mockAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.unlockedAt
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50 border border-gray-200 opacity-50"
                    }`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground">
                        {achievement.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Leaderboard</h3>
          <Card className="overflow-hidden">
            <div className="divide-y divide-border">
              {mockLeaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`p-4 flex items-center justify-between ${
                    entry.rank === 4 ? "bg-orange-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-orange-600 text-sm">
                        {entry.rank}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm">
                        {entry.name}
                        {entry.rank === 4 && (
                          <span className="ml-2 text-xs bg-orange-200 text-orange-700 px-2 py-1 rounded">
                            You
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-600">{entry.track}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="font-bold text-orange-600 flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {entry.streak}
                      </p>
                      <p className="text-xs text-gray-600">{entry.daysCompleted} days</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Upcoming Days */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            Upcoming Challenges
          </h3>
          <div className="grid gap-4">
            {mockUpcomingDays.map((day) => (
              <Card key={day.dayNumber} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600 mb-1">
                      Day {day.dayNumber}
                    </p>
                    <p className="font-semibold text-foreground">
                      {day.title}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      day.difficulty === "Advanced"
                        ? "bg-red-100 text-red-700"
                        : day.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {day.difficulty}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
