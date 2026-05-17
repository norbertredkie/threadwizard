'use client';

import React from 'react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for individual creators',
      features: [
        '1 connected account',
        'Schedule up to 20 posts/month',
        'Basic analytics',
        'Email support',
        'Violet accent color',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Creator',
      price: '$79/month',
      description: 'For serious content creators',
      features: [
        '5 connected accounts',
        'Unlimited scheduled posts',
        'Advanced analytics & trends',
        'Priority support',
        'Custom branding',
        'Content calendar view',
        'Team collaboration (2 users)',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$199/month',
      description: 'For teams & agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts & scheduling',
        'White-label dashboard',
        '24/7 dedicated support',
        'Team collaboration (unlimited)',
        'Custom integrations',
        'API access',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Pricing that scales with you
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Choose the plan that fits your needs. Always cancel anytime.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-900 rounded-lg p-1">
            <button className="px-6 py-2 rounded bg-violet-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded text-gray-400 font-medium hover:text-white">
              Annual (Save 20%)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border transition-transform hover:scale-105 ${
                tier.highlight
                  ? 'border-violet-500 bg-slate-900 ring-2 ring-violet-500 relative'
                  : 'border-slate-700 bg-slate-950'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-6">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-black hover:shadow-lg hover:shadow-violet-500/50'
                    : 'bg-slate-800 text-white border border-slate-700 hover:border-violet-500'
                }`}
              >
                {tier.cta}
              </button>

              <ul className="space-y-4">
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
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Common questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes. Upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 14-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.',
              },
              {
                q: 'Is there a free trial?',
                a: 'All plans include a 14-day free trial. No credit card required.',
              },
              {
                q: 'Do you offer enterprise pricing?',
                a: 'Yes. Contact our sales team for custom pricing on larger deployments.',
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
