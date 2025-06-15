import {
  BarChart,
  CheckCircle,
  Code,
  Code2,
  CreditCard,
  EyeOff,
  Gift,
  Headphones,
  Info,
  Infinity as LucideInfinity,
  Mail,
  Plug2,
  Send,
  Shuffle,
  Trash2,
} from "lucide-react";

import EmailsIcon from "@/assets/icons/emails.svg";
import GuaranteeIcon from "@/assets/icons/guarantee.svg";
import SupportIcon from "@/assets/icons/support.svg";
import UptimeIcon from "@/assets/icons/uptime.svg";

export const creditRates = [
  {
    id: 1,
    amount: 5000,
    price: 0.0076,
  },
  {
    id: 2,
    amount: 10000,
    price: 0.006,
  },
  {
    id: 3,
    amount: 25000,
    price: 0.00564,
  },
  {
    id: 4,
    amount: 50000,
    price: 0.0049,
  },
  {
    id: 5,
    amount: 100000,
    price: 0.0042,
  },
  {
    id: 6,
    amount: 250000,
    price: 0.003,
  },
  {
    id: 7,
    amount: 500000,
    price: 0.0027,
  },
  {
    id: 8,
    amount: 1000000,
    price: 0.0021,
  },
];

export const included = [
  {
    id: 1,
    text: "Credit never Expires",
    icon: LucideInfinity,
  },
  {
    id: 2,
    text: "100 free Credits",
    icon: Gift,
  },
  {
    id: 3,
    text: "No Hidden Costs",
    icon: EyeOff,
  },
  {
    id: 4,
    text: "Detailed Status Codes",
    icon: Code,
  },
  {
    id: 5,
    text: "24/7 Customer Support",
    icon: Headphones,
  },
  {
    id: 6,
    text: "Volume Pricing",
    icon: BarChart,
  },
  {
    id: 7,
    text: "Email Server Testing",
    icon: Mail,
  },
  {
    id: 8,
    text: "Undeterministic Results are Free",
    icon: Shuffle,
  },
  {
    id: 9,
    text: "Free Deduplication Removal",
    icon: Trash2,
  },
];

export const guarantees = [
  {
    id: 1,
    value: "99%",
    title: "Deliverability Guarantee",
    description:
      "We guarantee that no more than 1% of emails verified as valid will bounce.",
    icon: GuaranteeIcon,
  },
  {
    id: 2,
    value: "30K+",
    title: "Emails Verified/min",
    description: "We verify emails over 8x faster than the competition.",
    icon: EmailsIcon,
  },
  {
    id: 3,
    value: "99.99%",
    title: "Platform Uptime",
    description:
      "Our secure and robust global infrastructure provides 99.99% uptime.",
    icon: UptimeIcon,
  },
  {
    id: 4,
    value: "24/7",
    title: "Customer Support",
    description:
      "Our team of experts are located around the globe & are available 24/7.",
    icon: SupportIcon,
  },
];

export const faqs = [
  {
    question: "What is email validation?",
    answer:
      "Email validation is the process of verifying whether an email address is properly formatted, exists, and is capable of receiving messages.",
  },
  {
    question: "Why should I validate email addresses?",
    answer:
      "Validating email addresses helps reduce bounce rates, improve deliverability, protect sender reputation, and maintain a clean mailing list.",
  },
  {
    question: "How accurate is your email validation tool?",
    answer:
      "Our tool uses advanced syntax checks, domain/MX verification, and mailbox-level pinging to achieve industry-leading accuracy, typically exceeding 98%.",
  },
  {
    question: "Do you send emails during the validation process?",
    answer:
      "No, we use non-intrusive methods such as DNS and SMTP checks to validate email addresses without sending actual emails.",
  },
  {
    question: "Can I validate emails in bulk?",
    answer:
      "Absolutely. You can upload a list of email addresses via CSV, and our system will validate them efficiently in bulk.",
  },
  {
    question: "Is my email data safe and secure?",
    answer:
      "Yes. We use end-to-end encryption and comply with GDPR and other data protection standards to ensure your data remains private and secure.",
  },
  {
    question: "Do you support real-time email validation via API?",
    answer:
      "Yes, we offer a robust REST API for real-time email validation that easily integrates into your sign-up forms or applications.",
  },
  {
    question: "What types of email addresses can be validated?",
    answer:
      "Our service can validate personal, corporate, free, disposable, and role-based email addresses with high precision.",
  },
  {
    question: "How long does the validation process take?",
    answer:
      "Single validations typically take less than a second. Bulk validations depend on list size, but we optimize for speed and accuracy.",
  },
  {
    question: "Do you detect disposable or temporary email addresses?",
    answer:
      "Yes. Our system maintains an up-to-date database of disposable domains and flags such addresses during validation.",
  },
  {
    question: "Can I download the results of my validation?",
    answer:
      "Of course. After validation, you can export your clean list in multiple formats, including CSV and JSON.",
  },
  {
    question: "Is there a free tier or trial available?",
    answer:
      "Yes, we offer a free tier with limited validations per month so you can try our service before committing.",
  },
];

export const dashNavItems = [
  {
    id: 1,
    name: "Verify Email",
    link: "/verify-email",
  },
  {
    id: 2,
    name: "Dashboard",
    link: "/dashboard",
  },
];

export const pastRecords: PastRecords[] = [
  { id: 1, name: "Alpha One", deliverable: 7, total: 10, status: "processing" },
  {
    id: 2,
    name: "Bravo Delta",
    deliverable: 3,
    total: 12,
    status: "completed",
  },
  {
    id: 3,
    name: "Charlie Echo",
    deliverable: 0,
    total: 5,
    status: "cancelled",
  },
  {
    id: 4,
    name: "Delta Foxtrot",
    deliverable: 9,
    total: 9,
    status: "completed",
  },
  { id: 5, name: "Echo Golf", deliverable: 4, total: 10, status: "processing" },
  {
    id: 6,
    name: "Foxtrot Hotel",
    deliverable: 2,
    total: 8,
    status: "cancelled",
  },
  { id: 7, name: "Golf India", deliverable: 8, total: 10, status: "completed" },
  {
    id: 8,
    name: "Hotel Juliet",
    deliverable: 5,
    total: 6,
    status: "processing",
  },
  { id: 9, name: "India Kilo", deliverable: 1, total: 10, status: "cancelled" },
  {
    id: 10,
    name: "Juliet Lima",
    deliverable: 10,
    total: 10,
    status: "completed",
  },
  { id: 11, name: "Kilo Mike", deliverable: 6, total: 9, status: "processing" },
  {
    id: 12,
    name: "Lima November",
    deliverable: 3,
    total: 7,
    status: "completed",
  },
  { id: 13, name: "Mike Oscar", deliverable: 0, total: 4, status: "cancelled" },
  {
    id: 14,
    name: "November Papa",
    deliverable: 4,
    total: 6,
    status: "processing",
  },
  {
    id: 15,
    name: "Oscar Quebec",
    deliverable: 2,
    total: 5,
    status: "cancelled",
  },
  { id: 16, name: "Papa Romeo", deliverable: 5, total: 5, status: "completed" },
  {
    id: 17,
    name: "Quebec Sierra",
    deliverable: 7,
    total: 8,
    status: "completed",
  },
  {
    id: 18,
    name: "Romeo Tango",
    deliverable: 1,
    total: 10,
    status: "processing",
  },
  {
    id: 19,
    name: "Sierra Uniform",
    deliverable: 6,
    total: 7,
    status: "completed",
  },
  {
    id: 20,
    name: "Tango Victor",
    deliverable: 2,
    total: 4,
    status: "cancelled",
  },
  {
    id: 21,
    name: "Uniform Whiskey",
    deliverable: 3,
    total: 9,
    status: "processing",
  },
  {
    id: 22,
    name: "Victor Xray",
    deliverable: 4,
    total: 8,
    status: "completed",
  },
  {
    id: 23,
    name: "Whiskey Yankee",
    deliverable: 0,
    total: 3,
    status: "cancelled",
  },
  { id: 24, name: "Xray Zulu", deliverable: 8, total: 10, status: "completed" },
  {
    id: 25,
    name: "Zulu Alpha",
    deliverable: 1,
    total: 5,
    status: "processing",
  },
];

export const emails: Email[] = [
  {
    id: 1,
    email: "alice@example.com",
    reason: "Valid syntax and domain",
    score: 98,
    status: "deliverable",
  },
  {
    id: 2,
    email: "bob@invalid-domain.xyz",
    reason: "Domain does not exist",
    score: 12,
    status: "undeliverable",
  },
  {
    id: 3,
    email: "charlie@unknown.net",
    reason: "Timeout during verification",
    score: 50,
    status: "unknown",
  },
  {
    id: 4,
    email: "diana@temporarymail.org",
    reason: "Disposable email detected",
    score: 30,
    status: "risky",
  },
  {
    id: 5,
    email: "edward@company.com",
    reason: "Verified business email",
    score: 95,
    status: "deliverable",
  },
  {
    id: 6,
    email: "frank@@error.com",
    reason: "Invalid email format",
    score: 10,
    status: "undeliverable",
  },
  {
    id: 7,
    email: "grace@mailinator.com",
    reason: "Known throwaway provider",
    score: 40,
    status: "risky",
  },
  {
    id: 8,
    email: "hannah@example.co.uk",
    reason: "Domain and syntax valid",
    score: 89,
    status: "deliverable",
  },
  {
    id: 9,
    email: "ian@ghostmail.io",
    reason: "Domain unresponsive",
    score: 52,
    status: "unknown",
  },
  {
    id: 10,
    email: "julia@retired-domain.org",
    reason: "MX records missing",
    score: 25,
    status: "undeliverable",
  },
  {
    id: 11,
    email: "kevin@securemail.com",
    reason: "Passed all checks",
    score: 99,
    status: "deliverable",
  },
  {
    id: 12,
    email: "laura@darkmail.net",
    reason: "Privacy-focused provider",
    score: 60,
    status: "risky",
  },
  {
    id: 13,
    email: "mike@nowhere.invalid",
    reason: "Invalid top-level domain",
    score: 5,
    status: "undeliverable",
  },
  {
    id: 14,
    email: "nina@example.org",
    reason: "Syntax and DNS OK",
    score: 92,
    status: "deliverable",
  },
  {
    id: 15,
    email: "oscar@fakemail.com",
    reason: "Blacklisted provider",
    score: 35,
    status: "risky",
  },
  {
    id: 16,
    email: "paula@example.net",
    reason: "Responded to ping",
    score: 88,
    status: "deliverable",
  },
  {
    id: 17,
    email: "quentin@malformed@domain.com",
    reason: "Multiple '@' symbols",
    score: 1,
    status: "undeliverable",
  },
  {
    id: 18,
    email: "rachel@noresponse.xyz",
    reason: "SMTP server non-responsive",
    score: 48,
    status: "unknown",
  },
  {
    id: 19,
    email: "sam@legitbusiness.com",
    reason: "Verified sender",
    score: 96,
    status: "deliverable",
  },
  {
    id: 20,
    email: "tina@trickymail.com",
    reason: "Suspected bot trap",
    score: 22,
    status: "risky",
  },
  {
    id: 21,
    email: "umar@nodomain.",
    reason: "Domain format invalid",
    score: 3,
    status: "undeliverable",
  },
  {
    id: 22,
    email: "victor@verified.com",
    reason: "Confirmed mail exchange",
    score: 91,
    status: "deliverable",
  },
  {
    id: 23,
    email: "wendy@privacyfocus.org",
    reason: "Uncertain verification policy",
    score: 55,
    status: "unknown",
  },
  {
    id: 24,
    email: "xander@freemail.org",
    reason: "Freemail provider, possible abuse",
    score: 45,
    status: "risky",
  },
  {
    id: 25,
    email: "yvonne@stablemail.com",
    reason: "Trusted domain",
    score: 94,
    status: "deliverable",
  },
];

export const invoices: Invoice[] = [
  {
    id: 1,
    amount: 1200,
    status: "paid",
    number: "INV-1001",
    date: "2025-01-05",
  },
  {
    id: 2,
    amount: 3400,
    status: "unpaid",
    number: "INV-1002",
    date: "2025-01-10",
  },
  {
    id: 3,
    amount: 2750,
    status: "overdue",
    number: "INV-1003",
    date: "2025-01-15",
  },
  {
    id: 4,
    amount: 4200,
    status: "paid",
    number: "INV-1004",
    date: "2025-01-20",
  },
  {
    id: 5,
    amount: 1500,
    status: "unpaid",
    number: "INV-1005",
    date: "2025-01-22",
  },
  {
    id: 6,
    amount: 3300,
    status: "overdue",
    number: "INV-1006",
    date: "2025-01-25",
  },
  {
    id: 7,
    amount: 2890,
    status: "paid",
    number: "INV-1007",
    date: "2025-01-28",
  },
  {
    id: 8,
    amount: 1950,
    status: "unpaid",
    number: "INV-1008",
    date: "2025-02-01",
  },
  {
    id: 9,
    amount: 3100,
    status: "paid",
    number: "INV-1009",
    date: "2025-02-03",
  },
  {
    id: 10,
    amount: 2600,
    status: "overdue",
    number: "INV-1010",
    date: "2025-02-07",
  },
  {
    id: 11,
    amount: 1800,
    status: "unpaid",
    number: "INV-1011",
    date: "2025-02-10",
  },
  {
    id: 12,
    amount: 4700,
    status: "paid",
    number: "INV-1012",
    date: "2025-02-13",
  },
  {
    id: 13,
    amount: 2990,
    status: "overdue",
    number: "INV-1013",
    date: "2025-02-15",
  },
  {
    id: 14,
    amount: 3500,
    status: "unpaid",
    number: "INV-1014",
    date: "2025-02-18",
  },
  {
    id: 15,
    amount: 4000,
    status: "paid",
    number: "INV-1015",
    date: "2025-02-20",
  },
  {
    id: 16,
    amount: 2150,
    status: "unpaid",
    number: "INV-1016",
    date: "2025-02-23",
  },
  {
    id: 17,
    amount: 1650,
    status: "overdue",
    number: "INV-1017",
    date: "2025-02-25",
  },
  {
    id: 18,
    amount: 2950,
    status: "paid",
    number: "INV-1018",
    date: "2025-02-28",
  },
  {
    id: 19,
    amount: 3250,
    status: "unpaid",
    number: "INV-1019",
    date: "2025-03-01",
  },
  {
    id: 20,
    amount: 3850,
    status: "overdue",
    number: "INV-1020",
    date: "2025-03-03",
  },
  {
    id: 21,
    amount: 4100,
    status: "paid",
    number: "INV-1021",
    date: "2025-03-06",
  },
  {
    id: 22,
    amount: 2600,
    status: "unpaid",
    number: "INV-1022",
    date: "2025-03-08",
  },
  {
    id: 23,
    amount: 3900,
    status: "paid",
    number: "INV-1023",
    date: "2025-03-10",
  },
  {
    id: 24,
    amount: 1700,
    status: "overdue",
    number: "INV-1024",
    date: "2025-03-12",
  },
  {
    id: 25,
    amount: 3450,
    status: "unpaid",
    number: "INV-1025",
    date: "2025-03-14",
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Getting Started with Email Validation",
    image:
      "https://plus.unsplash.com/premium_photo-1661320840402-99bee4f10ae1?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Learn the basics of how our email validation service works and how to get up and running in minutes.",
  },
  {
    id: 2,
    title: "Understanding Email Syntax, Domain, and SMTP Checks",
    image:
      "https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dive deep into the different stages of validation: syntax rules, domain existence, and SMTP server verification.",
  },
  {
    id: 3,
    title: "What Are Disposable Emails and Why Block Them?",
    image:
      "https://plus.unsplash.com/premium_photo-1679731353672-a94831f2b4f3?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "See how we detect throwaway emails and why filtering them improves your sender reputation.",
  },
  {
    id: 4,
    title: "API Integration Guide",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?fit=crop&w=800&q=80",
    description:
      "A step-by-step guide to integrating our email validation API into your app, CRM, or signup flow.",
  },
  {
    id: 5,
    title: "How to Use Bulk Email Validation",
    image:
      "https://plus.unsplash.com/premium_photo-1720192861694-f7bf446349fa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Upload your list, validate thousands of emails in one go, and download clean data instantly.",
  },
  {
    id: 6,
    title: "Troubleshooting Common Validation Errors",
    image:
      "https://plus.unsplash.com/premium_photo-1745610507944-4b6ad888581d?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Understand the most common error messages, what they mean, and how to fix them.",
  },
  {
    id: 7,
    title: "Improving Email Deliverability with Clean Lists",
    image:
      "https://plus.unsplash.com/premium_photo-1733306503329-7a8c701fa9ad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover best practices to maximize inbox placement and reduce bounce rates through regular list hygiene.",
  },
  {
    id: 8,
    title: "Is Your Email List GDPR Compliant?",
    image:
      "https://plus.unsplash.com/premium_photo-1676618539962-a492182bdae4?q=80&w=3645&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A quick overview of how our service supports your GDPR and data privacy compliance efforts.",
  },
  {
    id: 9,
    title: "Frequently Asked Questions",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80",
    description:
      "Find answers to common questions about usage limits, billing, validation accuracy, and more.",
  },
];

export const helpCategories = [
  {
    id: 1,
    name: "General",
    description: "Common questions and information about our platform.",
    icon: Info,
  },
  {
    id: 2,
    name: "Pricing & Billing",
    description: "Details about plans, payments, invoices, and billing cycles.",
    icon: CreditCard,
  },
  {
    id: 3,
    name: "Email List Verification",
    description:
      "Everything related to verifying, cleaning, and managing your email lists.",
    icon: CheckCircle,
  },
  {
    id: 4,
    name: "App Integrations",
    description: "Guides for integrating with third-party tools and platforms.",
    icon: Plug2,
  },
  {
    id: 5,
    name: "Deliverability",
    description: "Tips and troubleshooting to improve email inbox placement.",
    icon: Send,
  },
  {
    id: 6,
    name: "API",
    description: "API reference, authentication, and usage examples.",
    icon: Code2,
  },
];

export const exampleChat = [
  {
    id: 1,
    content:
      "Hi there! 👋 Need help validating emails faster than your coffee kicks in?",
    type: "bot",
  },
  {
    id: 2,
    content:
      "Hey! Yeah, I'm getting a lot of bounce-backs. Just signed up, trying to figure out how this works.",
    type: "human",
  },
  {
    id: 3,
    content:
      "No worries, I got you. First step: Upload your email list — CSV, TXT, or even just copy-paste. Have you got one ready?",
    type: "bot",
  },
  {
    id: 4,
    content:
      "Yep, I've got a CSV with about 2,000 emails. Can I upload it directly?",
    type: "human",
  },
  {
    id: 5,
    content:
      "Absolutely. Just drag it into the dashboard or click 'Upload List'. We'll crunch through it like a T-Rex on a salad. 🦖🥗",
    type: "bot",
  },
  {
    id: 6,
    content: "Nice. What kind of validations do you run?",
    type: "human",
  },
  {
    id: 7,
    content:
      "Great question! We check for syntax errors, domain existence, MX records, temporary/disposable emails, and good ol' spam traps. 🚫📬",
    type: "bot",
  },
  {
    id: 8,
    content: "Sweet. Is there an API for automating this?",
    type: "human",
  },
  {
    id: 9,
    content:
      "You bet! RESTful, JSON-based, and lightning fast ⚡. Want a sample cURL request?",
    type: "bot",
  },
  {
    id: 10,
    content: "Sure, hit me with it.",
    type: "human",
  },
  {
    id: 11,
    content:
      "Here you go:\n```bash\ncurl -X POST https://api.mailverify.ai/v1/validate \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"email\": \"test@example.com\"}'\n```",
    type: "bot",
  },
  {
    id: 12,
    content: "Nice, clean. Where do I find my API key?",
    type: "human",
  },
  {
    id: 13,
    content:
      "Check your dashboard under *API Access*. It's nestled in there like a secret ingredient. 🍜",
    type: "bot",
  },
  {
    id: 14,
    content: "Cool, I see it. Thanks for the help!",
    type: "human",
  },
  {
    id: 15,
    content: "Anytime! Validate responsibly. 😉",
    type: "bot",
  },
];
