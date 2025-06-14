import {
  BarChart,
  Code,
  EyeOff,
  Gift,
  Headphones,
  Infinity as LucideInfinity,
  Mail,
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
