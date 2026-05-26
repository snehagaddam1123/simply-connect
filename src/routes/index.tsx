import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  Bot,
  Briefcase,
  Cloud,
  PenTool,
  Zap,
  ShieldCheck,
  Cpu,
  Headphones,
  Layers,
  Rocket,
  Check,
  Star,
  Sun,
  Moon,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  CircleDot,
  TrendingUp,
  Users,
  Award,
  Building2,
  MessageSquare,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — Launch, Scale & Grow Your Business Digitally" },
      {
        name: "description",
        content:
          "Nova is a premium digital agency helping startups launch, scale and grow with world-class web, product, branding and AI services.",
      },
    ],
  }),
  component: Index,
});

/* ---------------- DATA ---------------- */

const services = [
  { icon: Code2, title: "Web Development", desc: "Blazing-fast, scalable web apps built with modern stacks." },
  { icon: Smartphone, title: "App Development", desc: "Native-feel iOS & Android apps users love to open." },
  { icon: PenTool, title: "UI / UX Design", desc: "Interfaces that convert — designed with intent and clarity." },
  { icon: Palette, title: "Branding", desc: "Identities that make your startup unmistakable." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven growth across SEO, paid and content." },
  { icon: Bot, title: "AI Automation", desc: "Custom AI agents that do real work for your business." },
  { icon: Briefcase, title: "Business Consulting", desc: "Strategy, ops and go-to-market guidance from operators." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Secure, observable infra on AWS, GCP & Cloudflare." },
];

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Ship in weeks, not quarters — without sacrificing quality." },
  { icon: Users, title: "Expert Team", desc: "Senior engineers, designers and strategists only." },
  { icon: ShieldCheck, title: "Secure Solutions", desc: "SOC2-ready practices baked into every build." },
  { icon: Cpu, title: "Modern Technology", desc: "React, TypeScript, edge compute and AI by default." },
  { icon: Headphones, title: "24/7 Support", desc: "A real human on Slack, not a ticket queue." },
  { icon: Layers, title: "Scalable Architecture", desc: "Built for your first 100 and your millionth user." },
];

const projects = [
  { tag: "SaaS", title: "Lumen Analytics", desc: "A 0→1 analytics platform that closed $4.2M ARR in 9 months.", color: "from-indigo-500/30 to-violet-500/10" },
  { tag: "Fintech", title: "Northwave Bank", desc: "Reimagined onboarding — cut drop-off by 41%.", color: "from-sky-500/30 to-blue-500/10" },
  { tag: "AI", title: "Helio Agent", desc: "Voice AI for clinics handling 12k+ calls per week.", color: "from-fuchsia-500/30 to-purple-500/10" },
  { tag: "E-commerce", title: "Atlas Goods", desc: "Headless store with a 2.8s LCP and +63% conversion.", color: "from-emerald-500/30 to-teal-500/10" },
  { tag: "SaaS", title: "Forge CRM", desc: "Custom CRM replacing 6 internal tools for a 400-person co.", color: "from-amber-500/30 to-orange-500/10" },
  { tag: "Brand", title: "Mira Studio", desc: "Identity, site and product launch in 5 weeks flat.", color: "from-rose-500/30 to-pink-500/10" },
];
const projectCats = ["All", "SaaS", "Fintech", "AI", "E-commerce", "Brand"];

const pricing = [
  {
    name: "Starter",
    monthly: 1499,
    yearly: 14990,
    desc: "For founders validating an idea or shipping an MVP.",
    features: ["Landing page or MVP", "Brand starter kit", "Up to 3 revisions", "Email support", "2-week delivery"],
  },
  {
    name: "Professional",
    monthly: 3999,
    yearly: 39990,
    desc: "For funded startups scaling product and growth.",
    features: ["Full web/app build", "UI/UX + brand system", "Unlimited revisions", "Priority Slack support", "SEO + analytics", "AI integrations"],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 9999,
    yearly: 99990,
    desc: "For teams that need a senior squad embedded.",
    features: ["Dedicated product squad", "Cloud architecture", "SOC2-ready setup", "24/7 SLA support", "Quarterly strategy", "Custom integrations"],
  },
];

const testimonials = [
  { name: "Aarav Mehta", role: "CEO, Lumen Analytics", text: "Nova rebuilt our product in 7 weeks. Our investors literally clapped on the demo call.", rating: 5 },
  { name: "Sofia Reyes", role: "Founder, Mira Studio", text: "The most thoughtful design team I've ever worked with. Our brand finally matches our ambition.", rating: 5 },
  { name: "Daniel Park", role: "CTO, Northwave", text: "Senior engineers, clean code, and zero drama. They feel like part of our team.", rating: 5 },
  { name: "Priya Shah", role: "Head of Growth, Atlas", text: "Our conversion jumped 63% the month after launch. The site pays for itself weekly.", rating: 5 },
  { name: "Liam O'Connor", role: "VP Product, Forge", text: "They replaced six tools with one beautiful CRM. Onboarding now takes minutes.", rating: 5 },
];

const team = [
  { name: "Elena Vasquez", role: "Founder & CEO", initials: "EV" },
  { name: "Marcus Chen", role: "Head of Engineering", initials: "MC" },
  { name: "Aisha Khan", role: "Design Director", initials: "AK" },
  { name: "Jonas Weber", role: "Head of AI", initials: "JW" },
];

const process = [
  { icon: Sparkles, title: "Discovery", desc: "We dig into your business, users and goals." },
  { icon: PenTool, title: "Planning", desc: "Scope, roadmap and success metrics defined." },
  { icon: Palette, title: "Design", desc: "Interfaces and brand crafted in high fidelity." },
  { icon: Code2, title: "Development", desc: "Senior engineers build, test and harden." },
  { icon: Rocket, title: "Launch", desc: "We ship, monitor and celebrate with you." },
  { icon: Headphones, title: "Support", desc: "Ongoing iteration, optimization and care." },
];

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 5 business days of signing. Discovery starts the same week." },
  { q: "Do you work with non-technical founders?", a: "Absolutely — about 60% of our clients are first-time founders. We translate strategy into product." },
  { q: "What does pricing actually include?", a: "Design, development, project management and post-launch support are all included. No surprise invoices." },
  { q: "Can you take over an existing project?", a: "Yes. We do a free 1-week audit to identify risks before committing to a takeover." },
  { q: "Do you offer equity or revenue-share deals?", a: "For exceptional teams, yes. Reach out and let's talk." },
];

const stats = [
  { value: 240, suffix: "+", label: "Projects Shipped" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 9, suffix: " yrs", label: "Of Experience" },
  { value: 38, suffix: "M+", label: "Revenue Driven" },
];

const logos = ["Lumen", "Northwave", "Helio", "Atlas", "Forge", "Mira", "Quanta", "Vertex"];

/* ---------------- COMPONENTS ---------------- */

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("nova-theme")) as
      | "dark"
      | "light"
      | null;
    const initial = saved ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("nova-theme", next);
  };
  return { theme, toggle };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

function Nav({ theme, toggle }: { theme: string; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Services", "#services"],
    ["Work", "#work"],
    ["Pricing", "#pricing"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 md:px-6 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`}
        style={{ marginInline: "1rem" }}
      >
        <a href="#top" className="flex items-center gap-2 py-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Nova</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90">
            <a href="#contact">
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-foreground/10"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 py-2"
              >
                {label}
              </a>
            ))}
            <Button asChild className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function FadeIn({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- PAGE ---------------- */

function Index() {
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const [showTop, setShowTop] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">
      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <Nav theme={theme} toggle={toggle} />

      {/* HERO */}
      <section className="relative isolate pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-grid" />
        <div className="blob bg-indigo-500 animate-drift left-[-10%] top-[-10%] h-[480px] w-[480px]" />
        <div className="blob bg-violet-500 animate-drift right-[-10%] top-[10%] h-[420px] w-[420px]" style={{ animationDelay: "-4s" }} />
        <div className="blob bg-cyan-400 animate-drift left-[30%] bottom-[-20%] h-[420px] w-[420px]" style={{ animationDelay: "-8s" }} />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-foreground/10 glass px-4 py-1.5 text-xs font-medium text-foreground/70">
              <CircleDot className="h-3 w-3 text-emerald-500" />
              Accepting 4 new clients for Q1
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display mx-auto max-w-4xl text-center text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Launch, Scale & Grow Your{" "}
              <span className="text-gradient">Business Digitally</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base text-foreground/65 md:text-lg">
              Nova is a premium digital studio for ambitious founders. From idea to scale —
              we design, engineer and grow the products investors and users love.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 text-white hover:opacity-90">
                <a href="#contact">Get Started <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-foreground/15 px-7">
                <a href="#contact">Book Consultation</a>
              </Button>
            </div>
          </FadeIn>

          {/* Dashboard mockup */}
          <FadeIn delay={0.35} y={40}>
            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-cyan-400/30 blur-2xl" />
              <div className="animate-float overflow-hidden rounded-2xl border border-foreground/10 glass-strong shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-foreground/50">nova.app / dashboard</span>
                  <div className="w-12" />
                </div>
                {/* Body */}
                <div className="grid gap-4 p-5 md:grid-cols-3">
                  {[
                    { label: "Revenue", value: "$482,310", trend: "+18.2%", icon: TrendingUp },
                    { label: "Active Users", value: "12,840", trend: "+6.4%", icon: Users },
                    { label: "Conversion", value: "4.92%", trend: "+1.1%", icon: Award },
                  ].map((c) => (
                    <div key={c.label} className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/60">{c.label}</span>
                        <c.icon className="h-4 w-4 text-indigo-400" />
                      </div>
                      <div className="mt-2 font-display text-2xl font-semibold">{c.value}</div>
                      <div className="mt-1 text-xs text-emerald-500">{c.trend}</div>
                    </div>
                  ))}
                  {/* Chart */}
                  <div className="md:col-span-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-semibold">Growth this quarter</span>
                      <div className="flex gap-1">
                        {["1W", "1M", "3M", "1Y"].map((p, i) => (
                          <span
                            key={p}
                            className={`rounded-md px-2 py-0.5 text-[10px] ${i === 2 ? "bg-indigo-500/20 text-indigo-300" : "text-foreground/50"}`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg viewBox="0 0 600 140" className="h-32 w-full">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,100 C60,80 100,110 160,70 C220,30 260,90 320,60 C380,30 420,80 480,40 C540,10 580,30 600,20 L600,140 L0,140 Z"
                        fill="url(#g1)"
                      />
                      <path
                        d="M0,100 C60,80 100,110 160,70 C220,30 260,90 320,60 C380,30 420,80 480,40 C540,10 580,30 600,20"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Logos marquee */}
          <FadeIn delay={0.5}>
            <p className="mt-16 text-center text-xs uppercase tracking-widest text-foreground/45">
              Trusted by teams building the future
            </p>
            <div className="mt-6 overflow-hidden">
              <div className="animate-marquee flex w-max gap-12 opacity-60">
                {[...logos, ...logos].map((l, i) => (
                  <span key={i} className="font-display text-xl font-semibold text-foreground/60">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <Section id="about">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">About Nova</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              We help founders turn bold ideas into real businesses.
            </h2>
            <p className="mt-5 text-foreground/65 md:text-lg">
              Nova is a senior-only team of designers, engineers and strategists. We've shipped
              products for YC startups, public companies and indie founders. Our mission is simple:
              make the work that founders dream about, possible.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 p-4">
                <p className="text-xs uppercase text-foreground/50">Mission</p>
                <p className="mt-1 text-sm">Ship work that meaningfully moves a business forward.</p>
              </div>
              <div className="rounded-xl border border-foreground/10 p-4">
                <p className="text-xs uppercase text-foreground/50">Vision</p>
                <p className="mt-1 text-sm">A world where founders are bottlenecked only by ambition.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="lift rounded-2xl border border-foreground/10 glass p-6"
                >
                  <div className="font-display text-4xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Services</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to ship and scale.
            </h2>
            <p className="mt-4 text-foreground/65">
              One senior team — design, engineering, growth and AI under one roof.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04}>
              <div className="lift group h-full rounded-2xl border border-foreground/10 glass p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400 ring-1 ring-indigo-500/20 group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/60">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="!py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Why Nova</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Built for ambitious teams.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.05}>
              <div className="lift h-full rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/15 text-indigo-400">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-foreground/65">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section id="work">
        <FadeIn>
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Selected Work</p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Products our clients are proud of.
              </h2>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-0">
              {projectCats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                    filter === c
                      ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300"
                      : "border-foreground/10 text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                layout
                key={p.title}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="lift group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
              >
                <div className={`relative h-52 bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider">
                    {p.tag}
                  </div>
                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Pricing</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Simple plans. Senior delivery.
            </h2>
            <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-foreground/10 glass p-1">
              {(["monthly", "yearly"] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium capitalize transition ${
                    billing === b ? "text-white" : "text-foreground/60"
                  }`}
                >
                  {billing === b && (
                    <motion.span
                      layoutId="bill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">
                    {b} {b === "yearly" && <span className="ml-1 text-[10px] opacity-80">save 17%</span>}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div
                className={`relative h-full rounded-2xl border p-7 ${
                  p.popular
                    ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-transparent"
                    : "border-foreground/10 bg-foreground/[0.02]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-foreground/60">{p.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">
                    ${(billing === "monthly" ? p.monthly : Math.round(p.yearly / 12)).toLocaleString()}
                  </span>
                  <span className="text-sm text-foreground/50">/mo</span>
                </div>
                <p className="text-xs text-foreground/50">
                  {billing === "yearly" ? `Billed $${p.yearly.toLocaleString()} yearly` : "Billed monthly"}
                </p>
                <Button
                  asChild
                  className={`mt-6 w-full ${
                    p.popular
                      ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90"
                      : ""
                  }`}
                  variant={p.popular ? "default" : "outline"}
                >
                  <a href="#contact">Choose {p.name}</a>
                </Button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-foreground/75">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" className="!py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Loved by founders</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Real words from real clients.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max gap-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[340px] shrink-0 rounded-2xl border border-foreground/10 glass p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-semibold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-foreground/55">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Team</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Senior operators. No juniors.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.05}>
              <div className="lift overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="relative h-44 bg-gradient-to-br from-indigo-500/40 to-violet-500/20">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl font-bold text-white/85">{m.initials}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm text-foreground/60">{m.role}</p>
                  <div className="mt-3 flex gap-2 text-foreground/55">
                    <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" className="!py-24">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Process</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              From kickoff to launch.
            </h2>
          </div>
        </FadeIn>
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="lift relative h-full rounded-2xl border border-foreground/10 glass p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-foreground/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-foreground/60">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* AI CHATBOT TEASER */}
      <Section id="ai" className="!py-20">
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-cyan-500/10 p-8 md:p-14">
          <div className="blob bg-violet-500 right-[-10%] top-[-30%] h-[360px] w-[360px]" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Nova AI</p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Your business, on autopilot.
              </h2>
              <p className="mt-4 text-foreground/70 md:text-lg">
                We deploy AI agents that handle support, qualify leads, draft proposals
                and write code — wired to your stack.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
                  <a href="#contact">See it in action</a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-foreground/10 glass-strong p-5">
              {[
                { who: "you", text: "Summarize today's leads and draft a follow-up." },
                { who: "ai", text: "12 new leads — 4 are high intent (Atlas, Mira, Forge, Helio). Draft sent to your inbox." },
                { who: "you", text: "Create an invoice for Mira Studio: $4,200." },
                { who: "ai", text: "Invoice #INV-0421 created and sent. Payment link: nova.app/i/0421" },
              ].map((m, i) => (
                <div key={i} className={`mb-3 flex ${m.who === "you" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      m.who === "you"
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
                        : "bg-foreground/5 text-foreground/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-2 rounded-full border border-foreground/10 bg-background/40 px-3 py-2">
                <MessageSquare className="h-4 w-4 text-foreground/50" />
                <input
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/40"
                  placeholder="Ask Nova AI anything…"
                />
                <button className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="!py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">FAQ</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-4 text-foreground/65">
              Still curious? Reach out — we usually reply within an hour.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="rounded-2xl border border-foreground/10 glass px-6">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-foreground/10">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/65">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="grid gap-10 md:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Contact</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Let's build something great.
            </h2>
            <p className="mt-4 text-foreground/65">
              Tell us about your project. We'll respond within one business day.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <a href="mailto:hello@nova.studio" className="hover:text-foreground">hello@nova.studio</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <a href="tel:+15551234567" className="hover:text-foreground">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <span>2261 Market Street, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-indigo-400" />
                <span>Remote-first · Working hours overlap globally</span>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-foreground/10">
              <iframe
                title="Nova HQ"
                src="https://maps.google.com/maps?q=san+francisco&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full grayscale"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — we'll be in touch soon.");
              }}
              className="rounded-2xl border border-foreground/10 glass p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" placeholder="Jane Cooper" />
                <Field label="Email" type="email" placeholder="jane@company.com" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Company" placeholder="Acme Inc." />
                <Field label="Budget" placeholder="$10k – $50k" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium text-foreground/70">Project details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about what you're building…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-foreground/10 bg-background/40 px-4 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-indigo-500/40"
                />
              </div>
              <Button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90 h-11">
                Send message <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="mt-3 text-center text-xs text-foreground/45">
                By submitting you agree to our privacy policy.
              </p>
            </form>
          </FadeIn>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-foreground/10 mt-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold">Nova</span>
            </div>
            <p className="mt-3 text-sm text-foreground/60 max-w-xs">
              A premium digital studio helping founders launch and scale.
            </p>
            <div className="mt-4 flex gap-3 text-foreground/55">
              <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            </div>
          </div>
          <FooterCol title="Services" items={["Web Development", "App Development", "Branding", "AI Automation"]} />
          <FooterCol title="Company" items={["About", "Work", "Process", "Contact"]} />
          <div>
            <h4 className="font-display text-sm font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-foreground/60">Monthly insights on building great products.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Subscribed."); }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-foreground/10 bg-background/40 px-3 py-2 text-sm outline-none placeholder:text-foreground/40 focus:border-indigo-500/40"
              />
              <Button type="submit" size="sm" className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
                Join
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-foreground/10 py-6">
          <p className="mx-auto max-w-7xl px-5 md:px-8 text-center text-xs text-foreground/50">
            © {new Date().getFullYear()} Nova Studio. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating CTA / back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-xl hover:scale-105 transition"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-foreground/70">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-background/40 px-4 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-indigo-500/40"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
