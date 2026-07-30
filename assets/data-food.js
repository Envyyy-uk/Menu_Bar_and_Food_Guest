/* ==========================================================================
   Страви
   name  — назва як у меню (не перекладається, гість замовляє саме так)
   t     — пояснення назви мовою гостя
   desc  — опис, надрукований у меню (англійською, як у закладі)
   ing   — склад: ключ словника, або [ключ-заголовок, [ключі-складники]]
   a[]   — містить, m[] — може містити, w[] — застереження (ключі i18n)
   ========================================================================== */

const DISHES = [

  /* ---------------------------------------------------------- STARTERS -- */
  {
    id: 'bread-butter', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Bread & Butter', price: '5.25', desc: '',
    t: { uk: 'Хліб із вершковим маслом', en: 'Bread with butter', es: 'Pan con mantequilla', it: 'Pane e burro', de: 'Brot mit Butter', ru: 'Хлеб со сливочным маслом' },
    ing: [['bread', ['wheat-flour', 'water', 'yeast', 'salt']], 'butter', 'sea-salt'],
    a: ['gluten', 'milk'], m: ['sesame', 'eggs', 'soya', 'nuts']
  },
  {
    id: 'split-pea-soup', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: "Wollensky's Famous Split Pea Soup", price: '9.75', desc: 'Bacon & croutons',
    t: { uk: 'Фірмовий суп із колотого гороху', en: 'The house split pea soup', es: 'Sopa de guisantes partidos de la casa', it: 'Zuppa di piselli spezzati della casa', de: 'Hauseigene Erbsensuppe', ru: 'Фирменный суп из колотого гороха' },
    ing: ['split-peas', 'smoked-bacon', 'onion', 'carrot', 'celery', 'stock', 'croutons', 'butter'],
    a: ['gluten', 'celery', 'milk', 'sulphites'], m: ['soya', 'mustard']
  },
  {
    id: 'burrata', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Burrata', price: '15.00', desc: 'Green gazpacho, radish & green mango',
    t: { uk: 'Бурата', en: 'Burrata', es: 'Burrata', it: 'Burrata', de: 'Burrata', ru: 'Бурата' },
    ing: ['burrata', ['gazpacho', ['cucumber', 'green-pepper', 'green-apple', 'garlic', 'olive-oil', 'vinegar']], 'radish', 'green-mango', 'olive-oil'],
    a: ['milk', 'sulphites'], m: ['gluten', 'nuts', 'celery']
  },
  {
    id: 'bbq-ribs', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'South Carolina BBQ Pork Ribs', price: '16.00', desc: 'Apple & celeriac slaw',
    t: { uk: 'Свинячі реберця BBQ', en: 'BBQ pork ribs', es: 'Costillas de cerdo a la barbacoa', it: 'Costine di maiale BBQ', de: 'BBQ-Schweinerippchen', ru: 'Свиные рёбрышки BBQ' },
    ing: ['pork-ribs', ['bbq-sauce', ['mustard', 'vinegar', 'sugar', 'tomato', 'spices']], ['house-slaw', ['apple', 'celeriac', 'mayonnaise']]],
    a: ['mustard', 'celery', 'eggs', 'sulphites'], m: ['gluten', 'soya', 'milk']
  },
  {
    id: 'steak-tartare', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Steak Tartare', price: '19.00', desc: 'Fillet, bone marrow & crostini',
    t: { uk: 'Тартар із яловичої вирізки', en: 'Beef fillet tartare', es: 'Tartar de solomillo', it: 'Tartare di filetto', de: 'Rinderfilet-Tatar', ru: 'Тартар из говяжьей вырезки' },
    ing: ['raw-beef-fillet', 'bone-marrow', 'capers', 'gherkins', 'shallot', 'dijon-mustard', 'egg-yolk', 'worcestershire', 'tabasco', 'crostini'],
    a: ['eggs', 'mustard', 'fish', 'gluten', 'sulphites'], m: ['celery', 'soya', 'milk'], w: ['warn.raw']
  },
  {
    id: 'salmon-tataki', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Salmon Tataki', price: '16.00', desc: 'Avocado & compressed cucumber, chilli & ginger dressing',
    t: { uk: 'Татакі з лосося', en: 'Salmon tataki', es: 'Tataki de salmón', it: 'Tataki di salmone', de: 'Lachs-Tataki', ru: 'Татаки из лосося' },
    ing: ['seared-salmon', 'avocado', 'pressed-cucumber', ['ginger-dressing', ['chilli', 'ginger', 'soy-sauce', 'rice-vinegar', 'sesame-oil', 'lime']]],
    a: ['fish', 'soya', 'sesame', 'gluten', 'sulphites'], m: ['molluscs'], w: ['warn.nearlyRaw']
  },
  {
    id: 'carpaccio', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'USDA Prime Sirloin Carpaccio', price: '18.00', desc: 'Chestnut mushroom & Pecorino, tarragon & truffle dressing',
    t: { uk: 'Карпачо зі стриплойна USDA Prime', en: 'USDA Prime sirloin carpaccio', es: 'Carpaccio de lomo bajo USDA Prime', it: 'Carpaccio di controfiletto USDA Prime', de: 'Carpaccio vom USDA-Prime-Roastbeef', ru: 'Карпаччо из стриплойна USDA Prime' },
    ing: ['usda-prime-beef', 'chestnut-mushroom', 'pecorino', ['truffle-dressing', ['tarragon', 'truffle-oil', 'olive-oil', 'lemon']]],
    a: ['milk'], m: ['eggs', 'mustard', 'sulphites', 'gluten'], w: ['warn.raw']
  },
  {
    id: 'chilli-garlic-shrimp', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chilli & Garlic Shrimp', price: '18.50', desc: 'Pea purée, XO sauce',
    t: { uk: 'Креветки з чилі та часником', en: 'Chilli and garlic prawns', es: 'Gambas al chile y ajo', it: 'Gamberi al peperoncino e aglio', de: 'Garnelen mit Chili und Knoblauch', ru: 'Креветки с чили и чесноком' },
    ing: ['prawns', 'garlic', 'chilli', ['pea-puree', ['green-peas', 'butter']], ['xo-sauce', ['dried-shrimp', 'dried-scallop', 'ham', 'chilli', 'soy']]],
    a: ['crustaceans', 'molluscs', 'milk', 'soya', 'fish', 'gluten'], m: ['sesame', 'sulphites']
  },
  {
    id: 'shrimp-cocktail', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: "'S&W Style' Shrimp Cocktail", price: '18.50', desc: 'Ginger dressing & cocktail sauce',
    t: { uk: 'Креветковий коктейль', en: 'Prawn cocktail', es: 'Cóctel de gambas', it: 'Cocktail di gamberi', de: 'Garnelencocktail', ru: 'Креветочный коктейль' },
    ing: ['boiled-prawns', ['cocktail-sauce', ['tomato', 'horseradish', 'lemon', 'worcestershire']], ['ginger-dressing', ['ginger', 'soy-sauce', 'vegetable-oil']]],
    a: ['crustaceans', 'fish', 'soya', 'gluten', 'sulphites'], m: ['eggs', 'mustard', 'celery', 'sesame']
  },
  {
    id: 'crab-meat', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Jumbo Lump Crab Meat', price: '25.00', desc: 'Cognac & Dijon mustard sauce',
    t: { uk: 'Добірне м’ясо краба', en: 'Prime crab meat', es: 'Carne de cangrejo selecta', it: 'Polpa di granchio selezionata', de: 'Ausgesuchtes Krabbenfleisch', ru: 'Отборное мясо краба' },
    ing: ['crab-meat', 'cognac', 'dijon-mustard', 'cream', 'mayonnaise', 'lemon'],
    a: ['crustaceans', 'mustard', 'eggs', 'milk', 'sulphites'], m: ['fish', 'celery']
  },
  {
    id: 'scallops', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seared Hand-Dived Scallops', price: '28.00', desc: 'Tomato & courgette, confit lemon & coriander',
    t: { uk: 'Обсмажені морські гребінці', en: 'Seared scallops', es: 'Vieiras marcadas', it: 'Capesante scottate', de: 'Gebratene Jakobsmuscheln', ru: 'Обжаренные морские гребешки' },
    ing: ['scallops', 'tomato', 'courgette', 'confit-lemon', 'coriander', 'butter', 'olive-oil'],
    a: ['molluscs', 'milk'], m: ['sulphites', 'gluten']
  },
  {
    id: 'courgette-flower', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Stuffed Courgette Flower', price: '14.00', desc: "Goat's cheese & capers, smoked bacon & girolles, tomato & orange sauce",
    t: { uk: 'Фарширована квітка цукіні', en: 'Stuffed courgette flower', es: 'Flor de calabacín rellena', it: 'Fiore di zucca ripieno', de: 'Gefüllte Zucchiniblüte', ru: 'Фаршированный цветок цукини' },
    ing: [['courgette-flower', ['batter', 'wheat-flour']], 'goats-cheese', 'capers', 'smoked-bacon', 'girolles', 'tomato-orange-sauce'],
    a: ['milk', 'gluten'], m: ['eggs', 'sulphites', 'celery']
  },

  /* ------------------------------------------------------------ SALADS -- */
  {
    id: 'wollensky-salad', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Wollensky Salad', price: '14.00', desc: 'Romaine, smoked bacon, marinated mushrooms, tomato & potato croutons, house dressing',
    t: { uk: 'Фірмовий салат «Волленскі»', en: 'The house Wollensky salad', es: 'Ensalada Wollensky de la casa', it: 'Insalata Wollensky della casa', de: 'Hauseigener Wollensky-Salat', ru: 'Фирменный салат «Волленски»' },
    ing: ['romaine', 'bacon-lardons', 'marinated-mushrooms', 'tomato', 'potato-croutons', ['house-dressing', ['vegetable-oil', 'vinegar', 'mustard']]],
    a: ['mustard', 'sulphites'], m: ['eggs', 'milk', 'gluten', 'celery', 'fish']
  },
  {
    id: 'iceberg-wedge', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Iceberg Wedge', price: 'S 13.00 · L 18.00', desc: 'Blue cheese, smoked bacon & tomato',
    t: { uk: 'Клин салату айсберг', en: 'Iceberg lettuce wedge', es: 'Cuña de lechuga iceberg', it: 'Spicchio di lattuga iceberg', de: 'Eisbergsalat-Wedge', ru: 'Клин салата айсберг' },
    ing: ['iceberg', ['blue-cheese-dressing', ['blue-cheese', 'mayonnaise', 'sour-cream']], 'bacon-lardons', 'tomato'],
    a: ['milk', 'eggs', 'sulphites'], m: ['mustard', 'gluten']
  },
  {
    id: 'classic-caesar', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic Caesar', price: '16.00', desc: 'Baby gem, aged Parmesan, Caesar dressing & croutons',
    t: { uk: 'Класичний «Цезар»', en: 'Classic Caesar salad', es: 'Ensalada César clásica', it: 'Insalata Caesar classica', de: 'Klassischer Caesar Salad', ru: 'Классический «Цезарь»' },
    ing: ['baby-gem', 'aged-parmesan', ['caesar-dressing', ['egg-yolk', 'anchovies', 'garlic', 'mustard', 'olive-oil']], 'croutons'],
    a: ['milk', 'eggs', 'fish', 'mustard', 'gluten'], m: ['sulphites']
  },
  {
    id: 'whipped-feta', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Whipped Feta', price: '14.00', desc: 'Peach, cantaloupe & watermelon, tomato & olive-basil dressing',
    t: { uk: 'Збита фета з фруктами', en: 'Whipped feta with fruit', es: 'Feta batido con fruta', it: 'Feta montata con frutta', de: 'Aufgeschlagener Feta mit Obst', ru: 'Взбитая фета с фруктами' },
    ing: ['feta', 'peach', 'cantaloupe', 'watermelon', 'tomato', ['olive-basil-dressing', ['olives', 'basil', 'olive-oil']]],
    a: ['milk'], m: ['sulphites', 'nuts']
  },

  /* ------------------------------------------------------ SUNDAY ROAST -- */
  {
    id: 'sunday-roast', section: 'sunday-roast', menus: ['brunch'],
    name: 'New Zealand Grain-Fed Sirloin — Sunday Roast',
    price: '70.00 · 135.00', meta: '600 g / 2 · 1.2 kg / 4',
    desc: 'Yorkshire pudding, cauliflower cheese, beef-fat roast potatoes, French beans & red wine gravy',
    t: { uk: 'Недільний ростбіф на компанію', en: 'Sunday roast to share', es: 'Asado dominical para compartir', it: 'Arrosto della domenica da condividere', de: 'Sunday Roast zum Teilen', ru: 'Воскресный ростбиф на компанию' },
    ing: ['nz-beef', ['yorkshire-pudding', ['wheat-flour', 'egg', 'milk']], ['cauliflower', ['cheese-sauce', 'milk', 'cheese', 'wheat-flour']], ['roast-potato', ['beef-dripping']], 'french-beans', ['red-wine-gravy', ['red-wine', 'beef-stock']]],
    a: ['gluten', 'eggs', 'milk', 'sulphites'], m: ['celery', 'mustard']
  },

  /* ------------------------------------------------------- MAIN COURSES -- */
  {
    id: 'aubergine-parmigiana', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Aubergine Parmigiana', price: '19.00', desc: 'Courgette fritti, rocket salsa',
    t: { uk: 'Пармідж’яна з баклажанів', en: 'Aubergine parmigiana', es: 'Berenjena a la parmesana', it: 'Parmigiana di melanzane', de: 'Auberginen-Parmigiana', ru: 'Пармиджана из баклажанов' },
    ing: ['aubergine', 'tomato-sauce', 'mozzarella', 'parmesan', ['courgette-fritti', ['wheat-flour']], 'rocket-salsa', 'olive-oil'],
    a: ['milk', 'gluten'], m: ['eggs', 'sulphites'], veg: true
  },
  {
    id: 'black-cod', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chorizo-Crusted Black Cod', price: '32.00', desc: 'Citrus orzo, courgette & squash',
    t: { uk: 'Чорна тріска у скоринці з чорізо', en: 'Black cod in a chorizo crust', es: 'Bacalao negro con costra de chorizo', it: 'Merluzzo nero in crosta di chorizo', de: 'Black Cod in Chorizo-Kruste', ru: 'Чёрная треска в корочке из чоризо' },
    ing: ['black-cod', 'chorizo', ['orzo', ['citrus', 'cream']], 'courgette', 'squash'],
    a: ['fish', 'gluten', 'milk', 'sulphites'], m: ['celery', 'mustard', 'soya']
  },
  {
    id: 'lemon-sole', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Baked Lemon Sole', price: '28.00', desc: 'Fennel, samphire, orange & tomato, parsley sauce',
    t: { uk: 'Запечена лимонна камбала', en: 'Baked lemon sole', es: 'Lenguado limón al horno', it: 'Sogliola limone al forno', de: 'Gebackene Rotzunge', ru: 'Запечённая лимонная камбала' },
    ing: ['lemon-sole', 'fennel', 'samphire', 'orange', 'tomato', ['parsley-sauce', ['butter', 'cream', 'parsley', 'lemon']]],
    a: ['fish', 'milk'], m: ['gluten', 'sulphites', 'celery']
  },
  {
    id: 'butchers-burger', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: "Butcher's Burger", price: '20.00', desc: 'Smoked bacon & mature cheddar, house slaw',
    t: { uk: 'Бургер «М’ясника»', en: "The butcher's burger", es: 'Hamburguesa del carnicero', it: 'Burger del macellaio', de: 'Metzger-Burger', ru: 'Бургер «Мясника»' },
    ing: ['beef-patty', ['bun', ['wheat-flour', 'milk', 'egg']], 'smoked-bacon', 'mature-cheddar', ['house-slaw', ['cabbage', 'carrot', 'mayonnaise']]],
    a: ['gluten', 'milk', 'eggs', 'mustard', 'sulphites'], m: ['sesame', 'soya', 'celery']
  },
  {
    id: 'red-wine-beef', section: 'mains', menus: ['brunch'],
    name: 'Red Wine Braised Beef', price: null, desc: 'Smoked bacon, mushrooms, onion & mashed potato',
    t: { uk: 'Яловичина, тушкована в червоному вині', en: 'Beef braised in red wine', es: 'Ternera estofada en vino tinto', it: 'Manzo brasato al vino rosso', de: 'In Rotwein geschmortes Rind', ru: 'Говядина, тушённая в красном вине' },
    ing: ['braised-beef', 'smoked-bacon', 'button-mushrooms', 'onion', ['mashed-potato', ['butter', 'milk']], 'beef-stock'],
    a: ['sulphites', 'milk'], m: ['celery', 'gluten', 'mustard'], w: ['warn.priceMissing']
  },
  {
    id: 'suffolk-chicken', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Suffolk Chicken Breast', price: '23.00', desc: 'Bourguignon-style, parsnip & coconut purée',
    t: { uk: 'Куряче філе по-бургіньйонськи', en: 'Chicken breast, bourguignon style', es: 'Pechuga de pollo estilo borgoñón', it: 'Petto di pollo alla bourguignon', de: 'Hähnchenbrust nach Bourguignon-Art', ru: 'Куриное филе по-бургиньонски' },
    ing: ['chicken-breast', ['bourguignon', ['red-wine', 'smoked-bacon', 'shallot', 'button-mushrooms', 'stock']], ['parsnip-puree', ['coconut-milk']], 'butter'],
    a: ['sulphites', 'milk'], m: ['celery', 'gluten', 'nuts']
  },
  {
    id: 'lamb-rack', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Roasted Lamb Rack', price: '34.00', desc: 'Miso-glazed swede & lentils, mint-dill sauce',
    t: { uk: 'Каре ягняти', en: 'Roasted rack of lamb', es: 'Costillar de cordero asado', it: 'Carré d’agnello arrosto', de: 'Gebratenes Lammkarree', ru: 'Каре ягнёнка' },
    ing: ['lamb-rack', ['miso-glaze', ['swede', 'miso', 'soy', 'barley']], 'lentils', 'mint-dill-sauce', 'garlic'],
    a: ['soya', 'gluten'], m: ['milk', 'celery', 'sulphites', 'sesame']
  },
  {
    id: 'chicken-fillet-burger', section: 'mains', menus: ['lunch', 'brunch'],
    name: 'Chicken Fillet Burger', price: '17.00', desc: 'S&W mayonnaise, house slaw',
    t: { uk: 'Бургер із курячим філе', en: 'Chicken fillet burger', es: 'Hamburguesa de pollo', it: 'Burger di petto di pollo', de: 'Hähnchenfilet-Burger', ru: 'Бургер с куриным филе' },
    ing: [['chicken-breast', ['wheat-flour', 'breadcrumbs']], ['bun', ['wheat-flour']], ['house-mayo', ['egg', 'mustard']], 'house-slaw'],
    a: ['gluten', 'eggs', 'mustard', 'milk'], m: ['soya', 'sesame', 'celery', 'sulphites']
  },
  {
    id: 'steak-sandwich', section: 'mains', menus: ['lunch', 'brunch'],
    name: 'Signature Steak Sandwich', price: '19.50', desc: 'Cheddar, bacon jam, horseradish aioli & angry onions',
    t: { uk: 'Фірмовий стейк-сендвіч', en: 'The signature steak sandwich', es: 'Sándwich de carne de la casa', it: 'Panino con bistecca della casa', de: 'Signature Steak-Sandwich', ru: 'Фирменный стейк-сэндвич' },
    ing: ['steak', 'cheddar', 'bacon-jam', ['aioli', ['egg', 'garlic', 'horseradish', 'mustard']], 'crispy-onions', 'ciabatta'],
    a: ['gluten', 'milk', 'eggs', 'mustard', 'sulphites'], m: ['soya', 'celery']
  },

  /* --------------------------------------------------------- BRUNCH ------ */
  {
    id: 'sw-muffin', section: 'brunch', menus: ['brunch'],
    name: 'S&W Muffin', price: '6.00 · 12.00', desc: 'Toasted muffin, beef patty, bacon & cheese',
    t: { uk: 'Мафін із яловичою котлетою', en: 'Muffin with a beef patty', es: 'Muffin con hamburguesa de ternera', it: 'Muffin con hamburger di manzo', de: 'Muffin mit Rindfleisch-Patty', ru: 'Маффин с говяжьей котлетой' },
    ing: [['english-muffin', ['wheat-flour', 'milk']], 'beef-patty', 'smoked-bacon', 'cheese'],
    a: ['gluten', 'milk'], m: ['eggs', 'sesame', 'mustard', 'soya', 'sulphites']
  },
  {
    id: 'brunch-yorkshire', section: 'brunch', menus: ['brunch'],
    name: 'Brunch Yorkshire', price: '15.00', desc: 'Steak ends, horseradish, roasted potatoes & caramelised onion',
    t: { uk: 'Йоркширський пудинг зі стейком', en: 'Yorkshire pudding with steak', es: 'Yorkshire pudding con carne', it: 'Yorkshire pudding con bistecca', de: 'Yorkshire Pudding mit Steak', ru: 'Йоркширский пудинг со стейком' },
    ing: [['yorkshire-pudding', ['wheat-flour', 'egg', 'milk']], 'steak-ends', ['horseradish', ['cream']], 'roast-potato', 'caramelised-onion'],
    a: ['gluten', 'eggs', 'milk'], m: ['mustard', 'celery', 'sulphites']
  },
  {
    id: 'smoked-salmon-brunch', section: 'brunch', menus: ['brunch'],
    name: 'Smoked Salmon', price: '16.00', desc: 'Scrambled eggs, avocado & flatbread',
    t: { uk: 'Копчений лосось із яєчнею', en: 'Smoked salmon with scrambled eggs', es: 'Salmón ahumado con huevos revueltos', it: 'Salmone affumicato con uova strapazzate', de: 'Räucherlachs mit Rührei', ru: 'Копчёный лосось с яичницей' },
    ing: ['smoked-salmon', ['scrambled-eggs', ['egg', 'butter']], 'avocado', ['flatbread', ['wheat-flour']]],
    a: ['fish', 'eggs', 'milk', 'gluten'], m: ['sesame', 'soya']
  },
  {
    id: 'loaded-hash', section: 'brunch', menus: ['brunch'],
    name: 'Loaded Hash', price: '12.00', desc: 'Bacon, fried egg, sour cream, Parmesan & jalapeños',
    t: { uk: 'Картопляний хеш із беконом і яйцем', en: 'Potato hash with bacon and egg', es: 'Hash de patata con bacon y huevo', it: 'Hash di patate con pancetta e uovo', de: 'Kartoffel-Hash mit Speck und Ei', ru: 'Картофельный хеш с беконом и яйцом' },
    ing: ['potato-hash', 'smoked-bacon', 'fried-egg', 'sour-cream', 'parmesan', 'jalapeno'],
    a: ['eggs', 'milk'], m: ['gluten', 'sulphites', 'celery']
  },
  {
    id: 'waffle-chicken', section: 'brunch', menus: ['brunch'],
    name: 'Waffle & Fried Spiced Chicken', price: '15.00', desc: 'Nashville hot sauce & maple syrup',
    t: { uk: 'Вафля зі смаженою пряною куркою', en: 'Waffle with fried spiced chicken', es: 'Gofre con pollo frito especiado', it: 'Waffle con pollo fritto speziato', de: 'Waffel mit würzigem Fried Chicken', ru: 'Вафля с жареной пряной курицей' },
    ing: [['waffle', ['wheat-flour', 'egg', 'milk', 'butter']], ['chicken-breast', ['wheat-flour', 'buttermilk']], ['nashville-sauce', ['cayenne', 'butter']], 'maple-syrup'],
    a: ['gluten', 'eggs', 'milk'], m: ['soya', 'mustard', 'celery']
  },
  {
    id: 'french-toast', section: 'brunch', menus: ['brunch'],
    name: 'French Toast', price: '12.00', desc: 'Orange & apple, crème fraîche',
    t: { uk: 'Французький тост', en: 'French toast', es: 'Torrija estilo francés', it: 'French toast', de: 'French Toast / Arme Ritter', ru: 'Французский тост' },
    ing: [['brioche', ['wheat-flour', 'egg', 'milk']], 'egg', 'milk', 'sugar', 'butter', 'orange', 'apple', 'creme-fraiche'],
    a: ['gluten', 'eggs', 'milk'], m: ['nuts', 'sulphites', 'soya']
  },
  {
    id: 'american-pancakes', section: 'brunch', menus: ['brunch'],
    name: 'American Pancakes', price: '12.00', desc: 'Chocolate sauce & fresh berries',
    t: { uk: 'Американські панкейки', en: 'American pancakes', es: 'Tortitas americanas', it: 'Pancake americani', de: 'American Pancakes', ru: 'Американские панкейки' },
    ing: [['pancakes', ['wheat-flour', 'egg', 'milk', 'baking-powder', 'butter']], ['chocolate-sauce', ['cocoa', 'cream', 'soy-lecithin']], 'berries'],
    a: ['gluten', 'eggs', 'milk', 'soya'], m: ['nuts']
  },
  {
    id: 'benedict-classic', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict — Classic or Florentine', price: '6.00 · 12.00', desc: 'Classic with bacon · Florentine with spinach',
    t: { uk: 'Яйця Бенедикт: із беконом або шпинатом', en: 'Eggs Benedict: with bacon or spinach', es: 'Huevos Benedict: con bacon o espinacas', it: 'Uova alla Benedict: con pancetta o spinaci', de: 'Eier Benedict: mit Speck oder Spinat', ru: 'Яйца Бенедикт: с беконом или шпинатом' },
    ing: [['english-muffin', ['wheat-flour']], 'poached-egg', ['hollandaise', ['egg-yolk', 'butter', 'lemon', 'vinegar']], 'smoked-bacon', 'spinach'],
    a: ['gluten', 'eggs', 'milk'], m: ['mustard', 'sulphites']
  },
  {
    id: 'benedict-royale', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict Royale', price: '8.00 · 16.00', desc: 'With smoked salmon',
    t: { uk: 'Яйця Бенедикт із копченим лососем', en: 'Eggs Benedict with smoked salmon', es: 'Huevos Benedict con salmón ahumado', it: 'Uova alla Benedict con salmone affumicato', de: 'Eier Benedict mit Räucherlachs', ru: 'Яйца Бенедикт с копчёным лососем' },
    ing: [['english-muffin', ['wheat-flour']], 'poached-egg', ['hollandaise', ['egg-yolk', 'butter', 'lemon']], 'smoked-salmon'],
    a: ['gluten', 'eggs', 'milk', 'fish'], m: ['mustard', 'sulphites']
  },
  {
    id: 'benedict-lux', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict — Lobster or Wagyu Steak', price: '36.00', desc: 'Your choice of lobster or wagyu',
    t: { uk: 'Яйця Бенедикт із лобстером або вагю', en: 'Eggs Benedict with lobster or wagyu', es: 'Huevos Benedict con bogavante o wagyu', it: 'Uova alla Benedict con astice o wagyu', de: 'Eier Benedict mit Hummer oder Wagyu', ru: 'Яйца Бенедикт с лобстером или вагю' },
    ing: [['english-muffin', ['wheat-flour']], 'poached-egg', ['hollandaise', ['egg-yolk', 'butter']], 'lobster', 'wagyu-beef'],
    a: ['gluten', 'eggs', 'milk', 'crustaceans'], m: ['mustard', 'sulphites'], w: ['warn.lobsterOnly']
  },

  /* ------------------------------------------------ USDA PRIME DRY-AGED -- */
  {
    id: 'kansas-cut', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Bone-In Sirloin Kansas Cut', price: '80.00', meta: '500 g · USDA Prime', desc: '',
    t: { uk: 'Стриплойн на кістці', en: 'Bone-in sirloin', es: 'Lomo bajo con hueso', it: 'Controfiletto con osso', de: 'Roastbeef am Knochen', ru: 'Стриплойн на кости' },
    ing: ['dry-aged-usda', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 't-bone', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic T-Bone', price: '86.00', meta: '550 g · USDA Prime', desc: '',
    t: { uk: 'Класичний ті-бон', en: 'Classic T-bone', es: 'T-bone clásico', it: 'T-bone classica', de: 'Klassisches T-Bone', ru: 'Классический ти-бон' },
    ing: ['dry-aged-usda', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'bone-in-ribeye', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Signature Bone-In Rib-Eye', price: '98.00', meta: '600 g · USDA Prime', desc: '',
    t: { uk: 'Фірмовий рибай на кістці', en: 'Signature bone-in rib-eye', es: 'Chuletón con hueso de la casa', it: 'Costata con osso della casa', de: 'Signature Rib-Eye am Knochen', ru: 'Фирменный рибай на кости' },
    ing: ['dry-aged-usda', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'cote-de-boeuf', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Côte de Boeuf', price: '155.00', meta: '850 g · USDA Prime', desc: '',
    t: { uk: 'Кот-де-бьоф на двох', en: 'Côte de boeuf for two', es: 'Côte de boeuf para dos', it: 'Côte de boeuf per due', de: 'Côte de Boeuf für zwei', ru: 'Кот-де-бёф на двоих' },
    ing: ['dry-aged-usda', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },

  /* ------------------------------------------------------------ FILLETS -- */
  {
    id: 'irish-fillet', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Premium Irish Fillet', price: '49.50', meta: '225 g', desc: '',
    t: { uk: 'Ірландська яловича вирізка', en: 'Irish beef fillet', es: 'Solomillo de ternera irlandesa', it: 'Filetto di manzo irlandese', de: 'Irisches Rinderfilet', ru: 'Ирландская говяжья вырезка' },
    ing: ['beef-fillet', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'usda-fillet', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'American USDA Fillet', price: '79.00', meta: '280 g', desc: '',
    t: { uk: 'Американська яловича вирізка', en: 'American beef fillet', es: 'Solomillo de ternera americana', it: 'Filetto di manzo americano', de: 'Amerikanisches Rinderfilet', ru: 'Американская говяжья вырезка' },
    ing: ['usda-fillet', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'chateaubriand', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Premium Irish Châteaubriand', price: '99.00', meta: '600 g', desc: '',
    t: { uk: 'Шатобріан на двох', en: 'Châteaubriand for two', es: 'Chateaubriand para dos', it: 'Châteaubriand per due', de: 'Châteaubriand für zwei', ru: 'Шатобриан на двоих' },
    ing: ['centre-fillet', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },

  /* ----------------------------------------------------------- SIRLOINS -- */
  {
    id: 'nz-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'New Zealand Grain-Fed Sirloin', price: '32.00', meta: '250 g', desc: '',
    t: { uk: 'Новозеландський стриплойн', en: 'New Zealand sirloin', es: 'Lomo bajo de Nueva Zelanda', it: 'Controfiletto neozelandese', de: 'Neuseeländisches Roastbeef', ru: 'Новозеландский стриплойн' },
    ing: ['nz-beef', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'irish-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: '28-Day Dry-Aged Irish Sirloin', price: '45.00', meta: '340 g', desc: '',
    t: { uk: 'Ірландський стриплойн, 28 днів визрівання', en: 'Irish sirloin, 28 days dry-aged', es: 'Lomo bajo irlandés, 28 días de maduración', it: 'Controfiletto irlandese, 28 giorni di frollatura', de: 'Irisches Roastbeef, 28 Tage gereift', ru: 'Ирландский стриплойн, 28 дней вызревания' },
    ing: ['dry-aged-irish', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'usda-prime-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'American USDA Prime Sirloin', price: '69.00', meta: '400 g', desc: '',
    t: { uk: 'Американський стриплойн USDA Prime', en: 'American USDA Prime sirloin', es: 'Lomo bajo americano USDA Prime', it: 'Controfiletto americano USDA Prime', de: 'Amerikanisches USDA-Prime-Roastbeef', ru: 'Американский стриплойн USDA Prime' },
    ing: ['usda-prime-beef', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'wagyu-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Snake River Farms Wagyu Sirloin', price: '110.00 · 200.00', meta: '300 g · 600 g', desc: '',
    t: { uk: 'Стриплойн вагю', en: 'Wagyu sirloin', es: 'Lomo bajo wagyu', it: 'Controfiletto wagyu', de: 'Wagyu-Roastbeef', ru: 'Стриплойн вагю' },
    ing: ['wagyu-beef', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },

  /* ----------------------------------------------------------- RIB-EYES -- */
  {
    id: 'irish-ribeye', section: 'steak-ribeyes', menus: ['lunch', 'dinner', 'brunch'],
    name: '28-Day Dry-Aged Irish Rib-Eye', price: '54.00', meta: '340 g', desc: '',
    t: { uk: 'Ірландський рибай, 28 днів визрівання', en: 'Irish rib-eye, 28 days dry-aged', es: 'Chuletón irlandés, 28 días de maduración', it: 'Costata irlandese, 28 giorni di frollatura', de: 'Irisches Rib-Eye, 28 Tage gereift', ru: 'Ирландский рибай, 28 дней вызревания' },
    ing: ['dry-aged-irish', 'salt', 'black-pepper'], a: [], m: ['milk'], w: ['warn.steak']
  },
  {
    id: 'tomahawk', section: 'steak-ribeyes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Swinging 28-Day Dry-Aged Irish Tomahawk', price: '135.00', meta: '900 g',
    desc: 'Skin-on roasted heritage potatoes, rosemary & garlic',
    t: { uk: 'Ірландський томагавк на компанію', en: 'Irish tomahawk to share', es: 'Tomahawk irlandés para compartir', it: 'Tomahawk irlandese da condividere', de: 'Irisches Tomahawk zum Teilen', ru: 'Ирландский томагавк на компанию' },
    ing: ['dry-aged-irish', 'skin-on-potato', 'rosemary', 'garlic', 'butter'], a: [], m: ['milk'], w: ['warn.steak']
  },

  /* --------------------------------------------------- STEAK ADDITIONS --- */
  {
    id: 'peppercorn-sauce', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Peppercorn Sauce', price: '5.00', desc: '',
    t: { uk: 'Перцевий соус', en: 'Peppercorn sauce', es: 'Salsa de pimienta', it: 'Salsa al pepe', de: 'Pfeffersauce', ru: 'Перечный соус' },
    ing: ['cream', 'green-peppercorns', 'brandy', 'beef-stock'],
    a: ['milk', 'sulphites'], m: ['celery', 'gluten']
  },
  {
    id: 'bearnaise', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Béarnaise Sauce', price: '5.00', desc: '',
    t: { uk: 'Соус беарнез', en: 'Béarnaise sauce', es: 'Salsa bearnesa', it: 'Salsa bernese', de: 'Sauce béarnaise', ru: 'Соус беарнез' },
    ing: ['egg-yolk', 'butter', 'tarragon', 'wine-vinegar', 'shallot'],
    a: ['eggs', 'milk', 'sulphites'], m: []
  },
  {
    id: 'porcini-cream', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Porcini Cream Sauce', price: '5.00', desc: '',
    t: { uk: 'Вершковий соус із білими грибами', en: 'Porcini cream sauce', es: 'Salsa cremosa de boletus', it: 'Salsa di porcini alla panna', de: 'Steinpilz-Rahmsauce', ru: 'Сливочный соус с белыми грибами' },
    ing: ['porcini', 'cream', 'shallot', 'garlic'],
    a: ['milk'], m: ['sulphites', 'celery', 'gluten']
  },
  {
    id: 'garlic-butter', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Garlic Butter', price: '3.50', desc: '',
    t: { uk: 'Часникове масло', en: 'Garlic butter', es: 'Mantequilla de ajo', it: 'Burro all’aglio', de: 'Knoblauchbutter', ru: 'Чесночное масло' },
    ing: ['butter', 'garlic', 'parsley'], a: ['milk'], m: []
  },
  {
    id: 'chimichurri', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chimichurri Sauce', price: '4.00', desc: '',
    t: { uk: 'Соус чимічурі', en: 'Chimichurri sauce', es: 'Salsa chimichurri', it: 'Salsa chimichurri', de: 'Chimichurri-Sauce', ru: 'Соус чимичурри' },
    ing: ['parsley', 'oregano', 'garlic', 'vinegar', 'olive-oil', 'chilli'],
    a: ['sulphites'], m: [], veg: true
  },
  {
    id: 'red-wine-jus', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Red Wine Jus', price: '4.50', desc: '',
    t: { uk: 'Соус на червоному вині', en: 'Red wine jus', es: 'Jugo de vino tinto', it: 'Jus al vino rosso', de: 'Rotweinjus', ru: 'Соус на красном вине' },
    ing: ['red-wine', 'beef-stock', 'shallot'],
    a: ['sulphites'], m: ['celery', 'gluten', 'milk']
  },
  {
    id: 'half-lobster', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Grilled Half Lobster', price: '36.00', desc: '',
    t: { uk: 'Половина лобстера на грилі', en: 'Grilled half lobster', es: 'Medio bogavante a la parrilla', it: 'Mezzo astice alla griglia', de: 'Gegrillter halber Hummer', ru: 'Половина лобстера на гриле' },
    ing: ['lobster', 'butter', 'garlic'], a: ['crustaceans', 'milk'], m: ['sulphites']
  },
  {
    id: 'au-poivre', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Au Poivre Style', price: '6.00', desc: 'Peppercorn crust & sauce',
    t: { uk: 'У стилі «о-пуавр»', en: 'Au poivre style', es: 'Al estilo au poivre', it: 'Stile au poivre', de: 'Au-poivre-Art', ru: 'В стиле «о-пуавр»' },
    ing: ['peppercorn-crust', ['peppercorn-sauce', ['cream', 'brandy', 'beef-stock']]],
    a: ['milk', 'sulphites'], m: ['celery', 'gluten']
  },
  {
    id: 'cajun-style', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cajun Style', price: '5.00', desc: 'Cajun dry-rub & oil',
    t: { uk: 'У стилі кейджун', en: 'Cajun style', es: 'Al estilo cajún', it: 'Stile cajun', de: 'Cajun-Art', ru: 'В стиле каджун' },
    ing: ['cajun-spice', 'vegetable-oil'], a: [], m: ['celery', 'mustard', 'gluten']
  },
  {
    id: 'gorgonzola-crusted', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Gorgonzola Crusted', price: '12.00', desc: 'Bacon & spring onions',
    t: { uk: 'Скоринка з горгонзоли', en: 'Gorgonzola crust', es: 'Costra de gorgonzola', it: 'Crosta di gorgonzola', de: 'Gorgonzola-Kruste', ru: 'Корочка из горгонзолы' },
    ing: ['gorgonzola', 'smoked-bacon', 'spring-onion'], a: ['milk'], m: ['sulphites', 'gluten']
  },

  /* ---------------------------------------------------------- SHELLFISH -- */
  {
    id: 'seafood-tower', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seafood Tower', price: '60.00 / person',
    desc: 'Lobster, oysters, octopus salad, jumbo shrimp & lump crab, with cocktail sauce, mustard sauce, ginger dressing & mignonette',
    t: { uk: 'Вежа з морепродуктів', en: 'Seafood tower', es: 'Torre de mariscos', it: 'Torre di frutti di mare', de: 'Meeresfrüchte-Etagere', ru: 'Башня из морепродуктов' },
    ing: ['lobster', 'oysters', 'octopus-salad', 'jumbo-shrimp', 'crab-meat', ['cocktail-sauce', ['tomato', 'horseradish', 'worcestershire']], ['mustard-sauce', ['cognac', 'dijon-mustard']], ['ginger-dressing', ['soy-sauce']], ['mignonette', ['wine-vinegar', 'shallot']]],
    a: ['crustaceans', 'molluscs', 'fish', 'mustard', 'soya', 'sulphites'],
    m: ['eggs', 'gluten', 'celery', 'sesame'], w: ['warn.oystersRaw']
  },
  {
    id: 'poached-lobster', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Poached Lobster', price: 'half 36.00 · whole 72.00', desc: 'Ginger dressing & cocktail sauce, served cold',
    t: { uk: 'Припущений лобстер, подається холодним', en: 'Poached lobster, served cold', es: 'Bogavante escalfado, se sirve frío', it: 'Astice in bianco, servito freddo', de: 'Pochierter Hummer, kalt serviert', ru: 'Припущенный лобстер, подаётся холодным' },
    ing: ['lobster', ['ginger-dressing', ['ginger', 'soy-sauce', 'vegetable-oil']], ['cocktail-sauce', ['tomato', 'horseradish', 'worcestershire']]],
    a: ['crustaceans', 'soya', 'gluten', 'fish', 'sulphites'], m: ['eggs', 'sesame', 'celery']
  },
  {
    id: 'rock-oysters', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Rock Oysters', price: 'six 24.00 · twelve 48.00', desc: 'Cocktail sauce & mignonette',
    t: { uk: 'Устриці', en: 'Rock oysters', es: 'Ostras', it: 'Ostriche', de: 'Felsenaustern', ru: 'Устрицы' },
    ing: ['oysters', ['cocktail-sauce', ['tomato', 'horseradish', 'worcestershire']], ['mignonette', ['wine-vinegar', 'shallot', 'black-pepper']]],
    a: ['molluscs', 'sulphites', 'fish'], m: ['gluten', 'celery'], w: ['warn.servedRaw']
  },

  /* ------------------------------------------------------ SIDES: POTATO -- */
  {
    id: 'french-fries', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'French Fries', price: '7.00', desc: '',
    t: { uk: 'Картопля фрі', en: 'French fries', es: 'Patatas fritas', it: 'Patatine fritte', de: 'Pommes frites', ru: 'Картофель фри' },
    ing: ['potato', 'vegetable-oil', 'salt'],
    a: [], m: ['gluten', 'sulphites', 'milk'], veg: true, w: ['warn.sharedFryer']
  },
  {
    id: 'cajun-fries', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cajun Fries', price: '7.00', desc: '',
    t: { uk: 'Картопля фрі кейджун', en: 'Cajun fries', es: 'Patatas fritas cajún', it: 'Patatine fritte cajun', de: 'Cajun-Pommes', ru: 'Картофель фри каджун' },
    ing: ['potato', 'cajun-spice', 'vegetable-oil'],
    a: [], m: ['gluten', 'celery', 'mustard', 'sulphites'], veg: true, w: ['warn.sharedFryer']
  },
  {
    id: 'baked-sweet-potato', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Baked Sweet Potato', price: '9.00', desc: 'Pomegranate & aubergine salsa, chilli dressing',
    t: { uk: 'Запечений батат', en: 'Baked sweet potato', es: 'Boniato asado', it: 'Patata dolce al forno', de: 'Gebackene Süßkartoffel', ru: 'Запечённый батат' },
    ing: ['sweet-potato', ['aubergine-salsa', ['pomegranate', 'aubergine']], 'chilli-dressing', 'olive-oil'],
    a: [], m: ['sulphites', 'sesame', 'milk'], veg: true
  },
  {
    id: 'whipped-potatoes', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Whipped Potatoes', price: '9.50', desc: 'Basil oil & chives',
    t: { uk: 'Збите картопляне пюре', en: 'Whipped potatoes', es: 'Puré de patata batido', it: 'Purè di patate montato', de: 'Aufgeschlagenes Kartoffelpüree', ru: 'Взбитое картофельное пюре' },
    ing: ['potato', 'butter', 'cream', 'basil-oil', 'chives'],
    a: ['milk'], m: [], veg: true
  },
  {
    id: 'heritage-potatoes', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Roasted Heritage Potatoes', price: '9.00', desc: 'Skin-on potatoes, rosemary & garlic',
    t: { uk: 'Запечена молода картопля', en: 'Roasted heritage potatoes', es: 'Patatas antiguas asadas', it: 'Patate antiche arrosto', de: 'Geröstete Heritage-Kartoffeln', ru: 'Запечённый молодой картофель' },
    ing: ['skin-on-potato', 'rosemary', 'garlic', 'olive-oil'],
    a: [], m: ['milk'], veg: true
  },

  /* --------------------------------------------------- SIDES: VEGETABLES -- */
  {
    id: 'spinach', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Spinach', price: '10.00', desc: 'Sautéed or steamed',
    t: { uk: 'Шпинат — соте або на парі', en: 'Spinach — sautéed or steamed', es: 'Espinacas — salteadas o al vapor', it: 'Spinaci — saltati o al vapore', de: 'Spinat — sautiert oder gedämpft', ru: 'Шпинат — соте или на пару' },
    ing: ['spinach', 'butter', 'garlic'],
    a: [], m: ['milk'], veg: true, w: ['warn.steamedOption']
  },
  {
    id: 'creamed-spinach', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Creamed Spinach', price: '14.00', desc: '',
    t: { uk: 'Шпинат у вершках', en: 'Creamed spinach', es: 'Espinacas a la crema', it: 'Spinaci alla panna', de: 'Rahmspinat', ru: 'Шпинат в сливках' },
    ing: ['spinach', 'cream', 'butter', 'roux', 'nutmeg'],
    a: ['milk', 'gluten'], m: ['celery'], veg: true
  },
  {
    id: 'baby-courgette', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Grilled Baby Courgette', price: '10.00', desc: 'Sun-dried tomato hummus, toasted almonds',
    t: { uk: 'Молоді цукіні на грилі', en: 'Grilled baby courgettes', es: 'Calabacines baby a la parrilla', it: 'Zucchine baby alla griglia', de: 'Gegrillte Baby-Zucchini', ru: 'Молодые цукини на гриле' },
    ing: ['baby-courgette', ['hummus', ['chickpeas', 'tahini', 'sun-dried-tomato']], 'toasted-almonds', 'olive-oil'],
    a: ['sesame', 'nuts', 'sulphites'], m: [], veg: true
  },
  {
    id: 'pan-fried-mushrooms', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Pan-Fried Mushrooms', price: '9.00', desc: 'Garlic butter',
    t: { uk: 'Смажені гриби', en: 'Pan-fried mushrooms', es: 'Setas salteadas', it: 'Funghi saltati in padella', de: 'Gebratene Pilze', ru: 'Жареные грибы' },
    ing: ['mushrooms', 'butter', 'garlic', 'parsley'],
    a: ['milk'], m: ['gluten'], veg: true
  },
  {
    id: 'seasonal-vegetables', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seasonal Vegetables', price: '9.00', desc: '',
    t: { uk: 'Сезонні овочі', en: 'Seasonal vegetables', es: 'Verduras de temporada', it: 'Verdure di stagione', de: 'Saisonales Gemüse', ru: 'Сезонные овощи' },
    ing: ['seasonal-veg', 'butter'], a: [], m: ['milk'], veg: true
  },
  {
    id: 'tenderstem-broccoli', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Sautéed Tenderstem Broccoli', price: '10.00', desc: 'Roasted pepper & puffed wild rice, XO sauce',
    t: { uk: 'Броколіні соте з соусом XO', en: 'Sautéed tenderstem broccoli with XO sauce', es: 'Bimi salteado con salsa XO', it: 'Broccolini saltati con salsa XO', de: 'Sautierter Broccolini mit XO-Sauce', ru: 'Брокколини соте с соусом XO' },
    ing: ['broccolini', 'roasted-pepper', 'puffed-wild-rice', ['xo-sauce', ['dried-shrimp', 'dried-scallop', 'ham', 'chilli', 'soy']]],
    a: ['crustaceans', 'molluscs', 'soya', 'fish', 'gluten'], m: ['sesame', 'sulphites']
  },

  /* ----------------------------------------------------- SIDES: CLASSICS -- */
  {
    id: 'mac-cheese', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Truffled Mac & Cheese', price: '14.00', desc: '',
    t: { uk: 'Макарони із сиром і трюфелем', en: 'Truffled macaroni cheese', es: 'Macarrones con queso y trufa', it: 'Maccheroni al formaggio e tartufo', de: 'Mac & Cheese mit Trüffel', ru: 'Макароны с сыром и трюфелем' },
    ing: ['macaroni', ['cheese-sauce', ['milk', 'cream', 'cheese', 'wheat-flour']], 'truffle-oil', 'breadcrumbs'],
    a: ['gluten', 'milk'], m: ['eggs', 'mustard'], veg: true
  },
  {
    id: 'hash-brown', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Hash Brown', price: '12.00', desc: '',
    t: { uk: 'Картопляний хеш-браун', en: 'Hash brown', es: 'Hash brown de patata', it: 'Hash brown di patate', de: 'Hash Brown', ru: 'Картофельный хеш-браун' },
    ing: ['potato', 'onion', 'vegetable-oil', 'salt'],
    a: [], m: ['gluten', 'milk', 'eggs'], veg: true, w: ['warn.sharedFryer']
  },
  {
    id: 'onion-rings', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Beer-Battered Onion Rings', price: '9.00', desc: '',
    t: { uk: 'Цибулеві кільця у пивному клярі', en: 'Beer-battered onion rings', es: 'Aros de cebolla rebozados en cerveza', it: 'Anelli di cipolla in pastella di birra', de: 'Zwiebelringe im Bierteig', ru: 'Луковые кольца в пивном кляре' },
    ing: ['onion', ['beer-batter', ['wheat-flour', 'beer']], 'vegetable-oil'],
    a: ['gluten', 'sulphites'], m: ['milk', 'eggs'], veg: true
  },

  /* -------------------------------------------------- SIDES: SIDE SALADS -- */
  {
    id: 'garden-salad', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Mixed Garden Salad', price: '6.00', desc: '',
    t: { uk: 'Салат-мікс', en: 'Mixed garden salad', es: 'Ensalada mixta', it: 'Insalata mista', de: 'Gemischter Blattsalat', ru: 'Салат-микс' },
    ing: ['mixed-leaves', ['house-dressing', ['vegetable-oil', 'vinegar', 'mustard']]],
    a: ['mustard', 'sulphites'], m: [], veg: true
  },
  {
    id: 'tomato-onion', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Sliced Tomato & Sweet Onion', price: '6.00', desc: '',
    t: { uk: 'Томати зі солодкою цибулею', en: 'Sliced tomato with sweet onion', es: 'Tomate en rodajas con cebolla dulce', it: 'Pomodoro a fette con cipolla dolce', de: 'Tomatenscheiben mit süßer Zwiebel', ru: 'Томаты со сладким луком' },
    ing: ['tomato', 'sweet-onion', 'olive-oil', 'vinegar'],
    a: ['sulphites'], m: ['mustard'], veg: true
  },
  {
    id: 'caesar-side', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic Caesar (side)', price: '7.00', desc: 'Baby gem lettuce, aged Parmesan, Caesar dressing & croutons',
    t: { uk: 'Класичний «Цезар» — гарнір', en: 'Classic Caesar — side portion', es: 'César clásica — guarnición', it: 'Caesar classica — porzione di contorno', de: 'Klassischer Caesar — Beilagenportion', ru: 'Классический «Цезарь» — гарнир' },
    ing: ['baby-gem', 'aged-parmesan', ['caesar-dressing', ['egg-yolk', 'anchovies', 'garlic', 'mustard']], 'croutons'],
    a: ['milk', 'eggs', 'fish', 'mustard', 'gluten'], m: ['sulphites']
  }
];

/* -------------------------------------------------------------------------
   Порядок розділів у кожному меню
   ------------------------------------------------------------------------- */
const MENU_ORDER = {
  lunch:  ['starters', 'salads', 'mains', 'steak-dryaged', 'steak-fillets', 'steak-sirloins', 'steak-ribeyes',
           'additions', 'shellfish', 'side-potatoes', 'side-vegetables', 'side-classics', 'side-salads', 'desserts'],
  dinner: ['starters', 'salads', 'mains', 'steak-dryaged', 'steak-fillets', 'steak-sirloins', 'steak-ribeyes',
           'additions', 'shellfish', 'side-potatoes', 'side-vegetables', 'side-classics', 'side-salads', 'desserts'],
  brunch: ['brunch', 'starters', 'salads', 'sunday-roast', 'mains', 'steak-dryaged', 'steak-fillets',
           'steak-sirloins', 'steak-ribeyes', 'additions', 'shellfish', 'side-potatoes', 'side-vegetables',
           'side-classics', 'side-salads', 'desserts']
};

/* -------------------------------------------------------------------------
   Сет-меню
   ------------------------------------------------------------------------- */
const SET_MENUS = {
  lunch: {
    titleKey: 'set.title', hoursKey: 'set.hours.main',
    courses: [
      { key: 'course.starters', items: ['split-pea-soup', 'burrata', 'salmon-tataki', 'carpaccio'] },
      { key: 'course.mains', items: ['aubergine-parmigiana', 'lemon-sole', 'red-wine-beef', 'suffolk-chicken'], extraKey: 'set.supplement' },
      { key: 'course.desserts', items: ['panna-cotta', 'banana-cake', 'ice-cream'] }
    ]
  },
  dinner: {
    titleKey: 'set.title', hoursKey: 'set.hours.main',
    courses: [
      { key: 'course.starters', items: ['split-pea-soup', 'burrata', 'salmon-tataki', 'carpaccio'] },
      { key: 'course.mains', items: ['aubergine-parmigiana', 'lemon-sole', 'red-wine-beef', 'suffolk-chicken'], extraKey: 'set.supplement' },
      { key: 'course.desserts', items: ['panna-cotta', 'banana-cake', 'ice-cream'] }
    ]
  },
  brunch: {
    titleKey: 'set.brunch', hoursKey: 'set.hours.brunch',
    courses: [
      { key: 'course.starters', items: ['loaded-hash', 'sw-muffin', 'smoked-salmon-brunch'] },
      { key: 'course.mains', items: ['brunch-yorkshire', 'waffle-chicken', 'lemon-sole', 'red-wine-beef'], extraKey: 'set.supplement' },
      { key: 'course.desserts', items: ['panna-cotta', 'american-pancakes', 'french-toast', 'ice-cream'] }
    ]
  }
};
