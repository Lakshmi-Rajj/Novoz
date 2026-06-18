import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Award, Heart, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../animations/BlurText';
import ProfileCard from '../animations/ProfileCard';
import { useNavigate } from 'react-router-dom';
import MagicBento from '../animations/MagicBento';
import RotatingText from '../animations/RotatingText';

gsap.registerPlugin(ScrollTrigger);

function CountUp({ end, duration = 1.5, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let start = 0;
    const endVal = end;
    if (start === endVal) return;

    let timer: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const totalMiliseconds = duration * 1000;
          const stepTime = Math.abs(Math.floor(totalMiliseconds / endVal));

          timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === endVal) {
              clearInterval(timer);
            }
          }, Math.max(stepTime, 16));

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [end, duration]);

  return <h3 ref={elementRef} className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-charlieDisplay">{count}{suffix}</h3>;
}

interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

const journeyItems: JourneyItem[] = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Started as a small freelance team of 3 passionate technology professionals delivering software solutions for local businesses.'
  },
  {
    year: '2024',
    title: 'Building Experience',
    description: 'Successfully completed multiple freelance projects, expanded technical expertise, and built long-term relationships with clients across different industries.'
  },
  {
    year: 'February 2025',
    title: 'Growing Together',
    description: 'The team expanded to 15 talented professionals, bringing together developers, designers, analysts, and technology specialists under one vision.'
  },
  {
    year: '2025',
    title: 'Novoz Infinity Was Born',
    description: 'Officially established Novoz Infinity with a mission to help businesses transform through Software, Automation, AI, and Digital Innovation.'
  },
  {
    year: '2025',
    title: 'Trusted Mid-Market Partner',
    description: 'Delivered successful projects for growing businesses, earning trust through quality execution, transparency, and measurable business outcomes.'
  },
  {
    year: 'Today',
    title: 'Focused on the Future',
    description: 'Helping organizations accelerate growth through enterprise software, AI-powered solutions, business automation, and scalable digital products.'
  },
  {
    year: 'Tomorrow',
    title: 'The Vision Ahead',
    description: 'To become one of the most trusted technology partners for businesses worldwide, driving innovation through software, automation, and artificial intelligence.'
  }
];

export default function About() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll('.reveal-about'),
        { opacity: 0, y: 20 },
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

      const items = el.querySelectorAll('.work-step');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.work-steps-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      const journeySteps = el.querySelectorAll('.journey-step');
      gsap.fromTo(
        journeySteps,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.journey-timeline-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-white font-charlieText selection:bg-brand/10 selection:text-brand animate-fade">

      {/* About Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center border-b border-slate-200 premium-mesh">
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full mb-6 shadow-sm animate-pulse reveal-about">
              ABOUT NOVOZ INFINITY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-slate-900 font-charlieDisplay leading-tight mb-6 flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1 reveal-about">
              <span>Designing the technical foundation for</span>
              <span style={{
                background: 'linear-gradient(135deg, #1868DB 0%, #2563EB 50%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
                className="inline-block"
              >
                <RotatingText
                  texts={["business scale", "automated speed", "digital growth", "modern success"]}
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2800}
                />
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-650 leading-relaxed mb-8 reveal-about">
              Novoz Infinity is an engineering team composed of software designers, automation specialists, and cloud architects. We operate as dedicated technology partners to build secure, robust platforms that support our clients' scaling goals.
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <div>
                <CountUp end={30} suffix="+" />
                <p className="text-xs text-slate-550 uppercase tracking-wider font-semibold mt-1">Businesses Served</p>
              </div>
              <div className="w-px bg-slate-200 hidden sm:block" />
              <div>
                <CountUp end={4} suffix="+" />
                <p className="text-xs text-slate-550 uppercase tracking-wider font-semibold mt-1">Proprietary Products</p>
              </div>
              <div className="w-px bg-slate-200 hidden sm:block" />
              <div>
                <CountUp end={100} suffix="%" />
                <p className="text-xs text-slate-550 uppercase tracking-wider font-semibold mt-1">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Overview & Mission */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
                OUR PURPOSE
              </span>

              <BlurText
                text="Transforming Businesses Through Technology & Innovation"
                animateBy="words"
                direction="top"
                delay={120}
                className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay leading-tight mb-8"
              />

              <BlurText
                text="Novoz Infinity is a technology solutions company helping businesses modernise operations through custom software, automation systems, digital platforms, and AI-powered solutions. We work as long-term technology partners, helping organisations improve efficiency, accelerate growth, and stay competitive in a rapidly evolving digital world."
                animateBy="words"
                direction="bottom"
                delay={40}
                className="text-lg text-slate-600 leading-relaxed mb-10"
              />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">

                <div className="group">
                  <h3 className="text-4xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    30+
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Businesses Served
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-4xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    9+
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Proprietary Products
                  </p>
                </div>

              </div>

            </div>

            {/* Right Content */}
            <div className="space-y-6">

              {/* Mission */}
              <div className="fall-card group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]">

                <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase">
                  Mission
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900 font-charlieDisplay">
                  Empower Businesses Through Technology
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  To empower businesses with scalable technology solutions that
                  drive efficiency, innovation, and measurable business outcomes.
                </p>

              </div>

              {/* Vision */}
              <div className="fall-card-delay group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
                <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase">
                  Vision
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900 font-charlieDisplay">
                  Become The Most Trusted Growth Partner
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  To become the most trusted technology growth partner by delivering
                  intelligent software, automation, and AI solutions that create
                  lasting impact.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Profile Card */}
            <div className="flex justify-center">
              <ProfileCard
                name="Richie Allan S"
                title="Founder & CEO"
                handle="novozinfinity"
                status="Building The Future"
                contactText="Connect"
                onContactClick={() => navigate('/contact')}
              />
            </div>

            {/* Right Side - Founder Message */}
            <div>

              <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
                LEADERSHIP
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay leading-tight mb-6">
                Meet Our Founder
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Novoz Infinity, we believe technology should do more than solve
                problems—it should create opportunities for growth. Our mission is to
                help businesses embrace innovation through software, automation, and
                AI-driven solutions that deliver measurable results.
              </p>

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-xl italic text-slate-700 leading-relaxed">
                  "When our clients grow, we grow. Every solution we build is designed
                  to create lasting business impact."
                </p>

                <div className="mt-4">
                  <h4 className="font-bold text-slate-900">
                    Richie Allan S
                  </h4>

                  <p className="text-sm text-slate-500">
                    Founder & CEO, Novoz Infinity
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-6">
              OUR PATH
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay leading-tight mb-6">
              The Evolution of Novoz Infinity
            </h2>
            <p className="text-lg text-slate-600">
              Our growth story, tracking how we evolved from a small team of software designers into a robust technology partner.
            </p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 sm:ml-8 space-y-12 journey-timeline-container">
            {journeyItems.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 journey-step opacity-0">
                {/* Node indicator */}
                <div className="absolute -left-[7px] top-2.5 w-3.5 h-3.5 rounded-full border border-blue-600 bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10">
                  {/* Date/Year Badge */}
                  <div className="sm:w-36 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full font-charlieDisplay tracking-wide">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              OUR CORE VALUES
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-charlieDisplay">
              Principles That Drive Everything We Build
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
              Our values shape how we innovate, collaborate, and deliver
              technology solutions that create measurable business impact.
            </p>
          </div>

          <div className="flex justify-center">
            <MagicBento
              glowColor="37, 99, 235"
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              clickEffect={true}
              enableMagnetism={true}
            />
          </div>

        </div>
      </section>
      {/* How We Work Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              HOW WE WORK
            </span>

            <BlurText
              text="A Proven Process For Delivering Business Impact"
              animateBy="words"
              direction="top"
              delay={120}
              className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay leading-tight mb-6 justify-center"
            />

            <p className="text-lg text-slate-600">
              From discovery to deployment, we follow a structured approach that
              ensures every solution aligns with your business goals.
            </p>

          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-8 work-steps-container">

            {/* Step 1 */}
            <div className="relative group work-step opacity-0">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 transition-all duration-300 group-hover:scale-110">
                01
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Discover
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We begin by understanding your business objectives, challenges,
                workflows, and opportunities for growth.
              </p>

            </div>

            {/* Step 2 */}
            <div className="relative group work-step opacity-0">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 transition-all duration-300 group-hover:scale-110">
                02
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Strategize
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Our experts create a technology roadmap tailored to your goals,
                ensuring the right solutions for long-term success.
              </p>

            </div>

            {/* Step 3 */}
            <div className="relative group work-step opacity-0">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 transition-all duration-300 group-hover:scale-110">
                03
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Build
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We design, develop, and deploy scalable software, automation
                systems, and AI-powered solutions.
              </p>

            </div>

            {/* Step 4 */}
            <div className="relative group work-step opacity-0">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 transition-all duration-300 group-hover:scale-110">
                04
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Scale
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We provide ongoing optimization, support, and innovation to help
                your business grow and adapt over time.
              </p>

            </div>

          </div>

        </div>
      </section>
      {/* Global Presence & Impact */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b border-slate-200">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              GLOBAL PRESENCE
            </span>

            <BlurText
              text="Driving Business Growth Across Regions"
              animateBy="words"
              direction="top"
              delay={120}
              className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay mb-6 justify-center"
            />

            <p className="text-lg text-slate-600">
              We partner with businesses across industries, delivering innovative
              technology solutions that create measurable impact and sustainable growth.
            </p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div
              className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                2+
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Global Locations
              </p>

              <p className="text-sm text-slate-600">
                Expanding our presence and serving clients across multiple regions.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                30+
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Businesses Served
              </p>

              <p className="text-sm text-slate-600">
                Helping organizations modernize operations through technology.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                100+
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Projects Delivered
              </p>

              <p className="text-sm text-slate-600">
                Successfully building software, automation, and AI solutions.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                24/7
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Client Support
              </p>

              <p className="text-sm text-slate-600">
                Continuous support and optimization for long-term business growth.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Achievements */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6">
              ACHIEVEMENTS
            </span>

            <BlurText
              text="Milestones That Reflect Real Business Impact"
              animateBy="words"
              direction="top"
              delay={120}
              className="text-4xl lg:text-5xl font-bold text-slate-900 font-charlieDisplay leading-tight mb-6 justify-center"
            />

            <p className="text-lg text-slate-600">
              Since our founding, Novoz Infinity has grown rapidly — earning the trust of businesses
              across industries and delivering measurable results through technology. Our achievements
              reflect our commitment to quality, partnership, and real business impact.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                30+ businesses have trusted Novoz Infinity with their digital transformation journey
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                Delivered solutions across multiple industries including retail, food &amp; beverage,
                real estate, staffing, logistics, and professional services
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                Successfully launched 4 proprietary software products — WAVOZ, HRMVOZ, INVOZ, and WORKFORZ
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                Offices and presence across 3 locations: United Kingdom, Kanyakumari, and Chennai
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                Built a track record of on-time, on-scope delivery with a 100% client retention
                rate on long-term partnerships
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
              <Heart className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-slate-700 leading-relaxed">
                Recognised as a trusted MSME-focused technology partner, combining enterprise-grade
                capability with accessibility and affordability
              </p>
            </div>

          </div>

        </div>
      </section>

      

      

    </div>
  );
}