# 🖼️ Imagens Aleatórias

**https://lucasgabrieldevgg.github.io/imagens-aleatorias**

> Uma janela aleatória para o mundo: imagens do **Wikimedia Commons** trocando sozinhas, com modos de atmosfera — calmo, animado, histórico, **anemoia**, campos infinitos, lugares que já foram movimentados e hoje estão vazios, abandonados… ou o seu próprio tema.

## 🎛️ Modos (19, organizados por menu)

**🎲 Sorte**
| 🎲 Aleatório | sorteio puro entre milhões de fotos do Commons |

**🌫️ Atmosferas**
| 🧘 Calmo | 🎉 Animado | 🌧️ Melancólico | ⚡ Épico | — cada um com ~10 buscas literais ao clima |

**⏳ Tempo**
| 🏛️ **Histórico** — coisas históricas de verdade: guerras, ruínas, castelos, pirâmides, monumentos, pinturas |
| 🎞️ **Anemoia** — lugares vazios que guardam a memória de quem um dia os encheu |
| 📅 **Ano** — digite 1826–2025 e viaje |

**🌍 Natureza**
| 🌾 Campos infinitos | 🌋 Vulcões | ❄️ Neve e gelo | 🏜️ Deserto | 🌊 Oceano e tempestades | 🌌 Céu noturno |

**🏙️ Lugares**
| 🚉 Ecos de movimento (cheios ontem, vazios hoje) | 🏚️ Abandonados | 🌃 Cidades à noite |

**❤️ Você**
| ❤️ **Parecidos** — usa as categorias das suas favoritas no Commons para achar imagens relacionadas |
| ✏️ **Meu tema** — qualquer tema, lugar, época ou atmosfera |

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
