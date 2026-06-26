import React, { useState, useCallback } from 'react';
import { cn } from '../utils/cn';

// Types
type Currency = 'USD' | 'INR' | 'EUR';
type BillingCycle = 'monthly' | 'yearly';

interface PlanConfig {
  name: string;
  badge?: string;
  description: string;
  baseMonthlyPrice: Record<Currency, number>;
  features: string[];
  ctaText: string;
}

// Config Data (Single source of truth)
const planConfigs: PlanConfig[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small startups looking to automate basic tasks.',
    baseMonthlyPrice: {
      USD: 29,
      INR: 2400,
      EUR: 27,
    },
    features: [
      '3 Autonomous Agents',
      'Contextual parsing (up to 1,000 requests/mo)',
      'Basic API Sync handshakes',
      'Community Support',
    ],
    ctaText: 'Get Started',
  },
  {
    name: 'Pro',
    badge: 'Popular',
    description: 'Designed for scaling SaaS teams who need robust performance and metrics.',
    baseMonthlyPrice: {
      USD: 79,
      INR: 6500,
      EUR: 73,
    },
    features: [
      '15 Autonomous Agents',
      'Contextual parsing (up to 20,000 requests/mo)',
      'Cross-Cluster API Sync handshakes',
      '24/7 Priority Support',
      'Real-time metrics & performance analytics',
    ],
    ctaText: 'Go Pro',
  },
  {
    name: 'Enterprise',
    description: 'Custom setups for high-volume enterprises with custom SLAs and servers.',
    baseMonthlyPrice: {
      USD: 199,
      INR: 16500,
      EUR: 185,
    },
    features: [
      'Unlimited Autonomous Agents',
      'Unlimited Contextual parsing',
      'Dedicated cluster API handshakes',
      'Personal Dedicated Support Agent',
      'Custom SLA agreement',
      'Dedicated Node metrics analytics',
    ],
    ctaText: 'Contact Enterprise',
  },
];

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
  EUR: '€',
};

// 1. Memoized Header Component
const PricingHeader = React.memo(() => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-hover">Pricing plans</span>
      <h2 className="text-section-title text-brand-text mt-2">
        Flexible Pricing for Any Scale
      </h2>
      <p className="mt-4 text-body-scale text-brand-text/70">
        Select your preferred currency and billing cycle. Cancel or upgrade at any time.
      </p>
    </div>
  );
});

// 2. Memoized Selectors Component
interface SelectorsProps {
  currency: Currency;
  billingCycle: BillingCycle;
  onCurrencyChange: (c: Currency) => void;
  onBillingCycleChange: (b: BillingCycle) => void;
}

const PricingSelectors = React.memo(({
  currency,
  billingCycle,
  onCurrencyChange,
  onBillingCycleChange,
}: SelectorsProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
      {/* Billing Switcher */}
      <div className="flex items-center gap-3 bg-brand-mint/30 p-1.5 rounded-xl border border-brand-mint/60">
        <button
          type="button"
          onClick={() => onBillingCycleChange('monthly')}
          className={cn(
            "px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer",
            billingCycle === 'monthly'
              ? "bg-brand-bg text-brand-text shadow-sm"
              : "text-brand-text/70 hover:text-brand-text"
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onBillingCycleChange('yearly')}
          className={cn(
            "px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5",
            billingCycle === 'yearly'
              ? "bg-brand-bg text-brand-text shadow-sm"
              : "text-brand-text/70 hover:text-brand-text"
          )}
        >
          Yearly
          <span className="bg-brand-cta text-brand-text text-[9px] font-extrabold px-1.5 py-0.5 rounded">
            Save 20%
          </span>
        </button>
      </div>

      {/* Currency Switcher */}
      <div className="flex items-center gap-2 bg-brand-mint/30 p-1.5 rounded-xl border border-brand-mint/60">
        {(['USD', 'INR', 'EUR'] as Currency[]).map((cur) => (
          <button
            key={cur}
            type="button"
            onClick={() => onCurrencyChange(cur)}
            className={cn(
              "px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer",
              currency === cur
                ? "bg-brand-bg text-brand-text shadow-sm"
                : "text-brand-text/70 hover:text-brand-text"
            )}
          >
            {cur}
          </button>
        ))}
      </div>
    </div>
  );
});

// 3. Memoized Pricing Card Component
interface CardProps {
  name: string;
  badge?: string;
  description: string;
  price: number;
  currencySymbol: string;
  billingCycle: BillingCycle;
  features: string[];
  ctaText: string;
  isHighlighted: boolean;
}

const PricingCard = React.memo(({
  name,
  badge,
  description,
  price,
  currencySymbol,
  billingCycle,
  features,
  ctaText,
  isHighlighted,
}: CardProps) => {
  // Annual price displays the total yearly sum, but we can also display monthly equivalent
  const isYearly = billingCycle === 'yearly';
  const displayPrice = isYearly ? Math.round(price / 12) : price;

  return (
    <div
      className={cn(
        "relative p-8 rounded-3xl border transition-all duration-300 ease-in-out flex flex-col justify-between h-full",
        isHighlighted
          ? "bg-brand-accent text-brand-bg border-brand-accent shadow-xl lg:scale-105 z-10"
          : "bg-card-bg text-brand-text border-brand-mint/80 shadow-sm hover:shadow-md hover:border-brand-accent/50"
      )}
    >
      <div>
        {/* Badge for Pro Plan */}
        {badge && (
          <span className="absolute top-4 right-4 bg-brand-cta text-brand-text text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
            {badge}
          </span>
        )}

        {/* Plan Name */}
        <h3 className="text-xl font-extrabold mb-2 tracking-tight">{name}</h3>
        <p className={cn("text-body-scale mb-6", isHighlighted ? "text-brand-bg/85" : "text-brand-text/70")}>
          {description}
        </p>

        {/* Price display (calculated from config) */}
        <div className="mb-6 flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-pricing-value">
              {currencySymbol}{displayPrice}
            </span>
            <span className={cn("text-xs font-semibold", isHighlighted ? "text-brand-bg/60" : "text-brand-text/50")}>
              /mo
            </span>
          </div>
          {isYearly && (
            <span className={cn("text-[11px] font-bold mt-1 font-mono", isHighlighted ? "text-brand-cta" : "text-brand-accent")}>
              {currencySymbol}{price} billed annually
            </span>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <svg
                className={cn(
                  "h-5 w-5 flex-shrink-0 mt-0.5",
                  isHighlighted ? "text-brand-cta" : "text-brand-accent"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className={cn("text-body-scale", isHighlighted ? "text-brand-bg/90" : "text-brand-text/80")}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button
        type="button"
        className={cn(
          "text-button-scale w-full py-3.5 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 cursor-pointer",
          isHighlighted
            ? "bg-brand-cta text-brand-text hover:bg-brand-hover focus:ring-brand-hover shadow-lg shadow-brand-cta/10"
            : "bg-brand-bg text-brand-text hover:bg-brand-mint/50 border border-brand-mint focus:ring-brand-accent"
        )}
      >
        {ctaText}
      </button>
    </div>
  );
});

// Main Pricing Component
export function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  // Memoize state handlers to prevent unnecessary rerenders of selectors
  const handleCurrencyChange = useCallback((cur: Currency) => {
    setCurrency(cur);
  }, []);

  const handleBillingCycleChange = useCallback((cycle: BillingCycle) => {
    setBillingCycle(cycle);
  }, []);

  return (
    <section id="pricing" className="bg-brand-bg py-24 border-t border-brand-mint/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Memoized Header */}
        <PricingHeader />

        {/* Memoized Selectors */}
        <PricingSelectors
          currency={currency}
          billingCycle={billingCycle}
          onCurrencyChange={handleCurrencyChange}
          onBillingCycleChange={handleBillingCycleChange}
        />

        {/* Responsive Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {planConfigs.map((plan) => {
            const basePrice = plan.baseMonthlyPrice[currency];
            
            // Calculate final price:
            // Monthly cycle: basePrice
            // Yearly cycle: basePrice * 12 * 0.8
            const finalPrice = billingCycle === 'monthly'
              ? basePrice
              : Math.round(basePrice * 12 * 0.8);

            return (
              <div key={plan.name} className="h-full">
                <PricingCard
                  name={plan.name}
                  badge={plan.badge}
                  description={plan.description}
                  price={finalPrice}
                  currencySymbol={currencySymbols[currency]}
                  billingCycle={billingCycle}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  isHighlighted={plan.name === 'Pro'}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
