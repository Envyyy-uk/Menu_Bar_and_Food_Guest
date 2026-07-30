/* ==========================================================================
   DESSERT MENU — десерти, десертні коктейлі, десертні вина, херес, чай і кава
   Ціни й описи — з друкованого Dessert Menu.
   ========================================================================== */

const DESSERTS = [
  {
    id: 'ds-chocolate-cake', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Gigantic Chocolate Cake', price: '24.00', meta: 'perfect to share for 2–4 people',
    desc: 'Moist chocolate layer cake brushed with Baileys Irish Cream, chocolate mousse & covered with dark chocolate ganache',
    t: { uk: 'Великий шоколадний торт на компанію', en: 'A giant chocolate cake to share', es: 'Tarta de chocolate gigante para compartir', it: 'Torta al cioccolato gigante da condividere', de: 'Riesiger Schokoladenkuchen zum Teilen', ru: 'Большой шоколадный торт на компанию' },
    ing: [['sponge', ['wheat-flour', 'egg', 'butter', 'sugar', 'cocoa']],
          ['~Baileys Irish Cream', ['milk', 'irish-whiskey']],
          ['chocolate-mousse', ['cream', 'egg', 'chocolate']],
          ['ganache', ['dark-chocolate', 'cream', 'soy-lecithin']]],
    a: ['gluten', 'eggs', 'milk', 'soya'], m: ['nuts', 'sulphites']
  },
  {
    id: 'ds-cheesecake', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'New York Style Cheesecake', price: '9.50',
    desc: 'Baked traditional cheesecake, fresh berries, blueberry compote',
    t: { uk: 'Нью-йоркський чизкейк', en: 'New York cheesecake', es: 'Tarta de queso neoyorquina', it: 'Cheesecake newyorkese', de: 'New-York-Cheesecake', ru: 'Нью-йоркский чизкейк' },
    ing: ['cream-cheese', 'egg', 'sugar', ['biscuit-base', ['wheat-flour', 'butter']], 'berries', ['blueberry', ['sugar']]],
    a: ['gluten', 'eggs', 'milk'], m: ['nuts', 'soya']
  },
  {
    id: 'panna-cotta', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Black Sesame Panna Cotta', price: '9.50',
    desc: 'Peach & jasmine sauce, sesame tuile',
    t: { uk: 'Панакота з чорним кунжутом', en: 'Black sesame panna cotta', es: 'Panna cotta de sésamo negro', it: 'Panna cotta al sesamo nero', de: 'Schwarze-Sesam-Panna-cotta', ru: 'Панакота с чёрным кунжутом' },
    ing: ['cream', 'milk', 'black-sesame', 'gelatine', 'peach-jasmine', ['sesame-tuile', ['wheat-flour', 'sugar']]],
    a: ['milk', 'sesame', 'gluten'], m: ['eggs', 'soya', 'nuts']
  },
  {
    id: 'ds-blood-orange', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Blood Orange Cake', price: '9.50',
    desc: 'Dark chocolate ganache & blood orange sorbet',
    t: { uk: 'Торт із червоним апельсином', en: 'Blood orange cake', es: 'Bizcocho de naranja sanguina', it: 'Torta all’arancia rossa', de: 'Blutorangenkuchen', ru: 'Торт с красным апельсином' },
    ing: [['sponge', ['wheat-flour', 'egg', 'butter', 'sugar']], 'blood-orange',
          ['ganache', ['dark-chocolate', 'cream', 'soy-lecithin']],
          ['sorbet', ['blood-orange', 'sugar', 'water']]],
    a: ['gluten', 'eggs', 'milk', 'soya'], m: ['nuts']
  },
  {
    id: 'banana-cake', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Spiced Banana Cake', price: '9.50',
    desc: 'Toffee & banana mousse, rum & raisin ice cream',
    t: { uk: 'Пряний банановий кекс', en: 'Spiced banana cake', es: 'Bizcocho de plátano especiado', it: 'Torta di banana speziata', de: 'Gewürz-Bananenkuchen', ru: 'Пряный банановый кекс' },
    ing: [['sponge', ['wheat-flour', 'egg', 'butter', 'sugar', 'spices']], 'banana', 'toffee', 'cream', 'rum-raisin-ice'],
    a: ['gluten', 'eggs', 'milk', 'sulphites'], m: ['nuts', 'soya']
  },
  {
    id: 'ice-cream', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Gourmet Ice Cream or Sorbet', price: '3.00', meta: 'per scoop',
    desc: "Ask for today's flavours",
    t: { uk: 'Морозиво або сорбет — кулька', en: 'Ice cream or sorbet, per scoop', es: 'Helado o sorbete, por bola', it: 'Gelato o sorbetto, a pallina', de: 'Eis oder Sorbet, pro Kugel', ru: 'Мороженое или сорбет — шарик' },
    ing: [['ice-cream', ['milk', 'cream', 'sugar']], ['sorbet', ['fruit-puree', 'sugar', 'water']]],
    a: ['milk'], m: ['eggs', 'nuts', 'gluten', 'soya', 'sesame'], w: ['warn.iceCreamVaries']
  },
  {
    id: 'ds-vacherin', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'English Strawberry Vacherin', price: '9.50',
    desc: 'Strawberry sorbet, pomegranate',
    t: { uk: 'Полуничний вашрен на мерензі', en: 'Strawberry vacherin on meringue', es: 'Vacherin de fresa sobre merengue', it: 'Vacherin di fragola su meringa', de: 'Erdbeer-Vacherin auf Baiser', ru: 'Клубничный вашрен на меренге' },
    ing: [['meringue', ['egg-white', 'sugar']], ['sorbet', ['strawberry', 'sugar']], 'whipped-cream', 'pomegranate'],
    a: ['eggs', 'milk'], m: ['nuts', 'gluten', 'soya']
  }
];

/* -------------------------------------------------------------------------
   Десертні вина, портвейни та херес — усі містять сульфіти
   ------------------------------------------------------------------------- */
const DESSERT_WINES = [
  { section: 'dessertwine', name: 'Quady Elysium',            region: 'Black Muscat',                       price: '14.50 · 52.00',  serve: '100 ml · 375 ml' },
  { section: 'dessertwine', name: 'Quady Essensia',           region: 'Orange Muscat',                      price: '14.50 · 52.00',  serve: '100 ml · 375 ml' },
  { section: 'dessertwine', name: 'Château Suduiraut 2016',   region: 'Sauternes',                          price: '99.00',          serve: '375 ml' },
  { section: 'dessertwine', name: "Far Niente 'Dolce'",       region: 'Late Harvest Muscat',                price: '299.00',         serve: '375 ml' },
  { section: 'dessertwine', name: "Frescobaldi 'Pomino Vinsanto'", region: 'Vinsanto, Tuscany',             price: '129.00',         serve: '375 ml' },
  { section: 'dessertwine', name: 'Tedeschi 2019',            region: 'Recioto della Valpolicella',         price: '23.50 · 115.00', serve: '100 ml · 375 ml' },
  { section: 'dessertwine', name: 'Disznókő 2014',            region: '5 Puttonyos Tokaji',                 price: '30.95 · 155.00', serve: '100 ml · 375 ml' },
  { section: 'dessertwine', name: 'Château de Fargues 2005',  region: 'Sauternes',                          price: '335.00',         serve: '375 ml' },

  { section: 'port', name: "Graham's L.B.V 2019",             region: 'Late Bottled Vintage Port',          price: '9.75 · 65.00',   serve: '100 ml · 750 ml' },
  { section: 'port', name: 'Barros Colheita 2005',            region: 'Colheita Port',                      price: '18.95 · 136.00', serve: '100 ml · 750 ml' },
  { section: 'port', name: 'Barros 10yr Tawny',               region: 'Tawny Port',                         price: '12.75 · 99.00',  serve: '100 ml · 750 ml' },
  { section: 'port', name: "Warre's Vintage 1980",            region: 'Vintage Port',                       price: '350.00',         serve: '750 ml' },

  { section: 'sherry', name: 'Del Duque Amontillado 30yr',    region: 'Amontillado',                        price: '21.50 · 69.00',  serve: '100 ml · 750 ml' },
  { section: 'sherry', name: 'Pedro Ximénez 30yr',            region: 'Pedro Ximénez',                      price: '21.50 · 69.00',  serve: '100 ml · 750 ml' },
  { section: 'sherry', name: 'Tio Pepe Fino en Rama',         region: 'Fino',                               price: '14.50 · 48.00',  serve: '100 ml · 750 ml' }
];

/* -------------------------------------------------------------------------
   Чай і кава
   ------------------------------------------------------------------------- */
const HOT_DRINKS = [
  { id: 'hd-classic-irish', section: 'teacoffee', price: '12.00',
    name: 'Classic Irish Coffee', desc: 'Jameson Irish Whiskey, coffee, sugar & cream',
    ing: [['~Jameson', ['irish-whiskey']], 'coffee', 'sugar', 'cream'],
    a: ['milk'], m: ['gluten'], src: 'dcocktails', g: ['barley', 'rye', 'wheat'] },

  { id: 'hd-irish-cream', section: 'teacoffee', price: '12.00',
    name: 'Irish Cream Coffee', desc: 'Baileys Irish Cream, coffee, sugar & cream',
    ing: [['~Baileys', ['irish-cream']], 'coffee', 'sugar', 'cream'],
    a: ['milk'], m: ['gluten'], src: 'dcocktails', g: ['barley', 'rye', 'wheat'] },

  { id: 'hd-kentucky', section: 'teacoffee', price: '12.00',
    name: 'Kentucky Coffee', desc: 'Four Roses bourbon, coffee, maple syrup & cream',
    ing: [['~Four Roses', ['bourbon']], 'coffee', 'maple-syrup', 'cream'],
    a: ['milk'], m: ['gluten'], src: 'dcocktails', g: ['barley', 'rye', 'wheat'] },

  { id: 'hd-nutty-irish', section: 'teacoffee', price: '12.00',
    name: 'Nutty Irish Coffee', desc: 'Baileys Irish Cream, Frangelico, coffee & cream',
    ing: [['~Baileys', ['irish-cream']], ['~Frangelico', ['hazelnut-liqueur']], 'coffee', 'cream'],
    a: ['milk', 'nuts'], m: ['gluten'], src: 'dcocktails', g: ['barley', 'rye', 'wheat'], n: { nuts: 'hazelnut' } },

  { id: 'hd-americano', section: 'teacoffee', price: '4.20', name: 'Americano', desc: '',
    ing: ['coffee', 'water'], a: [], m: ['milk'] },
  { id: 'hd-espresso', section: 'teacoffee', price: '3.80', name: 'Espresso', desc: '',
    ing: ['coffee'], a: [], m: [] },
  { id: 'hd-double-espresso', section: 'teacoffee', price: '4.20', name: 'Double Espresso', desc: '',
    ing: ['coffee'], a: [], m: [] },
  { id: 'hd-cappuccino', section: 'teacoffee', price: '4.50', name: 'Cappuccino', desc: '',
    ing: ['coffee', 'milk'], a: ['milk'], m: [] },
  { id: 'hd-latte', section: 'teacoffee', price: '4.50', name: 'Latte', desc: '',
    ing: ['coffee', 'milk'], a: ['milk'], m: [] },
  { id: 'hd-macchiato', section: 'teacoffee', price: '4.00', name: 'Macchiato', desc: '',
    ing: ['coffee', 'milk'], a: ['milk'], m: [] },
  { id: 'hd-tea', section: 'teacoffee', price: '4.00', name: 'Tea',
    desc: 'English Breakfast · Earl Grey · Chamomile · Green · Jasmine',
    ing: ['black-tea', 'green-tea', 'chamomile', 'jasmine-tea'], a: [], m: ['milk'] },
  { id: 'hd-mint-tea', section: 'teacoffee', price: '4.20', name: 'Fresh Mint Tea', desc: '',
    ing: ['fresh-mint', 'water'], a: [], m: [] }
];
