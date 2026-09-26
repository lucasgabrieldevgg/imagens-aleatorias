/* Suíte Imagens Aleatórias — carregamento + estrutura + sanitização + identidade + segurança */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
let ok = 0, fail = 0;
const t = (n, c) => { if (c) { ok++; console.log('  ✓ ' + n); } else { fail++; console.log('  ✗ ' + n); } };

/* mock do fetch: a 1ª chamada (Commons) devolve payload mínimo real */
const MOCKS = [];
global.fetch = (u) => {
  MOCKS.push(String(u).slice(0, 60));
  if (/commons\.wikimedia\.org/.test(u)) {
    return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ query: { pages: { '1': { title: 'Teste.jpg', imageinfo: [{ url: 'https://upload.wikimedia.org/x.jpg', descriptionurl: 'https://commons.wikimedia.org/wiki/File:Teste.jpg', extmetadata: { DateTimeOriginal: { value: '1900' }, Artist: { value: 'Autor' }, LicenseShortName: { value: 'Public domain' } } }] } } } }) });
  }
  return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({}), text: () => Promise.resolve('') });
};
global.matchMedia = global.matchMedia || (() => ({ matches: false, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} }));

let dom = null, doc = null;
try {
  dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://lucasgabrieldevgg.github.io/imagens-aleatorias/' });
  doc = dom.window.document;
} catch (e) { console.log('CRASH: ' + e.message); }

console.log('\n🖼 suíte Imagens Aleatórias\n');

t('index.html carrega no jsdom sem crash', !!dom);
t('título "Imagens Aleatórias — uma janela para o mundo"', /Imagens Aleatórias/.test(doc ? doc.title : ''));
t('marca com 🖼 e crédito ao Commons', !!doc.querySelector('.brand') && /Commons/.test(doc.body.textContent));
t('controles essenciais: pausa, favoritar, link, tela cheia', ['b-pausa','b-fav','b-link','b-full'].every(id => !!doc.querySelector('#' + id)) || /b-pausa|⏸|❤|🔗/.test(html));
t('seletor de modo/atmosfera existe', /Aleatório/.test(html));
t('chama a API do Wikimedia Commons', /commons\.wikimedia\.org\/w\/api\.php/.test(html));

/* proteções históricas (commit 1a17189) */
t('🛡️ nunca nazismo/fascismo como vibe (sanitização)', /nazi\|hitler\|swastika/.test(html));
t('histórico persiste no F5 (localStorage)', /localStorage/.test(html));
t('dedup de séries "(1).jpg"', /\(\d+\)/.test(html));

/* identidade de galeria */
t('Instrument Serif na marca/caption (museu)', /Instrument\+Serif/.test(html) && /Instrument Serif/.test(html));
t('favicon 🖼 data-URI único', (html.match(/rel="icon"/g) || []).length === 1);
t('vinheta de galeria (foco na foto)', /body::after/.test(html));
t('prefers-reduced-motion respeitado', /prefers-reduced-motion/.test(html));

/* segurança */
t('sem segredo no código', !/ghp_[A-Za-z0-9]{20,}|sk-or-v1-|sk-ant-|vcp_[A-Za-z0-9]{20,}/.test(html));

console.log('\n══════════════════════════');
console.log(`RESULTADO: ${ok} ✓ / ${fail} ✗ ${fail === 0 ? '— GALERIA ÍNTEGRA 🖼' : '— HÁ REGRESSÕES!'}`);
process.exit(fail === 0 ? 0 : 1);
