import React, { useState } from 'react';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    platforms: [],
  });

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: '📷' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵' },
    { id: 'twitter', label: 'Twitter', icon: '🐦' },
    { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
    { id: 'youtube', label: 'YouTube', icon: '🎬' },
    { id: 'facebook', label: 'Facebook', icon: '📘' },
  ];

  const handlePlatformToggle = (platformId) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(p => p !== platformId)
        : [...prev.platforms, platformId]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-2">
            <span className="text-violet-500">Thread</span>
            <span className="text-cyan-500">Wizard</span>
          </div>
          <p className="text-muted">Create your account in 2 minutes</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-12">
          <div className={`flex-1 h-1 rounded-full transition ${step >= 1 ? 'bg-violet-500' : 'bg-white/10'}`}></div>
          <div className={`flex-1 h-1 rounded-full transition ${step >= 2 ? 'bg-violet-500' : 'bg-white/10'}`}></div>
          <div className={`flex-1 h-1 rounded-full transition ${step >= 3 ? 'bg-violet-500' : 'bg-white/10'}`}></div>
        </div>

        {/* Step 1: Account Details */}
        {step === 1 && (
          <div className="bg-dark-card border border-light-border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold">Your Details</h2>

            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="••••••••"
              />
              <p className="text-xs text-muted mt-2">At least 8 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-light-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="••••••••"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Continue
            </button>

            <p className="text-center text-sm text-muted">
              Already have an account?{' '}
              <a href="/login" className="text-violet-500 hover:text-violet-400 transition font-semibold">
                Sign in
              </a>
            </p>
          </div>
        )}

        {/* Step 2: Platform Selection */}
        {step === 2 && (
          <div className="bg-dark-card border border-light-border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold">Connect Your Platforms</h2>
            <p className="text-muted">Select the platforms you want to manage</p>

            <div className="grid grid-cols-2 gap-4">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={`p-4 rounded-lg border-2 transition text-center ${
                    formData.platforms.includes(platform.id)
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-light-border hover:border-violet-500'
                  }`}
                >
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <div className="text-sm font-medium">{platform.label}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-light-border hover:border-violet-500 text-white font-semibold py-3 rounded-lg transition"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={formData.platforms.length === 0}
                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="bg-dark-card border border-light-border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">You're all set!</h2>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✨</span>
              </div>
              <p className="text-muted">Welcome to ThreadWizard, {formData.name}!</p>
              <p className="text-sm text-muted">
                We're connecting your {formData.platforms.length} platform{formData.platforms.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="bg-white/5 border border-light-border rounded-lg p-4 text-sm text-muted">
              <p>Next, you'll authorize ThreadWizard to access your platforms.</p>
            </div>

            <button className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition">
              Continue to Authorization
            </button>

            <p className="text-xs text-muted text-center">
              🔒 We never post without your approval
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
