export function clearNoCheck(string: string): string {
  // replace line `// @ts-nocheck` with empty string
  return string.replace(/\/\/ @ts-nocheck/g, "");
}
