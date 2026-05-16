import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-light-border p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-violet-500">Thread</span>
            <span className="text-cyan-500">Wizard</span>
          </div>
          <div className="flex gap-8">
            <a href="#features" className="text-light hover:text-violet-500 transition">Features</a>
            <a href="#pricing" className="text-light hover:text-violet-500 transition">Pricing</a>
            <a href="/login" className="text-light hover:text-violet-500 transition">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Schedule once,<br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              post everywhere
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Manage all your social media from one place. Schedule posts, analyze engagement, and grow your audience across 5+ platforms.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold transition">
              Start Free
            </button>
            <button className="border border-light-border hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-dark-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Designed for Creators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-card border border-light-border rounded-xl p-8">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-violet-500 text-xl">📅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Scheduling</h3>
              <p className="text-muted">
                Schedule posts at the best times automatically. Our AI analyzes your audience to maximize engagement.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-dark-card border border-light-border rounded-xl p-8">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-cyan-500 text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Platform</h3>
              <p className="text-muted">
                Support for Instagram, TikTok, Twitter, LinkedIn, YouTube, and more. One dashboard, infinite reach.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-dark-card border border-light-border rounded-xl p-8">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-violet-500 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics Built-in</h3>
              <p className="text-muted">
                Track performance across all platforms in real-time. Know what works, repeat it, scale it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-500 mb-2">8h/week</div>
              <p className="text-muted">Time saved on posting</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">5x</div>
              <p className="text-muted">More consistent posting</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-500 mb-2">40%+</div>
              <p className="text-muted">Avg engagement boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border-y border-light-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to automate?</h2>
          <p className="text-xl text-muted mb-8">
            Join thousands of creators using ThreadWizard to save time and grow faster.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-12 py-4 rounded-lg font-bold text-lg transition">
            Start Your Free Trial
          </button>
          <p className="text-sm text-muted mt-4">No credit card required. 14 days free.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-light-border p-6 bg-dark-card/50">
        <div className="max-w-7xl mx-auto text-center text-muted text-sm">
          <p>© 2026 ThreadWizard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
