import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import * as XLSX from "xlsx";

import { ALLOWED_EXTS, EMAIL_REGEX, creditRates } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateFinalAmount(userAmount: number): {
  amount: number;
  price: number;
} {
  if (userAmount <= creditRates[0].amount) {
    return {
      amount: userAmount * creditRates[0].price,
      price: creditRates[0].price,
    };
  }

  for (let i = 0; i < creditRates.length - 1; i++) {
    const current = creditRates[i];
    const next = creditRates[i + 1];

    if (userAmount === current.amount) {
      return {
        amount: userAmount * current.price,
        price: current.price,
      };
    }

    if (userAmount > current.amount && userAmount < next.amount) {
      const priceDiff = next.price - current.price;
      const amountDiff = next.amount - current.amount;
      const ratio = (userAmount - current.amount) / amountDiff;
      const interpolatedPrice = current.price + ratio * priceDiff;

      return {
        amount: userAmount * interpolatedPrice,
        price: next.price,
      };
    }
  }

  return {
    amount: userAmount * creditRates[creditRates.length - 1].price,
    price: creditRates[creditRates.length - 1].price,
  };
}

export async function extractEmailsFromFile(file: File): Promise<string[]> {
  const extMatch = /\.([^.]+)$/.exec(file.name);

  if (!extMatch) {
    toast.error(
      `Unable to determine file extension for "${file.name}". Please upload a valid file.`
    );
    return [];
  }

  const ext = extMatch[1].toLowerCase();

  if (!ALLOWED_EXTS.includes(ext)) {
    toast.error(
      `Invalid file type ".${ext}". Allowed types: ${ALLOWED_EXTS.map((e) => `.${e}`).join(", ")}.`
    );
    return [];
  }

  const textContent = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reader.abort();
      reject(new Error("Error reading file."));
    };

    if (ext === "csv" || ext === "txt") {
      reader.onload = () => resolve(reader.result as string);
      reader.readAsText(file);
    } else {
      reader.onload = () => {
        try {
          const data = new Uint8Array(reader.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          const allText: string[] = [];
          workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            const csv = XLSX.utils.sheet_to_csv(sheet);
            allText.push(csv);
          });
          resolve(allText.join("\n"));
        } catch (err) {
          reject(new Error((err as Error).message || "Error processing file."));
        }
      };
      reader.readAsArrayBuffer(file);
    }
  });

  const matches = textContent.match(EMAIL_REGEX) ?? [];

  return Array.from(new Set(matches));
}
