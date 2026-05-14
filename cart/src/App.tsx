import { useState, createContext, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, AreaChart, Area, Funnel, FunnelChart, LabelList
} from 'recharts';
import { 
  ChevronRight, ArrowRight, ArrowUp, ShieldCheck, Clock, MapPin, CreditCard, 
  TrendingUp, Users, Search, Brain, Zap, Target, CheckCircle2,
  AlertCircle, Briefcase, Layout, MousePointer2, Settings, Globe, Menu, X
} from 'lucide-react';
import { translations } from './constants';
import { cn } from './lib/utils';

type Language = 'en' | 'ru';
const LanguageContext = createContext<{ 
  lang: Language; 
  setLang: (l: Language) => void; 
  t: typeof translations.en 
}>({ 
  lang: 'en', 
  setLang: () => {}, 
  t: translations.en 
});

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && (urlLang === 'en' || urlLang === 'ru')) {
      setLang(urlLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="max-w-[1440px] mx-auto bg-surface font-sans text-[#1A1A1A] border-4 md:border-8 border-white shadow-2xl relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-8rem)] flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 bg-white">
          <HeroSection />
          <div className="max-w-7xl mx-auto px-4 md:px-10 space-y-24 md:space-y-32 pb-24 md:pb-32">
            <ProblemSection />
            <ResearchSection />
            <HypothesesSection />
            <SolutionsSection />
            <BehavioralSection />
            <ResultsSection />
            <NextStepsSection />
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageContext.Provider>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand transition-colors group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#problem", label: t.nav.process },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#results", label: t.nav.results },
  ];

  return (
    <>
      <nav className={cn(
        "sticky top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b border-gray-100 px-4 md:px-10 flex items-center justify-between",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      )}>
        <a href={lang === 'en' ? "../../en.html" : "../../index.html"} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <span className="font-semibold tracking-tight text-[10px] md:text-sm uppercase leading-tight md:leading-normal max-w-[140px] md:max-w-none">
            {t.nav.caseStudy}
          </span>
        </a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            {menuItems.map(item => (
              <a key={item.href} href={item.href} className="hover:text-brand transition-colors">{item.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center bg-gray-100 p-1 rounded-full">
            <button 
              onClick={() => setLang('en')}
              className={cn(
                "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
                lang === 'en' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-700"
              )}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ru')}
              className={cn(
                "px-3 py-1 text-[10px] font-bold rounded-full transition-all",
                lang === 'ru' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-700"
              )}
            >
              RU
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-brand transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-16 z-40 bg-white border-b border-gray-100 md:hidden p-4 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {menuItems.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-bold text-gray-900 uppercase tracking-widest hover:text-brand transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Language</span>
                <div className="flex items-center bg-gray-100 p-1 rounded-full">
                  <button 
                    onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-bold rounded-full transition-all",
                      lang === 'en' ? "bg-white text-black shadow-sm" : "text-gray-500"
                    )}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => { setLang('ru'); setIsMenuOpen(false); }}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-bold rounded-full transition-all",
                      lang === 'ru' ? "bg-white text-black shadow-sm" : "text-gray-500"
                    )}
                  >
                    RU
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  const { t, lang } = useContext(LanguageContext);

  return (
    <section className="relative pt-12 md:pt-24 pb-12 md:pb-24 overflow-hidden bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-12 space-y-8 md:space-y-10"
        >
          <div className="inline-block px-3 py-1 border border-brand/20 text-brand text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded transition-colors hover:bg-brand/5">
            {t.common.tag}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#1A1A1A] leading-[1.1] md:leading-[0.95] max-w-4xl">
            {lang === 'en' ? (
              <>
                Reducing Cart <span className="text-brand/30">Abandonment</span> Through Product Design
              </>
            ) : (
              <>
                Снижение <span className="text-brand/30">брошенных</span> корзин через продуктовый дизайн
              </>
            )}
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 shrink-0">
              <a href="#solutions" className="px-6 md:px-8 py-3 md:py-4 bg-brand text-white font-bold rounded-xl hover:shadow-xl hover:shadow-brand/20 transition-all flex items-center gap-2 group text-xs md:text-sm whitespace-nowrap">
                {t.common.explore}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-600 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all text-xs md:text-sm whitespace-nowrap">
                {t.common.fullDoc}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden mt-8 md:mt-12 shadow-sm">
            {t.hero.kpis.map((kpi, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={cn(
                  "p-10 space-y-2 group cursor-default transition-all duration-500",
                  i === 0 ? "bg-orange-50/50" : "bg-white hover:bg-gray-50"
                )}
              >
                <div className={cn(
                  "text-4xl font-black tracking-tighter transition-colors",
                  i === 0 ? "text-brand" : "text-gray-900 group-hover:text-brand"
                )}>{kpi.value}</div>
                <div className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-tight">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none lg:block hidden">
        <svg viewBox="0 0 400 400" className="w-full h-full text-brand">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="40" strokeDasharray="20 10" />
          <rect x="100" y="100" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(15 200 200)" />
        </svg>
      </div>
    </section>
  );
}

function ProblemSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="problem" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="01" label={t.problem.title} />
      <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start mt-8 md:mt-16 bg-gray-50/50 rounded-2xl md:rounded-3xl border border-gray-100 overflow-hidden">
        <div className="lg:col-span-12 p-4 md:p-10 lg:p-16 space-y-8 md:space-y-12 bg-white">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A] leading-[1.1] md:leading-[1.05]">
              {t.problem.statement}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.problem.impact.map((item, i) => (
              <div key={i} className="p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 group transition-all hover:bg-white hover:shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand shrink-0">
                  <AlertCircle size={18} />
                </div>
                <span className="font-bold text-xs md:text-sm tracking-tight text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-12 grid lg:grid-cols-2 gap-px bg-gray-100 border-t border-gray-100">
          <div className="bg-white p-4 md:p-10 lg:p-16 space-y-8 md:space-y-10">
            <div>
              <h3 className="text-[9px] md:text-[11px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-6 md:mb-8">{t.problem.funnelTitle}</h3>
              
              <div className="space-y-3 md:space-y-4">
                {t.problem.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4">
                    <div className="flex-1 h-10 md:h-12 bg-gray-50 rounded-lg flex items-center px-4 md:px-6 overflow-hidden relative border border-gray-100 group">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(step.value / 100) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={cn(
                          "absolute left-0 top-0 h-full transition-opacity group-hover:opacity-80",
                          i === 3 ? "bg-brand/30 ring-1 ring-inset ring-brand/20" : i >= 2 ? "bg-brand/20" : "bg-brand/10"
                        )}
                      />
                      <span className="relative text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] truncate">{step.name}</span>
                    </div>
                    <span className={cn(
                      "text-[10px] md:text-[11px] font-black w-10 md:w-12 text-right",
                      i === 3 ? "text-brand" : "text-gray-400"
                    )}>{step.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-4 md:p-10 lg:p-16 flex flex-col justify-center gap-6 md:gap-8 text-white relative h-full">
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              </svg>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand/20 text-brand text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border border-brand/30">
                Synthesis
              </div>
              <p className="text-xl md:text-3xl font-bold tracking-tight leading-tight">
                {t.problem.funnelHighlight}
              </p>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                Analysis of 24k sessions revealed that while intent is high (42% ATC), the complexity of checkout causes a psychological barrier leading to abandonment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  const { t } = useContext(LanguageContext);

  const icons = [TrendingUp, MousePointer2, Users, Target];

  return (
    <section id="research" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="02" label={t.research.title} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden mt-8 md:mt-16 shadow-sm">
        {t.research.cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <div key={i} className="p-4 md:p-10 bg-white space-y-6 md:space-y-8 hover:bg-gray-50 transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1A1A1A] border border-gray-100 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <Icon size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#1A1A1A]">{card.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 font-medium leading-tight">
                      <div className="w-1 h-1 rounded-full bg-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-px bg-gray-100 border border-t-0 border-gray-100 rounded-b-2xl md:rounded-b-3xl overflow-hidden">
        <div className="p-4 md:p-12 bg-[#1A1A1A] text-white space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand/20 text-brand text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border border-brand/30">
            Key Insight
          </div>
          <p className="text-xl md:text-3xl font-bold leading-tight tracking-tight">
            "{t.research.insight}"
          </p>
        </div>
        <div className="p-4 md:p-12 bg-white text-[#1A1A1A] space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
            Primary Goal
          </div>
          <p className="text-xl md:text-3xl font-bold leading-tight tracking-tight">
            "{t.research.goal}"
          </p>
        </div>
      </div>
    </section>
  );
}

function HypothesesSection() {
  const { t, lang } = useContext(LanguageContext);

  return (
    <section id="hypotheses" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="03" label={t.hypotheses.title} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden mt-8 md:mt-16 shadow-sm">
        {t.hypotheses.cards.map((card, i) => (
          <div key={i} className="group p-4 md:p-10 bg-white space-y-6 md:space-y-8 hover:bg-orange-50/30 transition-all relative">
             <div className="text-4xl md:text-5xl font-black text-gray-50 group-hover:text-brand/10 transition-colors leading-none">
              0{i+1}
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-black tracking-tight text-[#1A1A1A]">{card.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-bold">
                {card.desc}
              </p>
            </div>
            <div className="pt-4 md:pt-6 border-t border-gray-50">
              <div className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Business Impact</div>
              <div className={cn(
                "inline-flex px-2 py-0.5 rounded-sm text-[9px] md:text-[10px] font-black uppercase tracking-widest",
                card.impact === 'High' || card.impact === 'Высокий' ? "bg-brand/10 text-brand" : "bg-gray-100 text-gray-500"
              )}>
                {card.impact}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-16 bg-white rounded-2xl border border-border p-4 md:p-12 overflow-hidden">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-8 md:mb-12 text-center">{t.hypotheses.matrixTitle}</h3>
        
        <div className="relative h-[300px] md:h-[400px] w-full max-w-full md:max-w-3xl mx-auto border-l-2 border-b-2 border-gray-200">
          {/* Labels */}
          <div className="absolute -left-8 md:-left-12 top-1/2 -rotate-90 text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Impact</div>
          <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Effort</div>
          
          <div className="absolute top-0 right-0 p-2 md:p-4 text-[7px] md:text-[10px] font-bold text-gray-300 uppercase tracking-widest hidden sm:block">High Impact High Effort</div>
          <div className="absolute top-0 left-0 p-2 md:p-4 text-[7px] md:text-[10px] font-bold text-brand uppercase tracking-widest hidden sm:block">High Impact Low Effort</div>

          <MatrixDot x={15} y={80} label="1" title={lang === 'en' ? "Price Transparency" : "Прозрачные цены"} color="bg-brand" />
          <MatrixDot x={40} y={70} label="2" title={lang === 'en' ? "One-page Checkout" : "One-page чекаут"} color="bg-brand" />
          <MatrixDot x={65} y={30} label="3" title={lang === 'en' ? "Trust System" : "Система доверия"} color="bg-blue-500" />
          <MatrixDot x={80} y={15} label="4" title={lang === 'en' ? "Smart Reminders" : "Напоминания"} color="bg-blue-500" />
        </div>
      </div>
    </section>
  );
}

function MatrixDot({ x, y, label, title, color }: { x: number, y: number, label: string, title: string, color: string }) {
  return (
    <div 
      className="absolute flex flex-col items-center gap-2 group cursor-default" 
      style={{ left: `${x}%`, bottom: `${y}%` }}
    >
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform group-hover:scale-110", color)}>
        {label}
      </div>
      <div className="absolute top-12 whitespace-nowrap text-[10px] font-bold text-gray-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded border border-border">
        {title}
      </div>
    </div>
  );
}

function SolutionsSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="solutions" className="scroll-mt-32">
      <SectionTag prefix="04" label={t.solutions.title} />

      <div className="space-y-40 mt-16">
        <SolutionBlock 
          id="01"
          title={t.solutions.s1.title}
          items={t.solutions.s1.items}
          desc={t.solutions.s1.desc}
          impact={t.solutions.s1.impact}
          effort={t.solutions.s1.effort}
          mockup={<Mockup1 />}
        />
        <SolutionBlock 
          id="02"
          role="reverse"
          title={t.solutions.s2.title}
          items={t.solutions.s2.items}
          desc={t.solutions.s2.desc}
          impact={t.solutions.s2.impact}
          effort={t.solutions.s2.effort}
          mockup={<Mockup2 />}
        />
        <SolutionBlock 
          id="03"
          title={t.solutions.s3.title}
          items={t.solutions.s3.items}
          desc={t.solutions.s3.desc}
          impact={t.solutions.s3.impact}
          effort={t.solutions.s3.effort}
          mockup={<Mockup3 />}
        />
      </div>
    </section>
  );
}

function SolutionBlock({ id, title, items, desc, impact, effort, mockup, role }: any) {
  return (
    <div className={cn("grid lg:grid-cols-12 gap-8 lg:gap-16 items-center", role === 'reverse' && "lg:flex-row-reverse")}>
      <div className={cn("lg:col-span-6 space-y-8 md:space-y-10", role === 'reverse' && "lg:order-2")}>
        <div className="space-y-4 md:space-y-6">
          <div className="text-brand font-black text-5xl md:text-6xl opacity-10">{id}</div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter leading-none md:leading-tight">{title}</h3>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-bold">
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          {items.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-[10px] md:text-xs text-gray-600 font-black uppercase tracking-widest bg-white px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors">
              <CheckCircle2 size={16} className="text-brand shrink-0" />
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
          <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-50 text-gray-400 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-gray-100 flex items-center gap-2">
            Impact: <span className="text-brand">{impact}</span>
          </div>
          <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-50 text-gray-400 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-gray-100 flex items-center gap-2">
            Effort: <span className="text-blue-500">{effort}</span>
          </div>
        </div>
      </div>

      <div className={cn("lg:col-span-6 relative flex items-center justify-center overflow-visible", role === 'reverse' && "lg:order-1")}>
        <div className="relative z-10 bg-white rounded-[24px] md:rounded-[40px] border border-gray-100 shadow-2xl w-full max-w-sm mx-auto flex items-center justify-center p-2 md:p-6 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          <div className="scale-[0.85] md:scale-100 origin-center">
            {mockup}
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="w-full max-w-[240px] border-[6px] border-gray-900 rounded-[40px] h-[480px] bg-white p-4 relative overflow-hidden">
      <div className="w-20 h-5 bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20" />
      <div className="space-y-4 pt-6">
        <div className="h-4 w-12 bg-gray-100 rounded mb-6" />
        <div className="text-sm font-bold border-b border-border pb-2">Your Cart</div>
        <div className="flex justify-between items-center bg-surface p-2 rounded-lg">
           <div className="flex gap-2 items-center">
             <div className="w-8 h-8 bg-gray-200 rounded" />
             <div className="space-y-1">
               <div className="w-16 h-2 bg-gray-300 rounded" />
               <div className="w-8 h-1.5 bg-gray-200 rounded" />
             </div>
           </div>
           <div className="w-10 h-4 bg-gray-200 rounded-full" />
        </div>
        
        <div className="space-y-2 pt-10 border-t border-border mt-10">
           <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
             <span>Subtotal</span>
             <span>$21.40</span>
           </div>
           <div className="flex justify-between text-[10px] text-brand font-bold uppercase tracking-wider">
             <span>Delivery fee</span>
             <span>$2.00</span>
           </div>
           <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
             <span>Service fee</span>
             <span>$1.20</span>
           </div>
           <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-dashed border-border">
             <span>Total</span>
             <span>$24.60</span>
           </div>
        </div>

        <div className="bg-brand/10 p-2 rounded-lg flex items-center gap-2 mt-4">
          <Clock size={12} className="text-brand" />
          <span className="text-[10px] font-bold text-brand">ETA: 25-35 min</span>
        </div>

        <button className="w-full bg-brand h-10 rounded-xl mt-4 flex items-center justify-center text-white text-xs font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}

function Mockup2() {
  return (
    <div className="w-full max-w-[240px] border-[6px] border-gray-900 rounded-[40px] h-[480px] bg-white p-4 relative overflow-hidden">
      <div className="w-20 h-5 bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20" />
      <div className="space-y-4 pt-6">
        <div className="text-sm font-bold border-b border-border pb-2">Checkout</div>
        
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Delivery Address</div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
              <MapPin size={10} className="text-gray-400" />
              <div className="w-24 h-2 bg-gray-300 rounded" />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Payment Method</div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border">
              <CreditCard size={10} className="text-gray-400" />
              <div className="w-24 h-2 bg-gray-300 rounded" />
            </div>
          </div>

          <div className="space-y-1.5">
             <div className="flex justify-between">
               <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Promo Code</div>
               <div className="text-[8px] font-bold text-brand uppercase tracking-widest">Clear</div>
             </div>
             <div className="p-2 rounded-lg border border-dashed border-gray-200 text-[10px] text-gray-400 italic">
               Enter code...
             </div>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-xl border border-border mt-8 flex flex-col gap-2">
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Grand Total</span>
             <span className="text-lg font-black text-gray-900">$24.60</span>
           </div>
           <button className="w-full bg-brand h-10 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-lg shadow-brand/20">
             Place Order
           </button>
        </div>
      </div>
    </div>
  );
}

function Mockup3() {
  return (
    <div className="w-full max-w-[240px] border-[6px] border-gray-900 rounded-[40px] h-[480px] bg-white p-4 relative overflow-hidden">
      <div className="w-20 h-5 bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20" />
      <div className="space-y-4 pt-6">
        <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 flex items-start gap-2">
           <Clock size={14} className="text-brand shrink-0 mt-0.5" />
           <div className="space-y-0.5">
             <div className="text-[8px] font-black text-brand uppercase tracking-widest">Limited Offer</div>
             <div className="text-[9px] text-gray-600 leading-tight">Complete order in 10:00 min to get it in 25-35 min</div>
           </div>
        </div>

        <div className="pt-6 space-y-4">
           <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest text-center">Trust Signals</div>
           <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-surface border border-border flex flex-col items-center gap-1.5 text-center">
                <ShieldCheck size={14} className="text-green-500" />
                <div className="text-[7px] font-bold uppercase text-gray-500">Secure Payment</div>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border flex flex-col items-center gap-1.5 text-center">
                <Clock size={14} className="text-blue-500" />
                <div className="text-[7px] font-bold uppercase text-gray-500">Live Tracking</div>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border flex flex-col items-center gap-1.5 text-center">
                <TrendingUp size={14} className="text-orange-500" />
                <div className="text-[7px] font-bold uppercase text-gray-500">4.8 Restaurant</div>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border flex flex-col items-center gap-1.5 text-center">
                <Zap size={14} className="text-purple-500" />
                <div className="text-[7px] font-bold uppercase text-gray-500">Fast Refund</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function BehavioralSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="behavioral" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="05" label={t.behavioral.title} />

      <div className="mt-8 md:mt-16 space-y-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
        {t.behavioral.principles.map((p, i) => (
          <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-4 md:p-10 bg-white hover:bg-gray-50 transition-all gap-4">
            <div className="flex items-start md:items-center gap-6 md:gap-10">
              <div className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-brand/50 transition-colors w-8 md:w-12">
                0{i + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-tighter">{p.title}</h4>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{p.desc}</p>
              </div>
            </div>
            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={24} className="text-brand" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="results" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="06" label={t.results.title} />

      <div className="grid md:grid-cols-12 gap-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden mt-8 md:mt-16 shadow-sm">
        <div className="md:col-span-9 lg:col-span-9 p-4 md:p-8 lg:p-8 bg-white overflow-hidden">
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <table className="w-full min-w-[380px]">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  {t.results.table.headers.map((h, i) => (
                    <th key={i} className={cn(
                      "pb-4 md:pb-6 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] text-left whitespace-nowrap",
                      i > 0 && "text-right"
                    )}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {t.results.table.rows.map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="py-5 md:py-8 font-black text-sm md:text-base lg:text-lg text-[#1A1A1A]">{row[0]}</td>
                    <td className="py-5 md:py-8 text-right text-[10px] md:text-xs lg:text-sm text-gray-400 font-bold">{row[1]}</td>
                    <td className="py-5 md:py-8 text-right text-sm md:text-base lg:text-lg text-[#1A1A1A] font-black">{row[2]}</td>
                    <td className="py-5 md:py-8 text-right font-black text-brand text-base md:text-lg lg:text-xl">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-3 p-4 md:p-8 lg:p-8 bg-gray-50 space-y-6 md:space-y-12 border-t md:border-t-0 md:border-l border-gray-100">
          <h4 className="text-[10px] md:text-xs font-black text-gray-900 uppercase tracking-[0.3em] border-b border-gray-200 pb-4">{t.results.validation.title}</h4>
          <div className="space-y-6 md:space-y-10">
            {t.results.validation.plans.map((p, i) => (
              <div key={i} className="space-y-2 md:space-y-4 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-125 transition-transform" />
                  <div className="text-[8px] md:text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">{p.title}</div>
                </div>
                <p className="text-[10px] md:text-sm text-gray-400 font-bold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NextStepsSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="next" className="scroll-mt-24 md:scroll-mt-32">
      <SectionTag prefix="07" label={t.nextSteps.title} />

      <div className="mt-8 md:mt-16 relative flex">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden w-full shadow-sm">
           {t.nextSteps.steps.map((step, i) => (
             <div key={i} className="relative z-10 p-6 md:p-10 bg-white flex flex-col items-start gap-6 md:gap-8 group hover:bg-gray-50 transition-all">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1A1A1A] text-white flex items-center justify-center font-black text-[10px] md:text-xs group-hover:bg-brand transition-colors">
                   {i + 1}
                </div>
                <p className="text-[10px] md:text-[11px] font-black text-[#1A1A1A] uppercase tracking-[0.15em] leading-[1.6] whitespace-normal break-words">
                  {step}
                </p>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}

function SectionTag({ prefix, label }: { prefix: string, label: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-brand rounded-lg flex items-center justify-center text-white font-black text-[10px] md:text-xs">
        {prefix}
      </div>
      <div className="h-px w-8 md:w-12 bg-gray-100 md:block hidden" />
      <span className="text-[9px] md:text-[11px] font-black text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">{label}</span>
    </div>
  );
}

function Footer() {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="h-auto md:h-16 py-8 md:py-0 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 bg-white text-[9px] md:text-[10px] font-bold text-gray-400 gap-6 md:gap-8 uppercase tracking-[0.2em] relative z-10 text-center md:text-left">
      <span>{t.common.footerTag}</span>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a href="http://linkedin.com/in/stasdodesign" target="_blank" className="hover:text-brand transition-colors">LinkedIn</a>
        <a href="https://t.me/StasDoDesign" target="_blank" className="hover:text-brand transition-colors">Telegram</a>
        <span className="opacity-50">{t.common.confidential}</span>
      </div>
    </footer>
  );
}
