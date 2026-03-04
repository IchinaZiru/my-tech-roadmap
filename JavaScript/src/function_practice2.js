function add(a, b) {
  return a + b;
}

function average(a, b) {
  return (a + b) / 2;
}

function max(a, b) {
  return a > b ? a : b;
}

function greet(name) {
  const trimmed = name.trim();
  if (trimmed.length === 0) return null;
  return `こんにちは、${trimmed}さん！`;
}

function parseNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return null;
  return num;
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const output = document.querySelector("#output");

if (!(form instanceof HTMLFormElement)) {
  throw new Error("#form が見つかりません");
}
if (!(nameInput instanceof HTMLInputElement)) {
  throw new Error("#name が見つかりません");
}
if (!(inputA instanceof HTMLInputElement)) {
  throw new Error("#a が見つかりません");
}
if (!(inputB instanceof HTMLInputElement)) {
  throw new Error("#b が見つかりません");
}
if (!(output instanceof HTMLElement)) {
  throw new Error("#output が見つかりません");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const greeting = greet(nameInput.value);
  const a = parseNumber(inputA.value);
  const b = parseNumber(inputB.value);

  const errors = [];
  if (greeting === null) errors.push("名前を入力してください");
  if (a === null) errors.push("数値Aを正しく入力してください");
  if (b === null) errors.push("数値Bを正しく入力してください");

  if (errors.length > 0) {
    output.textContent = errors.map((e) => `- ${e}`).join("\n");
    return;
  }

  const sum = add(a, b);
  const avg = average(a, b);
  const biggest = max(a, b);

  output.textContent = [
    greeting,
    `A + B = ${sum}`,
    `平均 = ${avg}`,
    `最大 = ${biggest}`,
  ].join("\n");
});
