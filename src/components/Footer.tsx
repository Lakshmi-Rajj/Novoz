export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <a href="/solutions" className="hover:text-blue-600">Solutions</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/careers" className="hover:text-blue-600">Careers</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div> */}

        <div className="flex flex-wrap justify-center gap-6 mt-3 text-sm text-slate-600">
          <span>🇬🇧 Gloucestershire, UK</span>
          <span>🇮🇳 Nagarkovil</span>
          <span>🇮🇳 Chennai</span>
        </div>

        <div className="text-center mt-3">
          <a
            href="mailto:sales@novozinfinity.com"
            className="text-sm text-blue-600 hover:underline"
          >
            sales@novozinfinity.com
          </a>
        </div>

        <div className="text-center mt-2">
          <p className="text-xs text-slate-500">
            © 2026 Novoz Infinity. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}