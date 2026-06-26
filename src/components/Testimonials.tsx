import { cn } from '../utils/cn';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  review: string;
  avatarInitials: string;
  avatarGradient: string; // Tailwind gradient classes
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Orbit Space',
    review: 'NextGen AI has completely transformed our deployment pipelines. The autonomous agents resolved 95% of our system warnings instantly without manual intervention. The integration was seamless.',
    avatarInitials: 'SC',
    avatarGradient: 'from-brand-accent to-brand-mint/40',
  },
  {
    name: 'Alex Rivera',
    role: 'VP of Engineering',
    company: 'Nova AI',
    review: 'The contextual parser works like magic. We went from spending hours custom writing regex to deploying an agent that parses logs into clean JSON in under two minutes. Essential tool for our team.',
    avatarInitials: 'AR',
    avatarGradient: 'from-brand-cta to-brand-hover',
  },
  {
    name: 'David K.',
    role: 'Lead Architect',
    company: 'Apex Flow',
    review: 'API synchronization was our biggest bottleneck. The cross-cluster handshakes and automatic retries gave us absolute peace of mind. The real-time latency graphs are outstanding.',
    avatarInitials: 'DK',
    avatarGradient: 'from-brand-text to-brand-accent',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-bg py-24 border-t border-brand-mint/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-hover">Testimonials</span>
          <h2 className="text-section-title text-brand-text mt-2">
            Trusted by the Builders of the Future
          </h2>
          <p className="mt-4 text-body-scale text-brand-text/70">
            See how scaling teams use NextGen AI to automate workflows and coordinate pipelines.
          </p>
        </div>

        {/* Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className={cn(
                "relative p-8 rounded-3xl bg-card-bg border border-brand-mint/80 shadow-sm",
                "transition-all duration-300 ease-in-out hover:shadow-md hover:border-brand-accent hover:-translate-y-1.5",
                "flex flex-col justify-between"
              )}
            >
              <div>
                {/* 5 Star Rating Indicator (using Forsythia color #FFC801) */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4.5 w-4.5 text-brand-cta fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-body-scale text-brand-text/80 mb-6 italic">
                  "{t.review}"
                </p>
              </div>

              {/* User Profile Info Footer */}
              <div className="flex items-center gap-4 mt-auto border-t border-brand-mint/50 pt-5">
                
                {/* Premium Monogram Avatar with Gradient Placeholder */}
                <div
                  className={cn(
                    "h-11 w-11 rounded-full flex items-center justify-center text-brand-bg font-extrabold text-sm tracking-wide bg-gradient-to-br shadow-sm",
                    t.avatarGradient
                  )}
                  aria-hidden="true"
                >
                  {t.avatarInitials}
                </div>

                {/* Name & Role details */}
                <div className="flex flex-col text-left">
                  <cite className="not-italic text-sm font-bold text-brand-text font-sans">
                    {t.name}
                  </cite>
                  <span className="text-[11px] font-medium text-brand-text/50">
                    {t.role}, <span className="font-semibold">{t.company}</span>
                  </span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Testimonials;
