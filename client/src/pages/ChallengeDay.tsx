import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { mockChallengeDay, mockSubmission } from "@/lib/mockData";
import {
  ArrowLeft,
  CheckCircle,
  Github,
  Linkedin,
  Clock,
  BookOpen,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ChallengeDay() {
  const params = useParams();
  const dayNumber = parseInt(params.day || "12");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  const handleSubmit = () => {
    if (!githubUrl.trim() || !linkedinUrl.trim()) {
      toast.error("Please fill in both GitHub and LinkedIn URLs");
      return;
    }

    if (!githubUrl.includes("github.com") || !linkedinUrl.includes("linkedin")) {
      toast.error("Please enter valid GitHub and LinkedIn URLs");
      return;
    }

    setIsSubmitted(true);
    toast.success("Submission successful! Your streak continues 🔥");
  };

  const timeLeft = "23h 45m";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">ABTalks</h1>
          </div>
          <div className="w-12" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 max-w-3xl">
        {/* Day Header */}
        <div className="mb-8">
          <div className="inline-block mb-4 px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
            Day {dayNumber} of 60
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {mockChallengeDay.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>{timeLeft} remaining</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>Due tomorrow at 11:59 PM IST</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8 p-8 border-l-4 border-l-orange-500">
          <h2 className="text-xl font-bold text-foreground mb-4">Challenge</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {mockChallengeDay.description}
          </p>

          <h3 className="text-lg font-bold text-foreground mb-4">Requirements</h3>
          <ul className="space-y-3">
            {mockChallengeDay.requirements.map((req, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Resources */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            Helpful Resources
          </h2>
          <div className="grid gap-3">
            {mockChallengeDay.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
              >
                <span className="font-medium text-foreground group-hover:text-orange-600">
                  {resource.title}
                </span>
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-orange-600 rotate-180" />
              </a>
            ))}
          </div>
        </div>

        {/* Submission Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            {isSubmitted ? "✅ Submission Complete" : "Submit Your Work"}
          </h2>

          {isSubmitted ? (
            <Card className="p-8 bg-green-50 border-2 border-green-200">
              <div className="text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Great job!
                </h3>
                <p className="text-green-600 mb-6">
                  Your submission has been recorded. Your streak continues!
                </p>
                <div className="bg-white p-4 rounded-lg mb-6 text-left">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>GitHub:</strong> {githubUrl}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>LinkedIn:</strong> {linkedinUrl}
                  </p>
                </div>
                <Link href="/dashboard">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <Card className="p-8">
              <div className="space-y-6">
                {/* GitHub URL */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Github className="w-4 h-4 inline mr-2" />
                    GitHub Repository/Commit Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username/repo"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Share a link to your GitHub repository or specific commit
                  </p>
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Linkedin className="w-4 h-4 inline mr-2" />
                    LinkedIn Post Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.linkedin.com/feed/update/..."
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Share your LinkedIn post about today's work
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 font-semibold gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit for Day {dayNumber}
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  By submitting, you confirm that you have completed today's challenge
                  and shared your work publicly.
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Tips */}
        <Card className="p-6 bg-blue-50 border border-blue-200">
          <h3 className="font-bold text-foreground mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              • Make your GitHub commit message clear and descriptive
            </li>
            <li>
              • In your LinkedIn post, explain what you built and what you learned
            </li>
            <li>
              • Tag #100DaysOfCode or #ABTalks to increase visibility
            </li>
            <li>
              • Engage with other builders' posts to build your network
            </li>
          </ul>
        </Card>
      </main>
    </div>
  );
}

// Helper component for calendar icon
function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
