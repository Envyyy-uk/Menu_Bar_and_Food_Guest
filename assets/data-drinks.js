/* ==========================================================================
   Бар — коктейлі, безалкогольні, вина
   Марки лишаються як є («~» = вивести дослівно), категорії напою — зі словника.
   ['~Absolut Citron', ['vodka']] → «Absolut Citron (горілка)»
   ========================================================================== */

const DRINKS = [

  /* --------------------------------------------- COCKTAILS: HOUSE SELECTION */
  { id: 'lychee-76', section: 'cocktails', name: 'Lychee 76', price: '18.75',
    ing: [['~Absolut Citron', ['vodka']], 'lychee-liqueur', 'lemon-juice', ['~Lanson Père & Fils Brut', ['champagne']]],
    a: ['sulphites'], m: [] },

  { id: 'old-cuban', section: 'cocktails', name: 'Old Cuban', price: '18.75',
    ing: [['~Havana Club 7 y.o.', ['rum']], 'fresh-mint', 'lime', 'sugar', ['~Lanson Père & Fils Brut', ['champagne']]],
    a: ['sulphites'], m: [] },

  { id: 'bloom-blush', section: 'cocktails', name: 'Bloom & Blush', price: '18.75',
    ing: [['~Sapling English', ['raspberry-vodka']], 'lemon-juice', ['~Coates & Seely', ['sparkling-rose']]],
    a: ['sulphites'], m: [] },

  { id: 'brisa-de-pascua', section: 'cocktails', name: 'Brisa de Pascua', price: '17.75',
    ing: [['~Legado', ['white-rum']], ['~Sipsmith London Dry', ['gin']], 'creme-de-cacao', 'coconut-cream', 'lime-juice'],
    a: [], m: ['nuts', 'milk', 'sulphites'], w: ['warn.coconut'] },

  { id: 'cherry-blossom', section: 'cocktails', name: 'Cherry Blossom', price: '16.75',
    ing: [['~Sipsmith London Dry', ['gin']], ['~Dreamsake', ['sake']], 'cherry-brandy', 'peychauds', 'lemon-juice', 'egg-white'],
    a: ['eggs', 'sulphites'], m: ['gluten'], w: ['warn.rawEggWhite'] },

  { id: 'lizzies-daiquiri', section: 'cocktails', name: "Lizzie's Daiquiri No. II", price: '16.75',
    ing: [['~Havana Club 7 y.o.', ['rum']], 'maraschino', 'lime', 'sugar', ['~Dubonnet', ['aperitivo']]],
    a: ['sulphites'], m: ['nuts'] },

  { id: 'almost-fit', section: 'cocktails', name: 'Almost Fit', price: '16.75',
    ing: [['~Saint James', ['agricole-rum']], 'agave-syrup', 'kiwi', 'lime-juice', 'pineapple-juice', 'egg-white'],
    a: ['eggs'], m: ['sulphites'], w: ['warn.rawEggWhite'] },

  { id: 'whiskey-melon', section: 'cocktails', name: 'Whiskey Melon', price: '16.75',
    ing: [['~Jameson Black Barrel', ['irish-whiskey']], 'watermelon-syrup', 'lemon-juice', 'peychauds', 'egg-white'],
    a: ['eggs', 'gluten'], m: ['sulphites'], w: ['warn.rawEggWhite', 'warn.whiskyBarley'] },

  { id: 'whisky-fjords', section: 'cocktails', name: 'Whisky Fjords', price: '16.75',
    ing: [['~Cutty Sark Original', ['scotch']], ['~Brännland', ['ice-cider']], 'bitters', 'soda-water', 'lemon-zest'],
    a: ['sulphites', 'gluten'], m: [] },

  { id: 'mai-tai', section: 'cocktails', name: 'Mai Tai', price: '16.75',
    ing: [['~Havana Club 7 y.o.', ['rum']], 'tiki-rum-blend', 'lime-juice', 'apricot-brandy', 'almond-syrup'],
    a: ['nuts'], m: ['sulphites'] },

  { id: 'sw-gin-sling', section: 'cocktails', name: 'S&W Gin Sling', price: '16.75',
    ing: [['~Sipsmith London Dry', ['gin']], 'apricot-liqueur', 'cherry-brandy', 'grenadine', 'lemon-juice', 'angostura', 'pineapple-juice', 'club-soda'],
    a: [], m: ['sulphites', 'nuts'] },

  { id: 'japanese-rose', section: 'cocktails', name: 'Japanese Rose', price: '17.75',
    ing: [['~Fuji', ['japanese-whisky']], 'lemon-juice', 'grenadine', 'aniseed'],
    a: ['gluten'], m: ['sulphites'] },

  { id: 'indisputably-hibiscus', section: 'cocktails', name: 'Indisputably Hibiscus', price: '16.75',
    ing: [['~Código 1530 Rosa', ['hibiscus-tequila']], 'lime-juice', 'agave-syrup', 'orange-liqueur'],
    a: ['sulphites'], m: [] },

  { id: 'vanilla-passion', section: 'cocktails', name: 'Vanilla Passion', price: '16.75',
    ing: [['~Absolut Vanilla', ['vanilla-vodka']], 'passion-fruit', 'lime-juice', 'sugar', 'crushed-ice'],
    a: [], m: ['sulphites'] },

  { id: 'irish-anti-hero', section: 'cocktails', name: 'Irish Anti-Hero', price: '16.75',
    ing: [['~Jameson Black Barrel', ['irish-whiskey']], ['~Fernet Branca', ['amaro']], 'lime-juice', 'sugar'],
    a: ['gluten'], m: ['sulphites'] },

  /* -------------------------------------------------------- BLOODY MARYS -- */
  { id: 'bm-classic', section: 'bloodymarys', name: 'The Classic', price: '15.00',
    ing: [['~Sapling English', ['vodka']], 'worcestershire', 'tomato-juice', 'horseradish', 'tabasco', 'mustard', 'lemon-juice', 'seasoning'],
    a: ['fish', 'mustard', 'gluten', 'sulphites'], m: ['celery', 'soya'], w: ['warn.worcestershire'] },

  { id: 'bm-red-snapper', section: 'bloodymarys', name: 'Red Snapper', price: '15.00',
    ing: [['~Sipsmith London Dry', ['gin']], 'cucumber', 'tomato-juice', 'worcestershire', 'horseradish', 'tabasco', 'lemon-juice', 'seasoning'],
    a: ['fish', 'gluten', 'sulphites'], m: ['mustard', 'celery', 'soya'], w: ['warn.worcestershire'] },

  { id: 'bm-smoky-maria', section: 'bloodymarys', name: 'Smoky Maria', price: '15.00',
    ing: [['~Olmeca Altos', ['tequila']], 'mezcal', 'lime-juice', 'worcestershire', 'horseradish', 'green-tabasco'],
    a: ['fish', 'gluten', 'sulphites'], m: ['mustard', 'celery', 'soya'], w: ['warn.worcestershire'] },

  /* ----------------------------------------------------- VIRGIN COCKTAILS -- */
  { id: 'strawberry-fields', section: 'virgin', name: 'Strawberry Fields', price: '7.50',
    ing: ['strawberry-puree', 'pineapple-juice', 'apple-juice', 'lemon-juice'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'pom-pom', section: 'virgin', name: 'Pom-Pom', price: '7.50',
    ing: ['apple-juice', 'cranberry-juice', 'grenadine', 'elderflower', 'lime-juice'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'jasmine-peach', section: 'virgin', name: 'Jasmine Peach', price: '7.50',
    ing: ['peach-puree', 'jasmine-tea', 'lemon-juice', 'sugar'],
    a: [], m: ['sulphites'], nonalc: true },

  { id: 'prim-proper', section: 'virgin', name: 'Prim & Proper', price: '12.00', meta: 'ABV 0.5%',
    ing: [['~Sipsmith FreeGlider', ['na-spirit']], 'angostura', 'cucumber', 'mint', 'lemon', 'ginger-ale'],
    a: [], m: ['sulphites'], nonalc: true, w: ['warn.lowAlcohol'] },

  /* -------------------------------------------------- MARTINIS & MANHATTANS */
  { id: 'sw-martini', section: 'martinis', name: 'S&W Martini', price: '19.95', meta: '80 ml',
    ing: [['~Sapling English', ['vodka']], ['~Sipsmith London Dry', ['gin']], 'vermouth'],
    a: ['sulphites'], m: [] },

  { id: 'sw-manhattan', section: 'martinis', name: 'S&W Manhattan', price: '19.95', meta: '80 ml',
    ing: [['~Four Roses', ['bourbon']], 'vermouth', 'bitters'],
    a: ['sulphites'], m: ['gluten'] },

  { id: 'sw-rye-manhattan', section: 'martinis', name: 'S&W Rye Manhattan', price: '26.50', meta: '80 ml',
    ing: [['~Rabbit Hole', ['rye-whiskey']], 'vermouth', 'bitters'],
    a: ['sulphites'], m: ['gluten'] },

  /* --------------------------------------------------- BOTTOMLESS BRUNCH -- */
  { id: 'bb-prosecco', section: 'bottomless', name: 'Prosecco', price: '26.00',
    ing: [['~Canal Grando', ['prosecco']]], a: ['sulphites'], m: [] },

  { id: 'bb-aperol', section: 'bottomless', name: 'Aperol Spritz', price: '39.00',
    ing: [['~Aperol', ['aperitivo']], ['~Canal Grando', ['prosecco']], 'club-soda'], a: ['sulphites'], m: [] },

  { id: 'bb-champagne', section: 'bottomless', name: 'Champagne', price: '59.00',
    ing: [['~Lanson Père & Fils', ['champagne']]], a: ['sulphites'], m: [] }
];

/* -------------------------------------------------------------------------
   Вина за келихом — усі містять сульфіти
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
  { section: 'red', name: "Morgon 'Les Charmes'",               region: 'Domaine de Bel-Air, Beaujolais — served chilled', price: '18.50' },
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

const DRINK_ORDER = ['cocktails', 'martinis', 'bloodymarys', 'bottomless', 'virgin'];
const WINE_ORDER  = ['sparkling', 'white', 'rose', 'red'];
const WINE_SERVE  = { sparkling: '125 ml', white: '175 ml', rose: '175 ml', red: '175 ml' };
const SECTION_NOTES = { bloodymarys: 'note.bloodymarys', martinis: 'note.martinis', bottomless: 'note.bottomless' };
