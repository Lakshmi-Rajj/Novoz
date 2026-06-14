import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import LiquidChrome from '../animations/LiquidChrome';
import BlurText from '../animations/BlurText';
import LogoLoop from '../animations/LogoLoop';
import CircularGallery from '../animations/CircularGallery';
import businessScaleImg from '../assets/business_analytics_scale.png';
import customSoftwareImg from '../assets/custom_software_dev.png';
import aiSolutionsImg from '../assets/ai_solutions.png';
import businessAutomationImg from '../assets/business_automation.png';
import cloudServicesImg from '../assets/cloud_services.png';
import mobileAppsImg from '../assets/mobile_applications.png';


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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
  {
    src: 'https://cdn.simpleicons.org/react',
    alt: 'React'
  },
  {
    src: 'https://cdn.simpleicons.org/angular',
    alt: 'Angular'
  },
  {
    src: 'https://cdn.simpleicons.org/node.js',
    alt: 'Node.js'
  },
  {
    src: 'https://cdn.simpleicons.org/python',
    alt: 'Python'
  },
  {
    src: 'https://cdn.simpleicons.org/googlecloud',
    alt: 'Google Cloud'
  },
  {
    src: 'https://cdn.simpleicons.org/docker',
    alt: 'Docker'
  },
  {
    src: 'https://cdn.simpleicons.org/mongodb',
    alt: 'MongoDB'
  },
  {
    src: 'https://cdn.simpleicons.org/mysql',
    alt: 'MySQL'
  }
];


const galleryItems = [
  {
    image: customSoftwareImg,
    text: "Custom Software Development",
  },
  {
    image: aiSolutionsImg,
    text: "AI Solutions",
  },
  {
    image: businessAutomationImg,
    text: "Business Automation",
  },
  {
    image: cloudServicesImg,
    text: "Cloud Services",
  },
  {
    image: mobileAppsImg,
    text: "Mobile Applications",
  },
];
  return (
    <div ref={containerRef} className="bg-white font-charlieText">

      {/* Hero Section */}
<section className="relative overflow-hidden min-h-screen border-b border-slate-200">

  {/* Animated Background */}
  <div className="absolute inset-0 z-0">
    <LiquidChrome
      baseColor={[0.08, 0.15, 0.35]}
      speed={0.15}
      amplitude={0.3}
      frequencyX={2}
      frequencyY={1.5}
    />
  </div>

  {/* Glass Overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-[1]" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-7 lg:px-8">

    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

      {/* Badge */}
      <span className="mb-6 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
        TECHNOLOGY SOLUTIONS
      </span>

      {/* Animated Heading */}
      <BlurText
        text="AI-Powered Technology Solutions Built For Business Growth"
        animateBy="words"
        direction="top"
        delay={120}
        stepDuration={0.5}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-main leading-[1.05] mb-8 font-charlieDisplay justify-center"
      />

      {/* Animated Description */}
      <BlurText
        text="We design custom software, automation systems, digital platforms, and AI-powered solutions that help businesses scale faster, operate smarter, and achieve sustainable growth."
        animateBy="words"
        direction="bottom"
        delay={35}
        stepDuration={0.25}
        className="max-w-3xl text-lg lg:text-xl text-text-muted leading-relaxed mb-10 justify-center"
      />

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">

        

      </div>

      {/* Trust Text */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
        <span>Custom Software</span>
        <span>•</span>
        <span>Business Automation</span>
        <span>•</span>
        <span>AI Solutions</span>
        <span>•</span>
        <span>Digital Platforms</span>
      </div>

    </div>

  </div>

</section>

{/* scrool loop */}
<section className="py-16 bg-white border-b border-slate-200">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-10">

      <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">
        TECHNOLOGIES WE WORK WITH
      </span>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        Building Modern Digital Solutions
      </h2>

      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
        We leverage cutting-edge technologies to deliver scalable,
        secure, and high-performance software solutions.
      </p>

    </div>

    <LogoLoop
      logos={logos}
      speed={80}
      direction="left"
      logoHeight={48}
      gap={60}
      pauseOnHover
      fadeOut={false}
      scaleOnHover
    />

  </div>

</section>

     
{/* What We Deliver */}
<section className="py-20 bg-slate-50 border-b border-slate-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-charlieDisplay mb-4">
        What We Deliver
      </h2>

      <p className="max-w-3xl mx-auto text-slate-600">
        Enterprise-grade technology solutions designed to improve efficiency,
        increase revenue, and accelerate business growth.
      </p>
    </div>

    <div className="h-[450px] rounded-3xl overflow-hidden">
      <CircularGallery
        items={galleryItems}
        bend={2}
        textColor="#2563eb"
        borderRadius={0.08}
        scrollSpeed={2}
        scrollEase={0.05}
      />
    </div>

  </div>
</section>
      

      {/* 4. Solutions Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side text */}
            <div className="text-left">
              <h2 className="reveal-home text-3xl sm:text-4xl font-bold tracking-tight text-text-main font-charlieDisplay mb-6">
                Engineered To Help Businesses Scale
              </h2>
              <p className="reveal-home text-base text-slate-600 mb-8 leading-relaxed">
                Novoz Infinity combines software development, automation, artificial intelligence, and strategic consulting to help businesses modernise operations and unlock new growth opportunities.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="reveal-home flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Custom software, ERP, CRM, and workflow management solutions</span>
                </li>
                <li className="reveal-home flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered automation and business intelligence systems</span>
                </li>
                <li className="reveal-home flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ongoing support, optimisation, and long-term technology partnerships</span>
                </li>
              </ul>

              <a
                href="/solutions"
                className="reveal-home inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline group"
              >
                Explore Technology Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
{/* Right side visual: promo graphic */}
<div className="reveal-home relative w-full max-w-[700px] mx-auto">

  <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-3xl" />

  <img
    src={businessScaleImg}
    alt="Business analytics and scale"
    className="relative w-full rounded-3xl border border-slate-200 shadow-2xl object-cover aspect-[4/3] transform transition-all duration-500 hover:scale-[1.02]"
  />

</div>

          </div>
        </div>
      </section>

      {/* 5. Trust & Credibility */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-home text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
            Trust & Credibility
          </h2>

          <div className="reveal-home mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed">
              30+ businesses across retail, logistics, staffing, real estate, food & beverage, and professional services trust Novoz Infinity as their technology growth partner. When our clients win, we win.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="polygon bg-[#1868DB] text-white py-20 px-8 sm:px-12 md:px-20 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="reveal-home text-4xl sm:text-5xl font-bold tracking-tight font-charlieDisplay leading-tight mb-8">
                Let's Build The Future Of Your Business
              </h2>
              <div className="reveal-home flex flex-wrap gap-4 justify-center">
               
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
