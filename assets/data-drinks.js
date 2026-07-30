/* ==========================================================================
   Бар — коктейлі, безалкогольні, вина
   a[] — заявлені алергени, m[] — «може містити»
   Нагадування: практично всі вина, ігристі та сидри містять сульфіти.
   ========================================================================== */

const DRINKS = [

  /* --------------------------------------------- COCKTAILS: HOUSE SELECTION */
  { id: 'lychee-76', section: 'cocktails', name: 'Lychee 76', ua: 'Лічі 76', price: '18.75',
    ing: ['Absolut Citron (горілка)', 'Лікер лічі', 'Лимонний сік', 'Шампанське Lanson Père & Fils Brut'],
    a: ['sulphites'], m: [] },

  { id: 'old-cuban', section: 'cocktails', name: 'Old Cuban', ua: 'Олд К’юбан', price: '18.75',
    ing: ['Havana Club 7 y.o. (ром)', 'Свіжа м’ята', 'Лайм', 'Цукор', 'Шампанське Lanson Père & Fils Brut'],
    a: ['sulphites'], m: [] },

  { id: 'bloom-blush', section: 'cocktails', name: 'Bloom & Blush', ua: 'Блум-енд-Блаш', price: '18.75',
    ing: ['Sapling English (малинова горілка)', 'Лимонний сік', 'Coates & Seely English sparkling rosé'],
    a: ['sulphites'], m: [] },

  { id: 'brisa-de-pascua', section: 'cocktails', name: 'Brisa de Pascua', ua: 'Бріза де Паскуа', price: '17.75',
    ing: ['Legado (білий ром)', 'Sipsmith London Dry Gin', 'Crème de cacao blanc', 'Кокосовий крем', 'Лайм'],
    a: [], m: ['nuts', 'milk', 'sulphites'],
    warn: 'Кокос: у ЄС не входить до 14 алергенів, у США класифікується як горіх. Кокосовий крем іноді містить молочні похідні.' },

  { id: 'cherry-blossom', section: 'cocktails', name: 'Cherry Blossom', ua: 'Черрі Блоссом', price: '16.75',
    ing: ['Sipsmith London Dry Gin', 'Dreamsake (японське саке)', 'Вишневий сік', 'Вишневий бренді', 'Пейшо бітер', 'Лимонний сік', 'Яєчний білок'],
    a: ['eggs', 'sulphites'], m: ['gluten'],
    warn: 'Сирий яєчний білок.' },

  { id: 'lizzies-daiquiri', section: 'cocktails', name: "Lizzie's Daiquiri No. II", ua: 'Дайкірі Ліззі №2', price: '16.75',
    ing: ['Havana Club 7 y.o. (ром)', 'Мараскіно', 'Лайм', 'Цукор', 'Dubonnet'],
    a: ['sulphites'], m: ['nuts'] },

  { id: 'almost-fit', section: 'cocktails', name: 'Almost Fit', ua: 'Олмост Фіт', price: '16.75',
    ing: ['Saint James rhum agricole', 'Агавовий сироп', 'Свіже ківі', 'Лаймовий сік', 'Ананасовий сік', 'Яєчний білок'],
    a: ['eggs'], m: ['sulphites'],
    warn: 'Сирий яєчний білок.' },

  { id: 'whiskey-melon', section: 'cocktails', name: 'Whiskey Melon', ua: 'Віскі Мелон', price: '16.75',
    ing: ['Jameson Black Barrel', 'Кавуновий сироп', 'Лимонний сік', 'Пейшо бітер', 'Яєчний білок'],
    a: ['eggs', 'gluten'], m: ['sulphites'],
    warn: 'Сирий яєчний білок. Віскі з ячменю — зазвичай безпечний після дистиляції, але за суворої целіакії уточнюй.' },

  { id: 'whisky-fjords', section: 'cocktails', name: 'Whisky Fjords', ua: 'Віскі Ф’йордс', price: '16.75',
    ing: ['Cutty Sark Original Scotch Whisky', 'Brännland Iscider (яблучний крижаний сидр)', 'Бітери', 'Газована вода', 'Цедра лимона'],
    a: ['sulphites', 'gluten'], m: [] },

  { id: 'mai-tai', section: 'cocktails', name: 'Mai Tai', ua: 'Май Тай', price: '16.75',
    ing: ['Havana Club 7 y.o. (ром)', 'S&W tiki rum blend', 'Лаймовий сік', 'Абрикосовий бренді', 'Мигдалевий сироп (orgeat)'],
    a: ['nuts'], m: ['sulphites'] },

  { id: 'sw-gin-sling', section: 'cocktails', name: 'S&W Gin Sling', ua: 'Джин-слінг S&W', price: '16.75',
    ing: ['Sipsmith London Dry Gin', 'Абрикосовий лікер', 'Вишневий бренді', 'Гранатовий гренадин', 'Лимонний сік', 'Ангостура бітер', 'Ананасовий сік', 'Содова'],
    a: [], m: ['sulphites', 'nuts'] },

  { id: 'japanese-rose', section: 'cocktails', name: 'Japanese Rose', ua: 'Джапаніз Роуз', price: '17.75',
    ing: ['Fuji (японський віскі)', 'Лимонний сік', 'Гранатовий гренадин', 'Нотка анісу'],
    a: ['gluten'], m: ['sulphites'] },

  { id: 'indisputably-hibiscus', section: 'cocktails', name: 'Indisputably Hibiscus', ua: 'Індіспʼютаблі Гібіскус', price: '16.75',
    ing: ['Código 1530 Rosa (текіла, настояна на гібіскусі)', 'Лаймовий сік', 'Агавовий сироп', 'Апельсиновий лікер'],
    a: ['sulphites'], m: [] },

  { id: 'vanilla-passion', section: 'cocktails', name: 'Vanilla Passion', ua: 'Ваніла Пешн', price: '16.75',
    ing: ['Absolut Vanilla (горілка)', 'Пюре маракуї', 'Лаймовий сік', 'Цукор', 'Дроблений лід'],
    a: [], m: ['sulphites'] },

  { id: 'irish-anti-hero', section: 'cocktails', name: 'Irish Anti-Hero', ua: 'Айріш Анти-Гіро', price: '16.75',
    ing: ['Jameson Black Barrel', 'Fernet Branca', 'Лаймовий сік', 'Цукор'],
    a: ['gluten'], m: ['sulphites'] },

  /* -------------------------------------------------------- BLOODY MARYS -- */
  { id: 'bm-classic', section: 'bloodymarys', name: 'The Classic', ua: 'Класична', price: '15.00',
    ing: ['Sapling English (горілка)', 'Вустерський соус (анчоуси)', 'Томатний сік', 'Хрін', 'Табаско', 'Гірчиця', 'Свіжий лимонний сік', 'Спеції'],
    a: ['fish', 'mustard', 'gluten', 'sulphites'], m: ['celery', 'soya'],
    warn: 'Вустерський соус містить анчоуси та часто солод (глютен).' },

  { id: 'bm-red-snapper', section: 'bloodymarys', name: 'Red Snapper', ua: 'Ред Снеппер', price: '15.00',
    ing: ['Sipsmith London Dry Gin', 'Огірок', 'Томатний сік', 'Вустерський соус (анчоуси)', 'Хрін', 'Табаско', 'Свіжий лимонний сік', 'Спеції'],
    a: ['fish', 'gluten', 'sulphites'], m: ['mustard', 'celery', 'soya'] },

  { id: 'bm-smoky-maria', section: 'bloodymarys', name: 'Smoky Maria', ua: 'Смокі Марія', price: '15.00',
    ing: ['Olmeca Altos Tequila', 'Мескаль', 'Лаймовий сік', 'Вустерський соус (анчоуси)', 'Хрін', 'Зелений Табаско'],
    a: ['fish', 'gluten', 'sulphites'], m: ['mustard', 'celery', 'soya'] },

  /* ----------------------------------------------------- VIRGIN COCKTAILS -- */
  { id: 'strawberry-fields', section: 'virgin', name: 'Strawberry Fields', ua: 'Полуничні поля', price: '7.50',
    ing: ['Полуничне пюре', 'Ананасовий сік', 'Яблучний сік', 'Лимонний сік'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'pom-pom', section: 'virgin', name: 'Pom-Pom', ua: 'Пом-Пом', price: '7.50',
    ing: ['Яблучний сік', 'Журавлиний сік', 'Гранатовий гренадин', 'Бузиновий сироп', 'Лаймовий сік'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'jasmine-peach', section: 'virgin', name: 'Jasmine Peach', ua: 'Жасмин-персик', price: '7.50',
    ing: ['Персикове пюре', 'Охолоджений жасминовий зелений чай', 'Лимонний сік', 'Цукор'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'prim-proper', section: 'virgin', name: 'Prim & Proper', ua: 'Прим-енд-Пропер', price: '12.00', meta: 'ABV 0,5%',
    ing: ['Sipsmith FreeGlider (безалкогольний спірт)', 'Дві краплі ангостури', 'Огірок', 'М’ята', 'Лимон', 'Імбирний ель'],
    a: [], m: ['sulphites'], nonalc: true,
    warn: 'Не повністю безалкогольний: 0,5% ABV, плюс ангостура.' },

  /* -------------------------------------------------- MARTINIS & MANHATTANS */
  { id: 'sw-martini', section: 'martinis', name: 'S&W Martini', ua: 'Мартіні S&W', price: '19.95', meta: '80 мл',
    ing: ['Sapling English (горілка) або Sipsmith London Dry Gin', 'Вермут'],
    a: ['sulphites'], m: [] },

  { id: 'sw-manhattan', section: 'martinis', name: 'S&W Manhattan', ua: 'Мангеттен S&W', price: '19.95', meta: '80 мл',
    ing: ['Four Roses (бурбон)', 'Вермут', 'Бітери'],
    a: ['sulphites'], m: ['gluten'] },

  { id: 'sw-rye-manhattan', section: 'martinis', name: 'S&W Rye Manhattan', ua: 'Житній Мангеттен S&W', price: '26.50', meta: '80 мл',
    ing: ['Rabbit Hole (житній віскі)', 'Вермут', 'Бітери'],
    a: ['sulphites'], m: ['gluten'] },

  /* --------------------------------------------------- BOTTOMLESS BRUNCH -- */
  { id: 'bb-prosecco', section: 'bottomless', name: 'Prosecco', ua: 'Просекко', price: '26.00',
    ing: ['Canal Grando Prosecco'], a: ['sulphites'], m: [] },

  { id: 'bb-aperol', section: 'bottomless', name: 'Aperol Spritz', ua: 'Апероль Шприц', price: '39.00',
    ing: ['Aperol', 'Canal Grando Prosecco', 'Содова'], a: ['sulphites'], m: [] },

  { id: 'bb-champagne', section: 'bottomless', name: 'Champagne', ua: 'Шампанське', price: '59.00',
    ing: ['Lanson Père & Fils'], a: ['sulphites'], m: [] }
];

/* -------------------------------------------------------------------------
   Вина за келихом
   ------------------------------------------------------------------------- */
const WINES = [
  { section: 'sparkling', name: 'Lanson Père & Fils Brut',      region: 'Reims, Champagne',                 price: '18.50' },
  { section: 'sparkling', name: 'Lanson Le Rosé Creation',      region: 'Reims, Champagne',                 price: '22.00' },
  { section: 'sparkling', name: 'Perrier-Jouët Grand Brut',     region: 'Épernay, Champagne',               price: '24.50' },
  { section: 'sparkling', name: 'Coates & Seely Rosé',          region: 'Hampshire, England',               price: '18.75' },
  { section: 'sparkling', name: 'Canal Grando, Prosecco',       region: 'Veneto, Italy',                    price: '8.95' },

  { section: 'white', name: "L'Eclat 'Domaine de Joy'",         region: 'Côtes de Gascogne, France',        price: '10.15' },
  { section: 'white', name: "Umani Ronchi 'Villa Bianchi'",     region: 'Verdicchio, Marche, Italy',        price: '12.35' },
  { section: 'white', name: 'Te Muna, Craggy Range',            region: 'Sauvignon Blanc, Martinborough, New Zealand', price: '16.35' },
  { section: 'white', name: 'Marc Brédif, Vouvray',             region: 'Chenin Blanc, Loire Valley, France — off dry', price: '16.55' },
  { section: 'white', name: 'Kendall Jackson Family',           region: 'Chardonnay, Sonoma County, California', price: '17.85' },
  { section: 'white', name: 'Smith & Wollensky',                region: 'Sauvignon Blanc, Napa Valley, California', price: '20.45' },
  { section: 'white', name: 'Thomas Labille Chablis',           region: 'Chablis, France',                  price: '21.55' },
  { section: 'white', name: 'Sanford',                          region: 'Chardonnay, Sta. Rita Hills, California', price: '29.10' },

  { section: 'rose', name: 'Côté Rosé, Domaine Lafage',         region: 'Syrah blend, Languedoc, France',   price: '11.95' },
  { section: 'rose', name: 'Pink Diesel',                       region: 'Grenache blend, Provence, France', price: '14.35' },
  { section: 'rose', name: "Simpsons 'Railway Hill'",           region: 'Pinot Noir, Kent, England',        price: '17.40' },

  { section: 'red', name: "Château d'Agel",                     region: 'Syrah blend, Minervois, France',   price: '11.45' },
  { section: 'red', name: 'Beronia Rioja Crianza',              region: 'Tempranillo, Rioja, Spain',        price: '12.85' },
  { section: 'red', name: 'Hunuc Reserve',                      region: 'Malbec, Uco Valley, Mendoza, Argentina', price: '14.50' },
  { section: 'red', name: 'Le Coq Volant',                      region: 'Grenache/Syrah, Côte du Rhône, France', price: '16.15' },
  { section: 'red', name: 'Plan B Frespanol',                   region: 'Shiraz, Barossa Valley, Australia', price: '16.65' },
  { section: 'red', name: "Morgon 'Les Charmes'",               region: 'Domaine de Bel-Air, Beaujolais — подається охолодженим', price: '18.50' },
  { section: 'red', name: 'Louis Latour, Bourgogne',            region: 'Pinot Noir, Burgundy, France',     price: '19.35' },
  { section: 'red', name: 'Federalist Zinfandel',               region: 'Lodi, California',                 price: '21.25' },
  { section: 'red', name: "Paso d'Oro",                         region: 'Cabernet Sauvignon, Paso Robles, California', price: '24.25' },
  { section: 'red', name: 'Smith & Wollensky',                  region: 'Meritage blend, Napa Valley, California', price: '28.85' },
  { section: 'red', name: "Quinta Romaneira 'Três Parcelas'",   region: 'Touriga Nacional, Douro, Portugal', price: '32.65' },
  { section: 'red', name: 'Sanford',                            region: 'Pinot Noir, Sta. Rita Hills, California', price: '34.50' },
  { section: 'red', name: 'Pius P.R.D.',                        region: 'Cabernet Sauvignon, Paso Robles, California', price: '35.60' },
  { section: 'red', name: 'Rutherford Hill',                    region: 'Merlot, Napa Valley, California',  price: '35.80' },
  { section: 'red', name: "Ridge 'Lytton Springs'",             region: 'Zinfandel blend, Dry Creek Valley, California', price: '44.45' },
  { section: 'red', name: 'Elizabeth Spencer',                  region: 'Special Cuvée, Cabernet Sauvignon, Napa Valley, California', price: '56.90' },
  { section: 'red', name: 'Silver Oak',                         region: 'Cabernet Sauvignon, Alexander Valley, California', price: '89.95' }
];

const DRINK_SECTIONS = {
  cocktails:   { ua: 'Коктейлі — House Selection', en: 'Cocktails — House Selection', note: '' },
  bloodymarys: { ua: 'Bloody Marys',               en: 'Bloody Marys',                note: 'Подаються на бранчі. Усі містять вустерський соус — анчоуси.' },
  virgin:      { ua: 'Безалкогольні коктейлі',     en: 'Virgin Cocktails',            note: '' },
  martinis:    { ua: 'Мартіні та Мангеттени',      en: 'Martinis & Manhattans',       note: 'Порція 80 мл.' },
  bottomless:  { ua: 'Bottomless Brunch',          en: 'Bottomless Brunch Beverages', note: 'Максимум 1,5 години, лише разом із замовленням із двох страв.' }
};

const WINE_SECTIONS = {
  sparkling: { ua: 'Ігристі вина', en: 'Sparkling Wine', serve: '125 мл' },
  white:     { ua: 'Білі вина',    en: 'White Wine',     serve: '175 мл' },
  rose:      { ua: 'Рожеві вина',  en: 'Rosé Wine',      serve: '175 мл' },
  red:       { ua: 'Червоні вина', en: 'Red Wine',       serve: '175 мл' }
};

const DRINK_ORDER = ['cocktails', 'martinis', 'bloodymarys', 'bottomless', 'virgin'];
const WINE_ORDER = ['sparkling', 'white', 'rose', 'red'];
