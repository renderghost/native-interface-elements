// Simple test to check components export
const fs = require("fs");

// Read the file content
const content = fs.readFileSync("src/constants/components.tsx", "utf8");

// Look for the components export
const exportMatch = content.match(
  /export const components.*?= \[([\s\S]*?)\];/,
);
if (exportMatch) {
  console.log("Found components export");
  console.log("Array starts at:", content.indexOf("export const components"));
  console.log(
    "Array ends at:",
    content.indexOf("];", content.indexOf("export const components")),
  );
} else {
  console.log("Components export not found");
}

// Look for any syntax issues
const openBraces = (content.match(/\[/g) || []).length;
const closeBraces = (content.match(/\]/g) || []).length;
const openCurly = (content.match(/\{/g) || []).length;
const closeCurly = (content.match(/\}/g) || []).length;
const openParen = (content.match(/\(/g) || []).length;
const closeParen = (content.match(/\)/g) || []).length;

console.log("Bracket balance check:");
console.log(
  "[ vs ]:",
  openBraces,
  "vs",
  closeBraces,
  openBraces === closeBraces ? "✓" : "✗",
);
console.log(
  "{ vs }:",
  openCurly,
  "vs",
  closeCurly,
  openCurly === closeCurly ? "✓" : "✗",
);
console.log(
  "( vs ):",
  openParen,
  "vs",
  closeParen,
  openParen === closeParen ? "✓" : "✗",
);
