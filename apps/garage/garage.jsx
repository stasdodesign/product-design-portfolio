export default function CaliforniaGarageDoorRedesign() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-[#C62828] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>24/7 Emergency Garage Door Repair</span>
            <span className="hidden md:block">Licensed • Bonded • Insured</span>
          </div>
          <div className="font-semibold">Call Now: (323) 282-5111</div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#C62828] flex items-center justify-center text-white font-bold text-lg">
              CG
            </div>
            <div>
              <div className="font-bold text-lg">California Garage Repair</div>
              <div className="text-xs text-slate-500">Fast • Licensed • 24/7 Service</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#C62828] transition">Services</a>
            <a href="#" className="hover:text-[#C62828] transition">Service Areas</a>
            <a href="#" className="hover:text-[#C62828] transition">Reviews</a>
            <a href="#" className="hover:text-[#C62828] transition">About</a>
            <a href="#" className="hover:text-[#C62828] transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50 transition">
              Book Service
            </button>
            <button className="px-5 py-3 rounded-xl bg-[#C62828] text-white font-semibold shadow-lg shadow-red-200 hover:opacity-90 transition">
              Call Now
            </button>
          </div>

          <button className="lg:hidden w-11 h-11 rounded-xl border border-slate-300 flex items-center justify-center">
            ☰
          </button>
        </div>

        {/* Mobile Menu Preview */}
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#">Services</a>
            <a href="#">Garage Door Repair</a>
            <a href="#">Emergency Service</a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
            <button className="w-full py-3 rounded-xl bg-[#C62828] text-white font-semibold">
              Call (323) 282-5111
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-2 text-sm font-medium text-[#C62828] shadow-sm mb-6">
              Same-Day Service Across California
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Fast & Reliable
              <span className="text-[#C62828]"> Garage Door Repair</span>
              <br /> Available 24/7
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Licensed California garage door specialists providing emergency repairs,
              spring replacement, opener repair, and same-day service for residential
              and commercial properties.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-7 py-4 rounded-2xl bg-[#C62828] text-white font-semibold text-lg shadow-xl shadow-red-200 hover:opacity-90 transition">
                Call Now
              </button>
              <button className="px-7 py-4 rounded-2xl border border-slate-300 bg-white font-semibold text-lg hover:bg-slate-50 transition">
                Get Free Estimate
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '24/7 Emergency',
                'Licensed & Insured',
                'Fast Response',
                '4.9★ Reviews'
              ].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-sm font-medium text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-60"></div>

            <div className="relative bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)] flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-24 h-24 rounded-full bg-[#C62828] mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                    🔧
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Professional Garage Door Service</h3>
                  <p className="text-slate-600">
                    Modern, trustworthy visual area for technician photography,
                    branded service van, or garage repair imagery.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-slate-200">
                <div className="p-5 text-center border-r border-slate-200">
                  <div className="text-2xl font-bold text-[#C62828]">20+</div>
                  <div className="text-sm text-slate-500">Years</div>
                </div>
                <div className="p-5 text-center border-r border-slate-200">
                  <div className="text-2xl font-bold text-[#C62828]">10k+</div>
                  <div className="text-sm text-slate-500">Repairs</div>
                </div>
                <div className="p-5 text-center">
                  <div className="text-2xl font-bold text-[#C62828]">24/7</div>
                  <div className="text-sm text-slate-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#C62828] flex items-center justify-center font-bold">
                CG
              </div>
              <div>
                <div className="font-bold">California Garage Repair</div>
                <div className="text-sm text-slate-400">24/7 Emergency Service</div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Trusted garage door repair specialists serving homeowners and businesses
              throughout California with same-day and emergency service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Garage Door Repair</li>
              <li>Spring Replacement</li>
              <li>Garage Door Openers</li>
              <li>Emergency Service</li>
              <li>New Garage Doors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Service Areas</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Los Angeles</li>
              <li>Orange County</li>
              <li>San Diego</li>
              <li>Sacramento</li>
              <li>Bay Area</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>(323) 282-5111</li>
              <li>service@californiagaragerepair.com</li>
              <li>24/7 Emergency Availability</li>
              <li>Licensed CSLB Contractor</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between text-sm text-slate-500">
            <div>© 2026 California Garage Repair. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">License Information</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
