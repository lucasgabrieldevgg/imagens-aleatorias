[🇧🇷 Português](README.pt-BR.md)

# 🖼️ Random Images

[![tests](https://github.com/lucasgabrieldevgg/imagens-aleatorias/actions/workflows/ci.yml/badge.svg)](https://github.com/lucasgabrieldevgg/imagens-aleatorias/actions/workflows/ci.yml)

## 🌐 Try it now
**https://lucasgabrieldevgg.github.io/imagens-aleatorias** — free, no account. Favorites stay in your browser.

> A random window into the world: **Wikimedia Commons** images changing on their own, with atmosphere modes — calm, lively, historical, **anemoia**, endless fields, places that used to be busy and today are empty, abandoned… or your own theme.

## 🎛️ Modes (29, in a category-organized menu)

**🎲 Luck** — Random (pure draw among millions)

**🌫️ Atmospheres** — 🧘 Calm · 🎉 Lively · 🌧️ Melancholic · ⚡ Epic · ⛈️ Storms

**⏳ Time** — 🏛️ Historical (wars, ruins, castles, pyramids, paintings) · 🎞️ Anemoia (empty places that seem like they were once full) · 📅 Year (1826–2025)

**🌍 Nature** — 🌾 Endless fields · 🌲 Forests · 🏞️ Rivers and waterfalls · 🌋 Volcanoes · ❄️ Snow and ice · 🏜️ Desert · 🌊 Ocean and storms · 🚜 Farming

**🌌 Sky and space** — 🌌 Night sky · 🚀 Space (Saturn, nebulae, rockets, Apollo, Mars)

**🛤️ Paths** — 🛤️ Roads and rails · 🚂 Old trains · 🌉 Bridges · 🗼 Lighthouses and coast

**🏙️ Places** — 🌃 Cities at night · 🚉 Motion echoes · 🏚️ Abandoned · ⛪ Cathedrals

**❤️ Yours** — ❤️ Similar (uses the categories of your Commons favorites) · ✏️ My theme

Every mode runs **10+ literal searches** on the theme, aggregated — if one comes back weak, the others carry it.

## ✨ Details

- **Auto-advance** configurable (5s to 1min) — pauses when the tab is hidden;
- **⏳ Progress bar**: time until the next photo (it *is* the timer — pauses along);
- **♻️ Smart preloading**: when ≤6 images are left in the queue, more are fetched in the background — playback never stalls;
- **🎛️ Mode menu** organized by category (`M` opens it);
- **Ambient backdrop**: the image itself, blurred, behind everything — cinema mode;
- **❤️ Favorites** saved in the browser, with a gallery;
- **Credits always visible**: author, year and license of every image, linking to the original page (Commons license requirement);
- **Shortcuts**: `→`/space next · `P` pause · `F` fullscreen · `L` favorite · swipe on mobile;
- Loads **1600px thumbnails** (never the giant originals) and filters maps/diagrams;

## 🔧 Technical

- Single file (`index.html`), no build, no API key — uses the public **Wikimedia Commons** API (CORS via `origin=*`);
- Image source: `commons.wikimedia.org` (free content; each file keeps its own license);
- Hosted on GitHub Pages, $0 cost.

## License

MIT — see [LICENSE](LICENSE).

## Development
```bash
npm ci
npm test   # 14-check suite (jsdom)
```
Tests run on push via GitHub Actions.
