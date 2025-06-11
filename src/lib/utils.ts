import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { creditRates } from "./constants";

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
