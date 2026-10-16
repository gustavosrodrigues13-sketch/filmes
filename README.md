# 🎬 MovieCity — Landing Page

Landing page responsiva de um serviço de streaming fictício, feita com **React + Vite** e **CSS puro**. É um projeto de estudo focado em componentização, estilização sem frameworks e adaptação de layout para diferentes telas.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-puro-1572b6?logo=css3&logoColor=white)
![Node](https://img.shields.io/badge/Node-20.19%2B%20%7C%2022.12%2B-339933?logo=nodedotjs&logoColor=white)

<!-- Substitua pelo print real do projeto: -->
<!-- ![Preview do MovieCity](./docs/preview.png) -->

## Sumário

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
- [Scripts](#scripts)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Arquitetura](#arquitetura)
- [Responsividade](#responsividade)
- [Acessibilidade](#acessibilidade)
- [Checklist de qualidade](#checklist-de-qualidade)
- [Roadmap](#roadmap)

## Visão geral

A página tem duas áreas:

- **Header:** logo, menu de navegação (Filmes, Categoria, Sobre, Contato) e botão de Login.
- **Main:** à esquerda, o texto de chamada ("Seus Filmes") com o botão **Mais**; à direita, um grid com 6 cards de filmes (Afterlife, Transformers, Mowgli, Shift, Round 6 e Harry Potter).

## Funcionalidades

- Layout em duas colunas no desktop, empilhado no mobile
- Grid de cards que se reorganiza em 2 colunas em telas pequenas
- Menu hambúrguer animado, que fecha ao clicar em um link
- Quatro breakpoints cuidadosamente ajustados (de 1100px a 380px)
- Sem dependências de UI: todo o visual é CSS escrito à mão

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 19 | Componentes e estado da UI |
| Vite 7 | Servidor de desenvolvimento (HMR) e build de produção |
| JavaScript (ESM) | Linguagem e módulos |
| CSS puro | Estilos globais e media queries |
| ESLint | Padronização e análise estática |

> Bootstrap, Tailwind e styled-components não são usados de propósito: o objetivo é praticar CSS de verdade.

## Começando

### Pré-requisitos

- **Node.js 20.19+ ou 22.12+** (exigência do Vite 7)
- **npm** (já vem com o Node) — yarn ou pnpm também funcionam

```bash
node -v
npm -v
```

### Instalação

```bash
# 1. Clone o repositório e entre na pasta
git clone <url-do-repositorio>
cd 01_landingpage

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse <http://localhost:5173>. A página atualiza sozinha a cada arquivo salvo (HMR).

### Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build localmente
```

A pasta `dist/` pode ser publicada em qualquer host estático (Netlify, Vercel, GitHub Pages etc.).

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR em `localhost:5173` |
| `npm run build` | Build otimizado de produção em `dist/` |
| `npm run preview` | Serve o conteúdo de `dist/` localmente |
| `npm run lint` | Executa o ESLint em todo o projeto |

## Estrutura de pastas

```
01_landingpage/
├── public/
│   └── vite.svg              # favicon
├── src/
│   ├── assets/               # imagens dos pôsteres
│   ├── components/
│   │   ├── Header.jsx        # cabeçalho + menu hambúrguer
│   │   ├── Main.jsx          # texto de chamada + grid de filmes
│   │   └── Home.jsx          # container da página
│   ├── App.jsx               # renderiza <Home />
│   ├── index.css             # estilos globais + responsividade
│   └── main.jsx              # ponto de entrada do React
├── index.html                # HTML raiz (lang, título, metadados)
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Arquitetura

```
index.html → main.jsx → App.jsx → Home.jsx ─┬─→ Header.jsx
                                             └─→ Main.jsx
```

1. `index.html` contém apenas `<div id="root">` e o script de entrada.
2. `main.jsx` usa `createRoot()` para renderizar `<App />` nessa div.
3. `App.jsx` importa o CSS global e renderiza `<Home />`.
4. `Home.jsx` monta `<Header />` e `<Main />`.
5. Os componentes usam `className`; todo o visual vem de `src/index.css`.

## Responsividade

O layout é pensado para telas pequenas desde a base e usa quatro breakpoints:

| Breakpoint | Alvo | O que muda |
|---|---|---|
| `max-width: 1100px` | Tablets em paisagem | Espaçamentos, gaps e tipografia menores |
| `max-width: 900px` | Tablets em retrato / celulares grandes | Colunas empilham, texto centralizado, menu hambúrguer aparece |
| `max-width: 600px` | Celulares | Grid de cards com 2 colunas, fontes e paddings reduzidos |
| `max-width: 380px` | Celulares pequenos | Ajustes finos de fonte e altura dos cards |

**Técnicas usadas**

- **Unidades relativas** (`%`, `minmax(0, 1fr)`, `max-height`) em vez de larguras fixas; as alturas dos cards são definidas por breakpoint.
- **Flexbox** nas colunas do `main` e no alinhamento do header.
- **CSS Grid** com `minmax(0, ...)` nos cards, impedindo que o conteúdo estique a coluna além do container.
- **Menu hambúrguer:** no desktop a nav é normal; abaixo de 900px vira um painel com `position: absolute`, animado via `max-height`. O estado aberto/fechado é controlado pelo React.
- **`min-height: 100vh`** no `.home` (em vez de `height`), para o conteúdo crescer sem ser cortado em telas baixas.

### Como testar

1. Abra o DevTools (`F12`) e ative o Device Toolbar (`Ctrl + Shift + M`).
2. Teste as larguras **1440, 1024, 768, 600 e 375 px**.
3. Confirme que **não aparece rolagem horizontal** em nenhuma delas.

## Acessibilidade

- O botão do menu tem `aria-label` e `aria-expanded`.
- O menu fecha ao clicar em qualquer link.
- Melhorias previstas: cards como `<button>` (foco por teclado) e suporte a `prefers-reduced-motion`.

## Checklist de qualidade

Antes de considerar uma alteração pronta:

- [ ] `npm run lint` sem erros
- [ ] `npm run build` conclui com sucesso
- [ ] Sem rolagem horizontal nas 5 larguras de teste
- [ ] Menu hambúrguer abre, fecha e responde ao teclado

## Roadmap

- [ ] Trocar os `div`s dos cards por `<button>` (acessibilidade e teclado)
- [ ] Adicionar título e nota a cada filme
- [ ] Buscar os filmes em uma API (ex.: TMDB) e renderizar com `.map()`
- [ ] Transformar os cards em carrossel horizontal no mobile
- [ ] Respeitar `prefers-reduced-motion` nas animações de hover
- [ ] Migrar para CSS Modules conforme o projeto crescer
