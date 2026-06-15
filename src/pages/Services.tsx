import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import FloatingLines from '../animations/FloatingLines';
import BlurText from '../animations/BlurText';
import SplitText from '../animations/SplitText';
import RotatingText from '../animations/RotatingText';
import {
  Code2,
  Cpu,
  RefreshCw,
  Cloud,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Globe,
  Workflow,
  Users,
  Layers,
  Package,
  ShieldCheck,
  ShoppingCart,
  Lightbulb
} from 'lucide-react';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll('.reveal-services'),
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

      const items = el.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 92%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }
  }, []);

  const serviceItems = [
    {
      title: "Custom Mobile Application Development",
      description: "We build custom mobile applications for Android, iOS, and cross-platform environments that enhance customer engagement, improve operational efficiency, and support business growth.",
      icon: Smartphone,
      benefits: ["Android & iOS development", "Performance & offline support", "Intuitive user experience design"],
      color: "from-orange-500/10 to-amber-500/5",
      borderColor: "hover:border-orange-500/30"
    },
    {
      title: "Website Development",
      description: "We create high-performance websites that strengthen brand presence, generate leads, and drive online sales through modern design, seamless functionality, and optimised user experiences.",
      icon: Globe,
      benefits: ["Modern responsive designs", "Optimised user journeys", "Corporate sites & portals"],
      color: "from-blue-500/10 to-indigo-500/5",
      borderColor: "hover:border-blue-500/30"
    },
    {
      title: "Workflow Management Software",
      description: "Our workflow management solutions streamline business processes by digitising tasks, approvals, and reporting — helping organisations improve productivity and operational visibility.",
      icon: Workflow,
      benefits: ["Digitised task queues", "Automated approvals pipelines", "Transparent activity tracking"],
      color: "from-purple-500/10 to-indigo-500/5",
      borderColor: "hover:border-purple-500/30"
    },
    {
      title: "Business Process Automation",
      description: "We automate repetitive business processes to reduce manual effort, improve accuracy, and increase efficiency across key operational functions.",
      icon: RefreshCw,
      benefits: ["Repetitive task automation", "Database synchronization", "Reduced manual coordination"],
      color: "from-emerald-500/10 to-teal-500/5",
      borderColor: "hover:border-emerald-500/30"
    },
    {
      title: "CRM Solutions",
      description: "Our CRM solutions centralise customer data and sales activities, enabling businesses to strengthen customer relationships, improve retention, and accelerate growth.",
      icon: Users,
      benefits: ["Centralised customer pipeline", "Configured sales workflows", "Analytics and activity reports"],
      color: "from-rose-500/10 to-pink-500/5",
      borderColor: "hover:border-rose-500/30"
    },
    {
      title: "ERP Solutions",
      description: "We implement integrated ERP systems that connect core business functions — providing greater visibility, improved decision-making, and enhanced operational efficiency.",
      icon: Layers,
      benefits: ["Connected core operations", "Scoped configurations", "Configurable reporting hubs"],
      color: "from-indigo-500/10 to-blue-500/5",
      borderColor: "hover:border-indigo-500/30"
    },
    {
      title: "AI & Intelligent Business Solutions",
      description: "We develop AI-powered solutions that automate processes, enhance customer interactions, and deliver actionable insights to support smarter business decisions.",
      icon: Cpu,
      benefits: ["Intelligent support agents", "Natural language routing", "Predictive business logic"],
      color: "from-violet-500/10 to-fuchsia-500/5",
      borderColor: "hover:border-violet-500/30"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Our analytics solutions transform business data into meaningful insights — helping organisations monitor performance, identify opportunities, and make informed decisions.",
      icon: BarChart3,
      benefits: ["Custom metrics dashboards", "Interactive visual charts", "Actionable trend detection"],
      color: "from-cyan-500/10 to-blue-500/5",
      borderColor: "hover:border-cyan-500/30"
    },
    {
      title: "Inventory & Supply Chain Management",
      description: "We provide inventory and supply chain solutions that improve stock control, optimise procurement, and enhance visibility across business operations.",
      icon: Package,
      benefits: ["Optimised stock levels", "Procurement pipelines", "Real-time inventory tracking"],
      color: "from-amber-500/10 to-orange-500/5",
      borderColor: "hover:border-amber-500/30"
    },
    {
      title: "HRMS & Employee Management",
      description: "Our HRMS platforms simplify workforce management by streamlining attendance, payroll, recruitment, and employee performance processes.",
      icon: ShieldCheck,
      benefits: ["Attendance and leave records", "Payroll processing support", "Manpower compliance checks"],
      color: "from-teal-500/10 to-emerald-500/5",
      borderColor: "hover:border-teal-500/30"
    },
    {
      title: "E-Commerce Solutions",
      description: "We build scalable e-commerce platforms that enable businesses to sell online efficiently, improve customer experiences, and expand their market reach.",
      icon: ShoppingCart,
      benefits: ["Scalable shopping engines", "Payment gateway configurations", "Order fulfilment workflows"],
      color: "from-sky-500/10 to-blue-500/5",
      borderColor: "hover:border-sky-500/30"
    },
    {
      title: "Digital Transformation Consulting",
      description: "We help businesses adopt the right technologies and strategies to modernise operations, improve efficiency, and achieve sustainable growth.",
      icon: Lightbulb,
      benefits: ["Strategic technical audits", "Operational planning roadmaps", "Modern software advisory"],
      color: "from-yellow-500/10 to-amber-500/5",
      borderColor: "hover:border-yellow-500/30"
    }
  ];

  const inclusions = [
    "Initial Business Process Consultation",
    "Requirement Analysis Workshops",
    "Basic UI/UX Design Support",
    "Full Project Documentation",
    "Basic SEO Setup for Websites",
    "Security Best-Practice Configuration",
    "User Training Sessions",
    "Deployment Assistance",
    "Performance Optimisation Review",
    "Post-Go-Live Support Period",
    "Technical Knowledge Transfer",
    "Growth & Scalability Recommendations"
  ];

  return (
    <div ref={containerRef} className="bg-white font-charlieText">

      {/* Services Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-slate-200">
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <FloatingLines />
        </div>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px] z-[1]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl text-center mx-auto">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              OUR SERVICES
            </span>

            <div className="flex flex-col items-center mb-8">
              <BlurText
                text="Technology Services Built For"
                animateBy="words"
                direction="top"
                delay={120}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 font-charlieDisplay leading-tight justify-center"
              />
              <div className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 font-charlieDisplay flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 sm:mt-2 leading-tight">
                <RotatingText
                  texts={["Modern Businesses", "AI-First Operations", "SaaS Scalability", "Process Efficiency"]}
                  mainClassName="text-blue-600"
                  splitBy="characters"
                  staggerDuration={0.03}
                  staggerFrom="first"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </div>

            <p className="max-w-3xl text-base sm:text-lg text-slate-650 leading-relaxed mb-10 mx-auto">
              From custom software development and AI-powered automation to cloud infrastructure and digital transformation, we help organizations streamline operations, accelerate growth, and create measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Decorative Grid Patterns & Ambient Light */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-[0.25em] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              CAPABILITIES
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight">
              Professional software services designed to unlock scale
            </h2>
            <p className="mt-4 text-base text-slate-650 leading-relaxed">
              We apply strict software development principles to deliver robust, high-performance web, cloud, and AI solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, idx) => {
              const Icon = item.icon;
              
              // Define specific hover animations for lucide icons
              let iconAnimClass = "transition-all duration-500 ease-out";
              if (item.title.includes("Mobile")) {
                iconAnimClass += " group-hover:rotate-[-6deg] group-hover:scale-110";
              } else if (item.title.includes("AI") || item.title.includes("Intelligent")) {
                iconAnimClass += " group-hover:scale-110 group-hover:rotate-12";
              } else if (item.title.includes("Automation") || item.title.includes("Workflow")) {
                iconAnimClass += " group-hover:rotate-180";
              } else if (item.title.includes("Website") || item.title.includes("E-Commerce")) {
                iconAnimClass += " group-hover:scale-110 group-hover:translate-x-0.5";
              } else if (item.title.includes("CRM") || item.title.includes("ERP") || item.title.includes("HRMS")) {
                iconAnimClass += " group-hover:-translate-y-0.5 group-hover:scale-105";
              } else if (item.title.includes("Data") || item.title.includes("Analytics")) {
                iconAnimClass += " group-hover:scale-y-110 group-hover:scale-x-105";
              } else {
                iconAnimClass += " group-hover:scale-110";
              }

              return (
                <div
                  key={idx}
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
                  className={`reveal-services group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-[0_30px_60px_rgba(24,104,219,0.08)] ${item.borderColor} transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden`}
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
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon Badge */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 border border-slate-100 transition-all duration-300 group-hover:shadow-sm`}>
                        <Icon className={`w-6 h-6 text-blue-600 ${iconAnimClass}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet Benefits list */}
                    <div className="border-t border-slate-100 pt-6 mt-4">
                      <ul className="space-y-3">
                        {item.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-650">
                            <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Features Included At No Additional Cost */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Soft grid lines and ambient glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-[0.25em] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
              • STANDARD INCLUSIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight">
              Features Included At No Additional Cost
            </h2>
            <p className="mt-4 text-base text-slate-650 leading-relaxed">
              We believe in delivering complete value — not just the core deliverables. Every engagement includes these features at no extra charge, reflecting our commitment to a true growth partnership.
            </p>
          </div>

          {/* Grid Layout for Inclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {inclusions.map((inclusion) => {
              return (
                <div
                  key={inclusion}
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
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(24,104,219,0.04)] hover:border-slate-300 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-default"
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37,99,235,0.03), transparent 85%)`
                    }}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 font-charlieDisplay group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                        {inclusion}
                      </h3>
                      <p className="text-[11px] text-slate-450 mt-1 font-semibold uppercase tracking-wider">
                        Standard Inclusion
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Deliver Solutions */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay mb-6">
              How We Deliver Solutions
            </h2>
            <p className="text-lg text-slate-650">
              A proven delivery framework that transforms ideas into scalable software, automation systems, and AI-powered platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side Timeline */}
            <div className="space-y-8">
              {[
                {
                  title: "Discovery & Consultation",
                  desc: "Understand business objectives, operational challenges, and opportunities for digital transformation."
                },
                {
                  title: "Business Analysis",
                  desc: "Analyze workflows, requirements, and existing systems to identify the best solution approach."
                },
                {
                  title: "Solution Design",
                  desc: "Create scalable architecture, user experiences, workflows, and implementation roadmaps."
                },
                {
                  title: "Development",
                  desc: "Build software applications, automation systems, AI platforms, and digital products."
                },
                {
                  title: "Integration",
                  desc: "Connect cloud services, databases, APIs, third-party systems, and enterprise platforms."
                },
                {
                  title: "Testing & Quality Assurance",
                  desc: "Validate security, reliability, performance, and user experience before launch."
                },
                {
                  title: "Deployment",
                  desc: "Launch solutions smoothly with minimal disruption and production-ready infrastructure."
                },
                {
                  title: "Support & Optimization",
                  desc: "Continuous monitoring, maintenance, enhancements, and optimization for long-term success."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 timeline-item opacity-0"
                >
                  <SplitText
                    text={item.title}
                    tag="h3"
                    splitType="words"
                    delay={50}
                    duration={0.8}
                    from={{ opacity: 0, x: -50 }}
                    to={{ opacity: 1, x: 0 }}
                    className="font-bold text-xl text-slate-900 mt-2"
                    textAlign="left"
                  />
                  <SplitText
                    text={item.desc}
                    tag="p"
                    splitType="lines"
                    delay={20}
                    duration={0.8}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    className="mt-3 text-slate-600 leading-relaxed"
                    textAlign="left"
                  />
                </div>
              ))}
            </div>

            {/* Right Side Image */}
            <div className="sticky top-24">
              <div className="group relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-[0_25px_80px_rgba(37,99,235,0.25)] transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                  alt="Team Collaboration"
                  className="w-full h-[800px] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-700 group-hover:opacity-0" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Expected Outcome */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="reveal-services text-3xl font-bold text-text-main font-charlieDisplay mb-4">
              Expected Outcomes
            </h2>
            <p className="reveal-services text-base text-text-muted">
              Quantifiable visibility, reduced friction, and auditable governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal-services bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Visibility</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Managers gain direct view of task dependencies, documentation, and compliance configurations without manual requests.
              </p>
              <div className="text-2xl font-bold text-blue-650">Improved visibility</div>
            </div>
            <div className="reveal-services bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Audit Overhead</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Manual auditing steps and screenshot gathering for compliance review are replaced by active system exports.
              </p>
              <div className="text-2xl font-bold text-blue-650">Lower coordination overhead</div>
            </div>
            <div className="reveal-services bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Alignment</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Engineering sprints match documented specifications, eliminating planning offsets and reducing rework.
              </p>
              <div className="text-2xl font-bold text-blue-650">Unified Directory States</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Modernise */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-services text-3xl sm:text-4xl font-bold text-text-main font-charlieDisplay mb-6">
            Ready To Modernise Your Business?
          </h2>
          <p className="reveal-services text-base text-text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how custom software, automation, and AI can help your business improve efficiency, increase revenue, and scale with confidence.
          </p>
          <a
            href="mailto:sales@novozinfinity.com?subject=Business%20Consultation%20Request"
            className="brand-button-blue text-sm px-6 py-3 font-semibold rounded-md shadow-sm inline-flex items-center gap-2"
          >
            Email Our Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}