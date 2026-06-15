import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin, Briefcase, Sparkles, TrendingUp, Users, Laptop } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const openRoles = [
  { title: 'Full Stack Developer', stack: 'React / Node.js / Python', dept: 'Engineering' },
  { title: 'Mobile Application Developer', stack: 'Flutter / React Native', dept: 'Engineering' },
  { title: 'AI/ML Engineer', stack: 'Python / ML Frameworks', dept: 'Artificial Intelligence' },
  { title: 'UI/UX Designer', stack: 'Figma / Design Systems', dept: 'Design' },
  { title: 'Business Analyst', stack: 'Requirements / Strategy', dept: 'Business' },
  { title: 'Sales Executive', stack: 'Technology Solutions', dept: 'Sales' },
  { title: 'Client Success Manager', stack: 'Onboarding / Retention', dept: 'Customer Success' },
  { title: 'Digital Marketing Specialist', stack: 'SEO / Paid / Content', dept: 'Marketing' },
];

const offers = [
  { icon: Sparkles, label: 'Cutting-edge projects', desc: 'Work on real AI and automation solutions across diverse industries.' },
  { icon: Users, label: 'Collaborative culture', desc: 'An entrepreneurial team where ideas are heard and ownership is valued.' },
  { icon: TrendingUp, label: 'Clear growth paths', desc: 'Performance-based recognition and structured career progression.' },
  { icon: Laptop, label: 'Flexible arrangements', desc: 'Hybrid work options across our UK and India offices.' },
];

const deptColors: Record<string, string> = {
  Engineering: 'bg-blue-50 text-blue-700',
  'Artificial Intelligence': 'bg-violet-50 text-violet-700',
  Design: 'bg-pink-50 text-pink-700',
  Business: 'bg-amber-50 text-amber-700',
  Sales: 'bg-emerald-50 text-emerald-700',
  'Customer Success': 'bg-teal-50 text-teal-700',
  Marketing: 'bg-orange-50 text-orange-700',
};

export default function Careers() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.c-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: pageRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white font-charlieText selection:bg-brand/10 selection:text-brand animate-fade">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden border-b border-blue-100 py-24"
        style={{ background: '#dce8fb' }}
      >
        <svg aria-hidden="true" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 420" xmlns="http://www.w3.org/2000/svg">
          <polygon points="-60,80 260,20 320,200 140,340 -60,300" fill="#b8d0f5" opacity="0.7" className="animate-drift-slow origin-center" />
          <polygon points="1100,-30 1460,60 1460,260 1180,310 980,120" fill="#b8d0f5" opacity="0.65" className="animate-drift-slower origin-center" />
          <circle cx="720" cy="420" r="220" fill="#c4d9f7" opacity="0.4" className="animate-pulse" style={{ animationDuration: '6s' }} />
          <polygon points="580,-20 780,10 800,100 600,120 500,60" fill="#d4e5fa" opacity="0.55" className="animate-drift-slow origin-center" style={{ animationDuration: '18s' }} />
        </svg>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center animate-fade">
          <span className="c-reveal inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-white/60 backdrop-blur px-3 py-1.5 rounded-full mb-5">
            CAREERS
          </span>
          <h1 className="c-reveal text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-[#101214] font-charlieDisplay leading-tight mb-6">
            Do the best work of your career
          </h1>
          <p className="c-reveal text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are an engineering-driven team building custom SaaS applications and AI platforms. Join us in our mission to design, deploy, and maintain scalable systems for organizations globally.
          </p>
          <div className="c-reveal mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:sales@novozinfinity.com?subject=Career%20Application%20—%20[Role%20Name]"
              className="brand-button-blue inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold hover:scale-[1.01] transition-transform"
            >
              Apply Now <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold border border-slate-300 bg-white/70 text-slate-700 hover:bg-white transition-colors"
            >
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
              Why join us
            </span>
            <h2 className="c-reveal text-3xl sm:text-4xl font-bold text-[#101214] font-charlieDisplay max-w-xl leading-tight">
              What we offer
            </h2>
          </div>
          <style>{`
            .offer-card {
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
            }
            .offer-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 24px -4px rgba(37, 99, 235, 0.13), 0 2px 8px -2px rgba(37, 99, 235, 0.07);
              border-color: #93c5fd;
            }
            .offer-card:hover .offer-icon {
              background-color: #2563eb;
            }
            .offer-card:hover .offer-icon svg {
              color: #ffffff;
            }
            .offer-icon {
              transition: background-color 0.22s ease;
            }
            .offer-icon svg {
              transition: color 0.22s ease;
            }
          `}</style>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="c-reveal offer-card rounded-2xl border border-slate-200 bg-white p-7">
                <div className="offer-icon w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
              Open positions
            </span>
            <h2 className="c-reveal text-3xl sm:text-4xl font-bold text-[#101214] font-charlieDisplay leading-tight">
              Current open roles
            </h2>
            <p className="c-reveal text-base text-slate-500 mt-3 max-w-xl">
              All positions are full-time and open to candidates across our India and UK offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openRoles.map((role) => (
              <a
                key={role.title}
                href={`mailto:sales@novozinfinity.com?subject=Career%20Application%20—%20${encodeURIComponent(role.title)}`}
                className="c-reveal group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${deptColors[role.dept] ?? 'bg-slate-100 text-slate-600'}`}>
                      {role.dept}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> India / UK
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> Full-time
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-0.5">{role.title}</h3>
                  <p className="text-xs text-slate-500">{role.stack}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-600 px-10 py-16 text-center">
            <h2 className="c-reveal text-3xl sm:text-4xl font-bold text-white font-charlieDisplay mb-4">
              Don't see the right role?
            </h2>
            <p className="c-reveal text-blue-100 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We're always open to hearing from talented people. Send your CV to{' '}
              <span className="text-white font-semibold">sales@novozinfinity.com</span> with the subject line{' '}
              <span className="text-white font-semibold">Career Application — [Role Name]</span>.
            </p>
            <a
              href="https://forms.gle/yE3b6EVNfSj96u999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Send your CV <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}