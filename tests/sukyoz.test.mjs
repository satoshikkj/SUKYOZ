import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

function readInitialCards() {
  const start = source.indexOf("const cards=[") + "const cards=".length;
  const end = source.indexOf(";\n\nconst expandedCards=", start);
  assert.ok(start > 0 && end > start, "bloco inicial das cartas deve existir");
  return Function('"use strict"; return (' + source.slice(start, end) + ')')();
}

function readExpandedCards() {
  const start = source.indexOf("const expandedCards=") + "const expandedCards=".length;
  const end = source.indexOf(";\ncards.push(...expandedCards)", start);
  assert.ok(start > 0 && end > start, "bloco expandido das cartas deve existir");
  return JSON.parse(source.slice(start, end));
}

const cards = [...readInitialCards(), ...readExpandedCards()];
const expectedFamilies = ["EX", "EM", "VO", "CO", "XP", "PE", "TR"];
const expectedArchetypes = ["Origem", "Expansão", "Equilíbrio", "Conflito", "Bloqueio", "Transformação", "Integração"];

test("catálogo contém exatamente 49 cartas únicas", () => {
  assert.equal(cards.length, 49);
  assert.equal(new Set(cards.map(card => card.id)).size, 49);
});

test("cada família contém exatamente sete cartas", () => {
  for (const code of expectedFamilies) {
    assert.equal(cards.filter(card => card.id.startsWith(code + "-")).length, 7, code);
  }
});

test("cada família percorre os sete arquétipos na ordem oficial", () => {
  for (const code of expectedFamilies) {
    const family = cards.filter(card => card.id.startsWith(code + "-")).sort((a,b) => a.id.localeCompare(b.id));
    assert.deepEqual(family.map(card => card.archetype), expectedArchetypes, code);
  }
});

test("todas as cartas têm campos editoriais essenciais e quatro planos", () => {
  for (const card of cards) {
    for (const key of ["id","name","archetype","word","symbol","essence","good","risk","question"]) {
      assert.equal(typeof card[key], "string", card.id + " / " + key);
      assert.ok(card[key].trim().length > 0, card.id + " / " + key);
    }
    const planes = Array.isArray(card.planes) ? card.planes : Object.keys(card.planes || {});
    assert.equal(planes.length, 4, card.id + " deve conter quatro planos");
  }
});

test("o motor preserva estados, relações e a função de congelamento do catálogo", () => {
  assert.match(source, /const SUKYOZ_DATABASE=Object\.freeze\(cards\.map/);
  assert.match(source, /const STATE_KEYS=\["Ativo","Latente","Desregulado"\]/);
  assert.match(source, /function stateDescription\(card,state\)/);
  assert.match(source, /function relationMarkup\(list\)/);
  assert.match(source, /function compareMaps\(a,b\)/);
});

test("as três modalidades e os três tamanhos de leitura estão definidos", () => {
  for (const mode of ["Interior","Relacional","Temporal"]) assert.match(source, new RegExp(mode + ":\\{"));
  for (const size of [3,5,7]) assert.match(source, new RegExp(size + ":\\["));
});

test("leitura contextual recebe explicitamente a modalidade e não depende de variável global", () => {
  assert.match(source, /function interpretationDetails\(cardsList,mode="Interior"\)/);
  assert.match(source, /interpretationDetails\(map\.contextual,map\.mode\)/);
  assert.doesNotMatch(source, /interpretPosition\(card,card\.position,map\.mode\)/);
});

test("compatibilidade cobre as cinco relações combinatórias sem porcentagem", () => {
  for (const key of ["complementary","compensation","transformations","intensification","contrasts"]) {
    assert.match(source, new RegExp(key));
  }
  assert.doesNotMatch(source, /compatibilidade[^\n]{0,80}\d{1,3}%/i);
});

test("navegação mantém os principais formulários e regiões de resultado", () => {
  for (const id of ["readingForm","compatForm","readingResult","compatResult","cardsGrid","cardModal","familyGrid"]) {
    assert.ok(html.includes('id="' + id + '"'), "HTML deve conter " + id);
  }
});

test("validação e escape de conteúdo dinâmico permanecem presentes", () => {
  assert.match(source, /function validBirthDate\(value\)/);
  assert.match(source, /function validPersonName\(value\)/);
  assert.match(source, /function escapeHTML\(value\)/);
});
