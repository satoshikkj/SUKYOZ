# Auditoria técnica e plano de evolução do SUKYOZ

**Data da auditoria:** 21/11/2026  
**Repositório:** `satoshikkj/SUKYOZ`  
**Branch examinada:** `main`  
**Escopo:** todos os arquivos rastreados no repositório nesta revisão.

## 1. Resultado geral

O SUKYOZ já possui uma base estática navegável e um motor simbólico determinístico. A estrutura atual é adequada para continuar no GitHub Pages, desde que as funcionalidades que exigem persistência, autenticação ou inteligência generativa sejam separadas da aplicação estática.

A auditoria não autoriza substituir o catálogo, as fórmulas ou a identidade existentes. A evolução deverá preservar os identificadores oficiais, os nomes das famílias, os sete arquétipos, os quatro planos e os três estados.

## 2. Inventário verificado

Arquivos encontrados:

- Raiz: `README.md`, `index.html`, `script.js`, `styles.css`.
- Documentação: `docs/arquitetura.md`, `docs/cartas.md`, `docs/familia-existencia-aprofundada.md`, `docs/manifesto.md`, `docs/metodo-de-leitura.md`, `docs/motor-de-interpretacao.md`, `docs/principios.md`.

Não foram encontrados nesta árvore: `package.json`, diretório de testes, configuração de integração contínua, arquivos de backend, migrações, banco de dados ou diretório de imagens das cartas.

## 3. Funcionalidades existentes

- Página única com navegação para início, famílias, biblioteca, planos, consulta e compatibilidade.
- Catálogo com 49 códigos únicos: sete cartas em cada uma das famílias EX, EM, VO, CO, XP, PE e TR.
- Busca textual e filtro por família.
- Painel/modal individual de carta.
- Arte vetorial SVG gerada pelo próprio JavaScript; não são 49 arquivos de imagem externos.
- Mapa pessoal com cinco posições: identidade nominal, dia, mês, ano de nascimento e ano vigente.
- Leitura contextual opcional com 3, 5 ou 7 cartas e modalidades Interior, Relacional e Temporal.
- Seleção determinística por funções de normalização, valor alfabético, soma de dígitos, hash FNV-1a e redução para o catálogo de 49 cartas.
- Compatibilidade simbólica entre dois mapas, sem percentual.
- Validação básica de nome e data; rejeita datas inexistentes, anteriores a 1900 e futuras.
- Processamento local no navegador; os nomes e as datas não são enviados a um servidor pelo código atual.

## 4. Lacunas e riscos identificados

### 4.1 Profundidade editorial desigual

A Família Existência possui documentação aprofundada própria. As outras seis famílias ainda não possuem documentos equivalentes. As 42 cartas fora de EX têm campos individuais, mas boa parte das descrições é curta e introdutória: na amostra estruturada examinada, a essência dessas cartas tem média aproximada de 63 caracteres.

### 4.2 Estados e relações parcialmente genéricos

Quando uma carta não possui três estados completos, o código cria textos automaticamente a partir da essência e do risco. Quando não há relações suficientes, o código deriva relações a partir de arquétipos e de uma carta encontrada no catálogo.

Isso mantém os campos preenchidos, mas não equivale a uma interpretação individual cuidadosamente escrita para cada carta. A evolução deverá substituir gradualmente esses preenchimentos automáticos por conteúdo editorial específico, sem apagar os dados já existentes antes de validá-los.

### 4.3 Inteligência combinatória limitada

O motor atual reconhece relações estruturais como família compartilhada, arquétipo compartilhado, complementaridade, tensão e possível contribuição. Ainda não há uma matriz editorial completa para os pares de cartas nem uma análise combinatória plenamente contextualizada por estado, posição, plano e modalidade.

### 4.4 Motor matemático

As funções determinísticas já existem, inclusive a carta do ano vigente. Entretanto, a documentação descreve o método em nível geral e ainda precisa registrar, de forma normativa, cada semente, cada constante, a ordem de normalização, o tratamento de colisões, a versão do algoritmo e os vetores de teste.

A validação atual aceita um nome com pelo menos duas letras; isso não garante que o visitante tenha informado o nome completo. A política de nome completo deverá ser definida sem excluir nomes legítimos, sobrenomes compostos ou caracteres acentuados.

### 4.5 Consultas e compatibilidade

A interface ainda não oferece modalidades independentes para consulta anual, comparação de períodos, compatibilidade amorosa/familiar/profissional/social ou escolha de foco relacional. A modalidade Temporal existente é uma leitura contextual, não uma comparação matemática entre anos.

A compatibilidade atual compara famílias, arquétipos, cartas idênticas e contrastes arquetípicos. Não calcula porcentagens, o que deve ser preservado.

### 4.6 Áreas ainda ausentes

Não existem ainda áreas funcionais próprias para Câmara da Sabedoria, Enciclopédia da Existência ou Jornada da Existência. Também não há persistência, login, exportação de registros ou exclusão de dados armazenados, pois o projeto não armazena atualmente um histórico pessoal.

### 4.7 Testes e validação visual

Não há suíte automatizada versionada nem pipeline de testes. A inspeção do código e da estrutura não substitui testes em navegador real. Responsividade, acessibilidade, console, navegação por teclado e comportamento em dispositivos móveis ainda precisam de validação de ponta a ponta.

## 5. Decisões de preservação

1. Manter os 49 códigos e nomes oficiais já definidos.
2. Manter as sete famílias e a sequência dos sete arquétipos.
3. Manter os quatro planos: material, psicológico, relacional e simbólico-espiritual.
4. Manter os estados Ativo, Latente e Desregulado como descrições contextuais, nunca como diagnósticos ou medidas de energia.
5. Manter o cálculo determinístico existente até que uma revisão matemática seja especificada, testada e documentada.
6. Não apresentar a seleção matemática de uma carta como evidência científica de personalidade, destino ou compatibilidade.
7. Não adicionar serviços externos nem enviar dados pessoais sem informar a finalidade, obter consentimento e documentar a dependência.
8. Não remover recursos atuais para abrir espaço a novas seções; preferir módulos e componentes adicionais.

## 6. Lacunas que exigem definição antes de alterar o núcleo

- Regra normativa final para o que significa "nome completo" e como tratar partículas, hífens, apóstrofos e caracteres não latinos.
- Definição exata do cálculo de carta de nascimento: a documentação atual diferencia dia, mês e ano, mas o produto também solicita uma carta de nascimento como modalidade própria.
- Regra para determinar estados: por enquanto são informados pelo visitante; o sistema não deve inferi-los apenas de nome e data.
- Modelo de pontuação ou ordenação das cinco relações combinatórias. A regra deve ser explicável e não pode fabricar certeza.
- Escopo de persistência da Jornada: armazenamento somente no dispositivo ou sincronização por conta. A escolha altera privacidade, segurança e arquitetura.
- Fonte e política editorial da Enciclopédia: cada afirmação factual deverá ter referência verificável; conteúdo sem fonte deverá ser identificado como reflexão ou hipótese.

Até que essas definições sejam aprovadas, os recursos atuais permanecem preservados e as novas regras devem funcionar como módulos experimentais claramente identificados, não como substituições silenciosas.

## 7. Plano de execução

| Fase | Entrega verificável |
|---|---|
| 1. Auditoria | Inventário, lacunas, decisões de preservação e plano registrados neste documento |
| 2. Biblioteca | Esquema de dados validado e 49 fichas editoriais individualizadas |
| 3. Famílias e arquétipos | Sete documentos de família e matriz das relações entre famílias |
| 4. Planos e estados | Conteúdo específico por carta, plano e estado; sem preenchimento genérico silencioso |
| 5. Motor matemático | Fórmulas versionadas, vetores de teste e validação de entradas |
| 6. Combinações | Motor de pares e grupos com explicação de evidências estruturais e contexto |
| 7. Consultas | Modalidades independentes, resultados transparentes e integração das leituras |
| 8. Compatibilidade | Focos relacionais e análise fundamentada sem percentual |
| 9. Câmara da Sabedoria | Análise argumentativa estruturada; IA externa somente se configurada com segurança |
| 10. Enciclopédia | Artigos com fontes verificáveis e distinção entre ciência, teoria, hipótese e crença |
| 11. Jornada | Registros opcionais, consentimento, exportação e exclusão segura |
| 12. Qualidade e interface | Testes automatizados, acessibilidade, responsividade e validação em navegador |

## 8. Critério de conclusão

Uma fase só será marcada como concluída quando sua entrega existir no repositório, os testes aplicáveis forem executados e as limitações restantes forem registradas. Verificação estática não será descrita como teste real de navegador ou celular.

**Princípio técnico:** evoluir por módulos, com contratos de dados e testes de regressão, preservando a experiência atual do SUKYOZ.


## 9. Trabalho adicional aplicado após a auditoria

- Corrigido um defeito no fluxo de leitura contextual: a função de interpretação acessava uma variável `map` que não existia em seu escopo. Agora recebe explicitamente a modalidade da leitura.
- Ampliada a comparação entre mapas para identificar complementaridade, compensação, intensificação e transformação, além dos contrastes já existentes. As regras são estruturais e simbólicas, não medidas de compatibilidade.
- Criada documentação aprofundada das famílias Emoção, Vontade, Conexão, Expressão, Percepção e Transcendência. Cada uma descreve princípios, sete cartas, estados, riscos, perguntas e relações prioritárias. A documentação aprofundada de Existência já existia.
- Adicionado teste automatizado de regressão para catálogo, distribuição das famílias, arquétipos, campos essenciais, modalidades, leitura contextual, compatibilidade e estrutura de navegação.
- Adicionado workflow do GitHub Actions para verificar sintaxe JavaScript e executar os testes em pushes e pull requests na branch principal.

**Estado de validação:** os arquivos de teste e o workflow foram adicionados, mas a execução do workflow remoto ainda precisa ser observada no GitHub Actions. Portanto, a suíte está configurada, não certificada como aprovada nesta revisão.
