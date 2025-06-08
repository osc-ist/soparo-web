// Türkçe ve İngilizce dil desteği
const diller = {
  tr: {
    menu_anasayfa: "Ana Sayfa",
    menu_hakkimizda: "Hakkımızda",
    menu_urunler: "Ürünlerimiz",
    menu_referanslar: "Referanslar",
    menu_iletisim: "İletişim",
    teklif_al: "Teklif Al",
    hero_baslik: "Güneş Panellerinizin Verimliliğini Artırın",
    hero_slogan: '"Havanız nasıl olursa olsun, panelleriniz temiz olsun!"',
    hero_aciklama: "SOPARO güneş paneli temizleme robotları ile enerji üretiminizi %30'a kadar artırın, bakım maliyetlerinizi düşürün.",
    urunlerimizi_kesfedin: "Ürünlerimizi Keşfedin",
    iletisime_gecin: "İletişime Geçin"
  },
  en: {
    menu_anasayfa: "Home",
    menu_hakkimizda: "About Us",
    menu_urunler: "Our Products",
    menu_referanslar: "References",
    menu_iletisim: "Contact",
    teklif_al: "Get a Quote",
    hero_baslik: "Increase the Efficiency of Your Solar Panels",
    hero_slogan: '"No matter the weather, keep your panels clean!"',
    hero_aciklama: "Increase your energy production by up to 30% and reduce maintenance costs with SOPARO solar panel cleaning robots.",
    urunlerimizi_kesfedin: "Discover Our Products",
    iletisime_gecin: "Contact Us"
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  var d = diller[lang] || diller['tr'];
  document.querySelector('[href="#anasayfa"]').textContent = d.menu_anasayfa;
  document.querySelector('[href="#hakkimizda"]').textContent = d.menu_hakkimizda;
  document.querySelector('[href="#urunler"]').textContent = d.menu_urunler;
  document.querySelector('[href="#referanslar"]').textContent = d.menu_referanslar;
  document.querySelector('[href="#iletisim"]').textContent = d.menu_iletisim;
  document.querySelector('.hero-section h1').textContent = d.hero_baslik;
  document.querySelector('.hero-section h3').textContent = d.hero_slogan;
  document.querySelector('.hero-section p.lead').textContent = d.hero_aciklama;
  document.querySelector('.btn.btn-primary.btn-lg').textContent = d.urunlerimizi_kesfedin;
  document.querySelector('.btn.btn-outline-primary.btn-lg').textContent = d.iletisime_gecin;
  document.querySelector('.btn.btn-warning.btn-lg').textContent = d.teklif_al;
}

window.addEventListener('DOMContentLoaded', function() {
  var lang = localStorage.getItem('lang') || 'tr';
  applyLang(lang);
}); 