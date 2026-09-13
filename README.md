# 🖼️ Imagens Aleatórias

**https://lucasgabrieldevgg.github.io/imagens-aleatorias**

> Uma janela aleatória para o mundo: imagens do **Wikimedia Commons** trocando sozinhas, com modos de atmosfera — calmo, animado, histórico, **anemoia**, campos infinitos, lugares que já foram movimentados e hoje estão vazios, abandonados… ou o seu próprio tema.

## 🎛️ Modos

| Modo | O que mostra |
|---|---|
| 🎲 **Aleatório** | sorteio puro entre milhões de fotos do Commons |
| 🧘 **Calmo** | lagos na neblina, horizontes, florestas silenciosas |
| 🎉 **Animado** | carnavais, shows, fogos, feiras |
| 🏛️ **Histórico** | coisas históricas de verdade: guerras e batalhas registradas, ruínas antigas, castelos, pirâmides, monumentos, pinturas e retratos de época |
| 🎞️ **Anemoia** | lugares vazios e significantes que dão a impressão de que já foram cheios um dia: salões de baile, teatros, casinos, saguões |
| 📅 **Ano** | digite um ano (1826–2025) e viaje até ele |
| 🌾 **Campos infinitos** | planícies, pradarias, horizontes sem fim |
| 🚉 **Ecos de movimento** | lugares que já foram cheios e hoje estão vazios: estações, teatros, piscinas |
| 🏚️ **Abandonados** | urbex, cidades fantasmas, fábricas mortas |
| ✏️ **Meu tema** | qualquer tema, lugar, época ou atmosfera |

## ✨ Detalhes

- **Passagem automática** configurável (10s a 1min) — pausa quando a aba fica oculta;
- **Fundo ambiente**: a própria imagem desfocada atrás, estilo modo cinema;
- **❤️ Favoritos** salvos no navegador, com galeria;
- **Créditos sempre visíveis**: autor, ano e licença de cada imagem, com link para a página original (requisito das licenças do Commons);
- **Atalhos**: `→`/espaço próxima · `P` pausa · `F` tela cheia · `L` favoritar · swipe no celular;
- Carrega **miniaturas de 1600px** (nunca os originais gigantes) e filtra mapas/diagramas;

## 🔧 Técnico

- Arquivo único (`index.html`), sem build, sem chave de API — usa a API pública do **Wikimedia Commons** (CORS liberado via `origin=*`);
- Fonte de imagens: `commons.wikimedia.org` (conteúdo livre; cada arquivo mantém sua licença);
- Hospedado no GitHub Pages, custo R$ 0.
