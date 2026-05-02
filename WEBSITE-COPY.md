# PivotGC — Website copy (editable)

This is the single source of truth for every piece of editable text on the site.
Edit freely, send the file back, and I'll diff it against this version and update the HTML, the JSON-LD schema blocks, and `llms.txt` accordingly.

## How to edit

- **Each block has an `[id]` line.** Edit only the body text under each `[id]`. Don't change the `[id]` line itself or insert new ones — that's how I match edits back to the right place in the right file.
- **Asterisks `*like this*` render as signal-orange italic** on the live site (the brand's emphasis treatment). Use them where you want emphasis.
- **Double asterisks `**like this**` render as bold** (used inside body text and bullet leads).
- **Bullet lists** use `-` markers. **Order matters** — items render in the order you write them.
- **Blank lines = paragraph breaks** inside a block.
- **Line breaks inside an H1** are meaningful (they render as `<br>`). Other blocks are flowed automatically.
- **Don't worry about HTML, JSON, schema, or escaping.** Just write the prose. I'll handle the rest, including FAQ answers (which appear in two places — the visible HTML and the JSON-LD — but you only edit them here once).
- **Things you can't edit here** (because they're not copy): the brand SVGs, colours, fonts, layout. Tell me separately if you want any of those changed.
- **Placeholders to fill in later**: contact email is `info@pivotgc.com`. There is no public phone number, no founder name, and no LinkedIn handle. If you want any of those added, tell me what to use.

---
---

# § 1 · Shared elements

These appear on every page header / footer.

## Top navigation

[nav.embedded]
Embedded

[nav.ondemand]
On Demand

[nav.projects]
Projects

[nav.europe]
Europe

[nav.about]
About

[nav.insights]
Insights

[nav.faq]
FAQ

[nav.cta]
Start a conversation →

## Footer — meta strip (top of footer)

[footer.meta.location]
Geneva · London · Remote across Europe

[footer.meta.founded]
Founded 2026

[footer.meta.version]
v 1.0 · 04.22.26

## Footer — brand blurb

[footer.blurb]
Fractional General Counsel for European B2B scale-ups. One lawyer, coordinated across Europe.

## Footer — column headings

[footer.col.services.heading]
Services

[footer.col.practice.heading]
Practice

[footer.col.contact.heading]
Contact

## Footer — Services column links

[footer.col.services.link.embedded]
Embedded GC

[footer.col.services.link.ondemand]
GC on Demand

[footer.col.services.link.projects]
Strategic Projects

## Footer — Practice column links

[footer.col.practice.link.about]
About

[footer.col.practice.link.europe]
European Coverage

[footer.col.practice.link.insights]
Insights

[footer.col.practice.link.faq]
FAQ

## Footer — Contact column

[footer.col.contact.link.bookcall]
Book a call

[footer.col.contact.email]
info@pivotgc.com

## Footer — bottom strip

[footer.bottom.copyright]
© 2026 PivotGC · All rights reserved

[footer.bottom.disclaimer]
Not a law firm — see FAQ

---
---

# § 2 · Homepage (`/`)

## SEO

[home.meta.title]
Fractional General Counsel for European Scale-ups | PivotGC

[home.meta.description]
Senior fractional General Counsel for European B2B scale-ups. Cross-border commercial legal leadership, embedded in your team two or three days a week.

## Hero

[home.hero.meta]
- Fractional General Counsel
- Series B → Series D · Europe
- Embedded · 2–3 days / week

[home.hero.h1]
The General Counsel your company needs.
Without the *nine-month search.*

[home.hero.lede]
Senior, cross-border commercial legal leadership for European B2B scale-ups. Embedded in your team two or three days a week. One lawyer, one invoice, one point of accountability across your European footprint.

[home.hero.cta.primary]
Book a scoping call →

[home.hero.cta.secondary]
How it works

## Hero · tri-grid (3 cells, top-to-bottom = left-to-right on desktop)

[home.hero.tri.01.label]
01 — Engagement

[home.hero.tri.01.value]
Embedded GC, GC on Demand, or fixed-fee strategic projects.

[home.hero.tri.02.label]
02 — Coverage

[home.hero.tri.02.value]
UK, Nordics, Netherlands, Switzerland, Germany — coordinated.

[home.hero.tri.03.label]
03 — Time to value

[home.hero.tri.03.value]
2–3 weeks from signed engagement letter to first deal closed.

## Section 01 · Definition

[home.s01.kicker.num]
01

[home.s01.kicker.label]
Definition

[home.s01.h2]
What is a fractional General Counsel?

[home.s01.body]
A fractional General Counsel is a senior commercial lawyer who performs the role of an in-house GC for multiple companies on a part-time, retainer basis. Unlike an external law firm, a fractional GC is embedded in the business — attending leadership meetings, owning the contract stack, managing external counsel, and briefing the board on risk. Unlike a full-time hire, a fractional GC costs a fraction of a full GC salary and can start in weeks rather than months.

Fractional General Counsel services are most valuable for companies that have outgrown templates and external-only counsel, but do not yet need — or cannot yet afford — a full-time hire. In practice, this is most European B2B scale-ups from Series B through Series D.

## Section 02 · The scale-up legal gap

[home.s02.kicker.num]
02

[home.s02.kicker.label]
The scale-up legal gap

[home.s02.h2]
You know what you need. The market gives you three bad options.

[home.s02.intro]
At Series B, the contracts get bigger. The jurisdictions multiply. The deals that stall in legal review start costing you quarters.

You know what you need: a General Counsel. Someone senior enough to own the commercial stack, make the calls, manage external counsel across Europe, and speak to your board about risk without hiding behind hedges.

So you start the search. And the market gives you three bad options.

### Four options frame (2×2)

[home.s02.option01.label]
OPTION 01

[home.s02.option01.title]
Hire a full-time General Counsel.

[home.s02.option01.body]
€200,000+ all-in, six to nine months to find, often fails on culture fit. By the time they start, the problem you were solving has moved on.

[home.s02.option02.label]
OPTION 02

[home.s02.option02.title]
Use external law firms on hourly rates.

[home.s02.option02.body]
€500–800 per hour, siloed by jurisdiction, no context for your business, structurally incentivised to bill — not to close the deal.

[home.s02.option03.label]
OPTION 03

[home.s02.option03.title]
Hire up to budget, not up to the role.

[home.s02.option03.body]
A talented mid-level lawyer on €90,000 who is three years from being able to do the job.

[home.s02.option04.label]
OPTION 04 — PIVOTGC

[home.s02.option04.title]
Embed a senior GC, fractionally.

[home.s02.option04.body]
Two or three days a week. Senior judgement on day one. One relationship across your European footprint, on retainer.

[home.s02.outro]
Most scale-ups pick option three and call it pragmatism. It isn't. *It's a tax on every commercial deal you do until you fix it.*

## Section 03 · The compromise

[home.s03.kicker.num]
03

[home.s03.kicker.label]
The compromise

[home.s03.h2]
What it actually costs you.

[home.s03.intro]
When the legal function is under-levelled, the damage isn't in the legal budget. It's everywhere else.

[home.s03.bullets]
- Commercial deals slow because the in-house lawyer hasn't negotiated at this level before.
- Risk gets missed — indemnity caps, IP carve-outs, change-of-control, data transfer mechanics — because no one's seen them play out.
- Founders and COOs end up reviewing MSAs at 11pm, doing work that isn't theirs and isn't good.
- External counsel spend creeps, because no one senior is managing the brief or challenging scope.
- The moments that actually matter — a funding round, a new market, an acquisition, a dispute — expose the gap at the worst possible time.

[home.s03.outro]
**You don't need more legal hours. You need better legal judgement.**

## Section 04 · The service

[home.s04.kicker.num]
04

[home.s04.kicker.label]
The service

[home.s04.h2]
A General Counsel function, without the hire.

[home.s04.intro]
PivotGC plugs into your leadership team two or three days a week and runs your legal function the way an experienced General Counsel would.

[home.s04.bullets]
- **Contract stack, owned.** Customer agreements, partner contracts, vendor terms, employment — templates, negotiation, and closure.
- **Commercial deals, led or supported.** Depending on stage, counterparty, and your team.
- **Legal operations, built.** Playbooks, approval thresholds, obligation tracking, tooling.
- **External counsel, managed.** Instructed, scoped, challenged on fees, translated into commercial terms.
- **Leadership and board, briefed.** Risk explained in the language of the business.

[home.s04.outro]
One relationship. One invoice. One point of accountability across your European footprint.

## Section 05 · How it works (engagement cards)

[home.s05.kicker.num]
05

[home.s05.kicker.label]
How it works

[home.s05.h2]
Three ways to engage. No hourly billing.

### Card 1 · Embedded

[home.s05.card01.num]
Engagement 01 / Embedded

[home.s05.card01.title]
Embedded General Counsel

[home.s05.card01.body]
Ongoing retainer. Two to three days a week. Full ownership of the legal function.

[home.s05.card01.meta]
Pricing on request · 6-month minimum

[home.s05.card01.cta]
Learn more →

### Card 2 · On Demand

[home.s05.card02.num]
Engagement 02 / On demand

[home.s05.card02.title]
GC on Demand

[home.s05.card02.body]
Lighter retainer for earlier-stage teams. Contract review queue, monthly cadence, strategic check-ins.

[home.s05.card02.meta]
Pricing on request · monthly rolling

[home.s05.card02.cta]
Learn more →

### Card 3 · Projects

[home.s05.card03.num]
Engagement 03 / Project

[home.s05.card03.title]
Strategic Projects

[home.s05.card03.body]
Fixed-fee, defined-scope work: European expansion, contract overhaul, M&A integration, distribution restructure.

[home.s05.card03.meta]
Fixed fee · scoped up front

[home.s05.card03.cta]
Learn more →

## Section 06 · Who we work with

[home.s06.kicker.num]
06

[home.s06.kicker.label]
Who we work with

[home.s06.h2]
European B2B scale-ups in the legal middle distance.

[home.s06.bullets]
- Series B to Series D, or €10–100M in revenue
- Operating across at least two European jurisdictions — commonly United Kingdom, Sweden, Norway, Netherlands, Switzerland, Germany, Denmark, Finland
- Without a full-time General Counsel, or bridging between hires
- In SaaS, fintech, industrial tech, marketplaces, or healthtech

[home.s06.outro]
If you're not in this profile, we'll say so in the first call and point you elsewhere.

## Section 07 · Jurisdiction

[home.s07.kicker.num]
07

[home.s07.kicker.label]
Jurisdiction — the straight answer

[home.s07.h2]
One lawyer. Coordinated across Europe.

[home.s07.body]
No commercial lawyer is admitted in every European jurisdiction, and anyone who claims otherwise isn't being straight. Every PivotGC General Counsel holds top academic credentials, is admitted in their home jurisdiction, and has practised across at least three European countries. Each brings 5+ years advising C-level executives on material commercial matters. Across other jurisdictions, we operate as in-house counsel for our clients and instruct trusted specialists from a curated network when locally admitted advice is needed — but we manage the relationship, control the scope, and translate the advice into commercial terms. *You deal with one person, not five.*

[home.s07.cta]
See how we cover Europe →

## Footer CTA (this page)

[home.footer.cta.h2]
Ready for a senior conversation?

[home.footer.cta.btn]
Book a scoping call →

---
---

# § 3 · Embedded General Counsel — `/services/embedded-gc/`

## SEO

[embedded.meta.title]
Embedded General Counsel | Fractional GC for Scale-ups | PivotGC

[embedded.meta.description]
Embedded fractional General Counsel services for European scale-ups. Two to three days a week, retainer-based, full ownership of your legal function.

## Hero

[embedded.hero.meta]
- Service 01 / Embedded
- 2–3 days / week · ongoing retainer
- Pricing on request

[embedded.hero.h1]
Embedded *General Counsel.*

[embedded.hero.lede]
For scale-ups that need a GC *now*, not in nine months. A senior commercial lawyer acting as your in-house General Counsel on a two- or three-day-a-week basis, on an ongoing retainer.

[embedded.hero.cta]
Book a scoping call →

## Section 01 · Scope

[embedded.s01.kicker.num]
01

[embedded.s01.kicker.label]
Scope

[embedded.s01.h2]
The full GC role.

[embedded.s01.intro]
An Embedded General Counsel engagement covers the full scope of a General Counsel role. Senior judgement on day one — not a junior lawyer working their way up.

[embedded.s01.bullets]
- Ownership of your commercial contract stack across all jurisdictions you operate in
- Leadership of commercial negotiations on material deals
- Management of external counsel relationships and fee oversight
- Legal operations — templates, playbooks, obligation tracking, approval workflows
- Board and leadership risk reporting
- Support to People, Finance, and Product teams on their legal touchpoints
- Readiness for funding rounds, M&A, expansion, and exit

## Section 02 · Engagement shape

[embedded.s02.kicker.num]
02

[embedded.s02.kicker.label]
Engagement shape

[embedded.s02.h2]
Sharp scope. No hourly billing.

### Spec rows (left = mono label, right = body)

[embedded.s02.spec.who.label]
Who it's for

[embedded.s02.spec.who.value]
European B2B scale-ups, typically Series B to Series D, without a full-time GC or bridging between hires.

[embedded.s02.spec.cadence.label]
Cadence

[embedded.s02.spec.cadence.value]
Two to three days a week. Remote-first, with on-site presence for key moments.

[embedded.s02.spec.retainer.label]
Retainer

[embedded.s02.spec.retainer.value]
Pricing on request. Billed monthly in advance.

[embedded.s02.spec.term.label]
Term

[embedded.s02.spec.term.value]
Six-month minimum, then rolling. Notice period in the engagement letter.

[embedded.s02.spec.notincluded.label]
Not included

[embedded.s02.spec.notincluded.value]
Contentious litigation, criminal defence, personal legal matters. Referred to specialists.

[embedded.s02.spec.start.label]
Time to start

[embedded.s02.spec.start.value]
2–3 weeks from a signed engagement letter.

[embedded.s02.callout]
**One relationship. One invoice.** One point of accountability across your European footprint — not five law firms with five different views of your business.

[embedded.s02.cta]
Book a scoping call →

## Footer CTA (this page)

[embedded.footer.cta.h2]
Need a GC now, not in nine months?

[embedded.footer.cta.btn]
Book a scoping call →

---
---

# § 4 · GC on Demand — `/services/gc-on-demand/`

## SEO

[ondemand.meta.title]
GC on Demand | Part-Time Fractional General Counsel | PivotGC

[ondemand.meta.description]
Part-time fractional General Counsel for earlier-stage European scale-ups. Senior legal judgement on retainer, without full-time cost.

## Hero

[ondemand.hero.meta]
- Service 02 / On demand
- Light retainer · monthly cadence
- Pricing on request

[ondemand.hero.h1]
GC on *Demand.*

[ondemand.hero.lede]
For companies that need senior legal judgement on tap, but not every week. A lighter retainer for earlier-stage teams or quieter operational periods.

[ondemand.hero.cta]
Book a scoping call →

## Section 01 · Typical scope

[ondemand.s01.kicker.num]
01

[ondemand.s01.kicker.label]
Typical scope

[ondemand.s01.h2]
Senior judgement, on tap.

[ondemand.s01.intro]
GC on Demand gives you access to senior commercial legal judgement without the overhead of a full embedded engagement.

[ondemand.s01.bullets]
- **Contract review queue** — inbound contracts reviewed and redlined within SLA
- **Monthly strategic check-in** with leadership
- **Ad-hoc commercial negotiation support**
- **Escalation path** for material issues
- **Quarterly legal operations review**

## Section 02 · Engagement shape

[ondemand.s02.kicker.num]
02

[ondemand.s02.kicker.label]
Engagement shape

[ondemand.s02.h2]
Lighter footprint. Same seniority.

[ondemand.s02.spec.who.label]
Who it's for

[ondemand.s02.spec.who.value]
Series A to early Series B companies, or companies in a quieter phase between major commercial cycles.

[ondemand.s02.spec.cadence.label]
Cadence

[ondemand.s02.spec.cadence.value]
Monthly check-in plus inbound contract review within SLA. Async-first; calls when they earn their place.

[ondemand.s02.spec.retainer.label]
Retainer

[ondemand.s02.spec.retainer.value]
Pricing on request. Billed monthly in advance.

[ondemand.s02.spec.term.label]
Term

[ondemand.s02.spec.term.value]
Three-month minimum, then monthly rolling.

[ondemand.s02.spec.escalation.label]
Escalation

[ondemand.s02.spec.escalation.value]
Direct line for material issues. If something needs a deeper look, we step up — or scope a strategic project.

[ondemand.s02.cta]
Book a scoping call →

## Footer CTA (this page)

[ondemand.footer.cta.h2]
Need senior legal judgement on tap?

[ondemand.footer.cta.btn]
Book a scoping call →

---
---

# § 5 · Strategic Projects — `/services/projects/`

## SEO

[projects.meta.title]
Legal Projects for Scale-ups | Fixed-Fee Engagements | PivotGC

[projects.meta.description]
Fixed-fee legal project work for European scale-ups: European expansion, contract stack overhaul, M&A integration, distribution network restructure.

## Hero

[projects.hero.meta]
- Service 03 / Project
- Fixed fee · scoped up front
- Defined endpoint

[projects.hero.h1]
Strategic *Projects.*

[projects.hero.lede]
For specific moments where the work has a shape and an endpoint. Some legal work doesn't fit inside a retainer — it has a defined scope, a clear endpoint, and a fixed commercial outcome.

[projects.hero.cta]
Discuss a project →

## Section 01 · Common project types (5 cards)

[projects.s01.kicker.num]
01

[projects.s01.kicker.label]
Common projects

[projects.s01.h2]
Five shapes of work.

### Card 1 · Expansion

[projects.s01.card01.num]
Project 01 / Expansion

[projects.s01.card01.title]
European expansion legal setup

[projects.s01.card01.body]
Entity structure, employment frameworks, commercial contract localisation, data compliance — across the markets you're entering.

### Card 2 · Contracts

[projects.s01.card02.num]
Project 02 / Contracts

[projects.s01.card02.title]
Contract stack overhaul

[projects.s01.card02.body]
Audit existing templates, rebuild for the scale you're at now, implement with the team. Contract ops that finally match the company.

### Card 3 · M&A

[projects.s01.card03.num]
Project 03 / M&A

[projects.s01.card03.title]
Post-M&A integration

[projects.s01.card03.body]
Harmonise contracts, align terms, manage transitional service agreements — turn an acquisition into one company.

### Card 4 · Distribution

[projects.s01.card04.num]
Project 04 / Distribution

[projects.s01.card04.title]
Distribution & reseller restructure

[projects.s01.card04.body]
Review existing arrangements, redraft, renegotiate where needed. Channel terms that hold under pressure.

### Card 5 · Exit

[projects.s01.card05.num]
Project 05 / Exit

[projects.s01.card05.title]
Pre-exit readiness

[projects.s01.card05.body]
Contract audit, cleanup, data room preparation. Quiet legal debt cleared before diligence catches it.

## Section 02 · How it works

[projects.s02.kicker.num]
02

[projects.s02.kicker.label]
How it works

[projects.s02.h2]
Discovery, then delivery.

[projects.s02.spec.phase01.label]
Phase 01 — Discovery

[projects.s02.spec.phase01.value]
A short, paid discovery phase. Read the contracts, talk to the team, define the scope. Output: a written scope, a fixed fee, and a clear list of deliverables.

[projects.s02.spec.phase02.label]
Phase 02 — Delivery

[projects.s02.spec.phase02.value]
Fixed-fee execution against the agreed scope. Weekly written status. Defined hand-off at the end.

[projects.s02.spec.pricing.label]
Pricing

[projects.s02.spec.pricing.value]
Fixed fee, scoped after discovery. No hourly billing, no surprises on the invoice.

[projects.s02.spec.locallaw.label]
Locally admitted advice

[projects.s02.spec.locallaw.value]
Where the project requires it, we instruct vetted specialists from a curated network and manage the relationship on your behalf.

[projects.s02.callout]
Each engagement is scoped in a paid discovery phase, then delivered at a fixed fee against defined deliverables. *You know what you're getting, and what it costs, before the work starts.*

[projects.s02.cta]
Discuss a project →

## Footer CTA (this page)

[projects.footer.cta.h2]
A project with a shape and an endpoint?

[projects.footer.cta.btn]
Discuss a project →

---
---

# § 6 · About — `/about/`

## SEO

[about.meta.title]
About PivotGC | European Fractional General Counsel Practice

[about.meta.description]
PivotGC is a fractional General Counsel practice for European B2B scale-ups. Every PivotGC GC holds top academic credentials, has practised across at least three European countries, and has 5+ years advising C-level executives.

## Hero

[about.hero.meta]
- About
- Senior counsel · curated network
- Europe-wide

[about.hero.h1]
Senior legal leadership *before* you can justify a hire.

[about.hero.lede]
PivotGC closes the gap between external law firms and a full-time General Counsel for European B2B scale-ups.

## Section 01 · Why this practice exists

[about.s01.kicker.num]
01

[about.s01.kicker.label]
Why this practice exists

[about.s01.h2]
Scale-ups are underserved by the legal market.

[about.s01.body]
European scale-ups are underserved by a legal market designed for Fortune 500 companies and one-person startups. They need senior legal leadership before they can justify a full-time hire, and they need it across multiple jurisdictions before any single law firm can serve them coherently. The recruitment market cannot deliver on scale-up timelines, and external counsel is structurally misaligned with scale-up economics.

**PivotGC exists to close that gap.**

## Section 02 · Our counsel

[about.s02.kicker.num]
02

[about.s02.kicker.label]
Our counsel

[about.s02.h2]
One standard. No juniors dressed up as partners.

[about.s02.intro]
Every PivotGC General Counsel meets a common bar before they ever speak to a client.

[about.s02.bullets]
- **Top academic credentials** from leading European law faculties.
- **Admitted** in their home jurisdiction, practising lawyers in good standing.
- **International experience across at least three European countries** — typically a mix of United Kingdom, Nordics, DACH, and Benelux.
- **5+ years advising C-level executives** — founders, CEOs, COOs, CFOs — on material commercial and strategic matters.
- **Scale-up fluency**: either building or supporting the legal function inside a scale-up, or running meaningful parts of a multinational in-house team.

[about.s02.outro]
When we take on an engagement, we match a GC to your sector, your jurisdictional footprint, and your stage. You deal with one senior lawyer. The curated European specialist network sits behind them.

## Section 03 · How we work (spec table)

[about.s03.kicker.num]
03

[about.s03.kicker.label]
How we work

[about.s03.h2]
Retainer, not timesheet.

[about.s03.spec.engagement.label]
Engagement

[about.s03.spec.engagement.value]
Retainer-based. Monthly, fixed. No hourly billing.

[about.s03.spec.shape.label]
Shape

[about.s03.spec.shape.value]
Embedded GC (2–3 days / week), GC on Demand (lighter retainer), or fixed-fee strategic projects.

[about.s03.spec.coverage.label]
Coverage

[about.s03.spec.coverage.value]
United Kingdom, Sweden, Norway, Denmark, Finland, Netherlands, Switzerland, Germany — plus vetted specialists for other European jurisdictions.

[about.s03.spec.start.label]
Time to start

[about.s03.spec.start.value]
2–3 weeks from a signed engagement letter. Faster for urgent projects.

[about.s03.spec.based.label]
Based

[about.s03.spec.based.value]
Geneva · London · remote across Europe

[about.s03.spec.contact.label]
Contact

[about.s03.spec.contact.value]
info@pivotgc.com

[about.s03.cta]
Book a scoping call →

## Footer CTA (this page)

[about.footer.cta.h2]
Ready for a senior conversation?

[about.footer.cta.btn]
Book a scoping call →

---
---

# § 7 · Europe — `/europe/`

## SEO

[europe.meta.title]
European Legal Coverage | Cross-Border Fractional GC | PivotGC

[europe.meta.description]
Single-point fractional General Counsel coverage across the UK, Sweden, Norway, Netherlands, and Switzerland. One lawyer, one invoice, coordinated European legal operations.

## Hero

[europe.hero.meta]
- European Coverage
- 8 jurisdictions · coordinated
- One lawyer · one invoice

[europe.hero.h1]
One lawyer. Coordinated *across Europe.*

[europe.hero.lede]
Expanding across Europe means your legal surface area multiplies faster than your team. Different employment law. Different contract norms. Different data regimes. We run the European legal function through one relationship.

[europe.hero.cta]
Book a scoping call →

## Section 01 · The approach

[europe.s01.kicker.num]
01

[europe.s01.kicker.label]
The approach

[europe.s01.h2]
Five law firms is not a legal function.

[europe.s01.body]
The default response to European expansion is to instruct a different law firm in every market. You end up with five invoices, five points of contact, five partial views of your business, and no one who sees the whole.

PivotGC takes the opposite approach. **One senior lawyer owns your European legal function.** When locally admitted advice is needed, we bring in vetted specialists from a curated network — but you never have to manage them. We do.

## Section 02 · Jurisdictions (tag list)

[europe.s02.kicker.num]
02

[europe.s02.kicker.label]
Jurisdictions

[europe.s02.h2]
Where we regularly operate.

[europe.s02.taglist]
- United Kingdom
- Sweden
- Norway
- Denmark
- Finland
- Netherlands
- Switzerland
- Germany

[europe.s02.note]
For matters in other European jurisdictions, we instruct from a vetted network of specialists.

## Section 03 · Matters

[europe.s03.kicker.num]
03

[europe.s03.kicker.label]
Matters

[europe.s03.h2]
Routinely handled across jurisdictions.

[europe.s03.bullets]
- Commercial contracts
- SaaS terms and master service agreements
- Distribution and agency arrangements
- Reseller and channel partner contracts
- Employment and contractor arrangements
- Data protection (GDPR, FADP)
- Corporate governance
- Fundraising documentation
- M&A support
- IP licensing

[europe.s03.callout]
**Locally admitted advice, when it's actually needed.** For matters that specifically require a locally qualified lawyer — court representation, regulated filings, country-specific opinions — we instruct vetted specialists and manage the relationship on your behalf. *One point of accountability, whatever the jurisdiction.*

## Section 04 · How to engage (3 cards)

[europe.s04.kicker.num]
04

[europe.s04.kicker.label]
How to engage

[europe.s04.h2]
Three engagement shapes.

[europe.s04.card01.num]
Engagement 01

[europe.s04.card01.title]
Embedded GC

[europe.s04.card01.body]
Two to three days a week. Full ownership of your European legal function.

[europe.s04.card01.cta]
Learn more →

[europe.s04.card02.num]
Engagement 02

[europe.s04.card02.title]
GC on Demand

[europe.s04.card02.body]
Senior legal judgement on retainer, without a full embedded engagement.

[europe.s04.card02.cta]
Learn more →

[europe.s04.card03.num]
Engagement 03

[europe.s04.card03.title]
Strategic Projects

[europe.s04.card03.body]
Fixed-fee European expansion setup, contract overhauls, M&A integration.

[europe.s04.card03.cta]
Learn more →

## Footer CTA (this page)

[europe.footer.cta.h2]
Expanding across Europe? Let's talk.

[europe.footer.cta.btn]
Book a scoping call →

---
---

# § 8 · Insights — `/insights/`

## SEO

[insights.meta.title]
Insights | PivotGC Fractional General Counsel

[insights.meta.description]
Articles on commercial legal strategy for European scale-ups: when to hire a General Counsel, cross-border legal operations, reducing external counsel spend, and more.

## Hero

[insights.hero.meta]
- Insights
- One article / month
- Frameworks & numbers

[insights.hero.h1]
Writing on the commercial legal function for *European scale-ups.*

[insights.hero.lede]
One substantive article a month. No listicles, no hot takes. Frameworks and numbers you can actually use.

## Section 01 · Launch series (6-row index)

[insights.s01.kicker.num]
01

[insights.s01.kicker.label]
Launch series

[insights.s01.h2]
Six pieces, in order.

### Article 01

[insights.s01.row01.num]
01

[insights.s01.row01.title]
When should a European scale-up hire a General Counsel?

[insights.s01.row01.sub]
A decision framework — thresholds, signals, and when a fractional GC is the better fit than a full-time hire.

[insights.s01.row01.meta]
Coming soon

### Article 02

[insights.s01.row02.num]
02

[insights.s01.row02.title]
The real cost of a European General Counsel

[insights.s01.row02.sub]
What scale-ups don't budget for: loaded-cost breakdown by country (London, Zurich, Amsterdam, Stockholm).

[insights.s01.row02.meta]
Coming soon

### Article 03

[insights.s01.row03.num]
03

[insights.s01.row03.title]
Managing legal across multiple European jurisdictions without a team

[insights.s01.row03.sub]
A playbook for scale-up operators running the legal function themselves.

[insights.s01.row03.meta]
Coming soon

### Article 04

[insights.s01.row04.num]
04

[insights.s01.row04.title]
Fractional vs interim vs part-time General Counsel

[insights.s01.row04.sub]
What actually differs — and which one you probably need.

[insights.s01.row04.meta]
Coming soon

### Article 05

[insights.s01.row05.num]
05

[insights.s01.row05.title]
How to cut external counsel spend by 30% without losing quality

[insights.s01.row05.sub]
Contrarian and practical: scoping, fee challenges, and what to stop paying for.

[insights.s01.row05.meta]
Coming soon

### Article 06

[insights.s01.row06.num]
06

[insights.s01.row06.title]
Contract operations for Series B scale-ups

[insights.s01.row06.sub]
What good looks like: templates, playbooks, obligation tracking, approval thresholds.

[insights.s01.row06.meta]
Coming soon

[insights.s01.callout]
New writing is published roughly once a month. If you'd like it in your inbox, drop a note via the contact page.

## Footer CTA (this page)

[insights.footer.cta.h2]
Want the writing in your inbox?

[insights.footer.cta.btn]
Get in touch →

---
---

# § 9 · FAQ — `/faq/`

Each Q&A below renders **twice** on the live site: once as visible HTML, once inside the FAQPage JSON-LD schema (which is what Google and answer engines extract). You only edit them once here. I'll update both places.

## SEO

[faq.meta.title]
Fractional General Counsel FAQ | PivotGC

[faq.meta.description]
Answers to common questions about fractional General Counsel services for European scale-ups: cost, scope, engagement models, jurisdictional coverage, and how we work.

## Hero

[faq.hero.meta]
- FAQ · 18 questions
- Cost · scope · jurisdiction · engagement
- Direct answers

[faq.hero.h1]
Frequently asked *questions.*

[faq.hero.lede]
Direct answers on cost, scope, jurisdictions, and how a fractional General Counsel engagement actually works in practice.

## Section group A · Definitions & comparisons

[faq.groupA.kicker.label]
Definitions & comparisons

### Q01

[faq.q01.question]
What is a fractional General Counsel?

[faq.q01.answer]
A fractional General Counsel is a senior commercial lawyer who performs the role of an in-house General Counsel for multiple companies on a part-time, retainer basis. Unlike external law firms, a fractional GC is embedded in the business. Unlike a full-time hire, they work across several clients and cost a fraction of a full GC salary.

### Q02

[faq.q02.question]
How is a fractional GC different from a law firm?

[faq.q02.answer]
A law firm typically bills hourly, works reactively on specific matters, and rarely sees the whole of a client's business. A fractional General Counsel is embedded in the business, works proactively, owns the legal function end-to-end, and bills on a fixed retainer. The commercial incentives are fundamentally different: law firms profit from more hours; a fractional GC profits from retention, which means preventing problems rather than billing them.

### Q03

[faq.q03.question]
How is a fractional GC different from a part-time or interim GC?

[faq.q03.answer]
"Part-time," "interim," and "fractional" are often used interchangeably, but there are practical distinctions. Interim GCs typically backfill a departed GC for a defined period. Part-time GCs are usually employed by one company on reduced hours. Fractional GCs serve multiple clients on ongoing retainers and are structured as an independent practice rather than an employment arrangement.

### Q04

[faq.q04.question]
When should a scale-up hire a General Counsel?

[faq.q04.answer]
Most European scale-ups begin to need a General Counsel function around Series B, when the contract stack gets larger and more complex, the company expands into additional jurisdictions, and commercial deals start to involve material legal risk. A full-time GC typically makes financial sense from Series C or around €30–50M revenue, though this varies by sector and complexity. Before that point, a fractional GC is usually the better economic and practical fit.

## Section group B · Cost

[faq.groupB.kicker.label]
Cost

### Q05

[faq.q05.question]
How much does a fractional General Counsel cost?

[faq.q05.answer]
Fractional General Counsel retainers in Europe typically range from €3,000 per month for lighter engagements (a few hours per week) to €20,000 per month for embedded two-to-three-day-a-week engagements. The cost is significantly lower than a full-time GC (typically €200,000+ all-in) and typically delivers better outcomes than reactive hourly-billed external counsel at the same or lower total spend.

### Q06

[faq.q06.question]
How much does a full-time General Counsel cost in Europe?

[faq.q06.answer]
A full-time European General Counsel for a scale-up typically costs €180,000–300,000 per year in total compensation, plus equity, benefits, recruitment fees (often 25–30% of first-year salary), and onboarding time. The full loaded cost in year one is frequently above €300,000. Senior GCs in London, Zurich, Amsterdam, and Stockholm tend to the upper end of the range.

### Q07

[faq.q07.question]
How do you bill?

[faq.q07.answer]
Retainers are billed monthly in advance. Projects are fixed-fee against defined deliverables. We do not bill hourly.

## Section group C · Scope & jurisdiction

[faq.groupC.kicker.label]
Scope & jurisdiction

### Q08

[faq.q08.question]
What does a fractional GC actually do day-to-day?

[faq.q08.answer]
Typical activities include reviewing and negotiating commercial contracts, advising leadership on deals in progress, managing external counsel relationships, building and maintaining contract templates and legal playbooks, advising on employment and contractor matters, tracking contract obligations, preparing for funding rounds or M&A, and briefing the board on legal risk.

### Q09

[faq.q09.question]
Are you admitted in every jurisdiction you work across?

[faq.q09.answer]
No commercial lawyer is admitted in every European jurisdiction, and anyone who claims to be isn't being straight. Every PivotGC General Counsel holds top academic credentials, is admitted in their home jurisdiction, and has practised across at least three European countries, with 5+ years of experience advising C-level executives on material commercial matters. Across other European jurisdictions, we operate as in-house counsel for our clients and instruct locally admitted lawyers when a matter specifically requires it. This is how every multinational in-house legal function works — we simply do it for companies that do not yet have the infrastructure to do it themselves.

### Q10

[faq.q10.question]
Is this a law firm?

[faq.q10.answer]
No. PivotGC is a fractional General Counsel practice. We provide the in-house legal function for our clients — the same role an employed GC would play — on a fractional basis. For matters requiring court representation or locally admitted advice, we instruct specialist external counsel, which we manage on the client's behalf.

### Q11

[faq.q11.question]
What jurisdictions do you cover?

[faq.q11.answer]
We regularly operate across the United Kingdom, Sweden, Norway, Denmark, Finland, the Netherlands, Switzerland, and Germany. For matters in other European jurisdictions, we instruct from a vetted network of specialists.

### Q12

[faq.q12.question]
What types of companies do you work with?

[faq.q12.answer]
European B2B scale-ups, typically Series B to Series D or €10–100M in revenue, operating across at least two jurisdictions. Most common sectors: SaaS, fintech, industrial technology, marketplaces, and healthtech.

### Q13

[faq.q13.question]
What do you not do?

[faq.q13.answer]
Contentious litigation. Criminal defence. Personal legal matters. Tax advice. High-volume junior work better suited to a paralegal. We refer these elsewhere.

## Section group D · Engagement & transitions

[faq.groupD.kicker.label]
Engagement & transitions

### Q14

[faq.q14.question]
How quickly can you start?

[faq.q14.answer]
Typically two to three weeks from a signed engagement letter. Faster for urgent projects with defined scope.

### Q15

[faq.q15.question]
What happens when we're ready to hire a full-time GC?

[faq.q15.answer]
That is usually the goal. Where an engagement is explicitly scoped as a bridge to a full-time hire, we help write the role, screen candidates, support onboarding, and hand over the function cleanly. Several of our engagements are structured this way from day one.

### Q16

[faq.q16.question]
Do you carry professional indemnity insurance?

[faq.q16.answer]
Yes. We carry professional indemnity cover appropriate to the scale of our engagements. Details available on request.

### Q17

[faq.q17.question]
Can you work with our existing law firms?

[faq.q17.answer]
Yes. Most of our clients have existing external counsel relationships that we then manage. In practice, we often reduce overall external spend by scoping work more tightly and challenging fee arrangements.

### Q18

[faq.q18.question]
Can you support a funding round or M&A process?

[faq.q18.answer]
Yes. Fundraising documentation, diligence management, and M&A support are core to the Embedded GC service. For larger transactions, we instruct specialist transaction counsel and manage the process.

## Closing line

[faq.closer]
Still a question we haven't answered? Ask on the scoping call →

## Footer CTA (this page)

[faq.footer.cta.h2]
Still have a question? Ask it on the call.

[faq.footer.cta.btn]
Book a scoping call →

---
---

# § 10 · Contact — `/contact/`

## SEO

[contact.meta.title]
Book a Scoping Call | PivotGC Fractional General Counsel

[contact.meta.description]
Book a 30-minute scoping call with PivotGC. Fractional General Counsel for European B2B scale-ups. No obligation, no pitch deck.

## Hero

[contact.hero.meta]
- Contact
- 30-minute scoping call
- No pitch deck

[contact.hero.h1]
Start a *conversation.*

[contact.hero.lede]
A direct call about whether a fractional GC is the right fit for your company. No pitch deck, no follow-up chase, no obligation. Tell us a bit about what's on fire and we'll come back within two working days.

## Section 01 · What to expect

[contact.s01.kicker.num]
01

[contact.s01.kicker.label]
What to expect

[contact.s01.h2]
Four things, and that's it.

[contact.s01.bullets]
- A 30-minute call with a senior PivotGC General Counsel — not an associate, not a sales lead.
- A candid read on whether your situation fits an Embedded GC, GC on Demand, or a scoped project — or whether you need something different entirely.
- If there's a fit, a short written scope and retainer proposal within three working days.
- If there isn't, a straight answer and, where possible, a referral.

## Section 02 · Form

[contact.s02.kicker.num]
02

[contact.s02.kicker.label]
Send a note

[contact.s02.h2]
Tell us what's on fire.

[contact.s02.lede]
Submissions route straight to info@pivotgc.com. We reply within two working days.

### Form field labels

[contact.form.field.name.label]
Your name

[contact.form.field.email.label]
Work email

[contact.form.field.company.label]
Company

[contact.form.field.stage.label]
Stage

[contact.form.field.markets.label]
Primary markets

[contact.form.field.markets.placeholder]
e.g. UK, Netherlands, Switzerland

[contact.form.field.timeline.label]
Timeline

[contact.form.field.fire.label]
What's on fire?

[contact.form.field.fire.placeholder]
One sentence is enough. Contract stack, expansion, a specific deal, a dispute, a funding round…

### Stage select options (order matters)

[contact.form.field.stage.options]
- Pre-Seed / Seed
- Series A
- Series B
- Series C
- Series D+
- Bootstrapped / Profitable
- Other

### Timeline select options (order matters)

[contact.form.field.timeline.options]
- Urgent (< 4 weeks)
- Near-term (1–3 months)
- Exploring

### Submit button + fallback

[contact.form.submit]
Send note →

[contact.form.fallback]
Or email info@pivotgc.com directly

## Section 03 · Direct lines

[contact.s03.kicker.num]
03

[contact.s03.kicker.label]
Direct lines

[contact.s03.h2]
Or just email us.

[contact.s03.spec.email.label]
Email

[contact.s03.spec.email.value]
info@pivotgc.com

[contact.s03.spec.response.label]
Response time

[contact.s03.spec.response.value]
Within two working days.

[contact.s03.spec.based.label]
Based

[contact.s03.spec.based.value]
Geneva · London · remote across Europe

[contact.s03.callout]
**What helps on the first call.** A one-sentence description of your company, where you operate, your stage, and the single legal thing that is currently costing you the most time or the most risk. *That's enough.*

[contact.s03.disclaimer]
PivotGC is a fractional General Counsel practice. We are not a law firm and do not provide locally admitted legal advice in every jurisdiction we operate across — see the FAQ for how that works in practice.

## Footer (contact page)

The contact page footer omits the big footer CTA on purpose — there's already a form and a direct email above. If you want a closing CTA on this page too, tell me and I'll add one.

---
---

# § 11 · `llms.txt` (root-level discoverability file for AI answer engines)

This file is what Claude, ChatGPT, Perplexity etc. read to "understand" the practice when they crawl the site. Keep it under ~1,500 words. Each link line below corresponds to a page link with a one-line description.

[llms.headline]
PivotGC

[llms.tagline]
Fractional General Counsel practice serving European B2B scale-ups. Senior cross-border commercial legal leadership on retainer, two to three days a week.

[llms.intro]
PivotGC is a fractional General Counsel practice for European B2B scale-ups (typically Series B to Series D) that need senior legal leadership but do not yet require a full-time General Counsel hire.

Every PivotGC General Counsel holds top academic credentials from leading European law faculties, is admitted in their home jurisdiction, has practised across at least three European countries (typically a mix of United Kingdom, Nordics, DACH, and Benelux), and brings 5+ years of experience advising C-level executives — founders, CEOs, COOs, CFOs — on material commercial and strategic matters. Each engagement is matched to the client's sector, jurisdictional footprint, and stage.

A fractional General Counsel is a senior commercial lawyer who performs the role of an in-house GC for multiple companies on a part-time, retainer basis. Unlike an external law firm, a fractional GC is embedded in the business — attending leadership meetings, owning the contract stack, managing external counsel, and briefing the board on risk. Unlike a full-time hire, a fractional GC costs a fraction of a full GC salary and can start in weeks rather than months.

PivotGC operates across the United Kingdom, Sweden, Norway, Denmark, Finland, the Netherlands, Switzerland, and Germany. One senior lawyer owns the client's European legal function; locally admitted specialists are instructed and managed by PivotGC when a specific matter requires it.

[llms.services.heading]
Services

[llms.services.embedded]
Embedded General Counsel: Two- to three-day-a-week retainer. Full ownership of the commercial legal function: contract stack, commercial deal leadership, external counsel management, legal operations, board risk reporting. Pricing on request. Six-month minimum.

[llms.services.ondemand]
GC on Demand: Lighter retainer for earlier-stage companies (Series A to early Series B). Contract review queue with SLA, monthly strategic check-ins, ad-hoc commercial negotiation support. Pricing on request. Three-month minimum.

[llms.services.projects]
Strategic Projects: Fixed-fee, defined-scope project work. Scoped in a paid discovery phase, then delivered against defined deliverables.

[llms.about.heading]
About

[llms.about.about]
About PivotGC: Practice background, the common bar every PivotGC GC meets, how engagements are matched.

[llms.about.europe]
European coverage: Jurisdictions covered and the single-point coordination model.

[llms.key.heading]
Key information

[llms.key.faq]
Frequently asked questions: Detailed answers on cost, scope, jurisdictional coverage, engagement models, billing, insurance, fit, and how fractional compares to interim, part-time, and law-firm arrangements.

[llms.key.contact]
Contact / scoping call: 30-minute scoping call via contact form; all submissions route to info@pivotgc.com. Written scope and retainer proposal within three working days where there is a fit.

[llms.optional.heading]
Optional

[llms.optional.insights]
Insights: Articles on commercial legal strategy for European scale-ups — when to hire a GC, loaded cost of a European GC, managing legal across multiple jurisdictions, cutting external counsel spend.

[llms.notfor.heading]
Who PivotGC is not for

[llms.notfor.bullets]
- Contentious litigation, criminal defence, personal legal matters, tax advice — referred elsewhere.
- Companies below Series A, or single-jurisdiction companies with limited commercial complexity — a good external law firm is usually a better fit.
- Companies already operating a full, in-house legal team led by a GC.

---
---

_End of copy doc. Send the edited version back and I'll diff and apply._
