import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartBusiness.ltd — Run Your Entire Business Smarter" },
      {
        name: "description",
        content:
          "All-in-one CRM platform with 6 modules and 30+ AI-powered features to run your business smarter.",
      },
      { property: "og:title", content: "StartBusiness.ltd" },
      {
        property: "og:description",
        content: "All-in-one AI CRM platform for modern businesses.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const CSS = `
:root{
  --bg:#ffffff;
  --ink:#0f172a;
  --muted:#5b6478;
  --line:#ececf2;
  --cream:#fbf7f1;
  --purple:#7c5cff; --purple-soft:#f1ecff;
  --teal:#0fb5a5;   --teal-soft:#e6f7f4;
  --amber:#e8a317;  --amber-soft:#fdf2db;
  --rose:#e85a87;   --rose-soft:#fde7ee;
  --blue:#3a86ff;   --blue-soft:#e6efff;
  --green:#22a06b;  --green-soft:#e3f5ec;
  --dark:#0b0d1a;
  --serif:'Fraunces', ui-serif, Georgia, serif;
  --sans:'Inter', ui-sans-serif, system-ui, sans-serif;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
a{color:inherit;text-decoration:none}
img{max-width:100%}
.container{max-width:1180px;margin:0 auto;padding:0 24px}
h1,h2,h3,h4{font-family:var(--serif);font-weight:700;letter-spacing:-0.02em;color:var(--ink);margin:0}
p{color:var(--muted);line-height:1.65;margin:0}

/* NAV */
.nav{position:sticky;top:0;z-index:50;transition:all .3s ease;background:transparent}
.nav.scrolled{background:rgba(255,255,255,.7);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px);border-bottom:1px solid rgba(15,23,42,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px}
.brand{font-family:var(--serif);font-weight:800;font-size:22px;letter-spacing:-0.02em}
.brand span{color:var(--purple)}
.nav-links{display:flex;gap:32px}
.nav-links a{font-size:14px;color:var(--muted);font-weight:500;transition:color .2s}
.nav-links a:hover{color:var(--ink)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;border:1px solid transparent;transition:transform .2s ease, box-shadow .2s ease, background .2s}
.btn-primary{background:var(--ink);color:#fff}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 30px -10px rgba(15,23,42,.45)}
.btn-ghost{background:#fff;color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--ink)}
.btn-purple{background:var(--purple);color:#fff}
.btn-purple:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(124,92,255,.55)}
@media (max-width:720px){.nav-links{display:none}}

/* HERO */
.hero{padding:80px 0 60px;position:relative;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center}
@media (max-width:920px){.hero-grid{grid-template-columns:1fr;gap:40px}}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--purple);background:var(--purple-soft);padding:6px 12px;border-radius:999px}
.hero h1{font-size:clamp(40px,6vw,68px);line-height:1.02;margin:18px 0 18px}
.hero h1 em{font-style:italic;color:var(--purple);font-weight:600}
.hero p.lead{font-size:18px;max-width:560px}
.hero-cta{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.stats{display:flex;gap:36px;margin-top:40px;flex-wrap:wrap}
.stat .n{font-family:var(--serif);font-size:30px;font-weight:700;color:var(--ink)}
.stat .l{font-size:13px;color:var(--muted);margin-top:2px}

/* Dashboard mock card */
.dash{position:relative;background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 40px 80px -30px rgba(15,23,42,.25),0 8px 20px -10px rgba(15,23,42,.08);animation:float 6s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.dash-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.dash-head .dot{width:10px;height:10px;border-radius:50%;background:var(--green);box-shadow:0 0 0 4px rgba(34,160,107,.15)}
.dash-title{font-weight:600;font-size:14px}
.dash-sub{font-size:12px;color:var(--muted)}
.dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.metric{padding:16px;border-radius:16px;background:#fafbff;border:1px solid var(--line)}
.metric .k{font-size:12px;color:var(--muted);font-weight:500}
.metric .v{font-family:var(--serif);font-size:24px;font-weight:700;margin-top:6px}
.metric .d{font-size:11px;font-weight:600;margin-top:4px}
.up{color:var(--green)} .down{color:var(--rose)}
.bars{margin-top:14px;display:flex;gap:6px;align-items:flex-end;height:70px;padding:12px;border-radius:14px;background:linear-gradient(180deg,#faf7ff,#fff);border:1px solid var(--line)}
.bars span{flex:1;background:linear-gradient(180deg,var(--purple),#b9a8ff);border-radius:6px;opacity:.85}
.floaty{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 18px 40px -16px rgba(15,23,42,.25);font-size:13px;font-weight:600}
.floaty.a{top:-18px;left:-20px;animation:float 5s ease-in-out infinite}
.floaty.b{bottom:-18px;right:-14px;animation:float 7s ease-in-out infinite reverse}
.pill-ico{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;color:#fff;font-size:14px}

/* SECTION */
section{padding:90px 0}
.section-head{text-align:center;max-width:680px;margin:0 auto 56px}
.section-head h2{font-size:clamp(32px,4vw,48px);line-height:1.1}
.section-head h2 em{font-style:italic;color:var(--purple);font-weight:600}
.section-head p{margin-top:14px;font-size:17px}

/* MODULES */
.modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:22px}
.mod{position:relative;background:#fff;border:1px solid var(--line);border-radius:22px;padding:28px;overflow:hidden;transition:transform .3s ease, box-shadow .3s ease;cursor:default}
.mod:hover{transform:translateY(-6px);box-shadow:0 30px 60px -25px rgba(15,23,42,.18)}
.mod::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--accent)}
.mod .num{font-family:var(--serif);font-size:13px;color:var(--muted);font-weight:600;letter-spacing:.15em}
.mod .ico{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:var(--soft);color:var(--accent);font-size:22px;margin:14px 0 18px}
.mod h3{font-size:22px;margin-bottom:10px}
.mod p{font-size:14px;margin-bottom:18px}
.tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-size:12px;font-weight:500;padding:5px 10px;border-radius:999px;background:var(--soft);color:var(--accent)}

.mod.purple{--accent:var(--purple);--soft:var(--purple-soft)}
.mod.teal{--accent:var(--teal);--soft:var(--teal-soft)}
.mod.amber{--accent:var(--amber);--soft:var(--amber-soft)}
.mod.rose{--accent:var(--rose);--soft:var(--rose-soft)}
.mod.blue{--accent:var(--blue);--soft:var(--blue-soft)}
.mod.green{--accent:var(--green);--soft:var(--green-soft)}

/* AI SECTION */
.ai{background:var(--dark);color:#fff;border-radius:32px;margin:60px 24px;padding:80px 0}
.ai .container{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
@media (max-width:920px){.ai .container{grid-template-columns:1fr}}
.ai h2{color:#fff;font-size:clamp(32px,4vw,48px);line-height:1.1}
.ai h2 em{color:#b9a8ff;font-style:italic;font-weight:600}
.ai p{color:#a8aec0;margin-top:14px;font-size:17px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.chip{padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);font-size:13px;font-weight:500}
.chip.b{background:rgba(124,92,255,.2);border-color:rgba(124,92,255,.35);color:#d6caff}
.chat{background:#13162a;border:1px solid rgba(255,255,255,.08);border-radius:22px;padding:20px;box-shadow:0 30px 80px -30px rgba(0,0,0,.6)}
.msg{display:flex;gap:12px;margin-bottom:14px}
.msg .av{width:34px;height:34px;border-radius:10px;background:var(--purple);display:grid;place-items:center;font-weight:700;font-size:13px;flex-shrink:0}
.msg.user .av{background:#2a2f4a}
.bub{background:rgba(255,255,255,.05);padding:12px 14px;border-radius:14px;font-size:14px;line-height:1.55;color:#e6e8f0}
.msg.user .bub{background:rgba(124,92,255,.15);color:#fff}
.bub strong{color:#fff}

/* PRICING */
.pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:22px;max-width:880px;margin:0 auto}
.plan{position:relative;background:#fff;border:1px solid var(--line);border-radius:24px;padding:36px;transition:transform .3s}
.plan:hover{transform:translateY(-6px)}
.plan.best{border:2px solid var(--purple);box-shadow:0 30px 70px -25px rgba(124,92,255,.4)}
.badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--purple);color:#fff;font-size:12px;font-weight:600;padding:6px 14px;border-radius:999px;letter-spacing:.05em}
.plan h3{font-size:22px}
.price{margin:18px 0 6px;display:flex;align-items:baseline;gap:8px}
.price .now{font-family:var(--serif);font-size:48px;font-weight:700}
.price .per{color:var(--muted);font-size:15px}
.price-old{color:var(--muted);text-decoration:line-through;font-size:14px}
.save{display:inline-block;margin-top:6px;font-size:12px;font-weight:600;color:var(--green);background:var(--green-soft);padding:4px 10px;border-radius:999px}
.plan ul{list-style:none;padding:0;margin:24px 0;display:flex;flex-direction:column;gap:10px}
.plan li{font-size:14px;color:var(--ink);display:flex;gap:10px;align-items:center}
.plan li::before{content:"✓";color:var(--purple);font-weight:700}
.plan .btn{width:100%}

/* TESTIMONIALS */
.t-wrap{background:var(--cream);padding:90px 0}
.testimonials{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px}
.tc{background:#fff;border-radius:20px;padding:28px;border:1px solid var(--line);transition:transform .3s}
.tc:hover{transform:translateY(-6px)}
.stars{color:var(--amber);font-size:16px;letter-spacing:2px;margin-bottom:14px}
.quote{font-family:var(--serif);font-size:17px;line-height:1.5;color:var(--ink);margin-bottom:22px}
.who{display:flex;align-items:center;gap:12px}
.avatar{width:42px;height:42px;border-radius:50%;background:var(--purple-soft);color:var(--purple);display:grid;place-items:center;font-weight:700;font-size:14px}
.who .n{font-weight:600;font-size:14px}
.who .c{font-size:12px;color:var(--muted)}

/* FOOTER */
footer{background:var(--dark);color:#a8aec0;padding:50px 0 30px;margin-top:60px}
footer .container{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
footer .brand{color:#fff}
footer .links{display:flex;gap:28px;font-size:14px}
footer .links a:hover{color:#fff}
footer .cp{font-size:13px;width:100%;text-align:center;border-top:1px solid rgba(255,255,255,.08);padding-top:24px;margin-top:24px}
`;

const modules = [
  { c: "purple", n: "01", t: "Website Management", ico: "◐", d: "Launch and manage your site from one place.", tags: ["Templates", "Website Settings", "Website Admin"] },
  { c: "teal", n: "02", t: "Lead Management", ico: "◇", d: "Capture, nurture, and convert leads end to end.", tags: ["Pipelines", "Form Builder", "Lead Dashboards", "Signup Leads", "Task Reminders", "To-Do List", "Appointments", "AI Guidance"] },
  { c: "amber", n: "03", t: "Call Management", ico: "☏", d: "AI-powered telephony with full visibility.", tags: ["AI Call Assistant", "Call Overview", "Call Reports", "Call Recordings", "AI Call Summary"] },
  { c: "rose", n: "04", t: "Social Media", ico: "✦", d: "Reach customers everywhere they spend time.", tags: ["WhatsApp", "Instagram", "Facebook", "SEO/GEO"] },
  { c: "blue", n: "05", t: "Employee Management", ico: "❖", d: "Run your team with clarity and accountability.", tags: ["Access Profiles", "Employee Tracking", "Employee Performance", "Timesheet", "Attendance", "Become a Partner"] },
  { c: "green", n: "06", t: "Finance Management", ico: "₹", d: "Invoice, track, and reconcile in one ledger.", tags: ["Invoices", "Product Management", "Customers", "Tax Invoices", "Transaction Management"] },
];

const reviews = [
  { s: 5, q: "StartBusiness replaced four tools for us. Our sales team finally lives in one place.", n: "Aarav Mehta", c: "Founder, Brightleaf Studio", i: "AM" },
  { s: 5, q: "The AI call summaries alone save us hours every week. Worth it from day one.", n: "Priya Sharma", c: "Head of Sales, NovaCRM", i: "PS" },
  { s: 5, q: "Beautifully designed and genuinely useful. Onboarding our 20-person team took an afternoon.", n: "Rahul Verma", c: "COO, Finch & Co.", i: "RV" },
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
          `,
        }}
      />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">StartBusiness<span>.ltd</span></a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#ai">AI Tools</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </div>
          <a href="#pricing" className="btn btn-primary">Get Started →</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">All-in-one CRM platform</span>
            <h1>Run Your Entire <em>Business</em> Smarter</h1>
            <p className="lead">
              Six powerful modules, thirty plus features, and AI woven into every workflow — from leads and calls to invoices and attendance. One platform to operate your entire business.
            </p>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-purple">Start Free Trial</a>
              <a href="#features" className="btn btn-ghost">Explore Features</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="n">6</div><div className="l">Modules</div></div>
              <div className="stat"><div className="n">30+</div><div className="l">Features</div></div>
              <div className="stat"><div className="n">AI</div><div className="l">Powered</div></div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="floaty a"><div className="pill-ico" style={{ background: "var(--teal)" }}>✓</div>New lead captured</div>
            <div className="floaty b"><div className="pill-ico" style={{ background: "var(--purple)" }}>★</div>AI summary ready</div>
            <div className="dash">
              <div className="dash-head">
                <div>
                  <div className="dash-title">Business Overview</div>
                  <div className="dash-sub">Today · Live</div>
                </div>
                <div className="dot" />
              </div>
              <div className="dash-grid">
                <div className="metric"><div className="k">Revenue</div><div className="v">₹4,82,300</div><div className="d up">▲ 12.4%</div></div>
                <div className="metric"><div className="k">New Leads</div><div className="v">128</div><div className="d up">▲ 8.1%</div></div>
                <div className="metric"><div className="k">Tasks Due</div><div className="v">17</div><div className="d down">▼ 3</div></div>
                <div className="metric"><div className="k">Attendance</div><div className="v">96%</div><div className="d up">▲ 1.2%</div></div>
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
            <h2>Six modules. <em>One</em> platform.</h2>
            <p>Everything you need to acquire customers, deliver service, and run operations — beautifully connected.</p>
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

      <section id="ai" style={{ padding: 0 }}>
        <div className="ai">
          <div className="container">
            <div>
              <h2>AI Built Into <em>Every</em> Workflow</h2>
              <p>From summarising calls to guiding your reps on the next best action, our AI is not a chatbot bolted on — it lives inside every module, helping your team move faster with less effort.</p>
              <div className="chips">
                <span className="chip b">AI Call Assistant</span>
                <span className="chip b">AI Call Summary</span>
                <span className="chip">AI Lead Guidance</span>
                <span className="chip">Smart Reminders</span>
              </div>
            </div>
            <div className="chat">
              <div className="msg user"><div className="av">You</div><div className="bub">Summarise my call with Acme Co.</div></div>
              <div className="msg"><div className="av">AI</div><div className="bub"><strong>Call summary:</strong> Acme wants a 50-seat plan. Decision by Friday. Sent pricing PDF — follow up Wednesday.</div></div>
              <div className="msg user"><div className="av">You</div><div className="bub">Create the invoice and remind me.</div></div>
              <div className="msg"><div className="av">AI</div><div className="bub"><strong>Done.</strong> Invoice #INV-2041 for ₹2,69,550 drafted. Reminder set for Wed 10:00.</div></div>
              <div className="msg user"><div className="av">You</div><div className="bub">Any leads I should call today?</div></div>
              <div className="msg"><div className="av">AI</div><div className="bub">3 hot leads — Priya (score 92), Ravi (88), Neha (85). Start with Priya, she opened your proposal twice.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <div className="section-head">
            <h2>Simple, honest <em>pricing</em></h2>
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
                <li>30+ features unlocked</li>
                <li>AI tools and summaries</li>
                <li>Unlimited team members</li>
                <li>Email and chat support</li>
              </ul>
              <a href="#" className="btn btn-ghost">Choose Monthly</a>
            </div>
            <div className="plan best">
              <div className="badge">BEST VALUE</div>
              <h3>Yearly</h3>
              <div className="price"><span className="now">₹5,999</span><span className="per">/ year</span></div>
              <div className="price-old">₹10,000 / year</div>
              <div className="save">Save ₹4,001</div>
              <ul>
                <li>All 6 modules included</li>
                <li>30+ features unlocked</li>
                <li>Advanced AI workflows</li>
                <li>Unlimited team members</li>
                <li>Priority support and onboarding</li>
              </ul>
              <a href="#" className="btn btn-purple">Choose Yearly</a>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" style={{ padding: 0 }}>
        <div className="t-wrap">
          <div className="container">
            <div className="section-head">
              <h2>Loved by <em>teams</em> who ship</h2>
              <p>From scrappy founders to scaling sales teams, StartBusiness is the operating system they choose.</p>
            </div>
            <div className="testimonials">
              {reviews.map((r) => (
                <div key={r.n} className="tc">
                  <div className="stars">{"★".repeat(r.s)}</div>
                  <div className="quote">"{r.q}"</div>
                  <div className="who">
                    <div className="avatar">{r.i}</div>
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

      <footer>
        <div className="container">
          <a href="#top" className="brand">StartBusiness<span style={{ color: "var(--purple)" }}>.ltd</span></a>
          <div className="links">
            <a href="#features">Features</a>
            <a href="#ai">AI Tools</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="cp">© {new Date().getFullYear()} StartBusiness.ltd — Run your entire business smarter.</div>
        </div>
      </footer>
    </>
  );
}
