# 🖼️ Imagens Aleatórias

**https://lucasgabrieldevgg.github.io/imagens-aleatorias**

> Uma janela aleatória para o mundo: imagens do **Wikimedia Commons** trocando sozinhas, com modos de atmosfera — calmo, animado, histórico, **anemoia**, campos infinitos, lugares que já foram movimentados e hoje estão vazios, abandonados… ou o seu próprio tema.

## 🎛️ Modos (29, no menu organizado por categoria)

**🎲 Sorte** — Aleatório (sorteio puro entre milhões)

**🌫️ Atmosferas** — 🧘 Calmo · 🎉 Animado · 🌧️ Melancólico · ⚡ Épico · ⛈️ Tempestades

**⏳ Tempo** — 🏛️ Histórico (guerras, ruínas, castelos, pirâmides, pinturas) · 🎞️ Anemoia (lugares vazios que parecem ter sido cheios um dia) · 📅 Ano (1826–2025)

**🌍 Natureza** — 🌾 Campos infinitos · 🌲 Florestas · 🏞️ Rios e cachoeiras · 🌋 Vulcões · ❄️ Neve e gelo · 🏜️ Deserto · 🌊 Oceano e tempestades · 🚜 Agricultura

**🌌 Céu e espaço** — 🌌 Céu noturno · 🚀 Espaço (Saturno, nebulosas, foguetes, Apollo, Marte)

**🛤️ Caminhos** — 🛤️ Estradas e trilhos · 🚂 Trens antigos · 🌉 Pontes · 🗼 Faróis e costa

**🏙️ Lugares** — 🌃 Cidades à noite · 🚉 Ecos de movimento · 🏚️ Abandonados · ⛪ Catedrais

**❤️ Você** — ❤️ Parecidos (usa as categorias das suas favoritas no Commons) · ✏️ Meu tema

Cada modo tem **10+ buscas literais** ao tema, agregadas — se uma vier fraca, as outras sustentam.

## ✨ Detalhes

- **Passagem automática** configurável (5s a 1min) — pausa quando a aba fica oculta;
- **⏳ Barra de progresso**: quanto tempo falta para a próxima foto (é o próprio timer — pausa junto);
- **♻️ Pré-carga inteligente**: quando faltam ≤6 imagens na fila, busca mais em segundo plano — a passagem nunca trava;
- **🎛️ Menu de modos** organizado por categoria (`M` abre);
- **Fundo ambiente**: a própria imagem desfocada atrás, estilo modo cinema;
- **❤️ Favoritos** salvos no navegador, com galeria;
- **Créditos sempre visíveis**: autor, ano e licença de cada imagem, com link para a página original (requisito das licenças do Commons);
- **Atalhos**: `→`/espaço próxima · `P` pausa · `F` tela cheia · `L` favoritar · swipe no celular;
- Carrega **miniaturas de 1600px** (nunca os originais gigantes) e filtra mapas/diagramas;

## 🔧 Técnico

- Arquivo único (`index.html`), sem build, sem chave de API — usa a API pública do **Wikimedia Commons** (CORS liberado via `origin=*`);
- Fonte de imagens: `commons.wikimedia.org` (conteúdo livre; cada arquivo mantém sua licença);
- Hospedado no GitHub Pages, custo R$ 0.
