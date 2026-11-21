# Motor de interpretação SUKYOZ — versão 2.0

## 1. Objetivo

O motor organiza as 49 cartas em leituras reprodutíveis. Ele não pretende descobrir a personalidade real de alguém, prever acontecimentos, diagnosticar estados psicológicos ou medir a compatibilidade entre pessoas. Nome e nascimento são chaves simbólicas de seleção, não evidências sobre caráter ou destino.

## 2. Catálogo

O catálogo é composto por sete famílias, cada uma com sete cartas:

| Código | Família | Dimensão |
|---|---|---|
| EX | Existência | identidade, começo e transformação |
| EM | Emoção | experiência e regulação emocional |
| VO | Vontade | motivação, escolha e direção |
| CO | Conexão | vínculos e influência mútua |
| XP | Expressão | comunicação e manifestação |
| PE | Percepção | observação e interpretação |
| TR | Transcendência | sentido, dualidade e interdependência |

Cada carta contém código, nome, arquétipo, símbolo, essência, quatro planos interpretativos, potencial construtivo, risco e pergunta reflexiva.

## 3. Mapa simbólico por nome e nascimento

O sistema produz cinco cartas distintas. O processo é determinístico: os mesmos dados sempre geram o mesmo mapa na mesma versão do algoritmo.

1. **Identidade pelo nome:** o nome é normalizado (acentos removidos, letras maiúsculas, espaços e pontuação ignorados), convertido em valores alfabéticos e combinado com um hash FNV-1a.
2. **Dia:** o número do dia gera uma semente própria.
3. **Mês:** o mês gera outra semente.
4. **Ano:** o ano e a soma de seus algarismos geram a quarta semente.
5. **Síntese:** nome normalizado, data completa e valores alfabéticos são combinados em uma quinta semente.

Cada semente é convertida em um índice entre 1 e 49. Se uma carta já tiver sido selecionada, o índice avança circularmente até encontrar uma carta ainda não utilizada. Isso garante cinco cartas diferentes.

A família com maior frequência nas cinco cartas é exibida como **família mais presente no mapa**. Em caso de empate, a ordem fixa das famílias decide apenas a apresentação; não indica maior importância pessoal.

## 4. Leitura contextual de 3, 5 ou 7 cartas

Quando a pessoa informa uma pergunta, o motor gera uma segunda sequência contextual. A seleção usa uma função hash da combinação nome + nascimento + pergunta e mantém as cartas distintas das cinco do mapa principal.

### Três cartas
1. Origem — condição ou contexto inicial.
2. Estado atual — dinâmica que merece atenção.
3. Direção consciente — possibilidade ou atitude a considerar.

### Cinco cartas
1. Estado interior.
2. Influência externa.
3. Conflito principal.
4. Possibilidade de transformação.
5. Direção consciente.

### Sete cartas
1. Origem.
2. Histórico relevante.
3. Estado presente.
4. Aspecto não percebido.
5. Influências.
6. Cenário possível.
7. Integração.

As posições são perguntas interpretativas, não afirmações factuais. “Aspecto não percebido” não revela segredos; “cenário possível” não é previsão garantida.

## 5. Relações entre cartas

O motor procura padrões entre cartas selecionadas:

- **Complementação:** cartas da mesma família ou arquétipos com funções que podem se apoiar.
- **Contraste:** pares de arquétipos em tensão (Origem/Integração, Expansão/Bloqueio e Equilíbrio/Conflito).
- **Transformação:** presença de Transformação junto a Origem, Conflito ou Bloqueio pode sugerir uma transição a investigar.

Essas relações são hipóteses simbólicas. O motor não declara causalidade real nem determina que uma carta provoque outra.

## 6. Estados interpretativos

Os três estados definidos na arquitetura permanecem dependentes do contexto:

- **Ativo:** a característica está manifesta na situação.
- **Latente:** existe como possibilidade, mas ainda não se manifesta claramente.
- **Desregulado:** aparece em excesso, deficiência ou forma prejudicial.

O sistema não atribui esses estados automaticamente a partir de nome ou data. Eles devem ser definidos pela pessoa que conduz a leitura, considerando fatos e contexto. Uma mesma carta pode estar ativa numa situação e latente em outra.

## 7. Compatibilidade simbólica

A comparação gera dois mapas de cinco cartas e examina:

- famílias em comum;
- arquétipos em comum;
- cartas idênticas;
- contrastes entre arquétipos.

O resultado oferece temas para diálogo e reflexão. Não calcula uma porcentagem de compatibilidade, não prevê sucesso de relacionamento e não infere sentimentos ou intenções privadas. Diferença simbólica não equivale a incompatibilidade real.

## 8. Privacidade e limites

- Nome e data são processados no navegador.
- A versão atual não envia esses dados a uma API ou banco de dados.
- O resultado é determinístico e pode mudar se o algoritmo ou catálogo mudar em uma versão futura.
- A leitura não substitui conversa, observação, pensamento crítico ou aconselhamento profissional.
- O sistema deve registrar também interpretações que não se confirmem, para reduzir viés de confirmação.

## 9. Princípio central

**A intuição alerta; a observação investiga; o tempo revela; a razão decide.**

O SUKYOZ oferece símbolos para organizar perguntas. A pessoa continua responsável por interpretar a própria realidade e decidir o que fazer.


## 10. Transparência da seleção das cartas — revisão 2.2

Cada carta exibida em um mapa informa a posição que ocupa e a razão metodológica da seleção. No mapa pessoal, a posição está associada a uma semente calculada a partir do nome normalizado e de componentes da data. Na leitura contextual, a semente combina nome, nascimento e pergunta; cada posição recebe um índice calculado e a seleção evita repetir cartas do mapa pessoal ou da própria sequência.

A explicação apresentada ao usuário distingue duas coisas:
- **Função interpretativa:** por que a posição existe (origem, estado, influência, integração etc.).
- **Mecanismo de seleção:** como o algoritmo escolheu o índice da carta.

O índice explica o funcionamento matemático, não revela uma causa oculta nem prova algo sobre a pessoa.

## 11. Conteúdo completo das cartas

A biblioteca contém 49 identificadores únicos, distribuídos igualmente entre as sete famílias. Cada carta é apresentada com arte vetorial própria, código, nome, arquétipo, símbolo, essência, quatro planos, potencial construtivo, risco e pergunta reflexiva. Estados e relações complementares são apresentados como lentes interpretativas; quando uma relação é derivada pela estrutura dos arquétipos, isso deve ser entendido como proposta simbólica, não como fato causal.

A pesquisa do catálogo considera código, nome, arquétipo, palavra central, essência, símbolo, família, elemento, potencial construtivo, risco, pergunta, planos, estados e relações.

## 12. Compatibilidade ampliada

A comparação apresenta a distribuição das sete famílias nos dois mapas, temas compartilhados, arquétipos em comum, cartas idênticas, contrastes e perguntas para diálogo. Não produz percentual nem classifica uma relação como boa ou ruim. A comparação continua sendo simbólica e limitada às cartas selecionadas pelo método.


## 13. Banco central e arquétipos — revisão 3.0

O catálogo central do motor é composto pelas 49 cartas com identificador, família, arquétipo, essência, quatro planos, potencial construtivo, risco, estados e relações. Os sete arquétipos se repetem em cada família: Origem, Expansão, Equilíbrio, Conflito, Bloqueio, Transformação e Integração.

Os estados são lentes contextuais, não rótulos pessoais:
- **Ativo:** o tema aparece em fatos, atitudes ou condições observáveis.
- **Latente:** o tema é possibilidade ainda não manifestada.
- **Desregulado:** o tema aparece de forma excessiva, insuficiente ou prejudicial.

O estado é informado pela pessoa que conduz a leitura; nome e nascimento não permitem inferi-lo. A mesma carta pode ocupar estados diferentes em contextos diferentes.

## 14. Modalidades de leitura

A consulta contextual permite selecionar uma modalidade:

- **Interior:** emoções, necessidades, crenças, limites e escolhas pessoais.
- **Relacional:** vínculos, comunicação, comportamentos observáveis, limites e acordos. Não presume pensamentos ou sentimentos de terceiros.
- **Temporal:** passado, presente e cenários futuros condicionais. Não apresenta previsões garantidas.

Cada modalidade oferece posições próprias em leituras de 3, 5 ou 7 cartas. A modalidade, o tamanho e a pergunta integram a semente determinística; portanto, alterá-los pode mudar as cartas selecionadas.

## 15. Relações entre cartas

- **Complementaridade:** dois temas podem apoiar etapas diferentes de um processo.
- **Contradição:** duas cartas podem representar necessidades, impulsos ou direções em tensão.
- **Causalidade interpretativa:** uma carta pode sugerir um fator que contribui para outro tema, mas a relação precisa ser investigada por evidências e contexto. A sequência não prova causa e efeito.
- **Transformação:** uma carta pode representar a passagem de uma condição para outra, sem pressupor que a mudança seja inevitável ou que o sofrimento seja necessário.

As relações são hipóteses de leitura, não eventos objetivos nem previsões.

## 16. Integração dos quatro planos

Cada carta é interpretada nos planos material, psicológico, relacional e simbólico-espiritual. Os planos devem ser apresentados separadamente: o material pede observação; o psicológico explora experiência interna; o relacional examina interações; o simbólico-espiritual trabalha com metáforas e significado, sem reivindicar comprovação científica.
