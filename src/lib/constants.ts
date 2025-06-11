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
