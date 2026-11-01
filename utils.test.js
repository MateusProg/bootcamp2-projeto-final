const {validarEntrada, formatarNome} = require("./utils");

test("rejeita entrada vazia", () => {
  expect(validarEntrada("")).toBe(false);
});

test("aceita entrada válida", () => {
  expect(validarEntrada("pikachu")).toBe(true);
});

test("Coloca o nome todo com letras minusculas e sem espaços em branco", () => {
  expect(formatarNome("  PIKaCHU  ")).toBe("pikachu           ");
});