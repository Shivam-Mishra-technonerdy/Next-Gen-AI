export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-bg font-sans"
    >
      {/* Decorative Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Floating Decorative SVG Placeholders (using local SVGs) */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-30 text-brand-text pointer-events-none">
        <svg
          className="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-8 md:left-32 animate-float-reverse opacity-25 text-brand-text pointer-events-none">
        <svg
          className="h-12 w-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
          <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-10 md:right-24 animate-float opacity-30 text-brand-text pointer-events-none">
        <svg
          className="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75 7.5 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75 7.5 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75 7.5 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75 7.5 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75 7.5 0 0 1-.354-1Z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-1/2 animate-float-reverse opacity-20 text-brand-text pointer-events-none">
        <svg
          className="h-11 w-11"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (size 5 on desktop) */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6 lg:pr-4">
            
            {/* Small Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cta/20 text-brand-text border border-brand-cta/40 animate-pulse-slow">
                ✨ NextGen AI 2.0 Agent Builder
              </span>
            </div>

            {/* Large Heading (Inter typography) */}
            <h1 className="text-hero-title text-brand-text">
              Automate SaaS Workflows with{' '}
              <span className="relative inline-block">
                Autonomous
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-brand-cta -z-10 transform -rotate-1" />
              </span>{' '}
              Agents
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-body-scale text-brand-text/80">
              Integrate AI agents that coordinate customer tickets, manage deployment queues, and sync analytics in minutes. Simple hooks, powerful results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#signup"
                className="text-button-scale w-full sm:w-auto px-8 py-4 bg-brand-cta hover:bg-brand-hover text-brand-text rounded-lg shadow-md hover:shadow-brand-hover/10 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-brand-hover"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="text-button-scale w-full sm:w-auto px-8 py-4 bg-card-bg/75 hover:bg-card-bg text-brand-text rounded-lg border border-brand-mint shadow-sm transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                Book a Demo
              </a>
            </div>

            {/* Small Technical Stat in JetBrains Mono */}
            <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-brand-text/60 font-mono">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <span>v2.4.1 initialized on node-cluster-09</span>
            </div>
          </div>

          {/* Right-side Illustration Column (size 7 on desktop) */}
          <div className="lg:col-span-7 w-full flex justify-center relative">
            <div className="relative w-full max-w-2xl bg-card-bg border border-brand-mint/80 rounded-2xl shadow-2xl p-4 sm:p-6 overflow-hidden">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-mint/30 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="px-4 py-0.5 bg-brand-bg border border-brand-mint/40 rounded text-[11px] font-mono text-brand-text/50 w-48 sm:w-64 text-center truncate">
                  admin.nextgen.ai/agents
                </div>
                <div className="w-10 h-3" />
              </div>

              {/* Dashboard Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Stats Card 1 (JetBrains Mono) */}
                <div className="p-4 rounded-xl border border-brand-mint bg-brand-bg/50 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-brand-text/50 font-bold">API Performance</span>
                    <span className="text-[11px] text-brand-text font-bold bg-brand-cta/20 px-1.5 py-0.5 rounded font-mono">99.98%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-brand-text font-mono">48ms</span>
                    <span className="text-xs text-brand-text/50 font-sans">avg delay</span>
                  </div>
                </div>

                {/* Stats Card 2 (JetBrains Mono) */}
                <div className="p-4 rounded-xl border border-brand-mint bg-brand-bg/50 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-brand-text/50 font-bold font-sans">Active Connections</span>
                    <span className="text-brand-text/60">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-brand-text font-mono">1,482</span>
                    <span className="text-[10px] text-brand-text/50 font-mono">+12.4%</span>
                  </div>
                </div>
              </div>

              {/* Connected Workflow Builder Visualization (using local SVGs) */}
              <div className="p-4 rounded-xl border border-brand-mint bg-brand-bg/30 mb-6">
                <div className="text-xs text-brand-text/60 font-semibold mb-4 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cta opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cta" />
                  </span>
                  <span>Agent Network Pipeline</span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 py-2 relative">
                  {/* Connection Lines (Native SVG) */}
                  <svg className="absolute hidden sm:block top-1/2 left-0 w-full h-2 -translate-y-1/2 text-brand-mint -z-10" fill="none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M10,5 L90,5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                  
                  {/* Node 1: Cog (Trigger) */}
                  <div className="flex items-center gap-3 bg-card-bg p-3 rounded-lg border border-brand-mint shadow-sm w-full sm:w-auto">
                    <div className="h-9 w-9 rounded-lg bg-brand-cta/20 text-brand-hover flex items-center justify-center flex-shrink-0 animate-spin-slow">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-brand-text">Task Trigger</div>
                      <div className="text-[9px] text-brand-text/50 font-mono">onWebHookReceived</div>
                    </div>
                  </div>

                  {/* Node 2: Cube (Processing) */}
                  <div className="flex items-center gap-3 bg-card-bg p-3 rounded-lg border border-brand-mint shadow-sm w-full sm:w-auto">
                    <div className="h-9 w-9 rounded-lg bg-brand-accent/20 text-brand-accent flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-brand-text">AI Parser</div>
                      <div className="text-[9px] text-brand-text/50 font-mono">model:ultra-v2</div>
                    </div>
                  </div>

                  {/* Node 3: Link (Integration) */}
                  <div className="flex items-center gap-3 bg-card-bg p-3 rounded-lg border border-brand-mint shadow-sm w-full sm:w-auto">
                    <div className="h-9 w-9 rounded-lg bg-brand-cta/20 text-brand-cta flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75 7.5 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75 7.5 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75 7.5 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75 7.5 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75 7.5 0 0 1-.354-1Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-brand-text">CRM Sync</div>
                      <div className="text-[9px] text-brand-text/50 font-mono">pushPayload</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Panel (JetBrains Mono) */}
              <div className="rounded-xl bg-[#172B36] p-4 text-xs font-mono text-slate-300 text-left relative">
                <div className="absolute top-2 right-3 text-[10px] text-slate-500 font-bold font-mono">JSON CONF</div>
                <pre className="overflow-x-auto">
                  <code>
{`{
  "agent": "CustomerSupport",
  "model": "nextgen-ultra-v2",
  "temperature": 0.2,
  "status": "ready"
}`}
                  </code>
                </pre>
              </div>

            </div>

            {/* Glowing Accent behind the mockup card */}
            <div className="absolute inset-0 bg-brand-cta/20 blur-3xl -z-10 rounded-full w-72 h-72 top-10 left-20 pointer-events-none animate-pulse-slow" />
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;
