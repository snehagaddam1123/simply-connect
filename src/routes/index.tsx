import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartBusiness.ltd — Manage Everything. From One Place." },
      {
        name: "description",
        content:
          "From leads to invoices, calls to social media — manage everything your business needs from a single, intelligent dashboard.",
      },
      { property: "og:title", content: "StartBusiness.ltd — Manage Everything. From One Place." },
      {
        property: "og:description",
        content: "All-in-one business management SaaS with 6 modules and AI built in.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const CSS = `
:root{
  --bg:#ffffff;
  --ink:#0e1424;
  --ink-2:#1a2238;
  --muted:#5b6478;
  --line:#ececf2;
  --soft:#fafbff;

  --coral:#ff7a6b;     --coral-soft:#ffece8;
  --sky:#4aa8ff;       --sky-soft:#e6f2ff;
  --mint:#3fc79a;      --mint-soft:#e2f7ee;
  --lavender:#9b7cff;  --lavender-soft:#efe9ff;
  --peach:#ffb072;     --peach-soft:#fff0de;
  --sage:#7bb39a;      --sage-soft:#e6f1eb;
  --rose:#ff8db1;      --rose-soft:#ffe7ef;

  --dark:#0b1023;
  --serif:'Fraunces', ui-serif, Georgia, serif;
  --sans:'DM Sans', ui-sans-serif, system-ui, sans-serif;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
a{color:inherit;text-decoration:none}
img{max-width:100%}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
h1,h2,h3,h4{font-family:var(--serif);font-weight:700;letter-spacing:-0.02em;color:var(--ink);margin:0}
p{color:var(--muted);line-height:1.65;margin:0}

/* NAV */
.nav{position:sticky;top:0;z-index:50;transition:all .3s ease;background:transparent}
.nav.scrolled{background:rgba(255,255,255,.72);backdrop-filter:saturate(180%) blur(16px);-webkit-backdrop-filter:saturate(180%) blur(16px);border-bottom:1px solid rgba(15,23,42,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;gap:24px}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-weight:800;font-size:21px;letter-spacing:-0.02em}
.brand .logo{width:32px;height:32px;border-radius:10px;background:conic-gradient(from 200deg,var(--coral),var(--lavender),var(--sky),var(--mint),var(--coral));box-shadow:0 6px 18px -8px rgba(155,124,255,.6)}
.brand span{color:var(--lavender)}
.nav-links{display:flex;gap:30px}
.nav-links a{font-size:14.5px;color:var(--muted);font-weight:500;transition:color .2s}
.nav-links a:hover{color:var(--ink)}
.nav-cta{display:flex;gap:10px;align-items:center}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 20px;border-radius:999px;font-weight:600;font-size:14.5px;cursor:pointer;border:1px solid transparent;transition:transform .2s ease, box-shadow .25s ease, background .2s, border-color .2s;font-family:var(--sans)}
.btn-primary{background:var(--coral);color:#fff}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(255,122,107,.55)}
.btn-dark{background:var(--ink);color:#fff}
.btn-dark:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(15,23,42,.5)}
.btn-ghost{background:#fff;color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--ink)}
.btn-lav{background:var(--lavender);color:#fff}
.btn-lav:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(155,124,255,.55)}
.hamburger{display:none;background:none;border:none;cursor:pointer;padding:6px;flex-direction:column;gap:5px}
.hamburger span{width:22px;height:2px;background:var(--ink);border-radius:2px;display:block}
.mob{display:none}
@media (max-width:880px){
  .nav-links,.nav-cta .btn{display:none}
  .nav-cta .btn-primary{display:inline-flex}
  .hamburger{display:flex}
  .mob.open{display:block;position:absolute;top:72px;left:0;right:0;background:#fff;border-bottom:1px solid var(--line);padding:18px 24px;box-shadow:0 20px 40px -20px rgba(0,0,0,.12)}
  .mob a{display:block;padding:12px 0;font-weight:500;color:var(--ink-2);border-bottom:1px solid var(--line)}
  .mob a:last-child{border-bottom:none}
}

/* HERO */
.hero{position:relative;padding:80px 0 70px;overflow:hidden}
.hero::before{content:"";position:absolute;top:-160px;right:-160px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,var(--lavender-soft),transparent 70%);z-index:0}
.hero::after{content:"";position:absolute;bottom:-180px;left:-140px;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,var(--coral-soft),transparent 70%);z-index:0}
.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center}
@media (max-width:980px){.hero-grid{grid-template-columns:1fr;gap:50px}}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--lavender);background:var(--lavender-soft);padding:7px 14px;border-radius:999px}
.hero h1{font-size:clamp(40px,6.2vw,72px);line-height:1.02;margin:18px 0 18px}
.hero h1 em{font-style:italic;color:var(--coral);font-weight:600}
.hero p.lead{font-size:18px;max-width:580px}
.hero-cta{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.proof{display:flex;align-items:center;gap:12px;margin-top:26px;color:var(--muted);font-size:14px}
.dots{display:flex}
.dots span{width:28px;height:28px;border-radius:50%;border:2px solid #fff;margin-left:-8px;display:inline-block}
.dots span:nth-child(1){background:var(--coral);margin-left:0}
.dots span:nth-child(2){background:var(--sky)}
.dots span:nth-child(3){background:var(--mint)}
.dots span:nth-child(4){background:var(--lavender)}

/* Dashboard mock */
.dash-wrap{position:relative}
.dash{position:relative;background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 40px 80px -30px rgba(15,23,42,.25),0 8px 20px -10px rgba(15,23,42,.06);animation:float 6s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.dash-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.dash-head .dot{width:10px;height:10px;border-radius:50%;background:var(--mint);box-shadow:0 0 0 4px rgba(63,199,154,.18)}
.dash-title{font-weight:700;font-size:14px;color:var(--ink)}
.dash-sub{font-size:12px;color:var(--muted)}
.dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.metric{padding:16px;border-radius:16px;border:1px solid var(--line);background:#fff}
.metric.coral{background:var(--coral-soft)}
.metric.sky{background:var(--sky-soft)}
.metric.mint{background:var(--mint-soft)}
.metric.lav{background:var(--lavender-soft)}
.metric .k{font-size:12px;color:var(--muted);font-weight:600}
.metric .v{font-family:var(--serif);font-size:24px;font-weight:700;margin-top:6px;color:var(--ink)}
.metric .d{font-size:11px;font-weight:600;margin-top:4px;color:var(--mint)}
.bars{margin-top:14px;display:flex;gap:6px;align-items:flex-end;height:80px;padding:14px;border-radius:14px;background:linear-gradient(180deg,#fbf9ff,#fff);border:1px solid var(--line)}
.bars span{flex:1;background:linear-gradient(180deg,var(--lavender),#c8b8ff);border-radius:6px;opacity:.9}
.bars span:nth-child(3n){background:linear-gradient(180deg,var(--coral),#ffb6ad)}
.bars span:nth-child(4n){background:linear-gradient(180deg,var(--sky),#a8d5ff)}
.floaty{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 18px 40px -16px rgba(15,23,42,.2);font-size:13px;font-weight:600;color:var(--ink-2);z-index:2}
.floaty.a{top:-18px;left:-20px;animation:float 5s ease-in-out infinite}
.floaty.b{bottom:-18px;right:-14px;animation:float 7s ease-in-out infinite reverse}
.pill-ico{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;color:#fff;font-size:14px}

/* SECTION */
section{padding:100px 0;position:relative}
.section-head{text-align:center;max-width:720px;margin:0 auto 60px}
.section-head h2{font-size:clamp(32px,4.4vw,52px);line-height:1.08}
.section-head h2 em{font-style:italic;color:var(--coral);font-weight:600}
.section-head p{margin-top:14px;font-size:17px}

/* MODULES */
.modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:22px}
.mod{position:relative;background:#fff;border:1px solid var(--line);border-radius:22px;padding:30px;overflow:hidden;transition:transform .3s ease, box-shadow .3s ease}
.mod:hover{transform:translateY(-8px);box-shadow:0 30px 60px -25px rgba(15,23,42,.16)}
.mod::before{content:"";position:absolute;top:0;left:0;right:0;height:5px;background:var(--accent)}
.mod .num{font-family:var(--serif);font-size:13px;color:var(--muted);font-weight:600;letter-spacing:.18em}
.mod .ico{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;background:var(--soft-c);color:var(--accent);font-size:22px;margin:14px 0 18px}
.mod h3{font-size:22px;margin-bottom:10px}
.mod p{font-size:14px;margin-bottom:18px}
.tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px;background:var(--soft-c);color:var(--accent)}

.mod.lav{--accent:var(--lavender);--soft-c:var(--lavender-soft)}
.mod.sky{--accent:var(--sky);--soft-c:var(--sky-soft)}
.mod.peach{--accent:var(--peach);--soft-c:var(--peach-soft)}
.mod.coral{--accent:var(--coral);--soft-c:var(--coral-soft)}
.mod.mint{--accent:var(--mint);--soft-c:var(--mint-soft)}
.mod.sage{--accent:var(--sage);--soft-c:var(--sage-soft)}

/* HOW IT WORKS */
.how-wrap{background:linear-gradient(180deg,#fff,var(--lavender-soft) 60%, #fff)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative}
.steps::before{content:"";position:absolute;top:42px;left:12%;right:12%;height:2px;background:repeating-linear-gradient(90deg,var(--lavender) 0 8px,transparent 8px 16px);z-index:0}
@media (max-width:820px){.steps{grid-template-columns:1fr}.steps::before{display:none}}
.step{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px 24px;text-align:center;z-index:1;transition:transform .3s}
.step:hover{transform:translateY(-6px)}
.step .circle{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;margin:0 auto 18px;font-family:var(--serif);font-size:24px;font-weight:700;color:#fff}
.step:nth-child(1) .circle{background:var(--coral)}
.step:nth-child(2) .circle{background:var(--sky)}
.step:nth-child(3) .circle{background:var(--lavender)}
.step h3{font-size:20px;margin-bottom:10px}
.step p{font-size:14.5px}

/* AI */
.ai{background:var(--dark);color:#fff;border-radius:32px;margin:60px 24px;padding:80px 0;position:relative;overflow:hidden}
.ai::before{content:"";position:absolute;top:-100px;right:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(155,124,255,.25),transparent 70%)}
.ai::after{content:"";position:absolute;bottom:-120px;left:-80px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(74,168,255,.18),transparent 70%)}
.ai .container{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
@media (max-width:920px){.ai .container{grid-template-columns:1fr}}
.ai h2{color:#fff;font-size:clamp(32px,4.2vw,48px);line-height:1.1}
.ai h2 em{color:#c9b8ff;font-style:italic;font-weight:600}
.ai p{color:#a8aec0;margin-top:14px;font-size:17px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.chip{padding:9px 15px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);font-size:13px;font-weight:500;display:inline-flex;align-items:center;gap:8px}
.chip .glow{width:8px;height:8px;border-radius:50%;background:var(--lavender);box-shadow:0 0 12px var(--lavender)}
.chat{background:#13162a;border:1px solid rgba(255,255,255,.08);border-radius:22px;padding:22px;box-shadow:0 30px 80px -30px rgba(0,0,0,.6)}
.msg{display:flex;gap:12px;margin-bottom:14px}
.msg .av{width:34px;height:34px;border-radius:10px;background:var(--lavender);display:grid;place-items:center;font-weight:700;font-size:12px;flex-shrink:0;color:#fff}
.msg.user .av{background:#2a2f4a}
.bub{background:rgba(255,255,255,.05);padding:12px 14px;border-radius:14px;font-size:14px;line-height:1.55;color:#e6e8f0}
.msg.user .bub{background:rgba(155,124,255,.18);color:#fff}
.bub strong{color:#fff}

/* PRICING */
.pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:24px;max-width:900px;margin:0 auto}
.plan{position:relative;background:#fff;border:1px solid var(--line);border-radius:24px;padding:38px;transition:transform .3s, box-shadow .3s}
.plan:hover{transform:translateY(-6px);box-shadow:0 30px 60px -25px rgba(15,23,42,.15)}
.plan.best{border:2px solid var(--lavender);background:linear-gradient(180deg,var(--lavender-soft) 0%,#fff 35%);box-shadow:0 30px 70px -25px rgba(155,124,255,.4)}
.badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--lavender);color:#fff;font-size:12px;font-weight:700;padding:7px 16px;border-radius:999px;letter-spacing:.05em;white-space:nowrap}
.plan h3{font-size:22px}
.price{margin:18px 0 6px;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.price .now{font-family:var(--serif);font-size:48px;font-weight:700;color:var(--ink)}
.price .per{color:var(--muted);font-size:15px}
.price-old{color:var(--muted);text-decoration:line-through;font-size:14px}
.save{display:inline-block;margin-top:6px;font-size:12px;font-weight:700;color:var(--mint);background:var(--mint-soft);padding:5px 11px;border-radius:999px}
.plan ul{list-style:none;padding:0;margin:24px 0;display:flex;flex-direction:column;gap:11px}
.plan li{font-size:14.5px;color:var(--ink-2);display:flex;gap:10px;align-items:flex-start}
.plan li::before{content:"✓";color:var(--lavender);font-weight:700;flex-shrink:0}
.plan .btn{width:100%}

/* TESTIMONIALS */
.t-wrap{background:var(--peach-soft);padding:100px 0}
.testimonials{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:22px}
.tc{background:#fff;border-radius:20px;padding:30px;border:1px solid var(--line);transition:transform .3s, box-shadow .3s}
.tc:hover{transform:translateY(-6px);box-shadow:0 24px 50px -20px rgba(15,23,42,.16)}
.stars{color:var(--peach);font-size:16px;letter-spacing:3px;margin-bottom:14px}
.quote{font-family:var(--serif);font-style:italic;font-size:17px;line-height:1.5;color:var(--ink);margin-bottom:22px}
.who{display:flex;align-items:center;gap:12px}
.avatar{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:14px;color:#fff}
.who .n{font-weight:600;font-size:14.5px;color:var(--ink)}
.who .c{font-size:12.5px;color:var(--muted)}

/* CTA BANNER */
.cta-banner{background:linear-gradient(135deg,var(--lavender-soft),var(--coral-soft));border-radius:32px;margin:0 24px;padding:80px 24px;text-align:center}
.cta-banner h2{font-size:clamp(32px,4.6vw,52px);line-height:1.08;max-width:760px;margin:0 auto}
.cta-banner h2 em{font-style:italic;color:var(--coral);font-weight:600}
.cta-banner p{margin:18px auto 0;font-size:17px;max-width:560px;color:var(--ink-2)}
.cta-banner .btn{margin-top:32px;padding:16px 32px;font-size:16px}
.cta-banner .price-note{margin-top:18px;font-size:13.5px;color:var(--muted)}

/* FOOTER */
footer{background:var(--dark);color:#a8aec0;padding:70px 0 30px;margin-top:80px}
.foot-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:40px;margin-bottom:50px}
@media (max-width:820px){.foot-grid{grid-template-columns:1fr 1fr;gap:30px}}
.foot-brand p{margin-top:14px;font-size:14px;color:#a8aec0;max-width:280px}
.foot-col h4{font-family:var(--sans);font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#fff;font-weight:700;margin-bottom:16px}
.foot-col a{display:block;font-size:14px;color:#a8aec0;padding:6px 0;transition:color .2s}
.foot-col a:hover{color:#fff}
.socials{display:flex;gap:10px;margin-top:18px}
.socials a{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.06);display:grid;place-items:center;color:#fff;font-size:14px;transition:background .2s}
.socials a:hover{background:rgba(155,124,255,.3)}
.foot-bottom{border-top:1px solid rgba(255,255,255,.08);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:14px;font-size:13px}
.foot-bottom .heart{color:var(--coral)}
`;

const modules = [
  { c: "lav", n: "01", t: "Website Management", ico: "◐", d: "Launch and manage your site from one place.", tags: ["Templates", "Website Settings", "Website Admin"] },
  { c: "sky", n: "02", t: "Lead Management", ico: "◇", d: "Capture, nurture, and convert leads end to end.", tags: ["Pipelines", "Form Builder", "Lead Dashboards", "Signup Leads", "Task Reminders", "To-Do List", "Appointments", "AI Guidance"] },
  { c: "peach", n: "03", t: "Call Management", ico: "☏", d: "AI-powered telephony with full visibility.", tags: ["AI Call Assistant", "Call Overview", "Call Reports", "Call Recordings", "AI Call Summary"] },
  { c: "coral", n: "04", t: "Social Media", ico: "✦", d: "Reach customers everywhere they spend time.", tags: ["WhatsApp", "Instagram", "Facebook", "SEO/GEO"] },
  { c: "mint", n: "05", t: "Employee Management", ico: "❖", d: "Run your team with clarity and accountability.", tags: ["Access Profiles", "Employee Tracking", "Employee Performance", "Timesheet", "Attendance", "Become a Partner"] },
  { c: "sage", n: "06", t: "Finance Management", ico: "₹", d: "Invoice, track, and reconcile in one ledger.", tags: ["Invoices", "Product Management", "Customers", "Tax Invoices", "Transaction Management"] },
];

const reviews = [
  { s: 5, q: "StartBusiness replaced four tools for us. Our sales team finally lives in one place.", n: "Aarav Mehta", c: "Founder, Brightleaf Studio", i: "AM", color: "var(--coral)" },
  { s: 5, q: "The AI call summaries alone save us hours every week. Worth it from day one.", n: "Priya Sharma", c: "Head of Sales, NovaCRM", i: "PS", color: "var(--lavender)" },
  { s: 5, q: "Beautifully designed and genuinely useful. Onboarding our 20-person team took an afternoon.", n: "Rahul Verma", c: "COO, Finch & Co.", i: "RV", color: "var(--sky)" },
];

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll',()=>{
              const n=document.querySelector('.nav');
              if(!n)return;
              if(window.scrollY>20)n.classList.add('scrolled');else n.classList.remove('scrolled');
            });
            window.addEventListener('DOMContentLoaded',()=>{
              const ham=document.querySelector('.hamburger');
              const mob=document.querySelector('.mob');
              if(ham&&mob){ham.addEventListener('click',()=>mob.classList.toggle('open'));
                mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mob.classList.remove('open')));
              }
            });
          `,
        }}
      />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand"><span className="logo" />StartBusiness<span>.ltd</span></a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a href="#" className="btn btn-ghost">Login</a>
            <a href="#pricing" className="btn btn-primary">Get Started</a>
            <button className="hamburger" aria-label="Menu"><span /><span /><span /></button>
          </div>
        </div>
        <div className="mob">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Manage Everything. From One Place.</span>
            <h1>Your Entire Business. <em>One Beautiful</em> Platform.</h1>
            <p className="lead">
              From leads to invoices, calls to social media — manage everything your business needs from a single, intelligent dashboard.
            </p>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-primary">Start Free Trial</a>
              <a href="#" className="btn btn-ghost">▶ Watch Demo</a>
            </div>
            <div className="proof">
              <div className="dots"><span /><span /><span /><span /></div>
              Trusted by 500+ growing businesses across India
            </div>
          </div>
          <div className="dash-wrap">
            <div className="floaty a"><div className="pill-ico" style={{ background: "var(--mint)" }}>✓</div>New lead captured</div>
            <div className="floaty b"><div className="pill-ico" style={{ background: "var(--lavender)" }}>★</div>AI summary ready</div>
            <div className="dash">
              <div className="dash-head">
                <div>
                  <div className="dash-title">Business Overview</div>
                  <div className="dash-sub">Today · Live</div>
                </div>
                <div className="dot" />
              </div>
              <div className="dash-grid">
                <div className="metric coral"><div className="k">Revenue</div><div className="v">₹4,82,300</div><div className="d">▲ 12.4%</div></div>
                <div className="metric sky"><div className="k">Active Leads</div><div className="v">128</div><div className="d">▲ 8.1%</div></div>
                <div className="metric lav"><div className="k">Calls Today</div><div className="v">47</div><div className="d">▲ 5.3%</div></div>
                <div className="metric mint"><div className="k">Attendance</div><div className="v">96%</div><div className="d">▲ 1.2%</div></div>
              </div>
              <div className="bars">
                {[40, 65, 50, 78, 60, 88, 72, 95, 70, 82, 90, 100].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features">
        <div className="container">
          <div className="section-head">
            <h2>Everything You Need. <em>Nothing</em> You Don't.</h2>
            <p>Six powerful modules, one seamless platform.</p>
          </div>
          <div className="modules">
            {modules.map((m) => (
              <div key={m.n} className={`mod ${m.c}`}>
                <div className="num">MODULE {m.n}</div>
                <div className="ico">{m.ico}</div>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
                <div className="tags">
                  {m.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="how-wrap">
        <div className="container">
          <div className="section-head">
            <h2>How It <em>Works</em></h2>
            <p>Get up and running in minutes, not weeks.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="circle">1</div>
              <h3>Sign Up and Set Up</h3>
              <p>Create your account and personalise your dashboard in under five minutes.</p>
            </div>
            <div className="step">
              <div className="circle">2</div>
              <h3>Connect Everything</h3>
              <p>Bring in your team, leads, calls, and social channels with a few clicks.</p>
            </div>
            <div className="step">
              <div className="circle">3</div>
              <h3>Grow with AI</h3>
              <p>Let AI-powered insights guide your next best action, every single day.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ai" style={{ padding: 0 }}>
        <div className="ai">
          <div className="container">
            <div>
              <h2>AI That Works <em>While You Sleep</em></h2>
              <p>From summarising calls to flagging hot leads, our AI is not a chatbot bolted on — it lives inside every module, helping your team move faster with less effort.</p>
              <div className="chips">
                <span className="chip"><span className="glow" />AI Call Assistant</span>
                <span className="chip"><span className="glow" />AI Call Summary</span>
                <span className="chip"><span className="glow" />AI Lead Guidance</span>
                <span className="chip"><span className="glow" />Smart Reminders</span>
              </div>
            </div>
            <div className="chat">
              <div className="msg"><div className="av">AI</div><div className="bub"><strong>Yesterday's calls:</strong> 12 calls, 4 hot leads, 2 deals progressed. Avg call time 6m 20s.</div></div>
              <div className="msg user"><div className="av">You</div><div className="bub">Any leads I should call today?</div></div>
              <div className="msg"><div className="av">AI</div><div className="bub"><strong>🔥 Hot lead:</strong> Priya at Acme Co. opened your proposal twice this morning.</div></div>
              <div className="msg user"><div className="av">You</div><div className="bub">Draft the invoice for Acme.</div></div>
              <div className="msg"><div className="av">AI</div><div className="bub"><strong>Done.</strong> Invoice #INV-2041 for ₹2,69,550 ready. Follow-up scheduled Wed 10:00.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <div className="section-head">
            <h2>Simple Pricing. <em>Serious</em> Value.</h2>
            <p>Every plan includes all six modules and every feature. Pick the billing that fits you.</p>
          </div>
          <div className="pricing">
            <div className="plan">
              <h3>Monthly</h3>
              <div className="price"><span className="now">₹899</span><span className="per">/ month</span></div>
              <div className="price-old">₹1,000 / month</div>
              <div className="save">Save ₹101</div>
              <ul>
                <li>All 6 modules included</li>
                <li>AI features unlocked</li>
                <li>Unlimited leads</li>
                <li>Call recordings and summaries</li>
                <li>Social media management</li>
                <li>Finance and invoicing</li>
                <li>Cancel anytime</li>
              </ul>
              <a href="#" className="btn btn-ghost">Start Monthly</a>
            </div>
            <div className="plan best">
              <div className="badge">⭐ BEST VALUE — 40% OFF</div>
              <h3>Yearly</h3>
              <div className="price"><span className="now">₹5,999</span><span className="per">/ year</span></div>
              <div className="price-old">₹10,000 / year</div>
              <div className="save">Save ₹4,001</div>
              <ul>
                <li>Everything in Monthly</li>
                <li>Priority AI support</li>
                <li>Advanced analytics</li>
                <li>Partner program access</li>
                <li>Dedicated onboarding</li>
                <li>Custom domain support</li>
              </ul>
              <a href="#" className="btn btn-lav">Get Yearly Deal</a>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" style={{ padding: 0 }}>
        <div className="t-wrap">
          <div className="container">
            <div className="section-head">
              <h2>Loved by Businesses <em>Across India</em></h2>
              <p>From scrappy founders to scaling sales teams, StartBusiness is the operating system they choose.</p>
            </div>
            <div className="testimonials">
              {reviews.map((r) => (
                <div key={r.n} className="tc">
                  <div className="stars">{"★".repeat(r.s)}</div>
                  <div className="quote">"{r.q}"</div>
                  <div className="who">
                    <div className="avatar" style={{ background: r.color }}>{r.i}</div>
                    <div>
                      <div className="n">{r.n}</div>
                      <div className="c">{r.c}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "40px 0 60px" }}>
        <div className="cta-banner">
          <h2>Ready to Take Control of <em>Your Business?</em></h2>
          <p>Join hundreds of smart businesses already growing with StartBusiness.ltd</p>
          <a href="#pricing" className="btn btn-primary">Get Started for Free →</a>
          <div className="price-note">₹899/month or ₹5,999/year · Cancel anytime</div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#top" className="brand" style={{ color: "#fff" }}>
                <span className="logo" />StartBusiness<span style={{ color: "var(--lavender)" }}>.ltd</span>
              </a>
              <p>Manage everything. From one place. The all-in-one platform for modern businesses.</p>
              <div className="socials">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Instagram">◎</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="YouTube">▶</a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#ai">AI Tools</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Integrations</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div className="foot-col">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
              <a href="#">Community</a>
            </div>
            <div className="foot-col">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
              <a href="#">Cookies</a>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© {new Date().getFullYear()} StartBusiness.ltd — All rights reserved.</div>
            <div>Made with <span className="heart">♥</span> in India</div>
          </div>
        </div>
      </footer>
    </>
  );
}
