import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This is an util function that combines clsx and tailwind-merge
 * It is used to combine multiple class names into a single string
 * This is used in place of clsx because it respects Tailwind's classname
 * declaration order
 * cn is short for classnames (the original package name)
 * https://www.npmjs.com/package/classnames
 * @param inputs - The class names to combine
 * @returns The combined class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
