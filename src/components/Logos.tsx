export function Logos() {
  const companies = [
    {
      name: 'Acme Corp',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="2.5" fill="currentColor" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">ACME</text>
        </svg>
      )
    },
    {
      name: 'Nova AI',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M12 8L16 12L12 16L8 12L12 8Z" fill="currentColor" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">NOVA</text>
        </svg>
      )
    },
    {
      name: 'Apex Flow',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18L12 9L21 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">APEX</text>
        </svg>
      )
    },
    {
      name: 'Pulse Sync',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H6L9 4L13 20L16 10L18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">PULSE</text>
        </svg>
      )
    },
    {
      name: 'Echo Core',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">ECHO</text>
        </svg>
      )
    },
    {
      name: 'Orbit Space',
      logo: (
        <svg className="h-8 w-auto text-brand-text/45 group-hover:text-brand-text group-hover:drop-shadow-[0_4px_6px_rgba(23,43,54,0.05)] transition-all duration-300" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="3" stroke="currentColor" strokeWidth="2" transform="rotate(-30 12 12)" />
          <text x="32" y="21" className="font-extrabold text-[15px] tracking-wider fill-current font-sans">ORBIT</text>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-brand-bg py-16 border-t border-brand-mint/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-brand-text/50 mb-10 font-sans">
          Trusted by the world's most innovative SaaS teams
        </h2>

        {/* Responsive Logo Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-center justify-items-center">
          {companies.map((company) => (
            <li key={company.name} className="group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <span className="sr-only">{company.name}</span>
              {company.logo}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
export default Logos;
