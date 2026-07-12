/**
 * Single source of truth for all landing-page copy and lists.
 * Edit text here; swap real assets in /public. No component changes needed.
 * Fields marked TODO are placeholders for the client to replace.
 */

export const site = {
  name: "CA Firm Ops",
  tagline: "Work management for chartered accountant firms",
  description:
    "Run your entire practice in one place — compliance work, clients, timesheets and reporting. Never miss a GST or ITR deadline again.",
  // TODO: replace with the production marketing domain
  url: "https://cafirmops.in",

  // TODO: replace with real contact details
  contact: {
    email: "hello@cafirmops.in",
    phone: "+91 00000 00000",
    whatsapp: "+91 00000 00000",
    // TODO: paste your Calendly/booking link, or leave "" to use the on-page form only
    demoLink: "",
    city: "Hyderabad, India",
  },

  nav: [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ],

  hero: {
    eyebrow: "Built for Indian CA practices",
    // Two-part headline: the display face carries the personality.
    titleLead: "Every filing, every client,",
    titleAccent: "every deadline — handled.",
    subtitle:
      "CA Firm Ops replaces the spreadsheets, WhatsApp groups and manual registers your firm runs on with one calm, deadline-aware workspace your whole team actually keeps up to date.",
    primaryCta: "Book a demo",
    secondaryCta: "See how it works",
  },

  // Small proof metrics under the hero. TODO: replace with real numbers when available.
  stats: [
    { value: "9", label: "modules, one login" },
    { value: "100%", label: "of statutory work tracked" },
    { value: "0", label: "missed-deadline surprises" },
    { value: "1-firm", label: "isolated, private tenant" },
  ],

  // Placeholder client/firm logos for the trust strip (text-based; swap for images).
  trustedBy: [
    "Sharma & Associates",
    "Ramesh Gupta & Co.",
    "Balaji Consulting",
    "Sri Hardware Advisors",
    "Padala & Partners",
  ],

  problem: {
    eyebrow: "The daily reality",
    title: "Compliance work doesn't fit in a spreadsheet",
    body: "A growing practice juggles hundreds of recurring returns across dozens of clients, spread over staff who each track things their own way. The cost isn't just chaos — it's a missed GSTR-3B, an unbilled hour, a client who slips through.",
    pains: [
      {
        title: "Deadlines live in people's heads",
        body: "GST, TDS, ITR and ROC dates scattered across calendars and chat — until one quietly passes.",
      },
      {
        title: "Nobody knows the real status",
        body: "\"Is the Sharma filing done?\" becomes a round of messages instead of a glance at a board.",
      },
      {
        title: "Billable time leaks away",
        body: "Hours worked but never logged mean work you did but never invoiced.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    title: "One workspace for the whole practice",
    subtitle:
      "Every module maps to how a CA firm actually runs — not a generic project tool bent to fit.",
    items: [
      {
        icon: "Ticket",
        title: "Work tickets & Kanban board",
        body: "Track every task from Open to Done with priorities, assignees, managers and sub-task checklists. See the whole firm's work on a drag-and-drop board.",
      },
      {
        icon: "Repeat",
        title: "Recurring compliance",
        body: "Set GST, TDS or ROC work to repeat monthly, quarterly or yearly. The next ticket is created automatically, with the right due date, every cycle.",
      },
      {
        icon: "Clock",
        title: "Timesheets & billable hours",
        body: "A calendar view to log time against tickets, with billable vs non-billable totals — so every hour worked is an hour you can invoice.",
      },
      {
        icon: "Users",
        title: "Client management",
        body: "GSTIN, state, RCM applicability, credit period, bill-to / ship-to and full contact details — the fields a CA actually needs, on every client.",
      },
      {
        icon: "LayoutTemplate",
        title: "Work templates",
        body: "Define a standard job once — its sub-tasks, documents required and defaults — then spin up a ready-to-go ticket in seconds.",
      },
      {
        icon: "FileSpreadsheet",
        title: "Reporting & Excel export",
        body: "Filter by client, status, assignee, category or any date, preview the report, and download a clean Excel with exactly the columns you choose.",
      },
      {
        icon: "ShieldCheck",
        title: "Roles for your team",
        body: "CA, Manager and Employee roles keep the right people in control while everyone sees the work that's theirs.",
      },
      {
        icon: "Mail",
        title: "Your branding & email",
        body: "Send client and team notifications from your own firm's name and mailbox, on your own subdomain — the product disappears behind your brand.",
      },
      {
        icon: "LayoutDashboard",
        title: "Dashboard & analytics",
        body: "A live picture of open work, what's overdue, and how the team is tracking — the numbers a partner checks first thing in the morning.",
      },
    ],
  },

  // Deep-dive alternating blocks. `image` points to /public — replace with real screenshots.
  workflow: {
    eyebrow: "Workflow",
    title: "From deadline to done, without the chasing",
    blocks: [
      {
        kicker: "See everything",
        title: "The whole firm's work on one board",
        body: "Columns for Open, In Progress, Review and Done. Drag a ticket to move it; filter to a client, an assignee or a due window. The status question answers itself.",
        bullets: ["Drag-and-drop Kanban", "Filter by client, assignee, date", "Priorities & overdue flags"],
        image: "/screens/board.svg",
        alt: "Kanban board of compliance tickets across Open, In Progress, Review and Done",
      },
      {
        kicker: "Never miss a date",
        title: "Recurring work that files itself into your calendar",
        body: "Monthly GST, quarterly TDS, annual ROC — set the cadence once and the next ticket appears on time, assigned, with the correct due date derived automatically.",
        bullets: ["Monthly / quarterly / yearly", "Auto-created next cycle", "Correct due date every time"],
        image: "/screens/recurring.svg",
        alt: "Recurring schedule configuration for statutory compliance work",
      },
      {
        kicker: "Bill every hour",
        title: "Timesheets that turn effort into invoices",
        body: "Log time in a familiar week or day calendar, tagged billable or not. Totals roll up per person and per client, so nothing you worked on goes unbilled.",
        bullets: ["Week & day calendar", "Billable vs non-billable", "Per-client roll-ups"],
        image: "/screens/timesheet.svg",
        alt: "Weekly timesheet calendar with billable hour totals",
      },
    ],
  },

  security: {
    eyebrow: "Trust & isolation",
    title: "Your firm's data stays your firm's data",
    body: "You handle sensitive financials. The platform is built multi-tenant from the ground up, so each firm is walled off from every other one.",
    points: [
      {
        icon: "Server",
        title: "A private tenant per firm",
        body: "Your practice runs on its own subdomain with data isolated at every query — no leakage between firms.",
      },
      {
        icon: "Lock",
        title: "Encrypted email credentials",
        body: "Your SMTP secrets are stored with strong AES-256 encryption at rest and never exposed by the app.",
      },
      {
        icon: "KeyRound",
        title: "Role-based access",
        body: "CA, Manager and Employee permissions ensure people only reach the work they're meant to.",
      },
    ],
  },

  testimonials: {
    eyebrow: "In their words",
    title: "Practices that stopped chasing status",
    // TODO: replace with real quotes, names, firms and cities.
    items: [
      {
        quote:
          "We used to spend Monday mornings reconstructing what got filed. Now the board tells us before we even ask.",
        name: "Placeholder Name",
        role: "Partner",
        firm: "Placeholder & Associates",
        city: "Hyderabad",
      },
      {
        quote:
          "Recurring compliance alone paid for it. No return quietly slips past its due date anymore.",
        name: "Placeholder Name",
        role: "Managing Partner",
        firm: "Placeholder Consulting",
        city: "Bengaluru",
      },
      {
        quote:
          "Timesheets finally match reality, so our billing does too. That's real money we were leaving on the table.",
        name: "Placeholder Name",
        role: "Founder",
        firm: "Placeholder & Co.",
        city: "Chennai",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Priced to your firm, not per seat you'll regret",
    body: "Every practice is a different size with a different mix of work. Tell us about yours and we'll put together a plan that fits — no bloated per-user tiers, no surprises.",
    includes: [
      "All modules included",
      "Your own private subdomain",
      "Onboarding & data setup help",
      "Email & priority support",
    ],
    cta: "Get a quote",
  },

  finalCta: {
    eyebrow: "See it on your own work",
    title: "Book a 30-minute demo",
    body: "We'll set up a walkthrough with your firm's real workflow in mind — GST cycles, your client mix, your team structure. No slides, just the product.",
  },

  faq: [
    {
      q: "Is it built specifically for chartered accountants?",
      a: "Yes. Clients carry GSTIN, RCM and credit-period fields; work recurs on statutory cadences; and reporting exports the columns a CA actually files. It isn't a generic task tool.",
    },
    {
      q: "Can we send emails from our own firm's address?",
      a: "Yes. Configure your firm's SMTP once and client and team notifications go out under your name and brand, on your own subdomain.",
    },
    {
      q: "How is our data kept separate from other firms?",
      a: "The platform is multi-tenant by design. Each firm runs on its own subdomain with data isolated at the query layer, and email credentials are encrypted at rest.",
    },
    {
      q: "Can we get our existing clients and work in quickly?",
      a: "Onboarding help is included. We assist with initial client setup and templates so your team is productive from day one.",
    },
  ],
};

export type Site = typeof site;
