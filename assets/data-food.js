/* ==========================================================================
   Страви — розшифровка складу та алергенів
   a[] — алергени, заявлені/очевидні зі складу страви
   m[] — «може містити»: типові компоненти рецептури, крос-контамінація,
          спільний фритюр/гриль. Завжди перепитуй кухню.
   ========================================================================== */

const DISHES = [

  /* ---------------------------------------------------------- STARTERS -- */
  {
    id: 'bread-butter', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Bread & Butter', ua: 'Хліб з вершковим маслом', price: '5.25',
    desc: '',
    ing: ['Хліб: пшеничне борошно, вода, дріжджі, сіль', 'Вершкове масло', 'Морська сіль'],
    a: ['gluten', 'milk'],
    m: ['sesame', 'eggs', 'soya', 'nuts']
  },
  {
    id: 'split-pea-soup', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: "Wollensky's Famous Split Pea Soup", ua: 'Фірмовий суп із колотого гороху', price: '9.75',
    desc: 'Bacon & croutons',
    ing: ['Колотий жовтий горох', 'Копчений бекон', 'Цибуля, морква, селера', 'Бульйон', 'Пшеничні грінки (croutons)', 'Вершкове масло'],
    a: ['gluten', 'celery', 'milk', 'sulphites'],
    m: ['soya', 'mustard']
  },
  {
    id: 'burrata', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Burrata', ua: 'Бурата', price: '15.00',
    desc: 'Green gazpacho, radish & green mango',
    ing: ['Бурата (коров’яче молоко, вершки)', 'Зелений гаспачо: огірок, зелений перець, зелене яблуко, часник, оливкова олія, оцет', 'Редис', 'Зелене манго', 'Оливкова олія'],
    a: ['milk', 'sulphites'],
    m: ['gluten', 'nuts', 'celery']
  },
  {
    id: 'bbq-ribs', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'South Carolina BBQ Pork Ribs', ua: 'Свинячі реберця BBQ у стилі Південної Кароліни', price: '16.00',
    desc: 'Apple & celeriac slaw',
    ing: ['Свинячі реберця', 'BBQ-соус South Carolina: гірчиця, оцет, цукор, томат, спеції', 'Слоу: яблуко, корінь селери, майонез (яйця)', 'Спеції'],
    a: ['mustard', 'celery', 'eggs', 'sulphites'],
    m: ['gluten', 'soya', 'milk']
  },
  {
    id: 'steak-tartare', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Steak Tartare', ua: 'Тартар зі стейка', price: '19.00',
    desc: 'Fillet, bone marrow & crostini',
    ing: ['Сира яловича вирізка', 'Кістковий мозок', 'Каперси, корнішони, шалот', 'Діжонська гірчиця', 'Яєчний жовток', 'Вустерський соус (анчоуси)', 'Табаско', 'Кростіні (пшеничний хліб)'],
    a: ['eggs', 'mustard', 'fish', 'gluten', 'sulphites'],
    m: ['celery', 'soya', 'milk'],
    warn: 'Подається сирим.'
  },
  {
    id: 'salmon-tataki', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Salmon Tataki', ua: 'Татакі з лосося', price: '16.00',
    desc: 'Avocado & compressed cucumber, chilli & ginger dressing',
    ing: ['Лосось (обпалений зовні, сирий усередині)', 'Авокадо', 'Пресований огірок', 'Заправка: чилі, імбир, соєвий соус, рисовий оцет, кунжутна олія, лайм'],
    a: ['fish', 'soya', 'sesame', 'gluten', 'sulphites'],
    m: ['molluscs'],
    warn: 'Подається практично сирим.'
  },
  {
    id: 'carpaccio', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'USDA Prime Sirloin Carpaccio', ua: 'Карпачо зі стриплойна USDA Prime', price: '18.00',
    desc: 'Chestnut mushroom & Pecorino, tarragon & truffle dressing',
    ing: ['Сирий яловичий стриплойн USDA Prime', 'Каштанові печериці', 'Пекоріно (овече молоко)', 'Заправка: естрагон, трюфельна олія, оливкова олія, лимон'],
    a: ['milk'],
    m: ['eggs', 'mustard', 'sulphites', 'gluten'],
    warn: 'Подається сирим.'
  },
  {
    id: 'chilli-garlic-shrimp', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chilli & Garlic Shrimp', ua: 'Креветки з чилі та часником', price: '18.50',
    desc: 'Pea purée, XO sauce',
    ing: ['Креветки', 'Часник, чилі', 'Пюре зі зеленого горошку (вершкове масло)', 'Соус XO: сушені креветки, в’ялений гребінець, шинка, чилі, соя'],
    a: ['crustaceans', 'molluscs', 'milk', 'soya', 'fish', 'gluten'],
    m: ['sesame', 'sulphites']
  },
  {
    id: 'shrimp-cocktail', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: "'S&W Style' Shrimp Cocktail", ua: 'Креветковий коктейль «S&W»', price: '18.50',
    desc: 'Ginger dressing & cocktail sauce',
    ing: ['Варені креветки', 'Коктейльний соус: томат, хрін, лимон, вустерський соус (анчоуси)', 'Імбирна заправка: імбир, соєвий соус, олія'],
    a: ['crustaceans', 'fish', 'soya', 'gluten', 'sulphites'],
    m: ['eggs', 'mustard', 'celery', 'sesame']
  },
  {
    id: 'crab-meat', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Jumbo Lump Crab Meat', ua: 'Добірне м’ясо краба', price: '25.00',
    desc: 'Cognac & Dijon mustard sauce',
    ing: ['М’ясо краба (jumbo lump)', 'Соус: коньяк, діжонська гірчиця, вершки/майонез, лимон'],
    a: ['crustaceans', 'mustard', 'eggs', 'milk', 'sulphites'],
    m: ['fish', 'celery']
  },
  {
    id: 'scallops', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seared Hand-Dived Scallops', ua: 'Обсмажені гребінці ручного вилову', price: '28.00',
    desc: 'Tomato & courgette, confit lemon & coriander',
    ing: ['Морські гребінці', 'Томати, цукіні', 'Конфітований лимон', 'Коріандр', 'Вершкове масло, оливкова олія'],
    a: ['molluscs', 'milk'],
    m: ['sulphites', 'gluten']
  },
  {
    id: 'courgette-flower', section: 'starters', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Stuffed Courgette Flower', ua: 'Фарширована квітка цукіні', price: '14.00',
    desc: "Goat's cheese & capers, smoked bacon & girolles, tomato & orange sauce",
    ing: ['Квітка цукіні у клярі (пшеничне борошно)', 'Козячий сир', 'Каперси', 'Копчений бекон', 'Гриби лисички', 'Томатно-апельсиновий соус'],
    a: ['milk', 'gluten'],
    m: ['eggs', 'sulphites', 'celery']
  },

  /* ------------------------------------------------------------ SALADS -- */
  {
    id: 'wollensky-salad', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Wollensky Salad', ua: 'Салат «Волленскі»', price: '14.00',
    desc: 'Romaine, smoked bacon, marinated mushrooms, tomato & potato croutons, house dressing',
    ing: ['Салат ромен', 'Копчений бекон (лардони)', 'Мариновані гриби', 'Томати', 'Картопляні крутони', 'Фірмова заправка: олія, оцет, гірчиця'],
    a: ['mustard', 'sulphites'],
    m: ['eggs', 'milk', 'gluten', 'celery', 'fish']
  },
  {
    id: 'iceberg-wedge', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Iceberg Wedge', ua: 'Клин айсберга', price: 'S 13.00 · L 18.00',
    desc: 'Blue cheese, smoked bacon & tomato',
    ing: ['Салат айсберг', 'Соус із блакитного сиру: блакитний сир, майонез, сметана', 'Копчений бекон', 'Томати'],
    a: ['milk', 'eggs', 'sulphites'],
    m: ['mustard', 'gluten']
  },
  {
    id: 'classic-caesar', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic Caesar', ua: 'Класичний «Цезар»', price: '16.00',
    desc: 'Baby gem, aged Parmesan, Caesar dressing & croutons',
    ing: ['Салат бебі-джем', 'Витриманий пармезан', 'Соус «Цезар»: яєчний жовток, анчоуси, часник, гірчиця, олія', 'Пшеничні грінки'],
    a: ['milk', 'eggs', 'fish', 'mustard', 'gluten'],
    m: ['sulphites']
  },
  {
    id: 'whipped-feta', section: 'salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Whipped Feta', ua: 'Збита фета', price: '14.00',
    desc: 'Peach, cantaloupe & watermelon, tomato & olive-basil dressing',
    ing: ['Збита фета (овече/козяче молоко)', 'Персик, диня канталупа, кавун', 'Томати', 'Заправка з оливок і базиліка, оливкова олія'],
    a: ['milk'],
    m: ['sulphites', 'nuts']
  },

  /* --------------------------------------------------- SUNDAY ROAST ----- */
  {
    id: 'sunday-roast', section: 'sunday-roast', menus: ['brunch'],
    name: 'New Zealand Grain-Fed Sirloin — Sunday Roast', ua: 'Недільний ростбіф: новозеландський стриплойн',
    price: '70.00 · 135.00', meta: '600 г на двох · 1,2 кг на чотирьох',
    desc: 'Yorkshire pudding, cauliflower cheese, beef-fat roast potatoes, French beans & red wine gravy',
    ing: ['Новозеландський стриплойн зернової відгодівлі', 'Йоркширський пудинг: пшеничне борошно, яйця, молоко', 'Цвітна капуста у сирному соусі: молоко, сир, борошно', 'Картопля, запечена на яловичому жирі', 'Зелена квасоля', 'Підлива на червоному вині'],
    a: ['gluten', 'eggs', 'milk', 'sulphites'],
    m: ['celery', 'mustard']
  },

  /* ------------------------------------------------------- MAIN COURSES -- */
  {
    id: 'aubergine-parmigiana', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Aubergine Parmigiana', ua: 'Пармідж’яна з баклажанів', price: '19.00',
    desc: 'Courgette fritti, rocket salsa',
    ing: ['Баклажан', 'Томатний соус', 'Моцарела, пармезан', 'Цукіні фрітті (пшеничне борошно)', 'Сальса з рукколи, оливкова олія'],
    a: ['milk', 'gluten'],
    m: ['eggs', 'sulphites'],
    veg: true
  },
  {
    id: 'black-cod', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chorizo-Crusted Black Cod', ua: 'Чорна тріска у скоринці з чорізо', price: '32.00',
    desc: 'Citrus orzo, courgette & squash',
    ing: ['Чорна тріска', 'Чорізо: свинина, паприка, часник', 'Орзо (пшенична паста), вершки', 'Цитрусові', 'Цукіні, гарбуз'],
    a: ['fish', 'gluten', 'milk', 'sulphites'],
    m: ['celery', 'mustard', 'soya']
  },
  {
    id: 'lemon-sole', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Baked Lemon Sole', ua: 'Запечена лимонна камбала', price: '28.00',
    desc: 'Fennel, samphire, orange & tomato, parsley sauce',
    ing: ['Лимонна камбала', 'Фенхель', 'Солерос (samphire)', 'Апельсин, томати', 'Петрушковий соус: вершкове масло, вершки, петрушка, лимон'],
    a: ['fish', 'milk'],
    m: ['gluten', 'sulphites', 'celery']
  },
  {
    id: 'butchers-burger', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: "Butcher's Burger", ua: 'Бургер «М’ясника»', price: '20.00',
    desc: 'Smoked bacon & mature cheddar, house slaw',
    ing: ['Яловича котлета', 'Булочка (пшеничне борошно, молоко, яйця)', 'Копчений бекон', 'Витриманий чеддер', 'Фірмовий слоу: капуста, морква, майонез', 'Соус'],
    a: ['gluten', 'milk', 'eggs', 'mustard', 'sulphites'],
    m: ['sesame', 'soya', 'celery']
  },
  {
    id: 'red-wine-beef', section: 'mains', menus: ['brunch'],
    name: 'Red Wine Braised Beef', ua: 'Яловичина, тушкована у червоному вині', price: null,
    priceNote: 'ціну на фото меню не вказано — уточнити',
    desc: 'Smoked bacon, mushrooms, onion & mashed potato',
    ing: ['Яловичина, тушкована в червоному вині', 'Копчений бекон', 'Печериці', 'Цибуля', 'Картопляне пюре: вершкове масло, молоко', 'Яловичий бульйон'],
    a: ['sulphites', 'milk'],
    m: ['celery', 'gluten', 'mustard']
  },
  {
    id: 'suffolk-chicken', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Suffolk Chicken Breast', ua: 'Куряче філе «Саффолк»', price: '23.00',
    desc: 'Bourguignon-style, parsnip & coconut purée',
    ing: ['Куряче філе', 'Соус бургіньйон: червоне вино, бекон, шалот, печериці, бульйон', 'Пюре з пастернаку на кокосовому молоці', 'Вершкове масло'],
    a: ['sulphites', 'milk'],
    m: ['celery', 'gluten', 'nuts']
  },
  {
    id: 'lamb-rack', section: 'mains', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Roasted Lamb Rack', ua: 'Каре ягняти', price: '34.00',
    desc: 'Miso-glazed swede & lentils, mint-dill sauce',
    ing: ['Каре ягняти', 'Бруква у глазурі місо (соя, часто ячмінь або рис)', 'Сочевиця', 'М’ятно-кропний соус', 'Часник, олія'],
    a: ['soya', 'gluten'],
    m: ['milk', 'celery', 'sulphites', 'sesame']
  },
  {
    id: 'chicken-fillet-burger', section: 'mains', menus: ['lunch', 'brunch'],
    name: 'Chicken Fillet Burger', ua: 'Бургер з курячим філе', price: '17.00',
    desc: 'S&W mayonnaise, house slaw',
    ing: ['Куряче філе у паніровці: пшеничне борошно, сухарі', 'Булочка (пшеничне борошно)', 'Фірмовий майонез: яйця, гірчиця', 'Фірмовий слоу'],
    a: ['gluten', 'eggs', 'mustard', 'milk'],
    m: ['soya', 'sesame', 'celery', 'sulphites']
  },
  {
    id: 'steak-sandwich', section: 'mains', menus: ['lunch', 'brunch'],
    name: 'Signature Steak Sandwich', ua: 'Фірмовий стейк-сендвіч', price: '19.50',
    desc: 'Cheddar, bacon jam, horseradish aioli & angry onions',
    ing: ['Стейк', 'Чеддер', 'Беконовий джем', 'Айолі з хроном: яйця, часник, хрін, гірчиця', 'Гострі смажені цибульні кільця (борошно)', 'Хліб/чіабата'],
    a: ['gluten', 'milk', 'eggs', 'mustard', 'sulphites'],
    m: ['soya', 'celery']
  },

  /* --------------------------------------------------------- BRUNCH ------ */
  {
    id: 'sw-muffin', section: 'brunch', menus: ['brunch'],
    name: 'S&W Muffin', ua: 'Мафін «S&W»', price: '6.00 · 12.00',
    desc: 'Toasted muffin, beef patty, bacon & cheese',
    ing: ['Англійський мафін (пшеничне борошно, молоко)', 'Яловича котлета', 'Бекон', 'Сир'],
    a: ['gluten', 'milk'],
    m: ['eggs', 'sesame', 'mustard', 'soya', 'sulphites']
  },
  {
    id: 'brunch-yorkshire', section: 'brunch', menus: ['brunch'],
    name: 'Brunch Yorkshire', ua: 'Бранч-йоркшир', price: '15.00',
    desc: 'Steak ends, horseradish, roasted potatoes & caramelised onion',
    ing: ['Йоркширський пудинг: пшеничне борошно, яйця, молоко', 'Обрізки стейка', 'Хрін (зазвичай з вершками)', 'Запечена картопля', 'Карамелізована цибуля'],
    a: ['gluten', 'eggs', 'milk'],
    m: ['mustard', 'celery', 'sulphites']
  },
  {
    id: 'smoked-salmon-brunch', section: 'brunch', menus: ['brunch'],
    name: 'Smoked Salmon', ua: 'Копчений лосось', price: '16.00',
    desc: 'Scrambled eggs, avocado & flatbread',
    ing: ['Копчений лосось', 'Яєчня-бовтанка: яйця, вершкове масло/вершки', 'Авокадо', 'Флетбред (пшеничне борошно)'],
    a: ['fish', 'eggs', 'milk', 'gluten'],
    m: ['sesame', 'soya']
  },
  {
    id: 'loaded-hash', section: 'brunch', menus: ['brunch'],
    name: 'Loaded Hash', ua: 'Картопляний хеш «Loaded»', price: '12.00',
    desc: 'Bacon, fried egg, sour cream, Parmesan & jalapeños',
    ing: ['Картопляний хеш', 'Бекон', 'Смажене яйце', 'Сметана', 'Пармезан', 'Халапеньйо'],
    a: ['eggs', 'milk'],
    m: ['gluten', 'sulphites', 'celery']
  },
  {
    id: 'waffle-chicken', section: 'brunch', menus: ['brunch'],
    name: 'Waffle & Fried Spiced Chicken', ua: 'Вафля зі смаженою пряною куркою', price: '15.00',
    desc: 'Nashville hot sauce & maple syrup',
    ing: ['Вафля: пшеничне борошно, яйця, молоко, вершкове масло', 'Куряче філе у паніровці (борошно, маслянка)', 'Гострий соус Nashville: кайєнський перець, олія/масло', 'Кленовий сироп'],
    a: ['gluten', 'eggs', 'milk'],
    m: ['soya', 'mustard', 'celery']
  },
  {
    id: 'french-toast', section: 'brunch', menus: ['brunch'],
    name: 'French Toast', ua: 'Французький тост', price: '12.00',
    desc: 'Orange & apple, crème fraîche',
    ing: ['Бріош/хліб: пшеничне борошно, яйця, молоко', 'Яйця, молоко, цукор, вершкове масло', 'Апельсин, яблуко', 'Крем-фреш'],
    a: ['gluten', 'eggs', 'milk'],
    m: ['nuts', 'sulphites', 'soya']
  },
  {
    id: 'american-pancakes', section: 'brunch', menus: ['brunch'],
    name: 'American Pancakes', ua: 'Американські панкейки', price: '12.00',
    desc: 'Chocolate sauce & fresh berries',
    ing: ['Панкейки: пшеничне борошно, яйця, молоко, розпушувач, вершкове масло', 'Шоколадний соус: какао, вершки, соєвий лецитин', 'Свіжі ягоди'],
    a: ['gluten', 'eggs', 'milk', 'soya'],
    m: ['nuts']
  },
  {
    id: 'benedict-classic', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict — Classic or Florentine', ua: 'Бенедикт: класичний або флорентійський', price: '6.00 · 12.00',
    desc: 'Classic — з беконом; Florentine — зі шпинатом',
    ing: ['Англійський мафін (пшеничне борошно)', 'Яйце-пашот', 'Голландський соус: яєчний жовток, вершкове масло, лимон, оцет', 'Бекон (classic) або шпинат (florentine)'],
    a: ['gluten', 'eggs', 'milk'],
    m: ['mustard', 'sulphites']
  },
  {
    id: 'benedict-royale', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict Royale', ua: 'Бенедикт «Рояль»', price: '8.00 · 16.00',
    desc: 'З копченим лососем',
    ing: ['Англійський мафін (пшеничне борошно)', 'Яйце-пашот', 'Голландський соус: яєчний жовток, вершкове масло, лимон', 'Копчений лосось'],
    a: ['gluten', 'eggs', 'milk', 'fish'],
    m: ['mustard', 'sulphites']
  },
  {
    id: 'benedict-lux', section: 'brunch', menus: ['brunch'], group: 'Benedicts',
    name: 'Benedict — Lobster or Wagyu Steak', ua: 'Бенедикт з лобстером або стейком вагю', price: '36.00',
    desc: 'На вибір: лобстер або вагю',
    ing: ['Англійський мафін (пшеничне борошно)', 'Яйце-пашот', 'Голландський соус: яєчний жовток, вершкове масло', 'Лобстер АБО стейк вагю'],
    a: ['gluten', 'eggs', 'milk', 'crustaceans'],
    m: ['mustard', 'sulphites'],
    warn: 'Ракоподібні — лише у версії з лобстером.'
  },

  /* ------------------------------------------------ USDA PRIME DRY-AGED -- */
  {
    id: 'kansas-cut', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Bone-In Sirloin Kansas Cut', ua: 'Стриплойн на кістці «Kansas Cut»', price: '80.00', meta: '500 г · USDA Prime',
    desc: '', ing: ['Яловичина сухого визрівання USDA Prime', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 't-bone', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic T-Bone', ua: 'Класичний ті-бон', price: '86.00', meta: '550 г · USDA Prime',
    desc: '', ing: ['Яловичина сухого визрівання USDA Prime', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'bone-in-ribeye', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Signature Bone-In Rib-Eye', ua: 'Фірмовий рибай на кістці', price: '98.00', meta: '600 г · USDA Prime',
    desc: '', ing: ['Яловичина сухого визрівання USDA Prime', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'cote-de-boeuf', section: 'steak-dryaged', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Côte de Boeuf', ua: 'Кот-де-бьоф', price: '155.00', meta: '850 г · USDA Prime',
    desc: '', ing: ['Яловичина сухого визрівання USDA Prime', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },

  /* ------------------------------------------------------------ FILLETS -- */
  {
    id: 'irish-fillet', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Premium Irish Fillet', ua: 'Преміальна ірландська вирізка', price: '49.50', meta: '225 г',
    desc: '', ing: ['Яловича вирізка', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'usda-fillet', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'American USDA Fillet', ua: 'Американська вирізка USDA', price: '79.00', meta: '280 г',
    desc: '', ing: ['Яловича вирізка USDA', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'chateaubriand', section: 'steak-fillets', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Premium Irish Châteaubriand', ua: 'Ірландський шатобріан', price: '99.00', meta: '600 г',
    desc: '', ing: ['Яловича вирізка (центральна частина)', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },

  /* ----------------------------------------------------------- SIRLOINS -- */
  {
    id: 'nz-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'New Zealand Grain-Fed Sirloin', ua: 'Новозеландський стриплойн зернової відгодівлі', price: '32.00', meta: '250 г',
    desc: '', ing: ['Новозеландська яловичина', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'irish-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: '28-Day Dry-Aged Irish Sirloin', ua: 'Ірландський стриплойн, 28 днів визрівання', price: '45.00', meta: '340 г',
    desc: '', ing: ['Ірландська яловичина сухого визрівання', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'usda-prime-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'American USDA Prime Sirloin', ua: 'Американський стриплойн USDA Prime', price: '69.00', meta: '400 г',
    desc: '', ing: ['Яловичина USDA Prime', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'wagyu-sirloin', section: 'steak-sirloins', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Snake River Farms Wagyu Sirloin', ua: 'Стриплойн вагю Snake River Farms', price: '110.00 · 200.00', meta: '300 г · 600 г',
    desc: '', ing: ['Яловичина вагю', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },

  /* ----------------------------------------------------------- RIB-EYES -- */
  {
    id: 'irish-ribeye', section: 'steak-ribeyes', menus: ['lunch', 'dinner', 'brunch'],
    name: '28-Day Dry-Aged Irish Rib-Eye', ua: 'Ірландський рибай, 28 днів визрівання', price: '54.00', meta: '340 г',
    desc: '', ing: ['Ірландська яловичина сухого визрівання', 'Сіль, перець'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },
  {
    id: 'tomahawk', section: 'steak-ribeyes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Swinging 28-Day Dry-Aged Irish Tomahawk', ua: 'Ірландський томагавк, 28 днів визрівання', price: '135.00', meta: '900 г',
    desc: 'Skin-on roasted heritage potatoes, rosemary & garlic',
    ing: ['Ірландська яловичина сухого визрівання', 'Запечена картопля у шкірці', 'Розмарин, часник', 'Олія/вершкове масло'],
    a: [], m: ['milk'],
    warn: 'Саме м’ясо алергенів не містить. Стейки часто фінішують вершковим маслом, а гриль спільний — уточнюй спосіб приготування. Соуси й доповнення рахуй окремо.'
  },

  /* --------------------------------------------------- STEAK ADDITIONS --- */
  {
    id: 'peppercorn-sauce', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Peppercorn Sauce', ua: 'Перцевий соус', price: '5.00', desc: '',
    ing: ['Вершки', 'Зелений перець горошком', 'Бренді', 'Яловичий бульйон'],
    a: ['milk', 'sulphites'], m: ['celery', 'gluten']
  },
  {
    id: 'bearnaise', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Béarnaise Sauce', ua: 'Соус беарнез', price: '5.00', desc: '',
    ing: ['Яєчні жовтки', 'Вершкове масло', 'Естрагон', 'Винний оцет, шалот'],
    a: ['eggs', 'milk', 'sulphites'], m: []
  },
  {
    id: 'porcini-cream', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Porcini Cream Sauce', ua: 'Вершковий соус з білими грибами', price: '5.00', desc: '',
    ing: ['Білі гриби (порчіні)', 'Вершки', 'Шалот, часник'],
    a: ['milk'], m: ['sulphites', 'celery', 'gluten']
  },
  {
    id: 'garlic-butter', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Garlic Butter', ua: 'Часникове масло', price: '3.50', desc: '',
    ing: ['Вершкове масло', 'Часник', 'Петрушка'], a: ['milk'], m: []
  },
  {
    id: 'chimichurri', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Chimichurri Sauce', ua: 'Соус чимічурі', price: '4.00', desc: '',
    ing: ['Петрушка, орегано', 'Часник', 'Оцет', 'Оливкова олія', 'Чилі'],
    a: ['sulphites'], m: [], veg: true
  },
  {
    id: 'red-wine-jus', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Red Wine Jus', ua: 'Соус на червоному вині', price: '4.50', desc: '',
    ing: ['Червоне вино', 'Яловичий бульйон', 'Шалот'],
    a: ['sulphites'], m: ['celery', 'gluten', 'milk']
  },
  {
    id: 'half-lobster', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Grilled Half Lobster', ua: 'Половина лобстера на грилі', price: '36.00', desc: '',
    ing: ['Лобстер', 'Часникове масло (вершкове масло, часник)'],
    a: ['crustaceans', 'milk'], m: ['sulphites']
  },
  {
    id: 'au-poivre', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Au Poivre Style', ua: 'У стилі «о-пуавр»', price: '6.00',
    desc: 'Peppercorn crust & sauce',
    ing: ['Скоринка з чорного перцю', 'Перцевий соус: вершки, бренді, бульйон'],
    a: ['milk', 'sulphites'], m: ['celery', 'gluten']
  },
  {
    id: 'cajun-style', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cajun Style', ua: 'У стилі кейджун', price: '5.00',
    desc: 'Cajun dry-rub & oil',
    ing: ['Суха суміш спецій кейджун', 'Олія'],
    a: [], m: ['celery', 'mustard', 'gluten']
  },
  {
    id: 'gorgonzola-crusted', section: 'additions', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Gorgonzola Crusted', ua: 'Скоринка з горгонзоли', price: '12.00',
    desc: 'Bacon & spring onions',
    ing: ['Горгонзола', 'Бекон', 'Зелена цибуля'],
    a: ['milk'], m: ['sulphites', 'gluten']
  },

  /* ---------------------------------------------------------- SHELLFISH -- */
  {
    id: 'seafood-tower', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seafood Tower', ua: 'Вежа з морепродуктів', price: '60.00 / особу',
    desc: 'Lobster, oysters, octopus salad, jumbo shrimp & lump crab, with cocktail sauce, mustard sauce, ginger dressing & mignonette',
    ing: ['Лобстер', 'Устриці', 'Салат з восьминога', 'Великі креветки', 'М’ясо краба', 'Коктейльний соус (томат, хрін, вустерський соус)', 'Гірчичний соус з коньяком', 'Імбирна заправка (соя)', 'Міньйонет (винний оцет, шалот)'],
    a: ['crustaceans', 'molluscs', 'fish', 'mustard', 'soya', 'sulphites'],
    m: ['eggs', 'gluten', 'celery', 'sesame'],
    warn: 'Устриці подаються сирими.'
  },
  {
    id: 'poached-lobster', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Poached Lobster', ua: 'Припущений лобстер', price: 'пів 36.00 · цілий 72.00',
    desc: 'Ginger dressing & cocktail sauce, served cold',
    ing: ['Лобстер', 'Імбирна заправка: імбир, соєвий соус, олія', 'Коктейльний соус: томат, хрін, вустерський соус'],
    a: ['crustaceans', 'soya', 'gluten', 'fish', 'sulphites'],
    m: ['eggs', 'sesame', 'celery']
  },
  {
    id: 'rock-oysters', section: 'shellfish', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Rock Oysters', ua: 'Устриці', price: '6 шт. 24.00 · 12 шт. 48.00',
    desc: 'Cocktail sauce & mignonette',
    ing: ['Устриці', 'Коктейльний соус: томат, хрін, вустерський соус', 'Міньйонет: винний оцет, шалот, перець'],
    a: ['molluscs', 'sulphites', 'fish'],
    m: ['gluten', 'celery'],
    warn: 'Подаються сирими.'
  },

  /* ------------------------------------------------------ SIDES: POTATO -- */
  {
    id: 'french-fries', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'French Fries', ua: 'Картопля фрі', price: '7.00', desc: '',
    ing: ['Картопля', 'Рослинна олія', 'Сіль'],
    a: [], m: ['gluten', 'sulphites', 'milk'], veg: true,
    warn: 'Спільний фритюр із паніруваними стравами.'
  },
  {
    id: 'cajun-fries', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Cajun Fries', ua: 'Картопля фрі кейджун', price: '7.00', desc: '',
    ing: ['Картопля', 'Суміш спецій кейджун', 'Рослинна олія'],
    a: [], m: ['gluten', 'celery', 'mustard', 'sulphites'], veg: true,
    warn: 'Спільний фритюр із паніруваними стравами.'
  },
  {
    id: 'baked-sweet-potato', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Baked Sweet Potato', ua: 'Запечена батата', price: '9.00',
    desc: 'Pomegranate & aubergine salsa, chilli dressing',
    ing: ['Батат', 'Сальса: гранат, баклажан', 'Заправка з чилі', 'Оливкова олія'],
    a: [], m: ['sulphites', 'sesame', 'milk'], veg: true
  },
  {
    id: 'whipped-potatoes', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Whipped Potatoes', ua: 'Збите картопляне пюре', price: '9.50',
    desc: 'Basil oil & chives',
    ing: ['Картопля', 'Вершкове масло, вершки/молоко', 'Базилікова олія', 'Зелена цибуля'],
    a: ['milk'], m: [], veg: true
  },
  {
    id: 'heritage-potatoes', section: 'side-potatoes', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Roasted Heritage Potatoes', ua: 'Запечена молода картопля', price: '9.00',
    desc: 'Skin-on potatoes, rosemary & garlic',
    ing: ['Картопля у шкірці', 'Розмарин, часник', 'Олія'],
    a: [], m: ['milk'], veg: true
  },

  /* --------------------------------------------------- SIDES: VEGETABLES -- */
  {
    id: 'spinach', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Spinach', ua: 'Шпинат', price: '10.00',
    desc: 'Sautéed or steamed',
    ing: ['Шпинат', 'Вершкове масло або олія (за способом приготування)', 'Часник'],
    a: [], m: ['milk'], veg: true,
    warn: 'На парі — без вершкового масла, уточнюй при замовленні.'
  },
  {
    id: 'creamed-spinach', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Creamed Spinach', ua: 'Шпинат у вершках', price: '14.00', desc: '',
    ing: ['Шпинат', 'Вершки, вершкове масло', 'Борошняна заправка (roux)', 'Мускатний горіх'],
    a: ['milk', 'gluten'], m: ['celery'], veg: true
  },
  {
    id: 'baby-courgette', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Grilled Baby Courgette', ua: 'Молоді цукіні на грилі', price: '10.00',
    desc: 'Sun-dried tomato hummus, toasted almonds',
    ing: ['Молоді цукіні', 'Хумус із в’яленими томатами: нут, тахіні (кунжут)', 'Підсмажений мигдаль', 'Оливкова олія'],
    a: ['sesame', 'nuts', 'sulphites'], m: [], veg: true
  },
  {
    id: 'pan-fried-mushrooms', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Pan-Fried Mushrooms', ua: 'Смажені гриби', price: '9.00',
    desc: 'Garlic butter',
    ing: ['Гриби', 'Часникове масло: вершкове масло, часник, петрушка'],
    a: ['milk'], m: ['gluten'], veg: true
  },
  {
    id: 'seasonal-vegetables', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Seasonal Vegetables', ua: 'Сезонні овочі', price: '9.00', desc: '',
    ing: ['Сезонні овочі', 'Вершкове масло або олія'],
    a: [], m: ['milk'], veg: true
  },
  {
    id: 'tenderstem-broccoli', section: 'side-vegetables', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Sautéed Tenderstem Broccoli', ua: 'Броколіні соте', price: '10.00',
    desc: 'Roasted pepper & puffed wild rice, XO sauce',
    ing: ['Броколіні', 'Печений перець', 'Повітряний дикий рис', 'Соус XO: сушені креветки, в’ялений гребінець, шинка, чилі, соя'],
    a: ['crustaceans', 'molluscs', 'soya', 'fish', 'gluten'], m: ['sesame', 'sulphites']
  },

  /* ----------------------------------------------------- SIDES: CLASSICS -- */
  {
    id: 'mac-cheese', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Truffled Mac & Cheese', ua: 'Мак-енд-чіз з трюфелем', price: '14.00', desc: '',
    ing: ['Макарони (пшениця)', 'Сирний соус: молоко, вершки, сир, борошно', 'Трюфельна олія', 'Панірувальні сухарі'],
    a: ['gluten', 'milk'], m: ['eggs', 'mustard'], veg: true
  },
  {
    id: 'hash-brown', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Hash Brown', ua: 'Хеш-браун', price: '12.00', desc: '',
    ing: ['Картопля', 'Цибуля', 'Олія, сіль'],
    a: [], m: ['gluten', 'milk', 'eggs'], veg: true,
    warn: 'Спільний фритюр із паніруваними стравами.'
  },
  {
    id: 'onion-rings', section: 'side-classics', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Beer-Battered Onion Rings', ua: 'Цибулеві кільця у пивному клярі', price: '9.00', desc: '',
    ing: ['Цибуля', 'Пивний кляр: пшеничне борошно, пиво (ячмінний солод)', 'Олія'],
    a: ['gluten', 'sulphites'], m: ['milk', 'eggs'], veg: true
  },

  /* -------------------------------------------------- SIDES: SIDE SALADS -- */
  {
    id: 'garden-salad', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Mixed Garden Salad', ua: 'Салат-мікс', price: '6.00', desc: '',
    ing: ['Салатний мікс', 'Заправка: олія, оцет, гірчиця'],
    a: ['mustard', 'sulphites'], m: [], veg: true
  },
  {
    id: 'tomato-onion', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Sliced Tomato & Sweet Onion', ua: 'Томати зі солодкою цибулею', price: '6.00', desc: '',
    ing: ['Томати', 'Солодка цибуля', 'Олія, оцет'],
    a: ['sulphites'], m: ['mustard'], veg: true
  },
  {
    id: 'caesar-side', section: 'side-salads', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Classic Caesar (side)', ua: 'Класичний «Цезар» (гарнір)', price: '7.00',
    desc: 'Baby gem lettuce, aged Parmesan, Caesar dressing & croutons',
    ing: ['Салат бебі-джем', 'Витриманий пармезан', 'Соус «Цезар»: яєчний жовток, анчоуси, часник, гірчиця', 'Пшеничні грінки'],
    a: ['milk', 'eggs', 'fish', 'mustard', 'gluten'], m: ['sulphites']
  },

  /* ----------------------------------------------------------- DESSERTS -- */
  {
    id: 'panna-cotta', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Black Sesame Panna Cotta', ua: 'Панакота з чорним кунжутом', price: 'у сет-меню',
    desc: 'Peach & jasmine sauce, sesame tuile',
    ing: ['Вершки, молоко', 'Чорний кунжут', 'Желатин', 'Персиково-жасміновий соус', 'Кунжутне тюїль (пшеничне борошно, цукор)'],
    a: ['milk', 'sesame', 'gluten'], m: ['eggs', 'soya', 'nuts']
  },
  {
    id: 'banana-cake', section: 'desserts', menus: ['lunch', 'dinner'],
    name: 'Spiced Banana Cake', ua: 'Пряний банановий кекс', price: 'у сет-меню',
    desc: 'Toffee & banana mousse, rum & raisin ice cream',
    ing: ['Кекс: пшеничне борошно, яйця, вершкове масло, цукор, спеції', 'Мус: банан, іриска, вершки', 'Морозиво з ромом та родзинками'],
    a: ['gluten', 'eggs', 'milk', 'sulphites'], m: ['nuts', 'soya']
  },
  {
    id: 'ice-cream', section: 'desserts', menus: ['lunch', 'dinner', 'brunch'],
    name: 'Selection of Ice Creams or Sorbets', ua: 'Морозиво або сорбети на вибір', price: 'у сет-меню',
    desc: "Ask for today's flavours — смаки уточнюй щодня",
    ing: ['Морозиво: молоко, вершки, цукор', 'Сорбет: фруктове пюре, цукор, вода'],
    a: ['milk'], m: ['eggs', 'nuts', 'gluten', 'soya', 'sesame'],
    warn: 'Склад залежить від смаку дня. Сорбети зазвичай без молока.'
  }
];

/* -------------------------------------------------------------------------
   Розділи меню
   ------------------------------------------------------------------------- */
const SECTIONS = {
  'brunch':          { ua: 'Бранч',                en: 'Brunch' },
  'starters':        { ua: 'Закуски',              en: 'Starters' },
  'salads':          { ua: 'Салати',               en: 'Salads' },
  'sunday-roast':    { ua: 'Недільний ростбіф',    en: 'Sunday Roast' },
  'mains':           { ua: 'Основні страви',       en: 'Main Courses' },
  'steak-dryaged':   { ua: 'Стейки сухого визрівання USDA Prime', en: 'USDA Prime Dry-Aged Steak' },
  'steak-fillets':   { ua: 'Вирізка',              en: 'Fillets' },
  'steak-sirloins':  { ua: 'Стриплойни',           en: 'Sirloins' },
  'steak-ribeyes':   { ua: 'Рибаї',                en: 'Rib-Eyes' },
  'additions':       { ua: 'Доповнення до стейка', en: 'Steak Additions' },
  'shellfish':       { ua: 'Морепродукти',         en: 'Shellfish' },
  'side-potatoes':   { ua: 'Гарніри: картопля',    en: 'Side Dishes — Potatoes' },
  'side-vegetables': { ua: 'Гарніри: овочі',       en: 'Vegetables' },
  'side-classics':   { ua: 'Класика до столу',     en: 'Classics — Perfect to Share' },
  'side-salads':     { ua: 'Салати-гарніри',       en: 'Side Salads' },
  'desserts':        { ua: 'Десерти',              en: 'Desserts' }
};

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
    title: 'Set Menu',
    price: 'Дві страви 28.00 · Три страви 32.00',
    hours: ['Понеділок і неділя: 12:00–22:00 / 21:30', 'Вівторок–субота: 12:00–17:30'],
    courses: [
      { name: 'Starters', items: ['split-pea-soup', 'burrata', 'salmon-tataki', 'carpaccio'] },
      { name: 'Main Courses', items: ['aubergine-parmigiana', 'lemon-sole', 'red-wine-beef', 'suffolk-chicken'],
        extra: '250 г New Zealand Grain-Fed Sirloin — доплата £10.00' },
      { name: 'Desserts', items: ['panna-cotta', 'banana-cake', 'ice-cream'] }
    ]
  },
  dinner: {
    title: 'Set Menu',
    price: 'Дві страви 28.00 · Три страви 32.00',
    hours: ['Понеділок і неділя: 12:00–22:00 / 21:30', 'Вівторок–субота: 12:00–17:30'],
    courses: [
      { name: 'Starters', items: ['split-pea-soup', 'burrata', 'salmon-tataki', 'carpaccio'] },
      { name: 'Main Courses', items: ['aubergine-parmigiana', 'lemon-sole', 'red-wine-beef', 'suffolk-chicken'],
        extra: '250 г New Zealand Grain-Fed Sirloin — доплата £10.00' },
      { name: 'Desserts', items: ['panna-cotta', 'banana-cake', 'ice-cream'] }
    ]
  },
  brunch: {
    title: 'Brunch Set Menu',
    price: 'Дві страви 28.00 · Три страви 32.00',
    hours: ['Субота і неділя: 12:00–16:30'],
    courses: [
      { name: 'Starters', items: ['loaded-hash', 'sw-muffin', 'smoked-salmon-brunch'] },
      { name: 'Main Courses', items: ['brunch-yorkshire', 'waffle-chicken', 'lemon-sole', 'red-wine-beef'],
        extra: '250 г New Zealand Grain-Fed Sirloin — доплата £10.00' },
      { name: 'Desserts', items: ['panna-cotta', 'american-pancakes', 'french-toast', 'ice-cream'] }
    ]
  }
};
