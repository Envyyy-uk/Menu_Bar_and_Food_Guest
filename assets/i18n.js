/* ==========================================================================
   Локалізація інтерфейсу — uk / en / es / it / de / ru
   ========================================================================== */

const LANGS = [
  { code: 'uk', label: 'Українська', short: 'UA' },
  { code: 'en', label: 'English',    short: 'EN' },
  { code: 'es', label: 'Español',    short: 'ES' },
  { code: 'it', label: 'Italiano',   short: 'IT' },
  { code: 'de', label: 'Deutsch',    short: 'DE' },
  { code: 'ru', label: 'Русский',    short: 'RU' }
];

const I18N = {

  'brand.sub': {
    uk: 'Меню та бар · довідник для гостей', en: 'Menu & Bar · Guest Guide',
    es: 'Menú y bar · guía para huéspedes',  it: 'Menu e bar · guida per gli ospiti',
    de: 'Menü & Bar · Gästeführer',          ru: 'Меню и бар · справочник для гостей'
  },

  'nav.home':      { uk: 'Головна', en: 'Home', es: 'Inicio', it: 'Home', de: 'Start', ru: 'Главная' },
  'nav.brunch':    { uk: 'Бранч', en: 'Brunch', es: 'Brunch', it: 'Brunch', de: 'Brunch', ru: 'Бранч' },
  'nav.lunch':     { uk: 'Ланч', en: 'Lunch', es: 'Almuerzo', it: 'Pranzo', de: 'Lunch', ru: 'Ланч' },
  'nav.dinner':    { uk: 'Вечеря', en: 'Dinner', es: 'Cena', it: 'Cena', de: 'Dinner', ru: 'Ужин' },
  'nav.drinks':    { uk: 'Напої', en: 'Drinks', es: 'Bebidas', it: 'Bevande', de: 'Getränke', ru: 'Напитки' },
  'nav.allergens': { uk: 'Алергени', en: 'Allergens', es: 'Alérgenos', it: 'Allergeni', de: 'Allergene', ru: 'Аллергены' },

  'lang.label': {
    uk: 'Мова', en: 'Language', es: 'Idioma', it: 'Lingua', de: 'Sprache', ru: 'Язык'
  },

  /* ------------------------------------------------------------- home --- */
  'home.title': {
    uk: 'Меню та бар', en: 'Menu & Bar', es: 'Menú y bar',
    it: 'Menu e bar',  de: 'Menü & Bar', ru: 'Меню и бар'
  },
  'home.lead': {
    uk: 'Кожна страва та напій — з повним переліком складників і позначенням алергенів. Оберіть меню або відкрийте зведену таблицю алергенів.',
    en: 'Every dish and drink broken down into its ingredients, with allergens marked. Choose a menu below, or open the full allergen table.',
    es: 'Cada plato y bebida desglosado en sus ingredientes, con los alérgenos señalados. Elija un menú o abra la tabla completa de alérgenos.',
    it: 'Ogni piatto e bevanda scomposto nei suoi ingredienti, con gli allergeni indicati. Scegliete un menu o aprite la tabella completa degli allergeni.',
    de: 'Jedes Gericht und Getränk mit vollständiger Zutatenliste und gekennzeichneten Allergenen. Wählen Sie ein Menü oder öffnen Sie die Allergentabelle.',
    ru: 'Каждое блюдо и напиток — с полным перечнем ингредиентов и указанием аллергенов. Выберите меню или откройте сводную таблицу аллергенов.'
  },

  'card.brunch': {
    uk: 'Бенедикти, панкейки, недільний ростбіф, вафлі зі смаженою куркою — і повна стейкова карта.',
    en: 'Benedicts, pancakes, Sunday roast and fried chicken with waffles — plus the full steak list.',
    es: 'Benedictinos, tortitas, asado dominical y pollo frito con gofres — además de toda la carta de carnes.',
    it: 'Uova alla Benedict, pancake, arrosto della domenica e pollo fritto con waffle — più tutta la carta delle bistecche.',
    de: 'Benedict-Eier, Pancakes, Sunday Roast und Fried Chicken mit Waffeln — dazu die komplette Steakkarte.',
    ru: 'Бенедикты, панкейки, воскресный ростбиф, вафли с жареной курицей — и полная стейковая карта.'
  },
  'card.lunch': {
    uk: 'Закуски, салати, основні страви, стейки сухого визрівання, морепродукти та гарніри.',
    en: 'Starters, salads, main courses, dry-aged steaks, shellfish and side dishes.',
    es: 'Entrantes, ensaladas, platos principales, carnes maduradas en seco, mariscos y guarniciones.',
    it: 'Antipasti, insalate, secondi, bistecche frollate, crostacei e contorni.',
    de: 'Vorspeisen, Salate, Hauptgerichte, Dry-Aged-Steaks, Meeresfrüchte und Beilagen.',
    ru: 'Закуски, салаты, основные блюда, стейки сухого вызревания, морепродукты и гарниры.'
  },
  'card.dinner': {
    uk: 'Те саме ядро, що й ланч, але без бургера з курячим філе та стейк-сендвіча.',
    en: 'The same core as lunch, without the chicken fillet burger and the steak sandwich.',
    es: 'La misma base que el almuerzo, sin la hamburguesa de pollo ni el sándwich de carne.',
    it: 'La stessa base del pranzo, senza il burger di pollo e il panino con la bistecca.',
    de: 'Dieselbe Basis wie mittags, ohne Chicken-Burger und Steak-Sandwich.',
    ru: 'То же ядро, что и ланч, но без бургера с куриным филе и стейк-сэндвича.'
  },
  'card.drinks': {
    uk: 'Коктейлі, мартіні та мангеттени, Bloody Marys, bottomless brunch, безалкогольні коктейлі й вина за келихом.',
    en: 'Cocktails, martinis and manhattans, Bloody Marys, bottomless brunch, virgin cocktails and wines by the glass.',
    es: 'Cócteles, martinis y manhattans, Bloody Marys, brunch ilimitado, cócteles sin alcohol y vinos por copa.',
    it: 'Cocktail, martini e manhattan, Bloody Mary, brunch illimitato, cocktail analcolici e vini al bicchiere.',
    de: 'Cocktails, Martinis und Manhattans, Bloody Marys, Bottomless Brunch, alkoholfreie Cocktails und Weine im Glas.',
    ru: 'Коктейли, мартини и манхэттены, Bloody Marys, bottomless brunch, безалкогольные коктейли и вина по бокалам.'
  },
  'card.allergens': {
    uk: 'Зведена таблиця всіх позицій × 14 обов’язкових алергенів, із пошуком і фільтром.',
    en: 'Full table of every item × the 14 mandatory allergens, with search and filter.',
    es: 'Tabla completa de todos los platos × los 14 alérgenos obligatorios, con búsqueda y filtro.',
    it: 'Tabella completa di ogni voce × i 14 allergeni obbligatori, con ricerca e filtro.',
    de: 'Vollständige Tabelle aller Positionen × die 14 Pflichtallergene, mit Suche und Filter.',
    ru: 'Сводная таблица всех позиций × 14 обязательных аллергенов, с поиском и фильтром.'
  },

  'count.items': {
    uk: 'позицій', en: 'items', es: 'platos', it: 'voci', de: 'Positionen', ru: 'позиций'
  },
  'count.inTable': {
    uk: 'позицій у таблиці', en: 'items in the table', es: 'entradas en la tabla',
    it: 'voci in tabella', de: 'Positionen in der Tabelle', ru: 'позиций в таблице'
  },

  'howto.title': {
    uk: 'Як користуватися', en: 'How to use it', es: 'Cómo usarlo',
    it: 'Come si usa', de: 'So funktioniert es', ru: 'Как пользоваться'
  },
  'howto.1.t': { uk: 'Пошук і фільтр', en: 'Search and filter', es: 'Búsqueda y filtro', it: 'Ricerca e filtro', de: 'Suche und Filter', ru: 'Поиск и фильтр' },
  'howto.1.d': {
    uk: 'На кожній сторінці є пошук за назвою чи складником і фільтр за алергенами: позначте те, чого уникаєте — відповідні позиції приглушаться.',
    en: 'Every page has a search by name or ingredient and an allergen filter: tick what you avoid and the matching items are dimmed.',
    es: 'Cada página tiene búsqueda por nombre o ingrediente y un filtro de alérgenos: marque lo que evita y los platos correspondientes se atenúan.',
    it: 'Ogni pagina ha la ricerca per nome o ingrediente e un filtro allergeni: selezionate ciò che evitate e le voci corrispondenti si attenuano.',
    de: 'Jede Seite bietet eine Suche nach Name oder Zutat und einen Allergenfilter: Markieren Sie, was Sie meiden — passende Positionen werden abgeblendet.',
    ru: 'На каждой странице есть поиск по названию или ингредиенту и фильтр по аллергенам: отметьте то, чего избегаете, — соответствующие позиции приглушатся.'
  },
  'howto.2.t': { uk: 'Дві категорії міток', en: 'Two levels of marking', es: 'Dos niveles de marcado', it: 'Due livelli di segnalazione', de: 'Zwei Kennzeichnungsstufen', ru: 'Две категории меток' },
  'howto.2.d': {
    uk: 'Суцільна червона мітка — алерген присутній у страві. Пунктирна сіра — «може містити»: залежить від рецептури або спільного обладнання.',
    en: 'A solid red tag means the allergen is present. A dashed grey tag means “may contain”: it depends on the recipe or on shared equipment.',
    es: 'Una etiqueta roja continua significa que el alérgeno está presente. Una etiqueta gris discontinua significa «puede contener»: depende de la receta o del equipo compartido.',
    it: 'L’etichetta rossa piena indica che l’allergene è presente. Quella grigia tratteggiata indica «può contenere»: dipende dalla ricetta o da attrezzature condivise.',
    de: 'Ein durchgezogenes rotes Etikett heißt: Allergen enthalten. Ein gestricheltes graues Etikett heißt „kann Spuren enthalten“ — je nach Rezeptur oder gemeinsam genutztem Gerät.',
    ru: 'Сплошная красная метка — аллерген присутствует. Пунктирная серая — «может содержать»: зависит от рецептуры или общего оборудования.'
  },
  'howto.3.t': { uk: 'Сет-меню', en: 'Set menus', es: 'Menús cerrados', it: 'Menu fissi', de: 'Set-Menüs', ru: 'Сет-меню' },
  'howto.3.d': {
    uk: 'Унизу сторінок бранчу, ланчу й вечері — склад сет-меню з посиланнями на картки відповідних страв.',
    en: 'At the bottom of the brunch, lunch and dinner pages you will find the set menus, linked to the corresponding dish cards.',
    es: 'Al final de las páginas de brunch, almuerzo y cena están los menús cerrados, enlazados a las fichas de cada plato.',
    it: 'In fondo alle pagine di brunch, pranzo e cena trovate i menu fissi, collegati alle schede dei singoli piatti.',
    de: 'Am Ende der Brunch-, Lunch- und Dinner-Seiten finden Sie die Set-Menüs, verlinkt mit den jeweiligen Gerichtskarten.',
    ru: 'Внизу страниц бранча, ланча и ужина — состав сет-меню со ссылками на карточки соответствующих блюд.'
  },

  /* -------------------------------------------------------- page leads --- */
  'page.brunch.lead': {
    uk: 'Бранч-позиції та бенедикти, недільний ростбіф, повна стейкова карта, морепродукти й гарніри.',
    en: 'Brunch plates and Benedicts, the Sunday roast, the full steak list, shellfish and side dishes.',
    es: 'Platos de brunch y benedictinos, el asado dominical, toda la carta de carnes, mariscos y guarniciones.',
    it: 'Piatti del brunch e uova alla Benedict, l’arrosto della domenica, tutta la carta delle bistecche, crostacei e contorni.',
    de: 'Brunch-Gerichte und Benedicts, der Sunday Roast, die komplette Steakkarte, Meeresfrüchte und Beilagen.',
    ru: 'Бранч-позиции и бенедикты, воскресный ростбиф, полная стейковая карта, морепродукты и гарниры.'
  },
  'page.lunch.lead': {
    uk: 'Закуски, салати, основні страви, стейки сухого визрівання, морепродукти та гарніри.',
    en: 'Starters, salads, main courses, dry-aged steaks, shellfish and side dishes.',
    es: 'Entrantes, ensaladas, platos principales, carnes maduradas en seco, mariscos y guarniciones.',
    it: 'Antipasti, insalate, secondi, bistecche frollate, crostacei e contorni.',
    de: 'Vorspeisen, Salate, Hauptgerichte, Dry-Aged-Steaks, Meeresfrüchte und Beilagen.',
    ru: 'Закуски, салаты, основные блюда, стейки сухого вызревания, морепродукты и гарниры.'
  },
  'page.dinner.lead': {
    uk: 'Вечірня карта: те саме ядро, що й ланч, без бургера з курячим філе та стейк-сендвіча.',
    en: 'The evening list: the same core as lunch, without the chicken fillet burger and the steak sandwich.',
    es: 'La carta de la cena: la misma base que el almuerzo, sin la hamburguesa de pollo ni el sándwich de carne.',
    it: 'La carta della sera: la stessa base del pranzo, senza il burger di pollo e il panino con la bistecca.',
    de: 'Die Abendkarte: dieselbe Basis wie mittags, ohne Chicken-Burger und Steak-Sandwich.',
    ru: 'Вечерняя карта: то же ядро, что и ланч, без бургера с куриным филе и стейк-сэндвича.'
  },
  'page.drinks.title': {
    uk: 'Бар і винна карта', en: 'Bar & Wine List', es: 'Bar y carta de vinos',
    it: 'Bar e carta dei vini', de: 'Bar & Weinkarte', ru: 'Бар и винная карта'
  },
  'page.drinks.lead': {
    uk: 'Коктейлі, мартіні й мангеттени, Bloody Marys, bottomless brunch, безалкогольні коктейлі та вина за келихом — зі складом і алергенами.',
    en: 'Cocktails, martinis and manhattans, Bloody Marys, bottomless brunch, virgin cocktails and wines by the glass — with ingredients and allergens.',
    es: 'Cócteles, martinis y manhattans, Bloody Marys, brunch ilimitado, cócteles sin alcohol y vinos por copa — con ingredientes y alérgenos.',
    it: 'Cocktail, martini e manhattan, Bloody Mary, brunch illimitato, cocktail analcolici e vini al bicchiere — con ingredienti e allergeni.',
    de: 'Cocktails, Martinis und Manhattans, Bloody Marys, Bottomless Brunch, alkoholfreie Cocktails und Weine im Glas — mit Zutaten und Allergenen.',
    ru: 'Коктейли, мартини и манхэттены, Bloody Marys, bottomless brunch, безалкогольные коктейли и вина по бокалам — с составом и аллергенами.'
  },
  'page.allergens.title': {
    uk: 'Алергени', en: 'Allergens', es: 'Alérgenos', it: 'Allergeni', de: 'Allergene', ru: 'Аллергены'
  },
  'page.allergens.lead': {
    uk: 'Зведена таблиця: усі страви та напої × 14 обов’язкових алергенів.',
    en: 'The full table: every dish and drink × the 14 mandatory allergens.',
    es: 'La tabla completa: cada plato y bebida × los 14 alérgenos obligatorios.',
    it: 'La tabella completa: ogni piatto e bevanda × i 14 allergeni obbligatori.',
    de: 'Die vollständige Tabelle: jedes Gericht und Getränk × die 14 Pflichtallergene.',
    ru: 'Сводная таблица: все блюда и напитки × 14 обязательных аллергенов.'
  },
  'legend.contains': { uk: 'містить', en: 'contains', es: 'contiene', it: 'contiene', de: 'enthält', ru: 'содержит' },
  'legend.may':      { uk: 'може містити', en: 'may contain', es: 'puede contener', it: 'può contenere', de: 'kann enthalten', ru: 'может содержать' },

  /* ---------------------------------------------------------- notices --- */
  'notice.home': {
    uk: '<b>Важливо.</b> Цей довідник складено за описами в меню та стандартними рецептурами. Він <b>не</b> замінює офіційну декларацію алергенів ресторану. Якщо у вас алергія або непереносимість — обов’язково повідомте офіціанта перед замовленням.',
    en: '<b>Important.</b> This guide is compiled from the menu descriptions and standard recipes. It does <b>not</b> replace the restaurant’s official allergen statement. If you have an allergy or intolerance, please tell your server before ordering.',
    es: '<b>Importante.</b> Esta guía se ha elaborado a partir de las descripciones de la carta y de recetas estándar. <b>No</b> sustituye la declaración oficial de alérgenos del restaurante. Si tiene alguna alergia o intolerancia, indíquelo al camarero antes de pedir.',
    it: '<b>Importante.</b> Questa guida è ricavata dalle descrizioni del menu e da ricette standard. <b>Non</b> sostituisce la dichiarazione ufficiale degli allergeni del ristorante. In caso di allergie o intolleranze, informate il personale prima di ordinare.',
    de: '<b>Wichtig.</b> Dieser Führer beruht auf den Menübeschreibungen und Standardrezepturen. Er ersetzt <b>nicht</b> die offizielle Allergenerklärung des Restaurants. Bei Allergien oder Unverträglichkeiten informieren Sie bitte vor der Bestellung das Servicepersonal.',
    ru: '<b>Важно.</b> Этот справочник составлен по описаниям в меню и стандартным рецептурам. Он <b>не</b> заменяет официальную декларацию аллергенов ресторана. Если у вас аллергия или непереносимость — обязательно сообщите официанту перед заказом.'
  },
  'notice.menu': {
    uk: '<b>Нагадування.</b> Склад відновлено за описами меню. Пунктирні мітки означають «може містити». Про будь-яку алергію повідомте офіціанта перед замовленням.',
    en: '<b>A reminder.</b> Ingredients are reconstructed from the menu descriptions. Dashed tags mean “may contain”. Please tell your server about any allergy before ordering.',
    es: '<b>Recordatorio.</b> Los ingredientes se han reconstruido a partir de las descripciones de la carta. Las etiquetas discontinuas significan «puede contener». Informe al camarero de cualquier alergia antes de pedir.',
    it: '<b>Promemoria.</b> Gli ingredienti sono ricostruiti dalle descrizioni del menu. Le etichette tratteggiate indicano «può contenere». Segnalate eventuali allergie prima di ordinare.',
    de: '<b>Hinweis.</b> Die Zutaten sind aus den Menübeschreibungen rekonstruiert. Gestrichelte Etiketten bedeuten „kann Spuren enthalten“. Bitte melden Sie Allergien vor der Bestellung.',
    ru: '<b>Напоминание.</b> Состав восстановлен по описаниям меню. Пунктирные метки означают «может содержать». О любой аллергии сообщите официанту перед заказом.'
  },
  'notice.drinks': {
    uk: '<b>Три речі, про які питають найчастіше.</b> Коктейлі Cherry Blossom, Almost Fit і Whiskey Melon містять <b>сирий яєчний білок</b>. Усі Bloody Marys містять вустерський соус — це <b>анчоуси</b> (риба) і зазвичай солод (глютен). Усі вина, ігристі та сидр містять <b>сульфіти</b>.',
    en: '<b>The three questions we get most.</b> Cherry Blossom, Almost Fit and Whiskey Melon contain <b>raw egg white</b>. Every Bloody Mary contains Worcestershire sauce — that means <b>anchovies</b> (fish) and usually malt (gluten). All wines, sparkling wines and cider contain <b>sulphites</b>.',
    es: '<b>Las tres preguntas más frecuentes.</b> Cherry Blossom, Almost Fit y Whiskey Melon llevan <b>clara de huevo cruda</b>. Todos los Bloody Marys llevan salsa Worcestershire: eso significa <b>anchoas</b> (pescado) y normalmente malta (gluten). Todos los vinos, espumosos y la sidra contienen <b>sulfitos</b>.',
    it: '<b>Le tre domande più frequenti.</b> Cherry Blossom, Almost Fit e Whiskey Melon contengono <b>albume crudo</b>. Tutti i Bloody Mary contengono salsa Worcestershire: quindi <b>acciughe</b> (pesce) e di norma malto (glutine). Tutti i vini, gli spumanti e il sidro contengono <b>solfiti</b>.',
    de: '<b>Die drei häufigsten Fragen.</b> Cherry Blossom, Almost Fit und Whiskey Melon enthalten <b>rohes Eiweiß</b>. Jeder Bloody Mary enthält Worcestershire-Sauce — also <b>Sardellen</b> (Fisch) und meist Malz (Gluten). Alle Weine, Schaumweine und der Cider enthalten <b>Sulfite</b>.',
    ru: '<b>Три вопроса, которые задают чаще всего.</b> Коктейли Cherry Blossom, Almost Fit и Whiskey Melon содержат <b>сырой яичный белок</b>. Все Bloody Marys содержат вустерский соус — это <b>анчоусы</b> (рыба) и обычно солод (глютен). Все вина, игристые и сидр содержат <b>сульфиты</b>.'
  },
  'notice.allergens': {
    uk: '<b>Статус документа.</b> Це реконструкція складу за описами в меню й типовими рецептурами, а не офіційна декларація алергенів ресторану. Позиції, у яких алергенів не заявлено, усе одно готуються на спільному обладнанні. Остаточну відповідь дасть кухня — просто скажіть офіціанту про свою алергію.',
    en: '<b>Status of this document.</b> It is a reconstruction based on the menu descriptions and typical recipes, not the restaurant’s official allergen statement. Even items with no allergens listed are prepared on shared equipment. The kitchen has the final word — simply tell your server about your allergy.',
    es: '<b>Estado de este documento.</b> Es una reconstrucción basada en las descripciones de la carta y en recetas habituales, no la declaración oficial de alérgenos del restaurante. Incluso los platos sin alérgenos declarados se preparan con equipos compartidos. La última palabra la tiene la cocina: comunique su alergia al camarero.',
    it: '<b>Stato del documento.</b> È una ricostruzione basata sulle descrizioni del menu e su ricette tipiche, non la dichiarazione ufficiale degli allergeni del ristorante. Anche le voci senza allergeni dichiarati sono preparate su attrezzature condivise. L’ultima parola spetta alla cucina: segnalate la vostra allergia al personale.',
    de: '<b>Status dieses Dokuments.</b> Es ist eine Rekonstruktion aus Menübeschreibungen und typischen Rezepturen, nicht die offizielle Allergenerklärung des Restaurants. Auch Positionen ohne aufgeführte Allergene werden auf gemeinsam genutztem Gerät zubereitet. Das letzte Wort hat die Küche — sagen Sie dem Service einfach Bescheid.',
    ru: '<b>Статус документа.</b> Это реконструкция состава по описаниям в меню и типовым рецептурам, а не официальная декларация аллергенов ресторана. Даже позиции без заявленных аллергенов готовятся на общем оборудовании. Окончательный ответ даст кухня — просто скажите официанту о своей аллергии.'
  },

  /* ---------------------------------------------------------- toolbar --- */
  'tb.search': {
    uk: 'Пошук за назвою або складником…', en: 'Search by name or ingredient…',
    es: 'Buscar por nombre o ingrediente…',  it: 'Cerca per nome o ingrediente…',
    de: 'Nach Name oder Zutat suchen…',      ru: 'Поиск по названию или ингредиенту…'
  },
  'tb.searchDrinks': {
    uk: 'Пошук за назвою напою або інгредієнтом…', en: 'Search by drink name or ingredient…',
    es: 'Buscar por bebida o ingrediente…',        it: 'Cerca per bevanda o ingrediente…',
    de: 'Nach Getränk oder Zutat suchen…',         ru: 'Поиск по названию напитка или ингредиенту…'
  },
  'tb.searchTable': {
    uk: 'Пошук позиції у таблиці…', en: 'Search the table…', es: 'Buscar en la tabla…',
    it: 'Cerca nella tabella…',     de: 'Tabelle durchsuchen…', ru: 'Поиск позиции в таблице…'
  },
  'tb.filter': {
    uk: 'Фільтр алергенів', en: 'Allergen filter', es: 'Filtro de alérgenos',
    it: 'Filtro allergeni', de: 'Allergenfilter',  ru: 'Фильтр аллергенов'
  },
  'tb.hint': {
    uk: 'Позначте алергени, яких уникаєте — позиції з ними приглушаться. Мітки «може містити» враховуються теж.',
    en: 'Tick the allergens you avoid — matching items are dimmed. “May contain” tags are counted too.',
    es: 'Marque los alérgenos que evita: los platos correspondientes se atenúan. Las etiquetas «puede contener» también cuentan.',
    it: 'Selezionate gli allergeni che evitate: le voci corrispondenti si attenuano. Anche le etichette «può contenere» vengono considerate.',
    de: 'Markieren Sie die Allergene, die Sie meiden — passende Positionen werden abgeblendet. „Kann Spuren enthalten“ zählt mit.',
    ru: 'Отметьте аллергены, которых избегаете, — позиции с ними приглушатся. Метки «может содержать» учитываются тоже.'
  },
  'tb.clear': {
    uk: 'Скинути фільтри', en: 'Clear filters', es: 'Borrar filtros',
    it: 'Azzera i filtri', de: 'Filter zurücksetzen', ru: 'Сбросить фильтры'
  },
  'tb.flagged': {
    uk: 'з відміченими алергенами', en: 'with the selected allergens',
    es: 'con los alérgenos marcados', it: 'con gli allergeni selezionati',
    de: 'mit den markierten Allergenen', ru: 'с отмеченными аллергенами'
  },

  /* ------------------------------------------------------- dish card --- */
  'dish.ingredients': { uk: 'Склад', en: 'Ingredients', es: 'Ingredientes', it: 'Ingredienti', de: 'Zutaten', ru: 'Состав' },
  'dish.allergens':   { uk: 'Алергени', en: 'Allergens', es: 'Alérgenos', it: 'Allergeni', de: 'Allergene', ru: 'Аллергены' },
  'dish.may':         { uk: 'Може містити', en: 'May contain', es: 'Puede contener', it: 'Può contenere', de: 'Kann enthalten', ru: 'Может содержать' },
  'dish.none':        { uk: '✓ немає заявлених', en: '✓ none declared', es: '✓ ninguno declarado', it: '✓ nessuno dichiarato', de: '✓ keine angegeben', ru: '✓ нет заявленных' },
  'dish.noPrice':     { uk: 'ціну уточніть у офіціанта', en: 'ask your server for the price', es: 'consulte el precio al camarero', it: 'chiedete il prezzo al personale', de: 'Preis bitte erfragen', ru: 'цену уточните у официанта' },

  /* -------------------------------------------------------- set menu --- */
  'set.title':  { uk: 'Сет-меню', en: 'Set Menu', es: 'Menú cerrado', it: 'Menu fisso', de: 'Set-Menü', ru: 'Сет-меню' },
  'set.brunch': { uk: 'Бранч сет-меню', en: 'Brunch Set Menu', es: 'Menú de brunch', it: 'Menu brunch', de: 'Brunch Set-Menü', ru: 'Бранч сет-меню' },
  'set.price':  {
    uk: 'Дві страви 28.00 · Три страви 32.00', en: 'Two courses 28.00 · Three courses 32.00',
    es: 'Dos platos 28.00 · Tres platos 32.00', it: 'Due portate 28.00 · Tre portate 32.00',
    de: 'Zwei Gänge 28.00 · Drei Gänge 32.00',  ru: 'Два блюда 28.00 · Три блюда 32.00'
  },
  'set.hours.main': {
    uk: 'Понеділок і неділя 12:00–22:00 · Вівторок–субота 12:00–17:30',
    en: 'Monday & Sunday 12:00–22:00 · Tuesday–Saturday 12:00–17:30',
    es: 'Lunes y domingo 12:00–22:00 · Martes a sábado 12:00–17:30',
    it: 'Lunedì e domenica 12:00–22:00 · Martedì–sabato 12:00–17:30',
    de: 'Montag & Sonntag 12:00–22:00 · Dienstag–Samstag 12:00–17:30',
    ru: 'Понедельник и воскресенье 12:00–22:00 · Вторник–суббота 12:00–17:30'
  },
  'set.hours.brunch': {
    uk: 'Субота і неділя 12:00–16:30', en: 'Saturday & Sunday 12:00–16:30',
    es: 'Sábado y domingo 12:00–16:30', it: 'Sabato e domenica 12:00–16:30',
    de: 'Samstag & Sonntag 12:00–16:30', ru: 'Суббота и воскресенье 12:00–16:30'
  },
  'set.supplement': {
    uk: '250 г New Zealand Grain-Fed Sirloin — доплата £10.00',
    en: '250g New Zealand Grain-Fed Sirloin — £10.00 supplement applies',
    es: '250 g New Zealand Grain-Fed Sirloin — suplemento de £10.00',
    it: '250 g New Zealand Grain-Fed Sirloin — supplemento di £10.00',
    de: '250 g New Zealand Grain-Fed Sirloin — Aufpreis £10.00',
    ru: '250 г New Zealand Grain-Fed Sirloin — доплата £10.00'
  },
  'course.starters': { uk: 'Закуски', en: 'Starters', es: 'Entrantes', it: 'Antipasti', de: 'Vorspeisen', ru: 'Закуски' },
  'course.mains':    { uk: 'Основні страви', en: 'Main Courses', es: 'Principales', it: 'Secondi', de: 'Hauptgänge', ru: 'Основные блюда' },
  'course.desserts': { uk: 'Десерти', en: 'Desserts', es: 'Postres', it: 'Dolci', de: 'Desserts', ru: 'Десерты' },

  /* ---------------------------------------------------------- matrix --- */
  'matrix.item': { uk: 'Позиція', en: 'Item', es: 'Plato', it: 'Voce', de: 'Position', ru: 'Позиция' },
  'matrix.title': { uk: 'Повна матриця', en: 'Full matrix', es: 'Matriz completa', it: 'Matrice completa', de: 'Vollständige Matrix', ru: 'Полная матрица' },
  'matrix.sub': {
    uk: 'Усі позиції меню та бару', en: 'Every item from the menu and the bar',
    es: 'Todos los platos de la carta y del bar', it: 'Tutte le voci del menu e del bar',
    de: 'Alle Positionen aus Menü und Bar', ru: 'Все позиции меню и бара'
  },
  'matrix.note': {
    uk: 'Наведіть курсор на шапку колонки, щоб побачити повну назву алергена. Таблиця прокручується вбік; перша колонка зафіксована.',
    en: 'Hover a column header to see the full allergen name. The table scrolls sideways; the first column stays fixed.',
    es: 'Pase el cursor por la cabecera de una columna para ver el nombre completo del alérgeno. La tabla se desplaza lateralmente; la primera columna queda fija.',
    it: 'Passate il cursore sull’intestazione di una colonna per il nome completo dell’allergene. La tabella scorre lateralmente; la prima colonna resta fissa.',
    de: 'Fahren Sie über eine Spaltenüberschrift, um den vollen Allergennamen zu sehen. Die Tabelle scrollt seitlich; die erste Spalte bleibt fixiert.',
    ru: 'Наведите курсор на шапку колонки, чтобы увидеть полное название аллергена. Таблица прокручивается вбок; первая колонка зафиксирована.'
  },
  'legend.title': { uk: '14 алергенів', en: 'The 14 allergens', es: 'Los 14 alérgenos', it: 'I 14 allergeni', de: 'Die 14 Allergene', ru: '14 аллергенов' },
  'legend.sub': {
    uk: 'Довідка · цифри = «містить / може містити»', en: 'Reference · numbers = “contains / may contain”',
    es: 'Referencia · cifras = «contiene / puede contener»', it: 'Riferimento · numeri = «contiene / può contenere»',
    de: 'Übersicht · Zahlen = „enthält / kann enthalten“', ru: 'Справка · цифры = «содержит / может содержать»'
  },

  /* ------------------------------------------------------- tips cards --- */
  'tips.title': { uk: 'Що варто знати', en: 'Worth knowing', es: 'Conviene saber', it: 'Da sapere', de: 'Gut zu wissen', ru: 'Что стоит знать' },
  'tips.sub': {
    uk: 'Кілька речей, які легко пропустити', en: 'A few things that are easy to miss',
    es: 'Algunas cosas fáciles de pasar por alto', it: 'Alcune cose facili da non notare',
    de: 'Ein paar leicht zu übersehende Dinge', ru: 'Несколько вещей, которые легко пропустить'
  },
  'tip.1.t': { uk: 'Вустерський соус — це риба', en: 'Worcestershire sauce means fish', es: 'La salsa Worcestershire lleva pescado', it: 'La salsa Worcestershire contiene pesce', de: 'Worcestershire-Sauce bedeutet Fisch', ru: 'Вустерский соус — это рыба' },
  'tip.1.d': {
    uk: 'Анчоуси є в соусі «Цезар», тартарі, коктейльному соусі та в усіх Bloody Marys.',
    en: 'Anchovies are in the Caesar dressing, the tartare, the cocktail sauce and every Bloody Mary.',
    es: 'Hay anchoas en la salsa César, en el tartar, en la salsa cóctel y en todos los Bloody Marys.',
    it: 'Le acciughe sono nella salsa Caesar, nella tartare, nella salsa cocktail e in tutti i Bloody Mary.',
    de: 'Sardellen stecken im Caesar-Dressing, im Tatar, in der Cocktailsauce und in jedem Bloody Mary.',
    ru: 'Анчоусы есть в соусе «Цезарь», тартаре, коктейльном соусе и во всех Bloody Marys.'
  },
  'tip.2.t': { uk: 'Соус XO — ракоподібні та молюски', en: 'XO sauce means crustaceans and molluscs', es: 'La salsa XO lleva crustáceos y moluscos', it: 'La salsa XO contiene crostacei e molluschi', de: 'XO-Sauce bedeutet Krebs- und Weichtiere', ru: 'Соус XO — ракообразные и моллюски' },
  'tip.2.d': {
    uk: 'Сушені креветки та в’ялений гребінець. Соус є у креветках із чилі й у броколіні — гарнірі, який виглядає суто овочевим.',
    en: 'Dried shrimp and cured scallop. It is in the chilli shrimp and in the tenderstem broccoli — a side that looks purely vegetable.',
    es: 'Gambas secas y vieira curada. Está en las gambas al chile y en el brócoli — una guarnición que parece puramente vegetal.',
    it: 'Gamberi essiccati e capasanta stagionata. È nei gamberi al peperoncino e nei broccoli — un contorno che sembra solo vegetale.',
    de: 'Getrocknete Garnelen und gepökelte Jakobsmuschel. Sie steckt in den Chili-Garnelen und im Brokkoli — einer Beilage, die rein pflanzlich wirkt.',
    ru: 'Сушёные креветки и вяленый гребешок. Соус есть в креветках с чили и в брокколини — гарнире, который выглядит чисто овощным.'
  },
  'tip.3.t': { uk: 'Спільний фритюр', en: 'Shared fryer', es: 'Freidora compartida', it: 'Friggitrice condivisa', de: 'Gemeinsame Fritteuse', ru: 'Общий фритюр' },
  'tip.3.d': {
    uk: 'Картопля фрі, cajun fries, хеш-браун і цибулеві кільця смажаться поруч із паніровкою — для суворої безглютенової дієти це ризик.',
    en: 'Fries, cajun fries, hash brown and onion rings are fried alongside breaded items — a risk on a strict gluten-free diet.',
    es: 'Las patatas, las cajun fries, el hash brown y los aros de cebolla se fríen junto a productos empanados: un riesgo en una dieta estricta sin gluten.',
    it: 'Patatine, cajun fries, hash brown e anelli di cipolla friggono insieme a prodotti impanati: un rischio con una dieta rigorosamente senza glutine.',
    de: 'Pommes, Cajun Fries, Hash Brown und Zwiebelringe werden zusammen mit paniertem Gut frittiert — ein Risiko bei strikt glutenfreier Ernährung.',
    ru: 'Картофель фри, cajun fries, хеш-браун и луковые кольца жарятся рядом с панировкой — для строгой безглютеновой диеты это риск.'
  },
  'tip.4.t': { uk: 'Стейк ≠ «без алергенів»', en: 'A steak is not automatically allergen-free', es: 'Un filete no está libre de alérgenos por defecto', it: 'Una bistecca non è automaticamente priva di allergeni', de: 'Ein Steak ist nicht automatisch allergenfrei', ru: 'Стейк ≠ «без аллергенов»' },
  'tip.4.d': {
    uk: 'Саме м’ясо чисте, але стейки часто фінішують вершковим маслом, а соуси й доповнення додають молоко, яйця та сульфіти.',
    en: 'The meat itself is clean, but steaks are often finished with butter, and the sauces and additions bring milk, eggs and sulphites.',
    es: 'La carne en sí es limpia, pero los filetes suelen terminarse con mantequilla, y las salsas y guarniciones aportan leche, huevo y sulfitos.',
    it: 'La carne in sé è pulita, ma le bistecche sono spesso rifinite al burro e salse e aggiunte portano latte, uova e solfiti.',
    de: 'Das Fleisch selbst ist unbedenklich, doch Steaks werden oft mit Butter vollendet, und Saucen und Beigaben bringen Milch, Ei und Sulfite mit.',
    ru: 'Само мясо чистое, но стейки часто финишируют сливочным маслом, а соусы и дополнения добавляют молоко, яйца и сульфиты.'
  },
  'tip.5.t': { uk: 'Місо містить злаки', en: 'Miso contains cereals', es: 'El miso contiene cereales', it: 'Il miso contiene cereali', de: 'Miso enthält Getreide', ru: 'Мисо содержит злаки' },
  'tip.5.d': {
    uk: 'Глазур на брукві до каре ягняти — це соя і майже завжди ще ячмінь або рис.',
    en: 'The glaze on the swede served with the lamb rack is soya and almost always barley or rice as well.',
    es: 'El glaseado del nabo que acompaña al costillar de cordero lleva soja y, casi siempre, también cebada o arroz.',
    it: 'La glassa della rapa svedese servita con il carré d’agnello è a base di soia e quasi sempre anche orzo o riso.',
    de: 'Die Glasur der Steckrübe zum Lammkarree besteht aus Soja und fast immer auch aus Gerste oder Reis.',
    ru: 'Глазурь на брюкве к каре ягнёнка — это соя и почти всегда ещё ячмень или рис.'
  },
  'tip.6.t': { uk: 'Сирі позиції', en: 'Raw items', es: 'Platos crudos', it: 'Piatti crudi', de: 'Rohe Speisen', ru: 'Сырые позиции' },
  'tip.6.d': {
    uk: 'Тартар, карпачо, татакі з лосося та устриці подаються сирими або майже сирими — це варто врахувати вагітним, дітям і людям зі зниженим імунітетом.',
    en: 'The tartare, carpaccio, salmon tataki and oysters are served raw or nearly raw — worth considering if you are pregnant, very young or immunocompromised.',
    es: 'El tartar, el carpaccio, el tataki de salmón y las ostras se sirven crudos o casi crudos: tenerlo en cuenta en embarazo, infancia o inmunidad reducida.',
    it: 'Tartare, carpaccio, tataki di salmone e ostriche sono serviti crudi o quasi: da valutare in gravidanza, per i bambini o con difese immunitarie ridotte.',
    de: 'Tatar, Carpaccio, Lachs-Tataki und Austern werden roh oder fast roh serviert — relevant in der Schwangerschaft, für Kinder und bei geschwächtem Immunsystem.',
    ru: 'Тартар, карпаччо, татаки из лосося и устрицы подаются сырыми или почти сырыми — это стоит учесть беременным, детям и людям со сниженным иммунитетом.'
  },

  /* ---------------------------------------------------------- footer --- */
  'footer.back': { uk: '← До всіх меню', en: '← Back to all menus', es: '← Volver a los menús', it: '← Torna ai menu', de: '← Zurück zu allen Menüs', ru: '← Ко всем меню' },
  'footer.prices': {
    uk: 'Ціни у фунтах, включають ПДВ. Може додаватися 15% сервісного збору.',
    en: 'Prices in pounds, VAT included. A discretionary 15% service charge may apply.',
    es: 'Precios en libras, IVA incluido. Puede aplicarse un cargo por servicio del 15%.',
    it: 'Prezzi in sterline, IVA inclusa. Può essere applicato un servizio facoltativo del 15%.',
    de: 'Preise in Pfund, inkl. MwSt. Es kann ein freiwilliger Servicezuschlag von 15% anfallen.',
    ru: 'Цены в фунтах, включают НДС. Может добавляться 15% сервисного сбора.'
  },
  'footer.name': {
    uk: 'Довідник меню та бару для гостей', en: 'Menu & bar guide for guests',
    es: 'Guía de menú y bar para huéspedes', it: 'Guida a menu e bar per gli ospiti',
    de: 'Menü- und Barführer für Gäste', ru: 'Справочник меню и бара для гостей'
  },

  /* ----------------------------------------------------------- warns --- */
  'warn.raw': {
    uk: 'Подається сирим.', en: 'Served raw.', es: 'Se sirve crudo.',
    it: 'Servito crudo.', de: 'Wird roh serviert.', ru: 'Подаётся сырым.'
  },
  'warn.nearlyRaw': {
    uk: 'Подається практично сирим.', en: 'Served all but raw.', es: 'Se sirve prácticamente crudo.',
    it: 'Servito quasi crudo.', de: 'Wird nahezu roh serviert.', ru: 'Подаётся практически сырым.'
  },
  'warn.oystersRaw': {
    uk: 'Устриці подаються сирими.', en: 'The oysters are served raw.', es: 'Las ostras se sirven crudas.',
    it: 'Le ostriche sono servite crude.', de: 'Die Austern werden roh serviert.', ru: 'Устрицы подаются сырыми.'
  },
  'warn.servedRaw': {
    uk: 'Подаються сирими.', en: 'Served raw.', es: 'Se sirven crudas.',
    it: 'Servite crude.', de: 'Werden roh serviert.', ru: 'Подаются сырыми.'
  },
  'warn.steak': {
    uk: 'Саме м’ясо алергенів не містить, але стейки часто фінішують вершковим маслом і готуються на спільному грилі. Соуси й доповнення рахуйте окремо.',
    en: 'The meat itself contains no allergens, but steaks are often finished with butter and cooked on a shared grill. Sauces and additions count separately.',
    es: 'La carne en sí no contiene alérgenos, pero los filetes suelen terminarse con mantequilla y se hacen en una parrilla compartida. Las salsas y guarniciones cuentan aparte.',
    it: 'La carne in sé non contiene allergeni, ma le bistecche sono spesso rifinite al burro e cotte su una griglia condivisa. Salse e aggiunte contano a parte.',
    de: 'Das Fleisch selbst enthält keine Allergene, doch Steaks werden häufig mit Butter vollendet und auf einem gemeinsamen Grill gegart. Saucen und Beigaben zählen separat.',
    ru: 'Само мясо аллергенов не содержит, но стейки часто финишируют сливочным маслом и готовятся на общем гриле. Соусы и дополнения считайте отдельно.'
  },
  'warn.sharedFryer': {
    uk: 'Спільний фритюр із паніруваними стравами.', en: 'Shared fryer with breaded items.',
    es: 'Freidora compartida con productos empanados.', it: 'Friggitrice condivisa con prodotti impanati.',
    de: 'Gemeinsame Fritteuse mit paniertem Gut.', ru: 'Общий фритюр с панированными блюдами.'
  },
  'warn.steamedOption': {
    uk: 'На парі — без вершкового масла. Скажіть, який варіант вам потрібен.',
    en: 'Steamed comes without butter — just say which version you would like.',
    es: 'Al vapor va sin mantequilla: indique qué versión prefiere.',
    it: 'Al vapore è senza burro: indicate quale versione preferite.',
    de: 'Gedämpft kommt ohne Butter — sagen Sie einfach, welche Variante Sie möchten.',
    ru: 'На пару — без сливочного масла. Скажите, какой вариант вам нужен.'
  },
  'warn.lobsterOnly': {
    uk: 'Ракоподібні — лише у версії з лобстером.', en: 'Crustaceans apply to the lobster version only.',
    es: 'Los crustáceos solo en la versión con bogavante.', it: 'I crostacei riguardano solo la versione con astice.',
    de: 'Krebstiere betreffen nur die Hummer-Variante.', ru: 'Ракообразные — только в версии с лобстером.'
  },
  'warn.iceCreamVaries': {
    uk: 'Склад залежить від смаку дня. Сорбети зазвичай без молока.',
    en: 'The ingredients depend on the flavour of the day. Sorbets are usually dairy-free.',
    es: 'Los ingredientes dependen del sabor del día. Los sorbetes suelen ser sin lácteos.',
    it: 'Gli ingredienti dipendono dal gusto del giorno. I sorbetti sono di norma senza latticini.',
    de: 'Die Zutaten hängen von der Sorte des Tages ab. Sorbets sind meist milchfrei.',
    ru: 'Состав зависит от вкуса дня. Сорбеты обычно без молока.'
  },
  'warn.coconut': {
    uk: 'Кокос не входить до 14 алергенів ЄС, але в США класифікується як горіх. Кокосовий крем іноді містить молочні похідні.',
    en: 'Coconut is not one of the 14 EU allergens but is classed as a tree nut in the US. Coconut cream sometimes contains dairy derivatives.',
    es: 'El coco no figura entre los 14 alérgenos de la UE, pero en EE. UU. se clasifica como fruto seco. La crema de coco a veces contiene derivados lácteos.',
    it: 'Il cocco non rientra nei 14 allergeni UE ma negli USA è classificato come frutta a guscio. La crema di cocco talvolta contiene derivati del latte.',
    de: 'Kokos zählt nicht zu den 14 EU-Allergenen, gilt in den USA aber als Schalenfrucht. Kokoscreme enthält mitunter Milchderivate.',
    ru: 'Кокос не входит в 14 аллергенов ЕС, но в США классифицируется как орех. Кокосовый крем иногда содержит молочные производные.'
  },
  'warn.rawEggWhite': {
    uk: 'Містить сирий яєчний білок.', en: 'Contains raw egg white.', es: 'Contiene clara de huevo cruda.',
    it: 'Contiene albume crudo.', de: 'Enthält rohes Eiweiß.', ru: 'Содержит сырой яичный белок.'
  },
  'warn.whiskyBarley': {
    uk: 'Віскі з ячменю зазвичай безпечний після дистиляції, але за суворої целіакії уточніть.',
    en: 'Barley whisky is usually safe after distillation, but do check if you have coeliac disease.',
    es: 'El whisky de cebada suele ser seguro tras la destilación, pero consúltelo si es celíaco.',
    it: 'Il whisky d’orzo è di norma sicuro dopo la distillazione, ma in caso di celiachia chiedete conferma.',
    de: 'Gerstenwhisky ist nach der Destillation meist unbedenklich — bei Zöliakie bitte nachfragen.',
    ru: 'Виски из ячменя обычно безопасен после дистилляции, но при строгой целиакии уточните.'
  },
  'warn.worcestershire': {
    uk: 'Вустерський соус містить анчоуси і зазвичай солод (глютен).',
    en: 'Worcestershire sauce contains anchovies and usually malt (gluten).',
    es: 'La salsa Worcestershire lleva anchoas y normalmente malta (gluten).',
    it: 'La salsa Worcestershire contiene acciughe e di norma malto (glutine).',
    de: 'Worcestershire-Sauce enthält Sardellen und meist Malz (Gluten).',
    ru: 'Вустерский соус содержит анчоусы и обычно солод (глютен).'
  },
  'warn.lowAlcohol': {
    uk: 'Не повністю безалкогольний: 0,5% ABV, плюс ангостура.',
    en: 'Not entirely alcohol-free: 0.5% ABV, plus the Angostura.',
    es: 'No es totalmente sin alcohol: 0,5% ABV, más la Angostura.',
    it: 'Non del tutto analcolico: 0,5% ABV, più l’Angostura.',
    de: 'Nicht völlig alkoholfrei: 0,5 % vol, dazu der Angostura.',
    ru: 'Не полностью безалкогольный: 0,5% ABV, плюс ангостура.'
  },
  'warn.priceMissing': {
    uk: 'Ціну на цю позицію уточніть, будь ласка, у офіціанта.',
    en: 'Please ask your server for the price of this dish.',
    es: 'Consulte el precio de este plato al camarero.',
    it: 'Chiedete al personale il prezzo di questo piatto.',
    de: 'Bitte erfragen Sie den Preis dieses Gerichts beim Service.',
    ru: 'Цену этой позиции уточните, пожалуйста, у официанта.'
  },

  /* --------------------------------------------- official source badges --- */
  'src.official': {
    uk: 'Офіційний лист алергенів ресторану', en: 'Restaurant’s official allergen sheet',
    es: 'Ficha oficial de alérgenos del restaurante', it: 'Scheda allergeni ufficiale del ristorante',
    de: 'Offizielles Allergenblatt des Restaurants', ru: 'Официальный лист аллергенов ресторана'
  },
  'src.reviewed': {
    uk: 'перевірено', en: 'reviewed', es: 'revisada', it: 'verificata', de: 'geprüft', ru: 'проверено'
  },
  'src.reconstructed': {
    uk: 'Реконструйовано з опису в меню — уточніть у офіціанта',
    en: 'Reconstructed from the menu description — please check with your server',
    es: 'Reconstruido a partir de la carta — consúltelo con el camarero',
    it: 'Ricostruito dalla descrizione del menu — chiedete conferma al personale',
    de: 'Aus der Menübeschreibung rekonstruiert — bitte beim Service nachfragen',
    ru: 'Реконструировано по описанию в меню — уточните у официанта'
  },
  'alg.none': {
    uk: 'Без алергенів за офіційним листом', en: 'No allergens per the official sheet',
    es: 'Sin alérgenos según la ficha oficial', it: 'Nessun allergene secondo la scheda ufficiale',
    de: 'Laut offiziellem Blatt keine Allergene', ru: 'Без аллергенов по официальному листу'
  },
  'alg.removable': {
    uk: 'можна прибрати', en: 'can be left out', es: 'se puede quitar',
    it: 'si può togliere', de: 'kann weggelassen werden', ru: 'можно убрать'
  },
  'alg.removableFull': {
    uk: 'Позначка R означає, що цей інгредієнт можна прибрати зі страви — попросіть офіціанта.',
    en: 'An R mark means that ingredient can be left out of the dish — just ask your server.',
    es: 'La marca R indica que ese ingrediente se puede omitir del plato: pídalo al camarero.',
    it: 'La lettera R indica che l’ingrediente può essere escluso dal piatto: chiedetelo al personale.',
    de: 'Ein R bedeutet, dass diese Zutat weggelassen werden kann — sagen Sie es einfach dem Service.',
    ru: 'Метка R означает, что этот ингредиент можно убрать из блюда — попросите официанта.'
  },
  'legend.removable': {
    uk: 'можна прибрати', en: 'removable', es: 'se puede quitar', it: 'rimovibile', de: 'entfernbar', ru: 'можно убрать'
  },

  /* ------------------------------------------------------------ themes --- */
  'theme.label': { uk: 'Тема', en: 'Theme', es: 'Tema', it: 'Tema', de: 'Design', ru: 'Тема' },
  'theme.auto':  { uk: 'Авто', en: 'Auto', es: 'Auto', it: 'Auto', de: 'Auto', ru: 'Авто' },
  'theme.light': { uk: 'Світла', en: 'Light', es: 'Claro', it: 'Chiaro', de: 'Hell', ru: 'Светлая' },
  'theme.dark':  { uk: 'Темна', en: 'Dark', es: 'Oscuro', it: 'Scuro', de: 'Dunkel', ru: 'Тёмная' },

  /* --------------------------------------------------- canapes / extras --- */
  'nav.canapes': { uk: 'Канапе', en: 'Canapés', es: 'Canapés', it: 'Canapé', de: 'Canapés', ru: 'Канапе' },
  'page.canapes.lead': {
    uk: 'Канапе для приватних заходів. Алергени — з офіційного листа ресторану; склад у листі не наводиться, тож назва описує страву.',
    en: 'Canapés for private events. Allergens come from the restaurant’s official sheet; the sheet lists no ingredients, so the name describes the bite.',
    es: 'Canapés para eventos privados. Los alérgenos proceden de la ficha oficial del restaurante; la ficha no detalla ingredientes, por eso el nombre describe el bocado.',
    it: 'Canapé per eventi privati. Gli allergeni provengono dalla scheda ufficiale del ristorante; la scheda non elenca gli ingredienti, quindi è il nome a descrivere il boccone.',
    de: 'Canapés für private Anlässe. Die Allergene stammen aus dem offiziellen Blatt des Restaurants; Zutaten sind dort nicht aufgeführt, daher beschreibt der Name das Häppchen.',
    ru: 'Канапе для частных мероприятий. Аллергены — из официального листа ресторана; состав в листе не приводится, поэтому название описывает закуску.'
  },
  'card.canapes': {
    uk: 'Канапе для приватних заходів — 14 позицій з офіційними алергенами.',
    en: 'Canapés for private events — 14 bites with official allergen data.',
    es: 'Canapés para eventos privados: 14 bocados con datos oficiales de alérgenos.',
    it: 'Canapé per eventi privati: 14 bocconi con dati ufficiali sugli allergeni.',
    de: 'Canapés für private Anlässe — 14 Häppchen mit offiziellen Allergendaten.',
    ru: 'Канапе для частных мероприятий — 14 позиций с официальными аллергенами.'
  },
  'sec.dressings': {
    uk: 'Соуси та заправки', en: 'Sauces & Dressings', es: 'Salsas y aliños',
    it: 'Salse e condimenti', de: 'Saucen & Dressings', ru: 'Соусы и заправки'
  },
  'note.dressings': {
    uk: 'Соуси, які подають до страв і салатів. Дані повністю з офіційного листа.',
    en: 'The sauces served with dishes and salads. Straight from the official sheet.',
    es: 'Las salsas que acompañan a los platos y ensaladas. Directamente de la ficha oficial.',
    it: 'Le salse servite con piatti e insalate. Direttamente dalla scheda ufficiale.',
    de: 'Die Saucen zu Gerichten und Salaten. Direkt aus dem offiziellen Blatt.',
    ru: 'Соусы, которые подают к блюдам и салатам. Полностью из официального листа.'
  },
  'sec.canapes': {
    uk: 'Канапе', en: 'Canapés', es: 'Canapés', it: 'Canapé', de: 'Canapés', ru: 'Канапе'
  },
  'sec.dessertcocktails': {
    uk: 'Десертні коктейлі', en: 'Dessert Cocktails', es: 'Cócteles de postre',
    it: 'Cocktail da dessert', de: 'Dessert-Cocktails', ru: 'Десертные коктейли'
  },
  'note.dessertcocktails': {
    uk: 'Алергени з офіційного листа. Кавові коктейлі містять молоко; сліди глютену можливі через спирти зернового походження.',
    en: 'Allergens from the official sheet. The coffee cocktails contain milk; traces of gluten are possible from grain spirits.',
    es: 'Alérgenos de la ficha oficial. Los cócteles de café llevan leche; son posibles trazas de gluten por destilados de cereal.',
    it: 'Allergeni dalla scheda ufficiale. I cocktail al caffè contengono latte; possibili tracce di glutine dai distillati di cereali.',
    de: 'Allergene aus dem offiziellen Blatt. Die Kaffeecocktails enthalten Milch; Glutenspuren aus Getreidedestillaten sind möglich.',
    ru: 'Аллергены из официального листа. Кофейные коктейли содержат молоко; возможны следы глютена от зерновых спиртов.'
  },
  'note.wines': {
    uk: 'Усі вина, ігристі та сидр містять сульфіти.',
    en: 'All wines, sparkling wines and cider contain sulphites.',
    es: 'Todos los vinos, espumosos y la sidra contienen sulfitos.',
    it: 'Tutti i vini, gli spumanti e il sidro contengono solfiti.',
    de: 'Alle Weine, Schaumweine und der Cider enthalten Sulfite.',
    ru: 'Все вина, игристые и сидр содержат сульфиты.'
  },

  /* ----------------------------------------------------- адмін-панель --- */
  'adm.sub': {
    uk: 'Адмін-панель · години та наявність', en: 'Admin panel · hours and availability',
    es: 'Panel de administración · horarios y disponibilidad',
    it: 'Pannello di amministrazione · orari e disponibilità',
    de: 'Admin-Bereich · Zeiten und Verfügbarkeit',
    ru: 'Админ-панель · часы и наличие'
  },
  'adm.back': {
    uk: '← До меню', en: '← Back to the menu', es: '← Volver a la carta',
    it: '← Torna al menu', de: '← Zurück zum Menü', ru: '← К меню'
  },
  'adm.tab.items':     { uk: 'Позиції', en: 'Items', es: 'Platos', it: 'Voci', de: 'Positionen', ru: 'Позиции' },
  'adm.tab.sections':  { uk: 'Розділи', en: 'Sections', es: 'Secciones', it: 'Sezioni', de: 'Abschnitte', ru: 'Разделы' },
  'adm.tab.pages':     { uk: 'Сторінки', en: 'Pages', es: 'Páginas', it: 'Pagine', de: 'Seiten', ru: 'Страницы' },
  'adm.tab.schedules': { uk: 'Розклади', en: 'Schedules', es: 'Horarios', it: 'Orari', de: 'Zeitpläne', ru: 'Расписания' },

  'adm.search': {
    uk: 'Пошук позиції…', en: 'Find an item…', es: 'Buscar un plato…',
    it: 'Cerca una voce…', de: 'Position suchen…', ru: 'Поиск позиции…'
  },
  'adm.export':    { uk: 'Експортувати overrides.js', en: 'Export overrides.js', es: 'Exportar overrides.js', it: 'Esporta overrides.js', de: 'overrides.js exportieren', ru: 'Экспортировать overrides.js' },
  'adm.publish':   { uk: 'Опублікувати на сервері', en: 'Publish to the server', es: 'Publicar en el servidor', it: 'Pubblica sul server', de: 'Auf dem Server veröffentlichen', ru: 'Опубликовать на сервере' },
  'adm.published': { uk: 'Опубліковано ✓', en: 'Published ✓', es: 'Publicado ✓', it: 'Pubblicato ✓', de: 'Veröffentlicht ✓', ru: 'Опубликовано ✓' },
  'adm.offline':   { uk: 'Сервер недоступний', en: 'Server unreachable', es: 'Servidor no disponible', it: 'Server non raggiungibile', de: 'Server nicht erreichbar', ru: 'Сервер недоступен' },
  'adm.copy':      { uk: 'Скопіювати вміст', en: 'Copy the contents', es: 'Copiar el contenido', it: 'Copia il contenuto', de: 'Inhalt kopieren', ru: 'Скопировать содержимое' },
  'adm.copied':    { uk: 'Скопійовано ✓', en: 'Copied ✓', es: 'Copiado ✓', it: 'Copiato ✓', de: 'Kopiert ✓', ru: 'Скопировано ✓' },
  'adm.selected':  { uk: 'Виділено — Ctrl+C', en: 'Selected — press Ctrl+C', es: 'Seleccionado — Ctrl+C', it: 'Selezionato — Ctrl+C', de: 'Markiert — Strg+C', ru: 'Выделено — Ctrl+C' },
  'adm.reset':     { uk: 'Скинути чернетку', en: 'Discard the draft', es: 'Descartar el borrador', it: 'Scarta la bozza', de: 'Entwurf verwerfen', ru: 'Сбросить черновик' },
  'adm.confirmReset': {
    uk: 'Скинути чернетку до того, що зараз лежить у overrides.js?',
    en: 'Discard the draft and go back to what is in overrides.js?',
    es: '¿Descartar el borrador y volver a lo que hay en overrides.js?',
    it: 'Scartare la bozza e tornare a quanto contenuto in overrides.js?',
    de: 'Entwurf verwerfen und zum Stand in overrides.js zurückkehren?',
    ru: 'Сбросить черновик до того, что сейчас лежит в overrides.js?'
  },

  'adm.notice.summary': {
    uk: 'Як зміни доходять до гостей · про захист сторінки',
    en: 'How changes reach guests · about this page’s security',
    es: 'Cómo llegan los cambios a los clientes · sobre la seguridad de esta página',
    it: 'Come le modifiche arrivano agli ospiti · sulla sicurezza di questa pagina',
    de: 'Wie Änderungen bei den Gästen ankommen · zur Sicherheit dieser Seite',
    ru: 'Как изменения доходят до гостей · о защите страницы'
  },
  'adm.notice.how': {
    uk: '<b>Панель не пише на сервер.</b> Усе, що ви тут міняєте, одразу діє <b>лише у вашому браузері</b> — зручно, щоб подивитися результат. Щоб зміни побачили гості, натисніть <b>Експортувати</b> (або <b>Скопіювати вміст</b>), покладіть це замість <code>assets/overrides.js</code> і запуште — за хвилину сайт оновиться в усіх. <b>Скинути</b> прибирає локальну чернетку.',
    en: '<b>This panel does not write to a server.</b> Everything you change here applies <b>in your browser only</b> — handy for checking the result. To let guests see it, press <b>Export</b> (or <b>Copy the contents</b>), put that in place of <code>assets/overrides.js</code> and push — the site updates for everyone within a minute. <b>Discard</b> clears the local draft.',
    es: '<b>Este panel no escribe en ningún servidor.</b> Todo lo que cambie aquí se aplica <b>solo en su navegador</b>, útil para ver el resultado. Para que lo vean los clientes, pulse <b>Exportar</b> (o <b>Copiar el contenido</b>), póngalo en lugar de <code>assets/overrides.js</code> y haga push: el sitio se actualiza para todos en un minuto. <b>Descartar</b> borra el borrador local.',
    it: '<b>Questo pannello non scrive su un server.</b> Tutto ciò che modificate qui vale <b>solo nel vostro browser</b>: comodo per vedere il risultato. Perché lo vedano gli ospiti, premete <b>Esporta</b> (o <b>Copia il contenuto</b>), mettetelo al posto di <code>assets/overrides.js</code> e fate push: il sito si aggiorna per tutti in un minuto. <b>Scarta</b> cancella la bozza locale.',
    de: '<b>Dieser Bereich schreibt auf keinen Server.</b> Alles, was Sie hier ändern, gilt <b>nur in Ihrem Browser</b> — praktisch zur Kontrolle. Damit Gäste es sehen, auf <b>Exportieren</b> (oder <b>Inhalt kopieren</b>) tippen, das Ergebnis anstelle von <code>assets/overrides.js</code> ablegen und pushen — die Seite aktualisiert sich binnen einer Minute für alle. <b>Verwerfen</b> löscht den lokalen Entwurf.',
    ru: '<b>Панель не пишет на сервер.</b> Всё, что вы здесь меняете, действует <b>только в вашем браузере</b> — удобно, чтобы посмотреть результат. Чтобы изменения увидели гости, нажмите <b>Экспортировать</b> (или <b>Скопировать содержимое</b>), положите это вместо <code>assets/overrides.js</code> и запушьте — через минуту сайт обновится у всех. <b>Сбросить</b> убирает локальный черновик.'
  },
  'adm.notice.security': {
    uk: '<b>Сторінка нічим не захищена.</b> Вона просто не має посилань з меню й закрита від пошуковиків. Хто знає адресу — зайде. Без сервера інакше не буде.',
    en: '<b>This page has no protection.</b> It simply carries no link from the menu and is closed to search engines. Anyone who knows the address can open it. Without a server there is no other way.',
    es: '<b>Esta página no está protegida.</b> Sencillamente no tiene enlaces desde la carta y está cerrada a los buscadores. Quien conozca la dirección entrará. Sin servidor no hay otra forma.',
    it: '<b>Questa pagina non è protetta.</b> Semplicemente non ha collegamenti dal menu ed è chiusa ai motori di ricerca. Chi conosce l’indirizzo entra. Senza server non si può fare altrimenti.',
    de: '<b>Diese Seite ist nicht geschützt.</b> Sie ist lediglich nicht aus dem Menü verlinkt und für Suchmaschinen gesperrt. Wer die Adresse kennt, kommt hinein. Ohne Server geht es nicht anders.',
    ru: '<b>Страница ничем не защищена.</b> Она просто не имеет ссылок из меню и закрыта от поисковиков. Кто знает адрес — зайдёт. Без сервера иначе не будет.'
  },
  'adm.footer': {
    uk: 'Зміни стають видимими для гостей лише після заміни overrides.js у репозиторії.',
    en: 'Changes become visible to guests only once overrides.js is replaced in the repository.',
    es: 'Los cambios solo son visibles para los clientes tras sustituir overrides.js en el repositorio.',
    it: 'Le modifiche diventano visibili agli ospiti solo dopo aver sostituito overrides.js nel repository.',
    de: 'Änderungen werden für Gäste erst sichtbar, wenn overrides.js im Repository ersetzt wurde.',
    ru: 'Изменения становятся видимыми для гостей только после замены overrides.js в репозитории.'
  },

  'adm.state.auto': { uk: 'За розкладом', en: 'On schedule', es: 'Según horario', it: 'Su orario', de: 'Nach Zeitplan', ru: 'По расписанию' },
  'adm.state.on':   { uk: 'Завжди', en: 'Always', es: 'Siempre', it: 'Sempre', de: 'Immer', ru: 'Всегда' },
  'adm.state.off':  { uk: 'Немає', en: 'Off', es: 'Agotado', it: 'Esaurito', de: 'Aus', ru: 'Нет' },

  'adm.mode.dim':   { uk: 'Приглушити', en: 'Dim', es: 'Atenuar', it: 'Attenua', de: 'Abblenden', ru: 'Приглушить' },
  'adm.mode.hide':  { uk: 'Ховати', en: 'Hide', es: 'Ocultar', it: 'Nascondi', de: 'Ausblenden', ru: 'Скрывать' },
  'adm.mode.title': {
    uk: 'Як показувати, коли позиція закрита', en: 'How to show it while closed',
    es: 'Cómo mostrarlo cuando está cerrado', it: 'Come mostrarlo quando è chiuso',
    de: 'Wie es dargestellt wird, solange es geschlossen ist', ru: 'Как показывать, когда позиция закрыта'
  },
  'adm.noSchedule': {
    uk: '— без розкладу —', en: '— no schedule —', es: '— sin horario —',
    it: '— nessun orario —', de: '— kein Zeitplan —', ru: '— без расписания —'
  },
  'adm.status.open':     { uk: 'доступно', en: 'available', es: 'disponible', it: 'disponibile', de: 'verfügbar', ru: 'доступно' },
  'adm.status.off':      { uk: 'немає', en: 'off', es: 'agotado', it: 'esaurito', de: 'aus', ru: 'нет' },
  'adm.status.offhours': { uk: 'поза годинами', en: 'outside hours', es: 'fuera de horario', it: 'fuori orario', de: 'außerhalb der Zeiten', ru: 'вне часов' },

  'adm.countOf':   { uk: 'із', en: 'of', es: 'de', it: 'di', de: 'von', ru: 'из' },
  'adm.closedManually': {
    uk: 'закрито вручну', en: 'closed by hand', es: 'cerrado a mano',
    it: 'chiusi a mano', de: 'manuell geschlossen', ru: 'закрыто вручную'
  },
  'adm.setmenu':   { uk: 'Сет-меню', en: 'Set menu', es: 'Menú cerrado', it: 'Menu fisso', de: 'Set-Menü', ru: 'Сет-меню' },
  'adm.builtIn':   { uk: 'вбудований', en: 'built in', es: 'incorporado', it: 'integrato', de: 'eingebaut', ru: 'встроенный' },
  'adm.addRange':  { uk: '+ діапазон', en: '+ time range', es: '+ franja horaria', it: '+ fascia oraria', de: '+ Zeitfenster', ru: '+ диапазон' },
  'adm.removeRange': { uk: 'Прибрати діапазон', en: 'Remove this range', es: 'Quitar esta franja', it: 'Rimuovi questa fascia', de: 'Zeitfenster entfernen', ru: 'Убрать диапазон' },
  'adm.newSchedule': { uk: '+ створити розклад', en: '+ create a schedule', es: '+ crear un horario', it: '+ crea un orario', de: '+ Zeitplan anlegen', ru: '+ создать расписание' },
  'adm.newSchedulePh': {
    uk: 'назва нового розкладу, напр. breakfast', en: 'name of the new schedule, e.g. breakfast',
    es: 'nombre del nuevo horario, p. ej. breakfast', it: 'nome del nuovo orario, es. breakfast',
    de: 'Name des neuen Zeitplans, z. B. breakfast', ru: 'название нового расписания, напр. breakfast'
  },
  'adm.fileHeader': {
    uk: 'Згенеровано адмін-панеллю. Замініть цим файлом assets/overrides.js і запуште, щоб зміни побачили гості.',
    en: 'Generated by the admin panel. Replace assets/overrides.js with this file and push so guests see the change.',
    es: 'Generado por el panel de administración. Sustituya assets/overrides.js por este archivo y haga push para que los clientes lo vean.',
    it: 'Generato dal pannello di amministrazione. Sostituite assets/overrides.js con questo file e fate push perché gli ospiti lo vedano.',
    de: 'Vom Admin-Bereich erzeugt. Ersetzen Sie assets/overrides.js durch diese Datei und pushen Sie, damit Gäste die Änderung sehen.',
    ru: 'Сгенерировано админ-панелью. Замените этим файлом assets/overrides.js и запушьте, чтобы изменения увидели гости.'
  },

  /* --------------------------------------------------------- sections --- */
  'sec.brunch':          { uk: 'Бранч', en: 'Brunch', es: 'Brunch', it: 'Brunch', de: 'Brunch', ru: 'Бранч' },
  'sec.starters':        { uk: 'Закуски', en: 'Starters', es: 'Entrantes', it: 'Antipasti', de: 'Vorspeisen', ru: 'Закуски' },
  'sec.salads':          { uk: 'Салати', en: 'Salads', es: 'Ensaladas', it: 'Insalate', de: 'Salate', ru: 'Салаты' },
  'sec.sunday-roast':    { uk: 'Недільний ростбіф', en: 'Sunday Roast', es: 'Asado dominical', it: 'Arrosto della domenica', de: 'Sunday Roast', ru: 'Воскресный ростбиф' },
  'sec.mains':           { uk: 'Основні страви', en: 'Main Courses', es: 'Platos principales', it: 'Secondi piatti', de: 'Hauptgerichte', ru: 'Основные блюда' },
  'sec.steak-dryaged':   { uk: 'Стейки сухого визрівання USDA Prime', en: 'USDA Prime Dry-Aged Steak', es: 'Carne madurada en seco USDA Prime', it: 'Bistecche frollate USDA Prime', de: 'USDA Prime Dry-Aged Steaks', ru: 'Стейки сухого вызревания USDA Prime' },
  'sec.steak-fillets':   { uk: 'Вирізка', en: 'Fillets', es: 'Solomillos', it: 'Filetti', de: 'Filets', ru: 'Вырезка' },
  'sec.steak-sirloins':  { uk: 'Стриплойни', en: 'Sirloins', es: 'Lomos bajos', it: 'Controfiletti', de: 'Roastbeef-Steaks', ru: 'Стриплойны' },
  'sec.steak-ribeyes':   { uk: 'Рибаї', en: 'Rib-Eyes', es: 'Chuletones', it: 'Costate', de: 'Rib-Eyes', ru: 'Рибаи' },
  'sec.additions':       { uk: 'Доповнення до стейка', en: 'Steak Additions', es: 'Complementos para la carne', it: 'Aggiunte per la bistecca', de: 'Beigaben zum Steak', ru: 'Дополнения к стейку' },
  'sec.shellfish':       { uk: 'Морепродукти', en: 'Shellfish', es: 'Mariscos', it: 'Crostacei e molluschi', de: 'Meeresfrüchte', ru: 'Морепродукты' },
  'sec.side-potatoes':   { uk: 'Гарніри: картопля', en: 'Sides — Potatoes', es: 'Guarniciones: patatas', it: 'Contorni: patate', de: 'Beilagen: Kartoffeln', ru: 'Гарниры: картофель' },
  'sec.side-vegetables': { uk: 'Гарніри: овочі', en: 'Sides — Vegetables', es: 'Guarniciones: verduras', it: 'Contorni: verdure', de: 'Beilagen: Gemüse', ru: 'Гарниры: овощи' },
  'sec.side-classics':   { uk: 'Класика до столу', en: 'Classics — Perfect to Share', es: 'Clásicos para compartir', it: 'Classici da condividere', de: 'Klassiker zum Teilen', ru: 'Классика к столу' },
  'sec.side-salads':     { uk: 'Салати-гарніри', en: 'Side Salads', es: 'Ensaladas de acompañamiento', it: 'Insalate di contorno', de: 'Beilagensalate', ru: 'Салаты-гарниры' },
  'sec.desserts':        { uk: 'Десерти', en: 'Desserts', es: 'Postres', it: 'Dolci', de: 'Desserts', ru: 'Десерты' },

  'sec.dessertwine': { uk: 'Десертні вина', en: 'Dessert Wine', es: 'Vinos de postre', it: 'Vini da dessert', de: 'Dessertweine', ru: 'Десертные вина' },
  'sec.port':        { uk: 'Портвейни', en: 'Port', es: 'Oporto', it: 'Porto', de: 'Portwein', ru: 'Портвейны' },
  'sec.sherry':      { uk: 'Херес', en: 'Sherry', es: 'Jerez', it: 'Sherry', de: 'Sherry', ru: 'Херес' },
  'sec.teacoffee':   { uk: 'Чай і кава', en: 'Tea & Coffee', es: 'Té y café', it: 'Tè e caffè', de: 'Tee & Kaffee', ru: 'Чай и кофе' },

  'sec.cognac':        { uk: 'Коньяк', en: 'Cognac', es: 'Coñac', it: 'Cognac', de: 'Cognac', ru: 'Коньяк' },
  'sec.brandy':        { uk: 'Бренді', en: 'Brandy', es: 'Brandy', it: 'Brandy', de: 'Brandy', ru: 'Бренди' },
  'sec.liqueurs':      { uk: 'Лікери', en: 'Liqueurs', es: 'Licores', it: 'Liquori', de: 'Liköre', ru: 'Ликёры' },
  'sec.rum':           { uk: 'Ром', en: 'Rum', es: 'Ron', it: 'Rum', de: 'Rum', ru: 'Ром' },
  'sec.bourbon':       { uk: 'Бурбон і житній віскі', en: 'Bourbon & Rye', es: 'Bourbon y centeno', it: 'Bourbon e rye', de: 'Bourbon & Rye', ru: 'Бурбон и ржаной виски' },
  'sec.irishwhiskey':  { uk: 'Ірландський віскі', en: 'Irish Whiskey', es: 'Whiskey irlandés', it: 'Whiskey irlandese', de: 'Irish Whiskey', ru: 'Ирландский виски' },
  'sec.blendedscotch': { uk: 'Купажований скотч', en: 'Blended Scotch Whisky', es: 'Whisky escocés de mezcla', it: 'Scotch blended', de: 'Blended Scotch', ru: 'Купажированный скотч' },
  'sec.malt-highland': { uk: 'Односолодовий: Highlands і Speyside', en: 'Single Malt — Highlands & Speyside', es: 'Single malt: Highlands y Speyside', it: 'Single malt: Highlands e Speyside', de: 'Single Malt — Highlands & Speyside', ru: 'Односолодовый: Highlands и Speyside' },
  'sec.malt-islay':    { uk: 'Односолодовий: Lowlands і Islay', en: 'Single Malt — Lowlands & Islay', es: 'Single malt: Lowlands e Islay', it: 'Single malt: Lowlands e Islay', de: 'Single Malt — Lowlands & Islay', ru: 'Односолодовый: Lowlands и Islay' },
  'sec.japanese':      { uk: 'Японський віскі', en: 'Japanese Whisky', es: 'Whisky japonés', it: 'Whisky giapponese', de: 'Japanischer Whisky', ru: 'Японский виски' },

  'note.spirits': {
    uk: 'Дегустаційні описи — з друкованого меню, тому англійською. Зернові дистиляти (віскі, бурбон, житній) позначені як «може містити глютен»: після дистиляції він зазвичай не виявляється, але за целіакії краще уточнити.',
    en: 'The tasting notes are taken verbatim from the printed menu. Grain spirits — whisky, bourbon, rye — are flagged “may contain gluten”: it is usually undetectable after distillation, but do check if you have coeliac disease.',
    es: 'Las notas de cata proceden literalmente de la carta impresa. Los destilados de cereal (whisky, bourbon, centeno) se marcan como «puede contener gluten»: tras la destilación suele ser indetectable, pero consúltelo si es celíaco.',
    it: 'Le note di degustazione sono riprese testualmente dal menu stampato. I distillati di cereali (whisky, bourbon, rye) sono segnalati come «può contenere glutine»: dopo la distillazione è di norma non rilevabile, ma in caso di celiachia chiedete conferma.',
    de: 'Die Tasting Notes stammen wörtlich aus der gedruckten Karte. Getreidedestillate — Whisky, Bourbon, Rye — sind als „kann Gluten enthalten“ markiert: nach der Destillation ist es meist nicht nachweisbar, bei Zöliakie bitte nachfragen.',
    ru: 'Дегустационные описания взяты дословно из печатного меню. Зерновые дистилляты (виски, бурбон, ржаной) помечены как «может содержать глютен»: после дистилляции он обычно не определяется, но при целиакии лучше уточнить.'
  },
  'note.teacoffee': {
    uk: 'Кавові коктейлі містять вершки. Молоко до чаю та кави подають окремо.',
    en: 'The coffee cocktails contain cream. Milk for tea and coffee is served separately.',
    es: 'Los cócteles de café llevan nata. La leche para el té y el café se sirve aparte.',
    it: 'I cocktail al caffè contengono panna. Il latte per tè e caffè è servito a parte.',
    de: 'Die Kaffeecocktails enthalten Sahne. Milch zu Tee und Kaffee wird separat serviert.',
    ru: 'Кофейные коктейли содержат сливки. Молоко к чаю и кофе подают отдельно.'
  },

  'warn.distilled': {
    uk: 'Зерновий дистилят. Після дистиляції глютен зазвичай не виявляється, але за целіакії краще уточнити.',
    en: 'A grain distillate. Gluten is usually undetectable after distillation, but do check if you have coeliac disease.',
    es: 'Destilado de cereal. Tras la destilación el gluten suele ser indetectable, pero consúltelo si es celíaco.',
    it: 'Distillato di cereali. Dopo la distillazione il glutine è di norma non rilevabile, ma in caso di celiachia chiedete conferma.',
    de: 'Ein Getreidedestillat. Nach der Destillation ist Gluten meist nicht nachweisbar — bei Zöliakie bitte nachfragen.',
    ru: 'Зерновой дистиллят. После дистилляции глютен обычно не определяется, но при целиакии лучше уточнить.'
  },
  'warn.amaretto': {
    uk: 'Основа — абрикосова кісточка, не мигдаль, але смак марципановий. За горіхової алергії уточніть у бармена.',
    en: 'Made from apricot kernels rather than almonds, though it tastes of marzipan. With a nut allergy, please check with the bar.',
    es: 'Se elabora con huesos de albaricoque, no con almendras, aunque sabe a mazapán. Con alergia a frutos secos, consúltelo en la barra.',
    it: 'È a base di armelline di albicocca, non di mandorle, pur avendo un gusto di marzapane. In caso di allergia alla frutta a guscio, chiedete al bar.',
    de: 'Basis sind Aprikosenkerne, keine Mandeln — der Geschmack erinnert dennoch an Marzipan. Bei Nussallergie bitte an der Bar nachfragen.',
    ru: 'Основа — абрикосовая косточка, а не миндаль, хотя вкус марципановый. При ореховой аллергии уточните у бармена.'
  },

  'nav.desserts': { uk: 'Десерти', en: 'Desserts', es: 'Postres', it: 'Dolci', de: 'Desserts', ru: 'Десерты' },
  'page.desserts.lead': {
    uk: 'Десертна карта: солодке від кондитерів, десертні коктейлі, десертні вина, портвейни, херес, чай і кава.',
    en: 'The dessert card: puddings from the pastry team, dessert cocktails, dessert wines, port, sherry, tea and coffee.',
    es: 'La carta de postres: dulces del obrador, cócteles de postre, vinos dulces, oporto, jerez, té y café.',
    it: 'La carta dei dolci: dessert della pasticceria, cocktail da dessert, vini dolci, porto, sherry, tè e caffè.',
    de: 'Die Dessertkarte: Süßes aus der Patisserie, Dessert-Cocktails, Dessertweine, Portwein, Sherry, Tee und Kaffee.',
    ru: 'Десертная карта: сладкое от кондитеров, десертные коктейли, десертные вина, портвейны, херес, чай и кофе.'
  },
  'card.desserts': {
    uk: 'Десерти, десертні коктейлі й вина, портвейни, херес, чай і кава.',
    en: 'Puddings, dessert cocktails and wines, port, sherry, tea and coffee.',
    es: 'Postres, cócteles y vinos dulces, oporto, jerez, té y café.',
    it: 'Dolci, cocktail e vini da dessert, porto, sherry, tè e caffè.',
    de: 'Desserts, Dessert-Cocktails und -Weine, Portwein, Sherry, Tee und Kaffee.',
    ru: 'Десерты, десертные коктейли и вина, портвейны, херес, чай и кофе.'
  },
  'card.drinksSpirits': {
    uk: 'Коктейлі, вина за келихом, а також коньяк, ром, віскі та лікери.',
    en: 'Cocktails, wines by the glass, plus cognac, rum, whisky and liqueurs.',
    es: 'Cócteles, vinos por copa y además coñac, ron, whisky y licores.',
    it: 'Cocktail, vini al bicchiere e inoltre cognac, rum, whisky e liquori.',
    de: 'Cocktails, Weine im Glas sowie Cognac, Rum, Whisky und Liköre.',
    ru: 'Коктейли, вина по бокалам, а также коньяк, ром, виски и ликёры.'
  },

  /* --------------------------------------------------------- розклад --- */
  'sched.days': {
    uk: 'Нд,Пн,Вт,Ср,Чт,Пт,Сб', en: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
    es: 'Dom,Lun,Mar,Mié,Jue,Vie,Sáb', it: 'Dom,Lun,Mar,Mer,Gio,Ven,Sab',
    de: 'So,Mo,Di,Mi,Do,Fr,Sa', ru: 'Вс,Пн,Вт,Ср,Чт,Пт,Сб'
  },
  'sched.closed': {
    uk: 'Зараз не подається', en: 'Not served right now', es: 'Ahora no se sirve',
    it: 'Al momento non disponibile', de: 'Derzeit nicht im Angebot', ru: 'Сейчас не подаётся'
  },
  'sched.servedAt': {
    uk: 'Подається', en: 'Served', es: 'Se sirve', it: 'Servito', de: 'Serviert', ru: 'Подаётся'
  },
  'sched.pageClosed': {
    uk: 'Це меню зараз не подається. Нижче — повний перелік із розкладом.',
    en: 'This menu is not being served right now. The full list, with its hours, is below.',
    es: 'Esta carta no se sirve en este momento. Abajo está la lista completa con su horario.',
    it: 'Questo menu al momento non è servito. Sotto trovate l’elenco completo con gli orari.',
    de: 'Diese Karte wird derzeit nicht serviert. Unten steht die vollständige Liste mit den Zeiten.',
    ru: 'Это меню сейчас не подаётся. Ниже — полный перечень с расписанием.'
  },
  'sched.soldOut': {
    uk: 'Наразі немає', en: 'Currently unavailable', es: 'No disponible ahora',
    it: 'Al momento non disponibile', de: 'Zurzeit nicht verfügbar', ru: 'Сейчас нет в наличии'
  },
  'adm.origin': {
    uk: 'Чернетка діє лише за цією адресою. Меню треба відкривати з неї ж — інакше змін не буде видно:',
    en: 'The draft only applies at this address. Open the menu from the same one, or the changes will not show:',
    es: 'El borrador solo se aplica en esta dirección. Abre la carta desde la misma o los cambios no se verán:',
    it: 'La bozza vale solo a questo indirizzo. Apri il menu dallo stesso, altrimenti le modifiche non si vedono:',
    de: 'Der Entwurf gilt nur unter dieser Adresse. Öffnen Sie die Karte über dieselbe, sonst sind die Änderungen unsichtbar:',
    ru: 'Черновик действует только по этому адресу. Меню нужно открывать с него же — иначе изменений не будет видно:'
  },
  'sched.badge': {
    uk: 'Зачинено', en: 'Closed', es: 'Cerrado',
    it: 'Chiuso', de: 'Geschlossen', ru: 'Закрыто'
  },
  'sched.draft': {
    uk: 'Діє незбережена чернетка адмін-панелі — гості її не бачать',
    en: 'An unsaved admin draft is active — guests do not see it',
    es: 'Hay un borrador de administración activo: los clientes no lo ven',
    it: 'È attiva una bozza dell’amministrazione: gli ospiti non la vedono',
    de: 'Ein ungespeicherter Admin-Entwurf ist aktiv — Gäste sehen ihn nicht',
    ru: 'Действует несохранённый черновик админ-панели — гости его не видят'
  },
  'sched.preview': {
    uk: 'Режим перегляду часу', en: 'Time preview mode', es: 'Modo de vista previa horaria',
    it: 'Modalità anteprima orario', de: 'Zeit-Vorschaumodus', ru: 'Режим предпросмотра времени'
  },

  /* ------------------------------------------------------ section tabs --- */
  'tabs.all': { uk: 'Усе', en: 'All', es: 'Todo', it: 'Tutto', de: 'Alle', ru: 'Всё' },
  'tabs.label': {
    uk: 'Розділи меню', en: 'Menu sections', es: 'Secciones de la carta',
    it: 'Sezioni del menu', de: 'Menüabschnitte', ru: 'Разделы меню'
  },

  'sec.cocktails':   { uk: 'Коктейлі', en: 'Cocktails', es: 'Cócteles', it: 'Cocktail', de: 'Cocktails', ru: 'Коктейли' },
  'sec.bloodymarys': { uk: 'Bloody Marys', en: 'Bloody Marys', es: 'Bloody Marys', it: 'Bloody Mary', de: 'Bloody Marys', ru: 'Bloody Marys' },
  'sec.virgin':      { uk: 'Безалкогольні коктейлі', en: 'Virgin Cocktails', es: 'Cócteles sin alcohol', it: 'Cocktail analcolici', de: 'Alkoholfreie Cocktails', ru: 'Безалкогольные коктейли' },
  'sec.martinis':    { uk: 'Мартіні та мангеттени', en: 'Martinis & Manhattans', es: 'Martinis y manhattans', it: 'Martini e Manhattan', de: 'Martinis & Manhattans', ru: 'Мартини и манхэттены' },
  'sec.bottomless':  { uk: 'Bottomless Brunch', en: 'Bottomless Brunch', es: 'Brunch ilimitado', it: 'Brunch illimitato', de: 'Bottomless Brunch', ru: 'Bottomless Brunch' },
  'sec.sparkling':   { uk: 'Ігристі вина', en: 'Sparkling Wine', es: 'Vinos espumosos', it: 'Vini spumanti', de: 'Schaumweine', ru: 'Игристые вина' },
  'sec.white':       { uk: 'Білі вина', en: 'White Wine', es: 'Vinos blancos', it: 'Vini bianchi', de: 'Weißweine', ru: 'Белые вина' },
  'sec.rose':        { uk: 'Рожеві вина', en: 'Rosé Wine', es: 'Vinos rosados', it: 'Vini rosati', de: 'Roséweine', ru: 'Розовые вина' },
  'sec.red':         { uk: 'Червоні вина', en: 'Red Wine', es: 'Vinos tintos', it: 'Vini rossi', de: 'Rotweine', ru: 'Красные вина' },

  'note.bloodymarys': {
    uk: 'Подаються на бранчі. Усі містять вустерський соус — тобто анчоуси.',
    en: 'Served at brunch. All of them contain Worcestershire sauce — that is, anchovies.',
    es: 'Se sirven en el brunch. Todos llevan salsa Worcestershire, es decir, anchoas.',
    it: 'Serviti al brunch. Tutti contengono salsa Worcestershire, quindi acciughe.',
    de: 'Werden zum Brunch serviert. Alle enthalten Worcestershire-Sauce — also Sardellen.',
    ru: 'Подаются на бранче. Все содержат вустерский соус — то есть анчоусы.'
  },
  'note.martinis': {
    uk: 'Порція 80 мл.', en: '80 ml serve.', es: 'Servicio de 80 ml.',
    it: 'Servizio da 80 ml.', de: '80-ml-Ausschank.', ru: 'Порция 80 мл.'
  },
  'note.bottomless': {
    uk: 'Максимум 1,5 години, лише разом із замовленням із двох страв.',
    en: 'Maximum of one and a half hours, only with a two-course meal.',
    es: 'Máximo una hora y media, solo con un menú de dos platos.',
    it: 'Massimo un’ora e mezza, solo con un pasto di due portate.',
    de: 'Maximal anderthalb Stunden, nur zu einem Zwei-Gänge-Menü.',
    ru: 'Максимум 1,5 часа, только вместе с заказом из двух блюд.'
  },
  'note.wineServe': {
    uk: 'подача', en: 'serve', es: 'servicio', it: 'servizio', de: 'Ausschank', ru: 'подача'
  },
  'note.menuText': {
    uk: 'Опис із меню', en: 'As printed on the menu', es: 'Tal como figura en la carta',
    it: 'Come riportato nel menu', de: 'Wie auf der Karte gedruckt', ru: 'Описание из меню'
  }
};

/* -------------------------------------------------------------------------
   Поточна мова
   ------------------------------------------------------------------------- */
function getLang() {
  const url = new URLSearchParams(location.search).get('lang');
  if (url && LANGS.some(l => l.code === url)) return url;
  try {
    const saved = localStorage.getItem('sw-lang');
    if (saved && LANGS.some(l => l.code === saved)) return saved;
  } catch (e) { /* приватний режим */ }
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGS.some(l => l.code === nav) ? nav : 'en';
}

function setLang(code) {
  try { localStorage.setItem('sw-lang', code); } catch (e) { /* ігноруємо */ }
}

/** t('nav.home') — рядок поточною мовою, з відкатом на англійську */
function t(key, lang) {
  const entry = I18N[key];
  if (!entry) return key;
  return entry[lang || getLang()] || entry.en || key;
}
