declare type GlobalState = {
  email: string;
  mode: "single" | "bulk";
  view: "list" | "grid";
};

declare type PastRecords = {
  id: number;
  name: string;
  deliverable: number;
  total: number;
  status: "processing" | "completed" | "cancelled";
};

declare type Email = {
  id: number;
  email: string;
  reason: string;
  score: number;
  status: "deliverable" | "undeliverable" | "risky" | "unknown";
};

declare type Invoice = {
  id: number;
  amount: number;
  status: "paid" | "unpaid" | "overdue";
  number: string;
  date: string;
};

declare type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
};
