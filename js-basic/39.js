/* Escape notation in JavaScript is a way to represent special characters, control characters, and characters that cannot be typed directly in a string or a character. By using escape sequences, you can include these characters in your JavaScript strings. Here are some commonly used escape sequences in JavaScript:

\n: Newline
\r: Carriage return
\t: Tab
\: Backslash
': Single quote (applies to strings enclosed in double quotes)
": Double quote (applies to strings enclosed in single quotes)
\b: Backspace
\f: Form feed
\uXXXX: Unicode character with the hexadecimal code XXXX (4-digit hexadecimal code) */

const newLine = "My name is adibur rahman \nYeap";
// console.log(newLine);

const tabbed = "My name is tab \t yeah";
// console.log(tabbed);

const backslash =
  "my name is backslash \\. My name is newline \n new line done";
console.log(backslash);
