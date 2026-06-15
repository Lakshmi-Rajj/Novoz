import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-white font-charlieText shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo Link */}
        <a
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Novoz Infinity homepage"
        >
          <img
            src={logo}
            alt="Novoz Infinity Logo"
            className="h-10 w-10 object-contain"
          />
          <div 
            className="flex items-center text-2xl font-black tracking-tight text-slate-900 font-charlieDisplay" 
          >
            <span>Novoz&nbsp;</span>
            <span className="text-blue-600 font-extrabold">Infinity</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <a href="/" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">Home</a>
          <a href="/services" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">Services</a>
          <a href="/products" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">Products</a>
          <a href="/careers" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">Careers</a>
          <a href="/about" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">About</a>
          <a href="/contact" className="nav-link-custom rounded-md px-3 py-2 text-[15px] font-medium text-text-main hover:text-brand">Contact</a>
        </nav>

        {/* Desktop CTA Action Buttons / Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="mailto:sales@novozinfinity.com?subject=Business%20Consultation%20Request" 
              className="navbar-cta"
            >
              Email Our Team
            </a> 
            <button
              onClick={() => navigate('/contact')}
              className="navbar-cta cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
          onClick={closeMenu} 
        />
        
        {/* Sliding Panel */}
        <div 
          className={`absolute inset-y-0 right-0 w-full max-w-[320px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-out transform flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <span className="text-lg font-bold text-slate-900 font-charlieDisplay">Menu</span>
              <button 
                onClick={closeMenu} 
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              <a 
                href="/" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                Home
              </a>
              <a 
                href="/services" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                Services
              </a>
              <a 
                href="/products" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                Products
              </a>
              <a 
                href="/careers" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                Careers
              </a>
              <a 
                href="/about" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                About
              </a>
              <a 
                href="/contact" 
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="border-t border-slate-100 pt-6 mt-6 flex flex-col gap-3">
            <a 
              href="mailto:sales@novozinfinity.com?subject=Business%20Consultation%20Request" 
              className="navbar-cta text-center py-3 w-full"
              onClick={closeMenu}
            >
              Email Our Team
            </a>
            <button
              onClick={() => { closeMenu(); navigate('/contact'); }}
              className="navbar-cta text-center py-3 w-full cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
