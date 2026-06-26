export function CTA() {
  return (
    <section id="cta" className="relative w-full bg-brand-accent py-24 overflow-hidden text-brand-bg">
      {/* Decorative radial gradients for glowing effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cta/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-hover/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] opacity-10 bg-[size:3rem_3rem] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Large Heading */}
        <h2 className="text-section-title text-brand-bg mb-6">
          Ready to Automate Your SaaS Operations?
        </h2>

        {/* Supporting Text */}
        <p className="text-body-scale text-brand-bg/85 max-w-2xl mx-auto mb-10">
          Deploy autonomous agents that coordinate tickets, parse custom logs, and sync cross-cluster database pipelines in minutes. Start building for free.
        </p>

        {/* Primary & Secondary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            className="text-button-scale w-full sm:w-auto px-8 py-4 bg-brand-bg text-brand-text hover:bg-brand-mint/80 font-bold rounded-lg shadow-lg hover:shadow-brand-hover/10 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-brand-bg"
          >
            Get Started Free
          </a>
          <a
            href="#demo"
            className="text-button-scale w-full sm:w-auto px-8 py-4 bg-brand-bg/25 hover:bg-brand-bg/30 text-brand-bg rounded-lg border border-brand-bg/30 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-brand-bg"
          >
            Schedule a Demo
          </a>
        </div>

        {/* Small badge/text */}
        <div className="mt-6 text-xs text-brand-bg/70 font-mono">
          No credit card required &bull; 14-day free trial &bull; Unlimited sandboxes
        </div>

      </div>
    </section>
  );
}
export default CTA;
