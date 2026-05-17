'use client';

import React from 'react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Get started with ThreadWizard',
      features: [
        '1 connected account',
        '2 posts/month (quota reset)',
        'Basic scheduling (3 days ahead)',
        'Community support (Discord)',
        'View-only analytics',
      ],
      limitations: [
        '❌ No team collaboration',
        '❌ No advanced analytics',
        '❌ No custom templates',
        '❌ No bulk scheduling',
      ],
      cta: 'Start Now',
      highlight: false,
      badge: null,
    },
    {
      name: 'Creator',
      price: '$79',
      month: '/month',
      description: 'For serious content creators',
      features: [
        '5 connected accounts',
        'Unlimited scheduled posts',
        'Instant posting (no delay)',
        'Advanced analytics & trends',
        'Custom templates (50+)',
        'Team collaboration (2 users)',
        'Priority support',
        'Content calendar view',
        '7-day post history',
      ],
      cta: 'Start Free Trial',
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Starter',
      price: '$29',
      month: '/month',
      description: 'Upgrade from free',
      features: [
        '2 connected accounts',
        '100 posts/month',
        'Advanced scheduling',
        'Basic analytics',
        'Email support',
        '3-day post history',
        'Bulk upload (10 posts)',
      ],
      cta: 'Start Free Trial',
      highlight: false,
      badge: null,
    },
    {
      name: 'Agency',
      price: '$199',
      month: '/month',
      description: 'For teams & agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts & scheduling',
        'White-label dashboard',
        '24/7 dedicated support',
        'Team collaboration (unlimited)',
        'Custom integrations',
        'API access',
        'Bulk operations',
        'Advanced reporting',
      ],
      cta: 'Contact Sales',
      highlight: false,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Try free. Upgrade when you're ready.
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Start with our free tier. Scale up as your audience grows. No credit card required.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border flex flex-col transition-transform hover:scale-105 ${
                tier.highlight
                  ? 'border-violet-500 bg-slate-900 ring-2 ring-violet-500 relative md:col-span-1 md:row-span-2'
                  : 'border-slate-700 bg-slate-950'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  {tier.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-12">{tier.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.month && <span className="text-gray-400">{tier.month}</span>}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all flex-shrink-0 ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-black hover:shadow-lg hover:shadow-violet-500/50'
                    : tier.name === 'Free'
                    ? 'bg-slate-800 text-white border border-slate-700 hover:border-cyan-500'
                    : 'bg-slate-800 text-white border border-slate-700 hover:border-violet-500'
                }`}
              >
                {tier.cta}
              </button>

              <div className="space-y-4 flex-grow">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                    Includes
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.limitations && tier.limitations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                      Limited
                    </h4>
                    <ul className="space-y-2">
                      {tier.limitations.map((limit) => (
                        <li key={limit} className="text-gray-500 text-sm">
                          {limit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade Path */}
        <div className="mt-16 bg-slate-950 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Upgrade Path</h3>
          <p className="text-gray-400 mb-6">
            Start free with 2 posts/month. Hit the limit? Upgrade to Starter (100 posts/month) or Creator (unlimited).
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <p className="font-semibold mb-2">Free Tier</p>
              <p className="text-gray-400">2 posts/month</p>
            </div>
            <div className="text-gray-500">→</div>
            <div className="text-center">
              <p className="font-semibold mb-2">Starter</p>
              <p className="text-gray-400">100 posts/month</p>
            </div>
            <div className="text-gray-500">→</div>
            <div className="text-center">
              <p className="font-semibold mb-2">Creator</p>
              <p className="text-gray-400">Unlimited posts</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I use the free tier forever?',
                a: 'Yes. The free tier is unlimited. You get 2 posts/month. If you need more, upgrade anytime.',
              },
              {
                q: 'Do I need a credit card for the free tier?',
                a: 'No. Free tier requires email only. Paid tiers include a 14-day free trial with no credit card required.',
              },
              {
                q: 'Can I downgrade from Creator to Free?',
                a: 'Yes. You can downgrade anytime. You\'ll lose access to premium features immediately, but your scheduled posts remain.',
              },
              {
                q: 'What happens when I hit my post limit?',
                a: 'You can\'t schedule more posts until your limit resets (monthly). Upgrade anytime to increase your limit.',
              },
              {
                q: 'Do you offer refunds?',
                a: '14-day money-back guarantee on paid tiers. Start your free trial risk-free.',
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-slate-800 pb-6">
                <h3 className="font-semibold mb-2 text-lg">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
