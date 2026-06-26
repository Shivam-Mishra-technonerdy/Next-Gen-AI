import { useState } from 'react';
import { cn } from '../utils/cn';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: 0,
    title: 'Autonomous Workflow Execution',
    description: 'Coordinate complex multi-step processes automatically. Deploy intelligent agents that listen for webhook triggers, authenticate securely, and execute jobs with built-in retry logic.',
    badge: 'Agent Core',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    id: 1,
    title: 'Contextual Parsing Engine',
    description: 'Extract structure from raw textual inputs. Our native parsing engine handles semi-structured logs, custom forms, and system traces, outputting validated JSON payloads ready for CRM systems.',
    badge: 'Data Layer',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Cross-Cluster API Handshakes',
    description: 'Ensure consistent data delivery between your regional clusters. Support for token rotation, header encryption, and customizable network retry algorithms out of the box.',
    badge: 'Security',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75 7.5 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75 7.5 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75 7.5 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75 7.5 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75 7.5 0 0 1-.354-1Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Metrics & Performance Analytics',
    description: 'Access execution charts, error rate indicators, and performance latency graphs. Generate clean reports instantly to audit agent tasks and verify operational health.',
    badge: 'Analytics',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </svg>
    )
  }
];

export function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-brand-bg py-24 border-t border-brand-mint/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-hover">Capabilities</span>
          <h2 className="text-section-title text-brand-text mt-2">
            Engineered for High-Performance Teams
          </h2>
          <p className="mt-4 text-body-scale text-brand-text/70">
            Explore our Bento core architecture. Hover over cards on desktop or interact with panels on mobile to reveal full specifications.
          </p>
        </div>

        {/* Desktop Bento Grid: 2x2 layout (Only shown on md and larger) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "relative p-8 rounded-2xl border transition-all duration-300 ease-in-out cursor-pointer overflow-hidden flex flex-col justify-between min-h-[250px]",
                  isActive
                    ? "bg-card-bg border-brand-accent shadow-md translate-y-[-4px]"
                    : "bg-card-bg/50 border-brand-mint opacity-80 hover:opacity-100 hover:bg-card-bg hover:border-brand-accent/50"
                )}
              >
                <div>
                  {/* Top card row: Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={cn(
                        "h-11 w-11 rounded-lg flex items-center justify-center transition-colors duration-300",
                        isActive
                          ? "bg-brand-accent text-brand-bg"
                          : "bg-brand-accent/10 text-brand-accent"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-mono",
                        isActive
                          ? "bg-brand-cta text-brand-text"
                          : "bg-brand-bg text-brand-text/60"
                      )}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-brand-text mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-body-scale text-brand-text/75">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Bottom highlight bar */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-1 transition-all duration-300",
                    isActive ? "bg-brand-cta" : "bg-transparent"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion (Only shown on screens smaller than md) */}
        <div className="block md:hidden max-w-md mx-auto space-y-3.5">
          {features.map((feature, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={feature.id}
                className={cn(
                  "border rounded-xl bg-card-bg overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "border-brand-accent shadow-sm" : "border-brand-mint/75"
                )}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-brand-text focus:outline-none"
                  aria-expanded={isOpen}
                  aria-label={`Toggle ${feature.title}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors",
                        isOpen ? "bg-brand-accent text-brand-bg" : "bg-brand-accent/10 text-brand-accent"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-sm font-bold tracking-tight text-brand-text">
                      {feature.title}
                    </span>
                  </div>
                  
                  {/* Chevron Icon with rotate */}
                  <svg
                    className={cn(
                      "h-4 w-4 text-brand-text/50 transform transition-transform duration-300",
                      isOpen ? "rotate-180 text-brand-accent" : "rotate-0"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Panel with pure CSS grid height transition */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-1 flex flex-col gap-3">
                      {/* Badge in panel */}
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-bg text-brand-text/60 font-mono">
                          {feature.badge}
                        </span>
                      </div>
                      <p className="text-body-scale text-brand-text/75">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default BentoFeatures;
