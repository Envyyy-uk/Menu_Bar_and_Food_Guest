/* ==========================================================================
   ОФІЦІЙНІ ДАНІ — Alert65 «Allergens Summary», надані рестораном.
   Ці записи перекривають реконструйовані алергени в data-food.js / data-drinks.js.

   a[] — Contains          m[] — May Contain        r[] — Removable
   g[] — конкретні злаки у колонці «Cereals containing gluten»
   n{} — конкретні горіхи / ракоподібні тощо, названі в листі
   ========================================================================== */

const SOURCES = {
  mains:      { title: 'Allergens Summary: Mains',                date: '14-03-2026', by: 'Tom Cook' },
  sauces:     { title: 'Allergens Summary: Sauces and dressings', date: '15-12-2025', by: 'Tom Cook' },
  roast:      { title: 'Allergens Summary: Sunday Roast',         date: '29-12-2025', by: 'Tom Cook' },
  canapes:    { title: 'Allergens Summary: Canapés',              date: '12-05-2025', by: 'Tom Cook' },
  dcocktails: { title: 'Allergens Summary: Dessert Cocktails',    date: '03-11-2023', by: 'Richard Beck' }
};

/* -------------------------------------------------------------------------
   1. Оверлей на наявні позиції
   ------------------------------------------------------------------------- */
const OFFICIAL = {

  /* --- лист Mains ------------------------------------------------------- */
  'aubergine-parmigiana': { src: 'mains', g: ['wheat'],
    a: ['gluten', 'milk'], m: [], r: ['gluten', 'milk'] },
  'black-cod': { src: 'mains', g: ['wheat'],
    a: ['gluten', 'fish', 'milk'], m: ['eggs', 'mustard', 'soya'], r: ['gluten', 'fish', 'milk'] },
  'chicken-fillet-burger': { src: 'mains', g: ['wheat'],
    a: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'], m: [],
    r: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'] },
  'red-wine-beef': { src: 'mains',
    a: ['celery', 'milk', 'sulphites'], m: [], r: ['celery', 'milk'] },
  'steak-sandwich': { src: 'mains', g: ['wheat'],
    a: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'], m: [],
    r: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'] },
  'butchers-burger': { src: 'mains', g: ['wheat'],
    a: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'], m: [],
    r: ['gluten', 'eggs', 'milk', 'mustard', 'sulphites'] },

  /* --- лист Sunday Roast ------------------------------------------------ */
  'sunday-roast': { src: 'roast', g: ['wheat'],
    a: ['celery', 'gluten', 'eggs', 'milk', 'mustard', 'sulphites'], m: [],
    r: ['celery', 'gluten', 'eggs', 'milk', 'mustard', 'sulphites'] },

  /* --- лист Sauces and dressings ---------------------------------------- */
  'au-poivre':          { src: 'sauces', a: ['celery', 'milk', 'sulphites'], m: [], r: [] },
  'bearnaise':          { src: 'sauces', a: ['eggs', 'milk', 'sulphites'], m: [], r: [] },
  'cajun-style':        { src: 'sauces', a: [], m: [], r: [], noAllergens: true },
  'garlic-butter':      { src: 'sauces', a: ['milk'], m: [], r: [] },
  'gorgonzola-crusted': { src: 'sauces', a: ['milk'], m: [], r: [] },
  'half-lobster':       { src: 'sauces', n: { crustaceans: 'lobster' },
                          a: ['crustaceans', 'milk'], m: [], r: ['milk'] },
  'peppercorn-sauce':   { src: 'sauces', a: ['celery', 'milk', 'sulphites'], m: [], r: [] },
  'porcini-cream':      { src: 'sauces', a: ['milk'], m: [], r: [] },
  'red-wine-jus':       { src: 'sauces', a: ['celery', 'sulphites'], m: [], r: [] }
};

/* -------------------------------------------------------------------------
   2. Соуси та заправки — окремий розділ, повністю з офіційного листа
   ------------------------------------------------------------------------- */
const DRESSINGS = [
  {
    id: 'dr-balsamic', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Balsamic Dressing', price: '', desc: '', src: 'sauces',
    t: { uk: 'Бальзамічна заправка', en: 'Balsamic dressing', es: 'Aliño balsámico', it: 'Condimento balsamico', de: 'Balsamico-Dressing', ru: 'Бальзамическая заправка' },
    ing: ['balsamic', 'olive-oil', 'salt', 'black-pepper'],
    a: ['sulphites'], m: [], r: []
  },
  {
    id: 'dr-bbq', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'BBQ Sauce', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'BBQ-соус', en: 'BBQ sauce', es: 'Salsa barbacoa', it: 'Salsa BBQ', de: 'BBQ-Sauce', ru: 'BBQ-соус' },
    ing: ['tomato', 'vinegar', 'sugar', 'mustard', 'spices'],
    a: ['gluten', 'fish', 'mustard', 'soya', 'sulphites'], m: [], r: []
  },
  {
    id: 'dr-bluecheese', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Blue Cheese Dressing', price: '', desc: '', src: 'sauces',
    t: { uk: 'Заправка з блакитного сиру', en: 'Blue cheese dressing', es: 'Aliño de queso azul', it: 'Condimento al formaggio erborinato', de: 'Blauschimmelkäse-Dressing', ru: 'Заправка из голубого сыра' },
    ing: ['blue-cheese', 'mayonnaise', 'sour-cream'],
    a: ['eggs', 'milk', 'sulphites'], m: [], r: []
  },
  {
    id: 'dr-caesar', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Caesar Dressing', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'Соус «Цезар»', en: 'Caesar dressing', es: 'Salsa César', it: 'Salsa Caesar', de: 'Caesar-Dressing', ru: 'Соус «Цезарь»' },
    ing: ['egg-yolk', 'anchovies', 'garlic', 'mustard', 'aged-parmesan', 'olive-oil'],
    a: ['gluten', 'eggs', 'fish', 'milk', 'mustard', 'sulphites'], m: [], r: []
  },
  {
    id: 'dr-chipotle', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chipotle Mayo', price: '', desc: '', src: 'sauces',
    t: { uk: 'Майонез чипотле', en: 'Chipotle mayo', es: 'Mayonesa de chipotle', it: 'Maionese al chipotle', de: 'Chipotle-Mayo', ru: 'Майонез чипотле' },
    ing: ['mayonnaise', 'chipotle', 'lime-juice'],
    a: ['eggs'], m: [], r: []
  },
  {
    id: 'dr-cocktail', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cocktail Sauce', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'Коктейльний соус', en: 'Cocktail sauce', es: 'Salsa cóctel', it: 'Salsa cocktail', de: 'Cocktailsauce', ru: 'Коктейльный соус' },
    ing: ['tomato', 'horseradish', 'lemon', 'worcestershire'],
    a: ['celery', 'gluten', 'eggs', 'fish', 'mustard'], m: [], r: []
  },
  {
    id: 'dr-cognac-mustard', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cognac Mustard Dressing', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'Гірчична заправка з коньяком', en: 'Cognac mustard dressing', es: 'Aliño de mostaza al coñac', it: 'Condimento senape e cognac', de: 'Cognac-Senf-Dressing', ru: 'Горчичная заправка с коньяком' },
    ing: ['dijon-mustard', 'cognac', 'mayonnaise', 'lemon'],
    a: ['gluten', 'eggs', 'fish', 'mustard', 'sulphites'], m: [], r: []
  },
  {
    id: 'dr-ginger', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Ginger Dressing', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'Імбирна заправка', en: 'Ginger dressing', es: 'Aliño de jengibre', it: 'Condimento allo zenzero', de: 'Ingwer-Dressing', ru: 'Имбирная заправка' },
    ing: ['ginger', 'soy-sauce', 'vegetable-oil', 'rice-vinegar'],
    a: ['gluten', 'eggs', 'milk'], m: [], r: []
  },
  {
    id: 'dr-house', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'House Dressing', price: '', desc: '', src: 'sauces', g: ['barley'],
    t: { uk: 'Фірмова заправка', en: 'House dressing', es: 'Aliño de la casa', it: 'Condimento della casa', de: 'Haus-Dressing', ru: 'Фирменная заправка' },
    ing: ['vegetable-oil', 'vinegar', 'mustard', 'shallot'],
    a: ['gluten', 'eggs', 'mustard'], m: [], r: []
  },
  {
    id: 'dr-mignonette', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Mignonette Dressing', price: '', desc: '', src: 'sauces',
    t: { uk: 'Соус міньйонет', en: 'Mignonette dressing', es: 'Salsa mignonette', it: 'Salsa mignonette', de: 'Mignonette-Sauce', ru: 'Соус миньонет' },
    ing: ['wine-vinegar', 'shallot', 'black-pepper'],
    a: ['sulphites'], m: [], r: []
  },
  {
    id: 'dr-ponzu', section: 'dressings', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Ponzu', price: '', desc: '', src: 'sauces', g: ['barley', 'wheat'],
    t: { uk: 'Соус понзу', en: 'Ponzu', es: 'Ponzu', it: 'Ponzu', de: 'Ponzu', ru: 'Соус понзу' },
    ing: ['soy-sauce', 'citrus', 'rice-vinegar'],
    a: ['gluten', 'soya'], m: [], r: []
  }
];

/* -------------------------------------------------------------------------
   3. Канапе — повністю з офіційного листа (склад у листі не наводиться)
   ------------------------------------------------------------------------- */
const CANAPES = [
  { id: 'cp-avocado', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '',
    name: 'Avocado salsa, plantain', a: [], m: [], r: [], noAllergens: true, veg: true,
    t: { uk: 'Сальса з авокадо, платан', en: 'Avocado salsa with plantain', es: 'Salsa de aguacate con plátano macho', it: 'Salsa di avocado con platano', de: 'Avocado-Salsa mit Kochbanane', ru: 'Сальса из авокадо, платан' } },

  { id: 'cp-carpaccio', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Beef carpaccio', a: ['gluten', 'milk', 'sulphites'], m: [], r: ['gluten', 'milk', 'sulphites'],
    t: { uk: 'Карпачо з яловичини', en: 'Beef carpaccio', es: 'Carpaccio de ternera', it: 'Carpaccio di manzo', de: 'Rindercarpaccio', ru: 'Карпаччо из говядины' } },

  { id: 'cp-sliders', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Beef sliders', a: ['celery', 'gluten', 'eggs', 'milk', 'mustard'], m: [],
    r: ['celery', 'gluten', 'eggs', 'milk', 'mustard'],
    t: { uk: 'Міні-бургери з яловичиною', en: 'Beef sliders', es: 'Mini hamburguesas de ternera', it: 'Mini burger di manzo', de: 'Beef Sliders', ru: 'Мини-бургеры с говядиной' } },

  { id: 'cp-bocconcini', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '',
    name: 'Bocconcini, cherry tomato, pesto', a: ['milk'], m: [], r: ['milk'], veg: true,
    t: { uk: 'Бокончіні, черрі, песто', en: 'Bocconcini, cherry tomato, pesto', es: 'Bocconcini, tomate cherry, pesto', it: 'Bocconcini, pomodorini, pesto', de: 'Bocconcini, Kirschtomate, Pesto', ru: 'Бокончини, черри, песто' } },

  { id: 'cp-braised-beef', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Braised beef cup', a: ['celery', 'gluten'], m: ['milk'], r: ['celery', 'gluten', 'milk'],
    t: { uk: 'Тарталетка з тушкованою яловичиною', en: 'Braised beef cup', es: 'Tartaleta de ternera estofada', it: 'Cestino di manzo brasato', de: 'Schmorrind im Törtchen', ru: 'Тарталетка с тушёной говядиной' } },

  { id: 'cp-brie', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    n: { nuts: 'walnut' },
    name: 'Brie crostini, walnut', a: ['gluten', 'milk', 'nuts'], m: [], r: ['gluten', 'milk', 'nuts'], veg: true,
    t: { uk: 'Кростіні з брі та волоським горіхом', en: 'Brie crostini with walnut', es: 'Crostini de brie con nuez', it: 'Crostini di brie e noci', de: 'Brie-Crostini mit Walnuss', ru: 'Кростини с бри и грецким орехом' } },

  { id: 'cp-coconut-shrimp', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    n: { crustaceans: 'prawns' },
    name: 'Coconut shrimp', a: ['gluten', 'crustaceans', 'eggs', 'milk'], m: [], r: [],
    t: { uk: 'Креветки в кокосовій паніровці', en: 'Coconut shrimp', es: 'Gambas al coco', it: 'Gamberi al cocco', de: 'Kokos-Garnelen', ru: 'Креветки в кокосовой панировке' } },

  { id: 'cp-parma-beans', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '',
    name: 'French beans wrapped in Parma ham', a: [], m: [], r: [], noAllergens: true,
    t: { uk: 'Зелена квасоля в пармській шинці', en: 'French beans wrapped in Parma ham', es: 'Judías verdes envueltas en jamón de Parma', it: 'Fagiolini avvolti nel prosciutto di Parma', de: 'Grüne Bohnen im Parmaschinken', ru: 'Зелёная фасоль в пармской ветчине' } },

  { id: 'cp-goats-tartlet', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Goats cheese tartlet', a: ['gluten', 'milk'], m: [], r: ['gluten', 'milk'], veg: true,
    t: { uk: 'Тарталетка з козячим сиром', en: 'Goat’s cheese tartlet', es: 'Tartaleta de queso de cabra', it: 'Tartelletta al formaggio di capra', de: 'Ziegenkäse-Tartelette', ru: 'Тарталетка с козьим сыром' } },

  { id: 'cp-lamb-cutlets', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '',
    name: 'Lamb cutlets', a: ['celery', 'sulphites'], m: [], r: ['celery', 'sulphites'],
    t: { uk: 'Котлетки з ягняти', en: 'Lamb cutlets', es: 'Chuletitas de cordero', it: 'Costolette d’agnello', de: 'Lammkoteletts', ru: 'Котлетки из ягнёнка' } },

  { id: 'cp-gravlax', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '',
    name: 'Salmon gravlax', a: ['fish', 'mustard', 'sulphites'], m: [], r: [],
    t: { uk: 'Гравлакс із лосося', en: 'Salmon gravlax', es: 'Gravlax de salmón', it: 'Gravlax di salmone', de: 'Lachs-Gravlax', ru: 'Гравлакс из лосося' } },

  { id: 'cp-satay', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Satay chicken', a: ['gluten', 'fish', 'peanuts', 'soya'], m: [], r: [],
    t: { uk: 'Курка сатай', en: 'Satay chicken', es: 'Pollo satay', it: 'Pollo satay', de: 'Satay-Hähnchen', ru: 'Курица сатай' } },

  { id: 'cp-tempura', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Tempura vegetables', a: ['gluten'], m: [], r: ['gluten'], veg: true,
    t: { uk: 'Овочі в темпурі', en: 'Tempura vegetables', es: 'Verduras en tempura', it: 'Verdure in tempura', de: 'Gemüse-Tempura', ru: 'Овощи в темпуре' } },

  { id: 'cp-tuna-tartare', section: 'canapes', menus: ['canapes'], src: 'canapes', price: '', g: ['wheat'],
    name: 'Tuna tartare', a: ['gluten', 'fish', 'soya', 'sulphites'], m: [], r: ['gluten', 'soya', 'sulphites'],
    t: { uk: 'Тартар із тунця', en: 'Tuna tartare', es: 'Tartar de atún', it: 'Tartare di tonno', de: 'Thunfisch-Tatar', ru: 'Тартар из тунца' },
    w: ['warn.raw'] }
];

/* -------------------------------------------------------------------------
   4. Десертні коктейлі — алергени з офіційного листа
   ------------------------------------------------------------------------- */
const DESSERT_COCKTAILS = [
  { id: 'dc-espresso-martini', section: 'dessertcocktails', src: 'dcocktails', price: '16.75',
    name: 'Espresso Martini',
    desc: 'Sapling vodka, Coffee Liqueur, espresso and little sugar vigorously shaken',
    ing: [['~Sapling', ['vodka']], 'coffee-liqueur', 'espresso', 'sugar'],
    a: [], m: [], r: [], noAllergens: true },

  { id: 'dc-black-rye', section: 'dessertcocktails', src: 'dcocktails', price: '18.75', g: ['rye'],
    name: 'Black & Rye',
    desc: "Rabbit Hole Boxergrail Rye, Chambord black raspberry liqueur, lemon juice, a little honey and Abbot's bitters. Shaken with egg white",
    ing: [['~Rabbit Hole Boxergrail', ['rye-whiskey']], ['~Chambord', ['raspberry-liqueur']],
          'lemon-juice', 'honey', 'bitters', 'egg-white'],
    a: ['gluten', 'eggs'], m: [], r: ['eggs'], w: ['warn.rawEggWhite'] },

  { id: 'dc-lemon-flip', section: 'dessertcocktails', src: 'dcocktails', price: '16.75',
    name: 'Lemon Flip',
    desc: 'Sipsmith Lemon Drizzle gin, limoncello, lemon juice, sugar and a whole egg',
    ing: [['~Sipsmith Lemon Drizzle', ['gin']], 'limoncello', 'lemon-juice', 'sugar', 'egg'],
    a: ['eggs'], m: [], r: [], w: ['warn.rawEggWhite'] },

  { id: 'dc-golden-cadillac', section: 'dessertcocktails', src: 'dcocktails', price: '16.75',
    n: { nuts: 'almonds' },
    name: 'Golden Cadillac',
    desc: 'Crème de Cacao Blanc, Galliano liqueur, orange juice and double cream',
    ing: ['creme-de-cacao', 'galliano', 'orange-juice', 'double-cream'],
    a: ['milk'], m: ['nuts'], r: [] }
];

/* -------------------------------------------------------------------------
   5. Уточнення реконструйованих страв на основі офіційних листів по соусах.
      Позиція лишається реконструйованою, але компонент відомий точно.
   ------------------------------------------------------------------------- */
const COMPONENT_UPGRADES = {
  // соус «Цезар» — офіційно містить ще й сульфіти та ячмінний глютен
  'classic-caesar': { a: ['gluten', 'eggs', 'fish', 'milk', 'mustard', 'sulphites'], m: [] },
  'caesar-side':    { a: ['gluten', 'eggs', 'fish', 'milk', 'mustard', 'sulphites'], m: [] },
  // фірмова заправка — глютен (ячмінь), яйця, гірчиця
  'wollensky-salad': { a: ['gluten', 'eggs', 'mustard', 'sulphites'], m: ['milk', 'celery', 'fish'] },
  'garden-salad':    { a: ['gluten', 'eggs', 'mustard', 'sulphites'], m: [] },
  // коктейльний соус — селера, ячмінний глютен, яйця, риба, гірчиця
  'shrimp-cocktail': { a: ['crustaceans', 'celery', 'gluten', 'eggs', 'fish', 'mustard', 'soya', 'sulphites'], m: ['sesame'] },
  'rock-oysters':    { a: ['molluscs', 'celery', 'gluten', 'eggs', 'fish', 'mustard', 'sulphites'], m: [] },
  'poached-lobster': { a: ['crustaceans', 'celery', 'gluten', 'eggs', 'fish', 'mustard', 'soya', 'sulphites'], m: ['sesame'] },
  'seafood-tower':   { a: ['crustaceans', 'molluscs', 'celery', 'gluten', 'eggs', 'fish', 'mustard', 'soya', 'sulphites'], m: ['sesame'] },
  // гірчична заправка з коньяком
  'crab-meat':       { a: ['crustaceans', 'gluten', 'eggs', 'fish', 'milk', 'mustard', 'sulphites'], m: ['celery'] },
  // імбирна заправка — ячмінний глютен, яйця, молоко
  'salmon-tataki':   { a: ['fish', 'gluten', 'eggs', 'milk', 'soya', 'sesame', 'sulphites'], m: ['molluscs'] },
  // BBQ-соус
  'bbq-ribs':        { a: ['gluten', 'fish', 'mustard', 'soya', 'sulphites', 'celery', 'eggs'], m: ['milk'] },
  // соус із блакитного сиру
  'iceberg-wedge':   { a: ['eggs', 'milk', 'sulphites'], m: ['mustard', 'gluten'] }
};
