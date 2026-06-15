import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus, 
  Code2, 
  Cpu, 
  RefreshCw, 
  MessageSquareText, 
  Users, 
  BriefcaseBusiness, 
  ReceiptText,
  Award,
  Globe,
  Building2 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BlurText from '../animations/BlurText';
import LogoLoop from '../animations/LogoLoop';
import RotatingText from '../animations/RotatingText';
import businessScaleImg from '../assets/business_analytics_scale.png';
import logoAssured from '../assets/logo_assured.png';
import logoRackspace from '../assets/logo_rackspace.svg';
import logoBni from '../assets/logo_bni.svg';
import logoMakeyourown from '../assets/logo_makeyourown.png';
import logoGrocerynxt from '../assets/logo_grocerynxt.png';
import logoTahira from '../assets/logo_tahira.png';
import logoKorichuko from '../assets/logo_korichuko.png';
import logoAaratech from '../assets/logo_aaratech.png';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHeroMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll('.reveal-home'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const logos = [
    { src: logoAssured, name: "Assured Technologies", isInverted: true },
    { src: logoRackspace, name: "Rackspace" },
    { src: logoBni, name: "BNI Tirunelveli" },
    { src: logoMakeyourown, name: "Makeyourown" },
    { src: logoGrocerynxt, name: "Grocery Next" },
    { src: logoTahira, name: "Tahira Groups" },
    { src: logoKorichuko, name: "Korichuko!" },
    { src: logoAaratech, name: "AARA" }
  ].map((c) => ({
    node: (
      <img
        src={c.src}
        alt={c.name}
        className={`h-9 w-auto max-w-[140px] block object-contain opacity-90 hover:opacity-100 transition-opacity duration-305 pointer-events-none select-none ${c.isInverted ? 'invert' : ''}`}
      />
    ),
    title: c.name
  }));

  const solutions = [
    {
      title: "Software Solutions",
      description: "Bespoke web platforms, custom ERP, enterprise databases, and API integrations engineered to automate and connect operations.",
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-50/80 border-blue-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(24,104,219,0.06)] hover:border-blue-500/30",
      href: "/services"
    },
    {
      title: "AI Solutions",
      description: "Custom natural language agents, intelligent routing bots, and predictive analytics pipelines integrated into daily software workflows.",
      icon: Cpu,
      color: "text-purple-650",
      bgColor: "bg-purple-50/80 border-purple-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(124,58,237,0.06)] hover:border-purple-500/30",
      href: "/services"
    },
    {
      title: "Business Automation",
      description: "End-to-end operational syncs, automated invoicing triggers, and custom multi-step approval pipelines that save hours weekly.",
      icon: RefreshCw,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/80 border-emerald-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.06)] hover:border-emerald-500/30",
      href: "/services"
    }
  ];

  const products = [
    {
      title: "WAVOZ",
      description: "AI-powered WhatsApp Business platform to automate customer communication, lead capturing, support routing, and internal workflows.",
      icon: MessageSquareText,
      color: "text-blue-500",
      bgColor: "bg-blue-50/80 border-blue-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.06)] hover:border-blue-500/30",
      href: "/products"
    },
    {
      title: "HRMVOZ",
      description: "AI-powered Human Resource Management System to simplify attendance, leave, payroll processing, and recruitment for distributed teams.",
      icon: Users,
      color: "text-violet-500",
      bgColor: "bg-violet-50/80 border-violet-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] hover:border-violet-500/30",
      href: "/products"
    },
    {
      title: "INVOZ",
      description: "AI-driven billing & invoicing software with GST-ready invoicing, automated payments monitoring, real-time ledgers, and inventory sync.",
      icon: ReceiptText,
      color: "text-teal-500",
      bgColor: "bg-teal-50/80 border-teal-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(20,184,166,0.06)] hover:border-teal-500/30",
      href: "/products"
    },
    {
      title: "WORKFORZ",
      description: "Workforce management and manpower compliance platform managing compliance, attendance, real-time deployment, and client billing.",
      icon: BriefcaseBusiness,
      color: "text-orange-500",
      bgColor: "bg-orange-50/80 border-orange-100",
      hoverShadow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.06)] hover:border-orange-500/30",
      href: "/products"
    }
  ];

  const achievements = [
    {
      title: "30+ Global Clients",
      highlight: "30+ Businesses",
      description: "30+ businesses have trusted Novoz Infinity with their digital transformation journey.",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50/80 border-blue-100",
    },
    {
      title: "Multi-Industry Solutions",
      highlight: "Diverse Sectors",
      description: "Delivered solutions across retail, food & beverage, real estate, staffing, logistics, and professional services.",
      icon: Building2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50/80 border-indigo-100",
    },
    {
      title: "4 Proprietary Products",
      highlight: "SaaS Ecosystem",
      description: "Successfully launched 4 proprietary software products — WAVOZ, HRMVOZ, INVOZ, and WORKFORZ.",
      icon: BriefcaseBusiness,
      color: "text-purple-650",
      bgColor: "bg-purple-50/80 border-purple-100",
    },
    {
      title: "Global Presence",
      highlight: "3 Key Locations",
      description: "Offices and operational presence across 3 locations: United Kingdom, Kanyakumari, and Chennai.",
      icon: Globe,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/80 border-emerald-100",
    },
    {
      title: "100% Client Retention",
      highlight: "Proven Trust",
      description: "Built a track record of on-time, on-scope delivery with a 100% client retention rate on long-term partnerships.",
      icon: CheckCircle2,
      color: "text-teal-600",
      bgColor: "bg-teal-50/80 border-teal-100",
    },
    {
      title: "MSME Growth Partner",
      highlight: "Enterprise Capability",
      description: "Recognised as a trusted MSME-focused technology partner, combining enterprise-grade capability with accessibility and affordability.",
      icon: Award,
      color: "text-amber-600",
      bgColor: "bg-amber-50/80 border-amber-100",
    }
  ];

  const faqs = [
    {
      q: "What services does Novoz Infinity provide?",
      a: "We provide comprehensive full-cycle technology services including custom software development, AI & intelligent solutions, business process automation, cloud infrastructure optimization, mobile application development, and data analytics dashboards."
    },
    {
      q: "Do you build custom software?",
      a: "Yes. We design and build bespoke enterprise software, database structures, CRM/ERP platforms, and portal systems tailored to your specific operational workflows and rules."
    },
    {
      q: "Do you provide AI solutions?",
      a: "Yes, we build AI into daily workflows. This includes custom NLP query handlers, automated chat support, intelligent task routing, and predictive business intelligence reporting."
    },
    {
      q: "How long does a project take?",
      a: "Timeline depends on scope. Small tools and automated pipelines usually take 4-6 weeks, while complex custom software suites or AI portals take 3-6 months. We work in iterative sprints so you get regular updates."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. We offer ongoing maintenance agreements, hosting management, security updates, and regular optimization audits. We work as your long-term engineering partner."
    },
    {
      q: "Can you integrate with existing systems?",
      a: "Absolutely. We build integrations with third-party software, legacy databases, payment gateways, and APIs to ensure a seamless data flow without breaking your current systems."
    },
    {
      q: "Do you provide cloud solutions?",
      a: "Yes, we configure and maintain auto-scaling, highly secure environments on AWS, Google Cloud, and Microsoft Azure, built for maximum uptime and cost efficiency."
    },
    {
      q: "How do we get started?",
      a: "You can click 'Book a Consultation' to select a time on our calendar, or email us directly at sales@novozinfinity.com. Our engineering leads will run a discovery session to understand your goals."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-white font-charlieText selection:bg-brand/10 selection:text-brand overflow-x-hidden animate-fade">

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-screen border-b border-slate-200"
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* Dotted Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-70 z-0" />

        {/* Ambient Gradient Blows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/10 blur-[130px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-400/10 blur-[140px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: '12s' }} />

        {/* Interactive Mouse Glow */}
        {isHeroHovered && (
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
            style={{
              background: `radial-gradient(600px circle at ${heroMouse.x}px ${heroMouse.y}px, rgba(59,130,246,0.06), transparent 80%)`
            }}
          />
        )}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-7 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-24 sm:py-32">
            
            {/* Badge */}
            <span className="mb-6 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 border border-blue-100">
              • ENTERPRISE SOFTWARE & AI
            </span>

            {/* Animated Heading */}
            <div className="flex flex-col items-center mb-8">
              <BlurText
                text="The engineering foundation for"
                animateBy="words"
                direction="top"
                delay={120}
                stepDuration={0.5}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 font-charlieDisplay justify-center leading-[1.05]"
              />
              <div className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 font-charlieDisplay flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 sm:mt-2 leading-[1.05]">
                <span>modern business</span>
                <RotatingText
                  texts={["scale", "growth", "automation", "efficiency"]}
                  mainClassName="text-blue-600"
                  splitBy="characters"
                  staggerDuration={0.03}
                  staggerFrom="first"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </div>

            {/* Animated Description */}
            <BlurText
              text="We design and engineer custom software architectures, cloud automation pipelines, and intelligent AI systems that help organizations streamline processes, improve efficiency, and scale with confidence."
              animateBy="words"
              direction="bottom"
              delay={35}
              stepDuration={0.25}
              className="max-w-3xl text-base sm:text-lg text-text-muted leading-relaxed mb-10 justify-center"
            />


            {/* Trust Text */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold uppercase tracking-widest">
              <span>Custom Software</span>
              <span className="hidden sm:inline">•</span>
              <span>AI Deployments</span>
              <span className="hidden sm:inline">•</span>
              <span>Process Automation</span>
              <span className="hidden sm:inline">•</span>
              <span>Cloud Infrastructures</span>
            </div>

          </div>
        </div>
      </section>

      {/* scroll loop */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">
              TRUSTED BY PROGRESSIVE TEAMS
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 font-charlieDisplay">
              Driving Results for Industry Leaders
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-650 max-w-2xl mx-auto">
              We partner with organizations across retail, real estate, logistics, staffing, and technology to engineer custom digital platforms.
            </p>
          </div>

          <LogoLoop
            logos={logos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={32}
            pauseOnHover
            fadeOut={false}
            scaleOnHover
          />
        </div>
      </section>

      {/* Our Solutions & Products (Ecosystem Showcase) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-[0.25em] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              ECOSYSTEM
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight">
              Our Solutions & Products
            </h2>
            <p className="mt-4 text-base text-slate-650 leading-relaxed">
              We deliver custom engineering capabilities alongside proprietary SaaS applications to automate work and surface metrics.
            </p>
          </div>

          {/* Section Divider Line */}
          <div className="relative flex items-center justify-center my-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative bg-slate-50 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Core Services & Solutions
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((cap) => {
              const Icon = cap.icon;
              
              // Define specific hover animations for lucide icons
              let iconAnimClass = "transition-all duration-500 ease-out";
              if (cap.title.includes("Software")) {
                iconAnimClass += " group-hover:scale-110 group-hover:translate-x-0.5";
              } else if (cap.title.includes("AI")) {
                iconAnimClass += " group-hover:scale-110 group-hover:rotate-12";
              } else if (cap.title.includes("Automation")) {
                iconAnimClass += " group-hover:rotate-180";
              }

              return (
                <div
                  key={cap.title}
                  onClick={() => navigate(cap.href)}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                  className="reveal-home group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-[0_30px_60px_rgba(24,104,219,0.08)] transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                >
                  {/* Spotlight Background Overlay */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37,99,235,0.055), transparent 80%)`
                    }}
                  />

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Icon Badge */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 transition-all duration-300 group-hover:shadow-sm ${cap.bgColor}`}>
                        <Icon className={`w-6 h-6 ${cap.color} ${iconAnimClass}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {cap.description}
                      </p>
                    </div>

                    {/* CTA link */}
                    <span className="text-blue-650 font-bold text-sm inline-flex items-center gap-1.5 group-hover:underline mt-auto">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Divider Line for Products */}
          <div className="relative flex items-center justify-center my-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative bg-slate-50 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Proprietary SaaS Products
            </div>
          </div>

          {/* Grid Layout for Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((cap) => {
              const Icon = cap.icon;
              
              // Define specific hover animations for lucide icons
              let iconAnimClass = "transition-all duration-500 ease-out";
              if (cap.title.includes("WAVOZ")) {
                iconAnimClass += " group-hover:scale-110 group-hover:-translate-y-0.5";
              } else if (cap.title.includes("HRMVOZ")) {
                iconAnimClass += " group-hover:scale-105 group-hover:translate-x-[-1px]";
              } else if (cap.title.includes("INVOZ")) {
                iconAnimClass += " group-hover:rotate-6 group-hover:scale-110";
              } else if (cap.title.includes("WORKFORZ")) {
                iconAnimClass += " group-hover:scale-110 group-hover:-translate-y-0.5";
              }

              return (
                <div
                  key={cap.title}
                  onClick={() => navigate(cap.href)}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                  className="reveal-home group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-[0_30px_60px_rgba(24,104,219,0.08)] transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                >
                  {/* Spotlight Background Overlay */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37,99,235,0.055), transparent 80%)`
                    }}
                  />

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Icon Badge */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 transition-all duration-300 group-hover:shadow-sm ${cap.bgColor}`}>
                        <Icon className={`w-6 h-6 ${cap.color} ${iconAnimClass}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {cap.description}
                      </p>
                    </div>

                    {/* CTA link */}
                    <span className="text-blue-650 font-bold text-sm inline-flex items-center gap-1.5 group-hover:underline mt-auto">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Solutions Overview (Scale details) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side text */}
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-50 px-3 py-1.5 rounded-full inline-block">
                Scalability
              </span>
              <h2 className="reveal-home text-2xl sm:text-4xl font-bold tracking-tight text-text-main font-charlieDisplay mb-6 mt-3">
                Engineered To Help Businesses Scale
              </h2>
              <p className="reveal-home text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
                Novoz Infinity combines software development, automation, artificial intelligence, and strategic consulting to help businesses modernise operations and unlock new growth opportunities.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="reveal-home flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Custom software, ERP, CRM, and workflow management solutions</span>
                </li>
                <li className="reveal-home flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered automation and business intelligence systems</span>
                </li>
                <li className="reveal-home flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ongoing support, optimisation, and long-term technology partnerships</span>
                </li>
              </ul>

              <button
                onClick={() => navigate('/services')}
                className="reveal-home inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:underline group cursor-pointer"
              >
                Explore Services & Capabilities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right side visual */}
            <div className="reveal-home relative w-full max-w-[600px] mx-auto lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-3xl" />
              <img
                src={businessScaleImg}
                alt="Business analytics and scale"
                className="relative w-full rounded-3xl border border-slate-200 shadow-2xl object-cover aspect-[4/3] transform transition-all duration-500 hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle grid pattern & glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-[0.25em] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
              • OUR MILESTONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight">
              Earning Trust, Delivering Impact
            </h2>
            <p className="mt-4 text-base text-slate-650 leading-relaxed">
              Since our founding, Novoz Infinity has grown rapidly — earning the trust of businesses across industries and delivering measurable results through technology.
            </p>
          </div>

          {/* Grid Layout for Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <div
                  key={ach.title}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -4;
                    const rotateY = ((x - centerX) / centerX) * 4;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                  className="reveal-home group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-[0_24px_50px_rgba(24,104,219,0.06)] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-default"
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37,99,235,0.04), transparent 80%)`
                    }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 ${ach.bgColor}`}>
                      <Icon className={`w-6 h-6 ${ach.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-3">
                      {ach.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-charlieDisplay">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              Find answers to core questions about our technical capabilities, pricing, and project methodology.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold font-charlieDisplay">{faq.q}</span>
                    <div className="shrink-0 text-slate-450">
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400 rotate-0'}`}>
                        {isOpen ? <Minus className="w-4.5 h-4.5" /> : <Plus className="w-4.5 h-4.5" />}
                      </div>
                    </div>
                  </button>

                  <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100/60 bg-slate-50/30">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="polygon bg-[#1868DB] text-white py-16 px-6 sm:py-20 sm:px-12 md:px-20 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="reveal-home text-3xl sm:text-5xl font-bold tracking-tight font-charlieDisplay leading-tight">
                Let's Build The Future Of Your Business
              </h2>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
