import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-2">
            <span className="text-violet-500">Thread</span>
            <span className="text-cyan-500">Wizard</span>
          </div>
          <p className="text-muted">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="bg-dark-card border border-light-border rounded-xl p-8 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              placeholder="••••••••"
            />
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-muted">Remember me</span>
            </label>
            <a href="#" className="text-sm text-violet-500 hover:text-violet-400 transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-lg transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-light-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dark-card text-muted">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-4">
            <button className="border border-light-border hover:border-cyan-500 rounded-lg py-3 transition text-lg">
              🐦
            </button>
            <button className="border border-light-border hover:border-cyan-500 rounded-lg py-3 transition text-lg">
              📘
            </button>
            <button className="border border-light-border hover:border-cyan-500 rounded-lg py-3 transition text-lg">
              🎬
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-muted">
            Don't have an account?{' '}
            <a href="/signup" className="text-violet-500 hover:text-violet-400 transition font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Security Note */}
        <div className="text-center mt-8 text-sm text-muted">
          <p>🔒 Your data is encrypted and secure</p>
        </div>
      </div>
    </div>
  );
}
