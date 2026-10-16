# 🎬 MovieCity — Landing Page

Landing page responsiva de um serviço de streaming fictício, construída com **React + Vite**. O objetivo do projeto é ser um exercício prático de componentização, estilização com CSS puro e adaptação de layout para diferentes tamanhos de tela.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-puro-1572b6?logo=css3&logoColor=white)

## 📌 Sumário

1. [O que o projeto faz](#-o-que-o-projeto-faz)
2. [Tecnologias utilizadas](#-tecnologias-utilizadas)
3. [Pré-requisitos](#-pré-requisitos)
4. [Como rodar](#-como-rodar)
5. [Estrutura de pastas](#-estrutura-de-pastas)
6. [Como as partes se conectam](#-como-as-partes-se-conectam)
7. [Responsividade](#-responsividade)
8. [Scripts disponíveis](#-scripts-disponíveis)
9. [Próximos passos / ideias](#-próximos-passos--ideias)

## 🎯 O que o projeto faz

A página é dividida em duas áreas principais:

- **Header (cabeçalho):** logo "MovieCity", menu de navegação (Filmes, Categoria, Sobre, Contato) e um botão de Login.
- **Main (conteúdo principal):** uma coluna com texto de chamada ("Seus Filmes") + botão **Mais**, e outra coluna com um grid de 6 cards de filmes (Afterlife, Transformers, Mowgli, Shift, Round 6 e Harry Potter).

Em telas pequenas, as duas colunas se empilham, o grid de cards passa a ter 2 colunas e o menu de navegação vira um menu hambúrguer que abre e fecha.

## 🧰 Tecnologias utilizadas

| Tecnologia | Para que serve |
|---|---|
| React 19 | Biblioteca de UI baseada em componentes |
| Vite 7 | Servidor de desenvolvimento com HMR e bundler de produção |
| JavaScript (ESM) | Linguagem e sistema de módulos |
| CSS puro | Estilização global e responsividade (media queries) |
| ESLint | Padronização e análise estática do código |

> Nenhuma biblioteca de UI (Bootstrap, Tailwind, styled-components) é usada de propósito: o objetivo é praticar CSS de verdade.

## ✅ Pré-requisitos

- **Node.js 20.19+ ou 22.12+** (o Vite 7 exige essas versões)
- **npm** (já vem junto com o Node.js) — ou yarn/pnpm, se preferir
- Um editor de código, como o VS Code

Confira as versões instaladas:

```bash
node -v
npm -v
```

## 🚀 Como rodar

```bash
# 1. Instalar as dependências
npm install

# 2. Subir o servidor de desenvolvimento
npm run dev
```

O Vite abre em <http://localhost:5173>. Cada vez que você salvar um arquivo, a página atualiza sozinha (HMR — Hot Module Replacement).

Para conferir o layout, abra o DevTools (`F12`), ative o Device Toolbar (`Ctrl + Shift + M`) e teste nas larguras **1440px, 1024px, 768px, 600px e 375px**, confirmando que não aparece barra de rolagem horizontal.

Antes de considerar pronto:

```bash
npm run lint
npm run build
```

O build gera a pasta `dist/`, pronta para publicar em qualquer host estático (Netlify, Vercel, GitHub Pages, etc.). Para pré-visualizar o resultado: `npm run preview`.

## 📁 Estrutura de pastas

```
01_landinpage/
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

## 🔗 Como as partes se conectam

```
index.html → main.jsx → App.jsx → Home.jsx ─┬─→ Header.jsx
                                             └─→ Main.jsx
```

1. `index.html` contém apenas `<div id="root">` e o script de entrada.
2. `main.jsx` usa `createRoot()` para renderizar o `<App />` dentro dessa div.
3. `App.jsx` importa o CSS global e renderiza `<Home />`.
4. `Home.jsx` monta `<Header />` e `<Main />`.
5. Os componentes usam `className`, e todo o visual vem de `src/index.css`.

## 📱 Responsividade

O layout foi construído mobile-friendly desde a base e usa quatro breakpoints:

| Breakpoint | Alvo | O que muda |
|---|---|---|
| `max-width: 1100px` | Tablets em paisagem | Espaçamentos, gaps e tipografia menores |
| `max-width: 900px` | Tablets retrato / celulares grandes | Colunas empilham, texto centralizado, menu hambúrguer aparece |
| `max-width: 600px` | Celulares | Grid de cards passa para 2 colunas, fontes e paddings reduzidos |
| `max-width: 380px` | Celulares pequenos | Ajustes finos de fonte e altura dos cards |

Técnicas usadas:

- Unidades relativas (`%`, `minmax(0, 1fr)`, `max-height`) em vez de larguras fixas, exceto alturas de card, que são controladas por breakpoint.
- **Flexbox** para as colunas do `main` e para o alinhamento do header.
- **CSS Grid** com `minmax(0, ...)` para os cards, evitando que o conteúdo force a coluna a crescer além do container.
- Menu hambúrguer só com CSS: no desktop a nav é normal; abaixo de 900px ela vira um painel com `position: absolute` animado via `max-height`.
- `min-height: 100vh` no `.home` em vez de `height: 100vh`, para o conteúdo poder crescer sem ser cortado em telas baixas.
- Acessibilidade: o botão do menu tem `aria-label` e `aria-expanded`, e o menu fecha ao clicar em qualquer link.

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR em <http://localhost:5173> |
| `npm run build` | Gera a versão otimizada de produção em `dist/` |
| `npm run preview` | Serve localmente o build de `dist/` para conferência |
| `npm run lint` | Roda o ESLint em todo o projeto |

## 💡 Próximos passos / ideias

- Substituir os `div`s dos cards por botões `<button>` para melhorar a acessibilidade e o teclado.
- Dar título e nota a cada filme, deixando os cards mais informativos.
- Buscar a lista de filmes de uma API (ex.: TMDB) e renderizar os cards dinamicamente com `.map()`.
- Transformar os cards em um carrossel horizontal no mobile.
- Adicionar `prefers-reduced-motion` para desativar as animações de hover em quem preferir.
- Migrar o CSS para CSS Modules ou para uma solução por componente conforme o projeto crescer.
