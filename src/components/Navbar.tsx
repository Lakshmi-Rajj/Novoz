import RotatingText from "../animations/RotatingText";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-white font-charlieText">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="Novoz Infinity homepage"
        >

          <img
            src={logo}
            alt="Novoz Infinity"
            className="h-10 w-10 object-contain"
          />

          <div className="flex items-center text-2xl font-black tracking-tight text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>

            <span>Novoz&nbsp;</span>

            <RotatingText
              texts={["Infinity", "∞"]}
              rotationInterval={2500}
              splitBy="characters"
              staggerDuration={0.03}
              mainClassName="text-blue-600 font-extrabold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            />

          </div>

        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <a href="/" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">Home</a>
          <a href="/solutions" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">Solutions</a>
          <a href="/products" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">Products</a>
          <a href="/careers" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">Careers</a>
          <a href="/about" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">About</a>
          <a href="/contact" className="rounded-md px-3 py-2 text-[15px] font-medium text-text-main transition-colors hover:bg-gray-50 hover:text-brand">Contact</a>
        </nav>
         <div className="flex items-center gap-3">
           <a href="mailto:sales@novozinfinity.com?subject=Business%20Consultation%20Request" className="navbar-cta">Email Our Team</a> 
           <button
  onClick={() => navigate('/contact')}
  className="navbar-cta"
>
  Book a Consultation
</button>
        </div>
      </div>
    </header>
  );
}
