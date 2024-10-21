import { cache } from "react";

// Return A or B randomly
export const getRandom = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return Math.random() < 0.5 ? "A" : "B";
});
