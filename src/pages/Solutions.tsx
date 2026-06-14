import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import FloatingLines from '../animations/FloatingLines';
import BlurText from '../animations/BlurText';
import {
  MessageSquareText,
  Users,
  ReceiptText,
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import SplitText from '../animations/SplitText';


export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
 const services = [
  {
    title: "Custom Software Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    description:
      "Enterprise applications, ERP systems, CRM platforms, workflow management tools, and scalable business software tailored to your requirements."
  },

  {
    title: "AI & Intelligent Solutions",
    image:
      "https://images.unsplash.com/photo-1674027392842-1c2b6f7b3d56?auto=format&fit=crop&w=1400&q=80",
    description:
      "AI-powered assistants, predictive analytics, machine learning solutions, intelligent automation, and business intelligence systems."
  },

  {
    title: "Business Process Automation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    description:
      "Automate repetitive workflows, approvals, reporting, and operational processes to improve efficiency and reduce costs."
  },

  {
    title: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    description:
      "Cloud migration, infrastructure modernization, AWS deployment, and secure scalable architectures."
  },

  {
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Native and cross-platform mobile applications delivering seamless digital experiences."
  },

  {
    title: "Data Analytics & Reporting",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    description:
      "Interactive dashboards, analytics platforms, reporting systems, and business insights."
  }
];

  const [currentService, setCurrentService] = useState(0);
  const [activeSolution, setActiveSolution] = useState('wavoz');
  const contentRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentService((prev: number) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentService(
      (prev: number) => (prev - 1 + services.length) % services.length
    );
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll('.reveal-solutions'),
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

  useEffect(() => {
    if (contentRef.current) {
      // Clean up/kill existing animations on these items to prevent conflicts
      gsap.killTweensOf(contentRef.current.querySelectorAll('.animate-dashboard-item'));
      
      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-dashboard-item'),
        { opacity: 0, y: 15, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power2.out',
          overwrite: 'auto'
        }
      );
    }
  }, [activeSolution]);

  return (
    <div ref={containerRef} className="bg-white font-charlieText">

      {/* Solutions Hero */}

      <section className="relative min-h-screen overflow-hidden border-b border-slate-200">

        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <FloatingLines />
        </div>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px] z-[1]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl text-center mx-auto">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              OUR SOLUTIONS
            </span>

            <BlurText
              text="Technology Solutions Built For Modern Businesses"
              animateBy="words"
              direction="top"
              delay={120}
              className="text-5xl sx:text-6xl lg:text-7xl mx-autofont-bold text-slate-900 font-charlieDisplay leading-tight mb-8"
            />

            <p className="max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
              From custom software development and AI-powered automation
              to cloud infrastructure and digital transformation,
              we help organizations streamline operations, accelerate growth,
              and create measurable business impact.
            </p>

            <div className="flex flex-wrap gap-4">



            </div>

          </div>

        </div>

      </section>



      {/* 2. Solutions Suite Showcase */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
        
        {/* Decorative Grid Patterns & Ambient Light */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-[0.25em] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Interactive Showcase
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight">
              Proprietary Platforms Built For Modern Enterprise
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Explore how our suite of specialized, AI-powered software solutions streamlines operations, automates complex workflows, and accelerates growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.30fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Product Selector Controls */}
            <div className="space-y-4 md:space-y-5">
              {[
                {
                  id: 'wavoz',
                  name: 'WAVOZ',
                  pill: 'Customer Engagement',
                  tagline: 'AI-Powered WhatsApp Business Platform',
                  description: 'Automate customer communication, lead capturing, support routing, and internal workflows through a single WhatsApp-based workspace.',
                  icon: MessageSquareText,
                  color: 'from-blue-500 to-indigo-500'
                },
                {
                  id: 'hrmvoz',
                  name: 'HRMVOZ',
                  pill: 'HR Operations',
                  tagline: 'AI-Powered Human Resource Management System',
                  description: 'Simplify attendance, leave, payroll processing, recruitment, and performance insight tools for your growing distributed team.',
                  icon: Users,
                  color: 'from-violet-500 to-purple-500'
                },
                {
                  id: 'invoz',
                  name: 'INVOZ',
                  pill: 'Financial Systems',
                  tagline: 'AI-Driven Billing & Invoicing Software',
                  description: 'Replace manual billing with GST-ready invoicing, automated payments monitoring, real-time ledgers, and inventory workflows.',
                  icon: ReceiptText,
                  color: 'from-emerald-500 to-teal-500'
                },
                {
                  id: 'workforz',
                  name: 'WORKFORZ',
                  pill: 'Workforce Compliance',
                  tagline: 'Workforce Management & Labour Outsourcing',
                  description: 'Built for manpower teams managing compliance, attendance, real-time deployment, compliance tracking, and client billing in one place.',
                  icon: BriefcaseBusiness,
                  color: 'from-orange-500 to-amber-500'
                }
              ].map((solution) => {
                const Icon = solution.icon;
                const isActive = activeSolution === solution.id;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveSolution(solution.id)}
                    className={`group w-full text-left p-6 rounded-2xl border transition-all duration-300 relative flex gap-5 items-start ${
                      isActive
                        ? 'bg-white border-blue-500/30 shadow-[0_12px_30px_rgba(24,104,219,0.06)] text-slate-900'
                        : 'bg-transparent border-transparent text-slate-500 hover:bg-white/40 hover:border-slate-200/50 hover:text-slate-800'
                    }`}
                  >
                    {isActive && (
                      <div className={`absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl bg-gradient-to-b ${solution.color}`} />
                    )}
                    
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${solution.color} text-white scale-105`
                        : 'bg-slate-100 border border-slate-200/60 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200/30'
                    }`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-lg font-bold font-charlieDisplay transition-colors ${
                          isActive ? 'text-blue-900 font-bold' : 'text-slate-700 group-hover:text-slate-900'
                        }`}>
                          {solution.name}
                        </h3>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          isActive
                            ? 'bg-blue-50 border-blue-100 text-blue-600'
                            : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}>
                          {solution.pill}
                        </span>
                      </div>
                      <p className={`text-xs font-semibold mt-1 mb-2 ${
                        isActive ? 'text-blue-600' : 'text-slate-550'
                      }`}>
                        {solution.tagline}
                      </p>
                      {isActive && (
                        <p className="text-xs text-slate-600 leading-relaxed transition-all duration-305">
                          {solution.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Mock Browser Console */}
            <div className="relative rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(9,30,66,0.06)] overflow-hidden aspect-[4/3] p-1.5 flex flex-col z-10">
              
              {/* Mock Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/80 shrink-0 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/90" />
                </div>
                
                {/* Address Bar */}
                <div className="flex-grow max-w-[280px] mx-auto rounded-lg bg-white border border-slate-200/80 py-1 px-3 text-[10px] text-slate-500 font-mono text-center truncate shadow-sm">
                  novozinfinity.com/console/{activeSolution}
                </div>

                <div className="w-[36px]" /> {/* Spacer to center address bar */}
              </div>

              {/* Viewport Content Area with smooth GSAP crossfade */}
              <div ref={contentRef} className="flex-grow flex flex-col overflow-hidden relative bg-slate-50">
                
                {activeSolution === 'wavoz' && (
                  <div className="flex-grow flex flex-col bg-slate-50 text-slate-800 font-charlieText text-xs h-full">
                    <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 bg-white select-none">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-slate-900">WAVOZ Live Workspace</span>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium">WhatsApp Cloud API</span>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-[130px_1fr_130px] overflow-hidden h-full">
                      {/* Left pane: chat list */}
                      <div className="border-r border-slate-200/80 bg-white/50 p-2.5 space-y-1.5 overflow-y-auto">
                        <div className="text-[9px] font-bold text-slate-400 uppercase px-1 mb-2 tracking-wider">Active Leads</div>
                        
                        <div className="animate-dashboard-item p-2 rounded-xl bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-900 flex items-center gap-2 shadow-sm">
                          <div className="w-4 h-4 rounded-full bg-blue-600 text-[9px] flex items-center justify-center font-bold text-white shrink-0">JD</div>
                          <span className="truncate">John Doe</span>
                        </div>
                        <div className="animate-dashboard-item p-2 rounded-xl bg-white/70 border border-slate-200/60 text-[10px] text-slate-600 flex items-center gap-2 hover:bg-white shrink-0">
                          <div className="w-4 h-4 rounded-full bg-indigo-500 text-[9px] flex items-center justify-center font-bold text-white shrink-0">SL</div>
                          <span className="truncate">Sarah Lee</span>
                        </div>
                        <div className="animate-dashboard-item p-2 rounded-xl bg-white/70 border border-slate-200/60 text-[10px] text-slate-600 flex items-center gap-2 hover:bg-white shrink-0">
                          <div className="w-4 h-4 rounded-full bg-purple-500 text-[9px] flex items-center justify-center font-bold text-white shrink-0">MK</div>
                          <span className="truncate">Mark King</span>
                        </div>
                      </div>

                      {/* Center pane: active chat */}
                      <div className="flex flex-col bg-slate-50 overflow-hidden">
                        <div className="flex-grow p-3 space-y-3 overflow-y-auto">
                          <div className="animate-dashboard-item flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white border border-slate-200/80 p-2.5 text-slate-700 shadow-sm leading-normal">
                              <p className="font-semibold text-[9px] text-slate-400 mb-0.5">John Doe</p>
                              Can you send the pricing sheets and specifications?
                            </div>
                          </div>
                          <div className="animate-dashboard-item flex justify-end">
                            <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-blue-600 p-2.5 text-white shadow-md shadow-blue-500/10 leading-normal">
                              <p className="font-semibold text-[9px] text-blue-200 mb-0.5 font-charlieDisplay">WAVOZ AI Assistant</p>
                              Sent! I have auto-generated your customized pricing proposal.pdf. Let me know if you have any questions!
                            </div>
                          </div>
                          <div className="animate-dashboard-item flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white border border-slate-200/80 p-2.5 text-slate-700 shadow-sm leading-normal">
                              <p className="font-semibold text-[9px] text-slate-400 mb-0.5">John Doe</p>
                              Wow, that was fast. Let's schedule a call tomorrow.
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-2.5 border-t border-slate-200/80 bg-white/80 flex items-center gap-2">
                          <div className="flex-grow rounded-lg bg-slate-100/60 border border-slate-200 px-3 py-1.5 text-slate-400 text-[10px]">
                            Typing automated suggestion...
                          </div>
                          <button className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-[10px] font-bold hover:bg-blue-700 transition-colors shrink-0">Send</button>
                        </div>
                      </div>

                      {/* Right pane: sentiment & tags */}
                      <div className="p-3 space-y-4 bg-white/80 border-l border-slate-200/80">
                        <div className="animate-dashboard-item">
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Sentiment</div>
                          <div className="text-[12px] font-black text-emerald-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            98% Positive
                          </div>
                        </div>
                        <div className="animate-dashboard-item">
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Deal Score</div>
                          <div className="text-[12px] font-black text-slate-900">A+ High Intent</div>
                        </div>
                        <div className="animate-dashboard-item">
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Auto Tags</div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-medium bg-blue-50 border border-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-center truncate">Warm Lead</span>
                            <span className="text-[9px] font-medium bg-purple-50 border border-purple-100 text-purple-600 rounded-md px-2 py-0.5 text-center truncate">Meeting Set</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSolution === 'hrmvoz' && (
                  <div className="flex-grow flex flex-col bg-slate-50 text-slate-800 font-charlieText text-xs h-full">
                    <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 bg-white select-none">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" />
                        <span className="font-semibold text-slate-900">HRMVOZ Employee Hub</span>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium">Active Shift: General</span>
                    </div>

                    <div className="flex-grow p-4 flex flex-col gap-4 overflow-hidden h-full">
                      {/* Key Stats Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Headcount</div>
                          <div className="text-base font-black text-slate-900 mt-1">142 Employees</div>
                        </div>
                        <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Attendance</div>
                          <div className="text-base font-black text-emerald-600 mt-1">97.6% Present</div>
                        </div>
                        <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Leaves Today</div>
                          <div className="text-base font-black text-amber-600 mt-1">2 Pending</div>
                        </div>
                      </div>

                      {/* Employees List Table */}
                      <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col flex-grow shadow-sm">
                        <div className="grid grid-cols-[100px_90px_1fr_70px] gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                          <span>Employee</span>
                          <span>Role</span>
                          <span>Deployment Site</span>
                          <span>Status</span>
                        </div>
                        <div className="flex-grow overflow-y-auto divide-y divide-slate-100 px-1">
                          <div className="grid grid-cols-[100px_90px_1fr_70px] gap-2 items-center px-2 py-2.5 text-slate-700">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 text-[9px] flex items-center justify-center font-bold text-blue-700 shrink-0">AS</div>
                              <span className="truncate font-semibold">Alex Smith</span>
                            </div>
                            <span className="text-slate-500 truncate">Software Dev</span>
                            <span className="truncate text-slate-500">Main Office • Hanger 1</span>
                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full text-center py-0.5">On Time</span>
                          </div>
                          <div className="grid grid-cols-[100px_90px_1fr_70px] gap-2 items-center px-2 py-2.5 text-slate-700">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-5 h-5 rounded-full bg-violet-100 border border-violet-200 text-[9px] flex items-center justify-center font-bold text-violet-700 shrink-0">ML</div>
                              <span className="truncate font-semibold">Megan Lee</span>
                            </div>
                            <span className="text-slate-500 truncate">HR Partner</span>
                            <span className="truncate text-slate-500">Chennai Hub • Remote</span>
                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full text-center py-0.5">On Time</span>
                          </div>
                          <div className="grid grid-cols-[100px_90px_1fr_70px] gap-2 items-center px-2 py-2.5 text-slate-700">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 text-[9px] flex items-center justify-center font-bold text-amber-700 shrink-0">RK</div>
                              <span className="truncate font-semibold">Ryan King</span>
                            </div>
                            <span className="text-slate-500 truncate">Product Mgr</span>
                            <span className="truncate text-slate-500">Main Office • Hub A</span>
                            <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-100 rounded-full text-center py-0.5">On Leave</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSolution === 'invoz' && (
                  <div className="flex-grow flex flex-col bg-slate-50 text-slate-800 font-charlieText text-xs h-full">
                    <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 bg-white select-none">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-slate-900">INVOZ Billings Portal</span>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium">GST-Ready Ledger</span>
                    </div>

                    <div className="flex-grow p-4 grid grid-cols-[1fr_130px] gap-4 overflow-hidden h-full">
                      <div className="flex flex-col gap-4 overflow-hidden">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Gross Billing</div>
                            <div className="text-base font-black text-slate-900 mt-1">$38,250.00</div>
                            <span className="text-[9px] text-emerald-600 font-medium flex items-center gap-0.5 mt-0.5">↑ 12.5% this month</span>
                          </div>
                          <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Receivables</div>
                            <div className="text-base font-black text-rose-600 mt-1">$1,850.00</div>
                            <span className="text-[9px] text-slate-400 font-medium mt-0.5">2 Overdue Invoices</span>
                          </div>
                        </div>

                        <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col flex-grow shadow-sm">
                          <div className="grid grid-cols-[80px_1fr_60px_50px] gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            <span>Invoice ID</span>
                            <span>Client Name</span>
                            <span>Amount</span>
                            <span>Status</span>
                          </div>
                          <div className="flex-grow overflow-y-auto divide-y divide-slate-100 px-1">
                            <div className="grid grid-cols-[80px_1fr_60px_50px] gap-2 items-center px-2 py-2 text-slate-700">
                              <span className="font-mono text-slate-400 text-[10px]">#INV-26-092</span>
                              <span className="truncate font-semibold">Acme Corp</span>
                              <span className="font-bold text-slate-900">$4,800.00</span>
                              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded text-center py-0.5">Paid</span>
                            </div>
                            <div className="grid grid-cols-[80px_1fr_60px_50px] gap-2 items-center px-2 py-2 text-slate-700">
                              <span className="font-mono text-slate-400 text-[10px]">#INV-26-093</span>
                              <span className="truncate font-semibold">Globex Ltd</span>
                              <span className="font-bold text-slate-900">$1,250.00</span>
                              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded text-center py-0.5">Paid</span>
                            </div>
                            <div className="grid grid-cols-[80px_1fr_60px_50px] gap-2 items-center px-2 py-2 text-slate-700">
                              <span className="font-mono text-slate-400 text-[10px]">#INV-26-094</span>
                              <span className="truncate font-semibold">Initech Co</span>
                              <span className="font-bold text-slate-900">$1,850.00</span>
                              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-100 rounded text-center py-0.5">Unpaid</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm space-y-4">
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 tracking-wider">Automated Tasks</div>
                          <div className="space-y-2">
                            <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                              <p className="font-semibold text-slate-900 text-[10px]">Invoice Dispatch</p>
                              <p className="text-[9px] text-slate-400 mt-0.5">Acme Corp via WhatsApp Cloud API.</p>
                            </div>
                            <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                              <p className="font-semibold text-slate-900 text-[10px]">Tax Calculation</p>
                              <p className="text-[9px] text-slate-400 mt-0.5">18% GST mapped automatically.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSolution === 'workforz' && (
                  <div className="flex-grow flex flex-col bg-slate-50 text-slate-800 font-charlieText text-xs h-full">
                    <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 bg-white select-none">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                        <span className="font-semibold text-slate-900">WORKFORZ Deployment</span>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium">Timeline: Live Feed</span>
                    </div>

                    <div className="flex-grow p-4 grid grid-cols-[1fr_130px] gap-4 overflow-hidden h-full">
                      <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 flex flex-col overflow-hidden shadow-sm">
                        <div className="text-[9px] font-bold text-slate-400 uppercase mb-3 tracking-wider">Active Deployment Timeline</div>
                        <div className="flex-grow overflow-y-auto space-y-4 px-1 py-1">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-semibold text-slate-900">Site A - Construction Hub</span>
                              <span className="text-emerald-600 font-semibold">12 Active Workers</span>
                            </div>
                            <div className="h-6 rounded-lg bg-slate-50 border border-slate-200 relative overflow-hidden">
                              <div className="absolute inset-y-0 left-[10%] w-[80%] bg-orange-500/10 border-l border-r border-orange-500 flex items-center px-2">
                                <span className="text-[8px] text-orange-700 font-semibold truncate">Shift 1 (08:00 AM - 04:00 PM) - 100% Compliant</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-semibold text-slate-900">Warehouse B - Logistics</span>
                              <span className="text-emerald-600 font-semibold">8 Active Workers</span>
                            </div>
                            <div className="h-6 rounded-lg bg-slate-50 border border-slate-200 relative overflow-hidden">
                              <div className="absolute inset-y-0 left-[25%] w-[60%] bg-orange-500/10 border-l border-r border-orange-500 flex items-center px-2">
                                <span className="text-[8px] text-orange-700 font-semibold truncate">Shift 2 (10:00 AM - 06:00 PM) - 100% Compliant</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-semibold text-slate-900">Retail C - Dispatch Hub</span>
                              <span className="text-amber-600 font-semibold">4 Deploying</span>
                            </div>
                            <div className="h-6 rounded-lg bg-slate-50 border border-slate-200 relative overflow-hidden">
                              <div className="absolute inset-y-0 left-[45%] w-[45%] bg-slate-100 border-l border-dashed border-slate-350 flex items-center px-2">
                                <span className="text-[8px] text-slate-500 font-medium truncate">Shift 3 (02:00 PM - 10:00 PM) - Dispatching</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="animate-dashboard-item rounded-xl border border-slate-200 bg-white p-3 shadow-sm space-y-4">
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase mb-2 tracking-wider">Compliance</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-200 text-[10px]">
                              <span className="text-slate-500">PF Audit</span>
                              <span className="text-emerald-600 font-bold">100%</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-200 text-[10px]">
                              <span className="text-slate-500">ESIC Law</span>
                              <span className="text-emerald-600 font-bold">100%</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2 border border-slate-200 text-[10px]">
                              <span className="text-slate-500">License</span>
                              <span className="text-emerald-600 font-bold">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              OUR SERVICES
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay mb-6">
              Technology Solutions That Drive Growth
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of software,
              automation, AI, and digital transformation services.
            </p>

          </div>

          <div className="relative">

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:bg-blue-50"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:bg-blue-50"
            >
              <ChevronRight size={24} />
            </button>

            {/* Card */}
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl">

              <img
                src={services[currentService].image}
                alt={services[currentService].title}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-blue-600 mb-4">
                  {services[currentService].title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {services[currentService].description}
                </p>

              </div>

            </div>

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

      <p className="text-lg text-slate-600">
        A proven delivery framework that transforms ideas into scalable
        software, automation systems, and AI-powered platforms.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* Left Side */}
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
            className="border-l-4 border-blue-600 pl-6"
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
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
            alt="Workflow Dashboard"
            className="
              w-full
              h-[800px]
              object-cover
              grayscale
              transition-all
              duration-700
              ease-out
              group-hover:grayscale-0
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/50
              via-black/10
              to-transparent
              transition-all
              duration-700
              group-hover:opacity-0
            "
          />

        </div>

      </div>

    </div>

  </div>

</section>
      {/* 4. Expected Outcome */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="reveal-solutions text-3xl font-bold text-text-main font-charlieDisplay mb-4">
              Expected Outcomes
            </h2>
            <p className="reveal-solutions text-base text-text-muted">
              Quantifiable visibility, reduced friction, and auditable governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal-solutions bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Visibility</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Managers gain direct view of task dependencies, documentation, and compliance configurations without manual requests.
              </p>
              <div className="text-2xl font-bold text-blue-600">Improved visibility</div>
            </div>
            <div className="reveal-solutions bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Audit Overhead</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Manual auditing steps and screenshot gathering for compliance review are replaced by active system exports.
              </p>
              <div className="text-2xl font-bold text-blue-600">Lower coordination overhead</div>
            </div>
            <div className="reveal-solutions bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Alignment</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Engineering sprints match documented specifications, eliminating planning offsets and reducing rework.
              </p>
              <div className="text-2xl font-bold text-blue-600">Unified Directory States</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          
          <h2 className="reveal-solutions text-3xl sm:text-4xl font-bold text-text-main font-charlieDisplay mb-6">
            Ready To Modernise Your Business?
          </h2>

          <p className="reveal-solutions text-base text-text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how custom software, automation, and AI can help your business improve efficiency, increase revenue, and scale with confidence.
          </p>

          <a
            href="mailto:sales@novozinfinity.com?subject=Business%20Consultation%20Request"
            className="brand-button-blue text-sm px-6 py-3 font-semibold rounded-md shadow-sm inline-flex items-center gap-2"
          >
            Email Our Team
          </a>
          

        </div>
      </section>


    </div>
  );
}
