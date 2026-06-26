/**
 * A native, lightweight class merging utility that filters out falsy values
 * and joins classes with spaces. Avoids adding third-party dependencies.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
