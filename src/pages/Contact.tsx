import React, { useState } from 'react';
import { Phone, Mail, CalendarCheck, MapPin, Clock, Globe } from 'lucide-react';
import GlareHover from "../animations/GlareHover.tsx";
// Globe is still used in the business hours bar below

// Replace this URL with your actual Google Form link
/* eslint-disable @typescript-eslint/no-unused-vars */
const GOOGLE_FORM_URL = 'https://forms.gle/yE3b6EVNfSj96u999';

// ─── EmailJS config ─────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail / Outlook) → copy the Service ID below
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{phone}}, {{company}}, {{country}}, {{to_email}}
//    Set "To Email" in the template to: sales@novozinfinity.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_27mjbzm';
const EMAILJS_TEMPLATE_ID = 'template_kebpnzo';
const EMAILJS_PUBLIC_KEY  = 'u_J4H0F9Tw85Carm-';
/* eslint-enable @typescript-eslint/no-unused-vars */
// ────────────────────────────────────────────────────────────────────────────

const inputCls =
  'w-full h-10 px-3 rounded-md border border-slate-300 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition';

function ContactForm() {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
  });
  const [error, setError]     = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!fields.firstName || !fields.lastName || !fields.email || !fields.country) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStatus('sending');

    try {
      // Dynamically load EmailJS so you don't need to install an npm package
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm' as unknown as string) as unknown as {
        send: (serviceId: string, templateId: string, templateParams: Record<string, string>, publicKey: string) => Promise<unknown>
      };

      await emailjs.send(
        'service_27mjbzm',
        'template_kebpnzo',
        {
          from_name: `${fields.firstName} ${fields.lastName}`,
          from_email: fields.email,
          phone:      fields.phone  || '—',
          company:    fields.company || '—',
          country:    fields.country,
          to_email:   'sales@novozinfinity.com',
        },
        'u_J4H0F9Tw85Carm-'
      );

      setStatus('sent');
      setFields({ firstName: '', lastName: '', email: '', phone: '', company: '', country: '' });
    } catch (err) {
      console.error(err);
      setStatus('failed');
    }
  };

  return (
    <section className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101214] font-charlieDisplay mb-3">
            Get In Touch
          </h2>
          <p className="text-base text-slate-500">
            Complete the form to connect with our team about your project or requirements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-10">
          <p className="text-sm text-slate-600 mb-8 text-center leading-relaxed">
            Share your details and a brief description of what you're looking to achieve. Our team will be in touch within one business day.
          </p>

          <div className="space-y-4">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={inputCls}
                  value={fields.firstName}
                  onChange={set('firstName')}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={inputCls}
                  value={fields.lastName}
                  onChange={set('lastName')}
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={inputCls}
                  value={fields.email}
                  onChange={set('email')}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={inputCls}
                  value={fields.phone}
                  onChange={set('phone')}
                  placeholder="+44 7700 000000"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company / Organisation
              </label>
              <input
                type="text"
                className={inputCls}
                value={fields.company}
                onChange={set('company')}
                placeholder="Acme Ltd."
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={inputCls}
                value={fields.country}
                onChange={set('country')}
                placeholder="United Kingdom"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-500 mt-4">{error}</p>
          )}

          {status === 'sent' && (
            <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-5 py-4">
              <p className="text-sm font-semibold text-green-700">Message sent! ✓</p>
              <p className="text-xs text-green-600 mt-0.5">We'll be in touch within one business day.</p>
            </div>
          )}

          {status === 'failed' && (
            <p className="text-xs text-red-500 mt-4">Something went wrong. Please try emailing us directly at sales@novozinfinity.com</p>
          )}

          <p className="text-xs text-slate-500 mt-6 mb-6 leading-relaxed">
            We're committed to your privacy. Novoz Infinity uses the information you provide to contact you about our relevant products and services. You may unsubscribe from these communications at any time.
          </p>

          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            className="brand-button-blue text-sm rounded-md px-8 py-3 inline-block font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Submit'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="bg-white font-charlieText">

      {/* ── HERO SECTION — Atlassian-style centered with geometric blue background ── */}
      <section className="relative overflow-hidden border-b border-blue-100" style={{ background: '#dce8fb' }}>
        {/* Geometric SVG shapes — mirroring Atlassian's abstract polygon pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large left pentagon-ish shape */}
          <polygon points="−60,80 260,20 320,200 140,340 −60,300" fill="#b8d0f5" opacity="0.7" />
          {/* Top-right large shape */}
          <polygon points="1100,−30 1460,60 1460,260 1180,310 980,120" fill="#b8d0f5" opacity="0.65" />
          {/* Centre-left mid shape */}
          <polygon points="180,160 420,90 500,280 260,360 80,290" fill="#cddcf8" opacity="0.5" />
          {/* Centre circle */}
          <circle cx="720" cy="380" r="200" fill="#c4d9f7" opacity="0.4" />
          {/* Bottom-right accent */}
          <polygon points="1060,220 1340,180 1400,380 1100,420 920,370" fill="#a8c8f4" opacity="0.45" />
          {/* Top-centre small accent */}
          <polygon points="580,−20 780,10 800,100 600,120 500,60" fill="#d4e5fa" opacity="0.55" />
        </svg>

        {/* Centred text content */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#101214] font-charlieDisplay leading-tight mb-5">
            Contact Us About<br />Novoz Infinity
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We would love to hear from you. Whether you are looking to start a new project, explore our products, or simply learn more about how Novoz Infinity can help your business grow — reach out to our team today.
          </p>
        </div>
      </section>

      {/* ── 3 CONTACT ACTION CARDS ── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Call us */}
<GlareHover
  width="100%"
  height="100%"
  background="#ffffff"
  borderRadius="16px"
  borderColor="#e2e8f0"
  glareColor="#2563EB"
  glareOpacity={0.12}
  glareSize={300}
  className="p-8 flex flex-col items-center text-center gap-4 min-h-[260px]"
>
  <Phone className="w-8 h-8 text-slate-700" strokeWidth={1.5} />

  <div>
    <h3 className="text-base font-semibold text-slate-800 mb-1">
      Call us directly
    </h3>

    <p className="text-xs text-slate-500 mb-3">
      Mon–Fri, 9 AM–6 PM IST / 9 AM–5 PM GMT
    </p>
  </div>

  <a
    href="mailto:sales@novozinfinity.com"
    className="text-sm font-semibold text-blue-600 hover:underline"
  >
    sales@novozinfinity.com
  </a>
</GlareHover>

            {/* Card 2: Email our team */}
<GlareHover
  width="100%"
  height="100%"
  background="#ffffff"
  borderRadius="16px"
  borderColor="#e2e8f0"
  glareColor="#2563EB"
  glareOpacity={0.12}
  glareSize={300}
  className="p-8 flex flex-col items-center text-center gap-4 min-h-[260px]"
>
  <Mail className="w-8 h-8 text-slate-700" strokeWidth={1.5} />

  <div>
    <h3 className="text-base font-semibold text-slate-800 mb-1">
      Email our team
    </h3>

    <p className="text-xs text-slate-500 mb-3">
      We typically respond within one business day
    </p>
  </div>

  <a
    href="mailto:sales@novozinfinity.com?subject=Business%20Enquiry"
    className="brand-button-blue text-sm rounded-md px-5 py-2.5 inline-block"
  >
    Email Sales
  </a>
</GlareHover>

            {/* Card 3: Get a product demo */}
<GlareHover
  width="100%"
  height="100%"
  background="#ffffff"
  borderRadius="16px"
  borderColor="#e2e8f0"
  glareColor="#2563EB"
  glareOpacity={0.12}
  glareSize={300}
  className="p-8 flex flex-col items-center text-center gap-4 min-h-[260px]"
>
  <CalendarCheck className="w-8 h-8 text-slate-700" strokeWidth={1.5} />

  <div>
    <h3 className="text-base font-semibold text-slate-800 mb-1">
      Get a product demo
    </h3>

    <p className="text-xs text-slate-500 mb-3">
      Fill in our short form and we'll get in touch
    </p>
  </div>

<div className="gradient-button-wrapper">
  <a
    href={"https://forms.gle/w6JMRSagAyMH8eMY8"}
    target="_blank"
    rel="noopener noreferrer"
    className="gradient-button"
  >
    Get a Demo →
  </a>
</div>
</GlareHover>

          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH FORM SECTION ── */}
      <ContactForm />

      {/* ── LOCATION SECTION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
              Our locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101214] font-charlieDisplay max-w-2xl leading-tight">
              Global presence, local expertise
            </h2>
            <p className="text-base text-slate-500 mt-4 max-w-2xl leading-relaxed">
              Novoz Infinity operates from three strategic locations — giving us the ability to serve clients across the United Kingdom, South Asia, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* UK */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">United Kingdom</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 font-charlieDisplay mb-2">Gloucestershire</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Block No 1, 238 Bristol Road<br />
                Gloucestershire, GL15TA<br />
                United Kingdom
              </p>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Our UK headquarters serves as our international base of operations, enabling us to serve clients across Europe and manage global partnerships.
              </p>
            </div>

            {/* Nagarkovil */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">India</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 font-charlieDisplay mb-2">Nagarkovil, Kanyakumari</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                118/21, Colachel<br />
                Kanyakumari, Tamil Nadu<br />
                India
              </p>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                A key delivery and development centre, housing engineers, designers, and business analysts who power our project execution.
              </p>
            </div>

            {/* Chennai */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">India</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 font-charlieDisplay mb-2">Chennai, Tamil Nadu</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                100 Feet Road, Tharamani<br />
                Chennai, Tamil Nadu<br />
                India
              </p>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Our Chennai office extends our presence in one of India's most important technology hubs, serving clients across South India with speed and agility.
              </p>
            </div>

          </div>

          {/* Business hours bar */}
          <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Clock className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Business Hours</p>
              <p className="text-sm text-slate-500 mt-0.5">
                Monday to Friday — 9:00 AM to 6:00 PM IST &nbsp;·&nbsp; 9:00 AM to 5:00 PM GMT
              </p>
            </div>
            <div className="sm:ml-auto">
              <a
                href="https://www.novozinfinity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <Globe className="w-4 h-4" />
                www.novozinfinity.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}