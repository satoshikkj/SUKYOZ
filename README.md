# SUKYOZ

> Um sistema simbólico, filosófico e reflexivo para investigar a existência, as emoções, a vontade, as relações, a expressão, a percepção e a transcendência.

**SUKYOZ** é um sistema original de 49 cartas organizado em sete famílias de sete cartas. Seu objetivo é oferecer uma linguagem estruturada para autoconhecimento, reflexão, análise de situações e exploração de significados.

O SUKYOZ combina três perspectivas:
- **Científica:** distingue evidências, mecanismos psicológicos e observações verificáveis.
- **Filosófica:** investiga identidade, causalidade, dualidade, propósito e significado.
- **Espiritual-simbólica:** oferece imagens e interpretações para explorar questões existenciais, sem apresentá-las como fatos científicos comprovados.

## Estrutura

| Família | Pergunta central | Cartas |
|---|---|---:|
| I. Existência | Quem somos e como nos transformamos? | 7 |
| II. Emoção | O que sentimos e como isso nos influencia? | 7 |
| III. Vontade | O que nos move e orienta nossas escolhas? | 7 |
| IV. Conexão | Como nos relacionamos e influenciamos? | 7 |
| V. Expressão | Como exteriorizamos nosso mundo interior? | 7 |
| VI. Percepção | Como interpretamos a realidade? | 7 |
| VII. Transcendência | Como compreendemos o sentido e os limites da existência? | 7 |

**Total: 49 cartas.** As quatro perspectivas interpretativas — material, psicológica, relacional e simbólico-espiritual — são aplicadas às mesmas 49 cartas; não criam cartas adicionais.

## Documentação

- [Manifesto e identidade](docs/manifesto.md)
- [Arquitetura do sistema](docs/arquitetura.md)
- [Catálogo das 49 cartas](docs/cartas.md)
- [Métodos de leitura](docs/metodo-de-leitura.md)
- [Motor de interpretação 3.1](docs/motor-de-interpretacao.md)
- [Princípios e limites de interpretação](docs/principios.md)

## Princípios de uso

1. As cartas são instrumentos de reflexão, não provas nem diagnósticos.
2. Nenhuma carta é inerentemente boa ou má; o contexto altera sua interpretação.
3. Intuição é um sinal a investigar, não uma confirmação.
4. Leituras não garantem previsões nem revelam pensamentos privados de terceiros.
5. A pessoa mantém sua autonomia: a leitura organiza possibilidades, não decide por ela.
6. Interpretações devem poder ser revistas diante de novas evidências.

## Documentação das famílias

- [Existência (EX)](docs/familia-existencia-aprofundada.md)
- [Emoção (EM)](docs/familias/emocao.md)
- [Vontade (VO)](docs/familias/vontade.md)
- [Conexão (CO)](docs/familias/conexao.md)
- [Expressão (XP)](docs/familias/expressao.md)
- [Percepção (PE)](docs/familias/percepcao.md)
- [Transcendência (TR)](docs/familias/transcendencia.md)

## Qualidade e testes

Os testes de regressão ficam em `tests/sukyoz.test.mjs` e são executados pelo GitHub Actions em `.github/workflows/quality.yml`. Para executar localmente com Node.js 22:

```bash
node --check script.js
node --test tests/*.test.mjs
```

## Estado do projeto

**Edição digital 3.1 — catálogo de 49 cartas, mapa pessoal com carta do ano vigente, três modalidades de leitura e comparação simbólica.**

O projeto já possui uma experiência estática funcional com biblioteca, filtros, consulta por nome e nascimento, leitura contextual de 3/5/7 cartas e compatibilidade simbólica. A auditoria técnica da evolução está registrada em [Auditoria e plano de evolução](docs/auditoria-evolucao.md).

O catálogo está centralizado em memória no JavaScript; ainda não é um banco de dados persistente. O site não possui backend, autenticação, armazenamento pessoal ou suíte automatizada de testes. Aprofundamento individual das 49 cartas, inteligência combinatória contextual e novas áreas de conhecimento permanecem como trabalho de evolução.

## Idioma

A documentação principal está em português. Os identificadores das cartas são estáveis e usam duas letras da família mais um número de dois dígitos.

---

SUKYOZ — compreender relações entre aquilo que somos, sentimos, fazemos e aquilo que nos transforma.


## Experiência digital

O repositório inclui uma primeira versão navegável do site SUKYOZ:
- Site estático pronto para publicação pelo GitHub Pages (veja instruções abaixo).
- Biblioteca pesquisável com as 49 cartas do catálogo e conteúdo aprofundado da Família Existência.
- Motor central com 49 cartas, sete arquétipos, estados Ativo/Latente/Desregulado, quatro planos de interpretação e modalidades Interior/Relacional/Temporal com leituras contextuais de 3, 5 ou 7 cartas.
- Comparação simbólica entre duas pessoas por famílias, arquétipos, coincidências e contrastes, sem percentuais deterministas.
- Layout responsivo para celular e computador.

A consulta usa um algoritmo determinístico e transparente, criado para fins lúdicos e reflexivos. Os resultados não são validados cientificamente, não diagnosticam personalidade e não determinam compatibilidade, destino ou futuro. As 49 cartas estão integradas ao mecanismo. As interpretações combinatórias são hipóteses simbólicas e não provam causalidade, compatibilidade real ou previsões.

## Arquivos do site

- `index.html` — estrutura e seções do site.
- `styles.css` — identidade visual responsiva.
- `script.js` — catálogo das 49 cartas, mapas determinísticos pelo nome completo, data de nascimento e ano vigente, leituras contextuais de 3/5/7 cartas, conexões entre cartas e compatibilidade simbólica.

A edição atual não utiliza banco de dados nem envia os nomes e datas digitados para um servidor. Para publicar: no GitHub, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione **main** e a pasta **/(root)** e salve. Após a publicação, o endereço esperado é https://satoshikkj.github.io/SUKYOZ/.
