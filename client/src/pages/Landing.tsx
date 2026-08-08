import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Users, Trophy } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">ABTalks</h1>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="text-sm">
              Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container py-12 md:py-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full">
            <span className="text-sm font-medium text-orange-700">
              60-Day Coding Challenge
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Build in Public.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Get Noticed.
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join thousands of Indian college students building a visible career
            advantage. Code every day, maintain your streak, and let recruiters
            see your consistency and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/day/12">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white h-12 px-6 text-base font-semibold">
                Start Challenge
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 px-6 text-base font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-orange-500">5000+</div>
              <p className="text-sm text-gray-600">Active Students</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">60</div>
              <p className="text-sm text-gray-600">Days Challenge</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">3</div>
              <p className="text-sm text-gray-600">Tracks Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why ABTalks?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Daily Momentum
              </h4>
              <p className="text-gray-600">
                Build consistency with daily coding challenges. Your streak is
                your superpower.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Build in Public
              </h4>
              <p className="text-gray-600">
                Share your progress on GitHub and LinkedIn. Let recruiters see
                your growth.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Get Recognized
              </h4>
              <p className="text-gray-600">
                Compete on leaderboards, unlock achievements, and stand out to
                top companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 md:py-20">
        <div className="container text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Level Up?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join the next cohort of builders. 60 days of code. Infinite
            possibilities.
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 h-12 px-8 text-base font-semibold">
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center text-sm opacity-75">
          <p>© 2026 ABTalks. Building the next generation of developers.</p>
        </div>
      </footer>
    </div>
  );
}
