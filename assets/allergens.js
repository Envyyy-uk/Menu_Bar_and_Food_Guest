/* ==========================================================================
   14 обов'язкових алергенів (ЄС / UK FSA) — назви та пояснення 6 мовами
   ========================================================================== */

const ALLERGENS = {
  gluten: {
    icon: '🌾', short: { uk: 'ГЛ', en: 'GL', es: 'GL', it: 'GL', de: 'GL', ru: 'ГЛ' },
    t: { uk: 'Злаки з глютеном', en: 'Cereals containing gluten', es: 'Cereales con gluten', it: 'Cereali con glutine', de: 'Glutenhaltiges Getreide', ru: 'Злаки с глютеном' },
    note: {
      uk: 'Пшениця, жито, ячмінь, овес: хліб, булочки, паста, паніровка, борошняні соуси, пиво.',
      en: 'Wheat, rye, barley, oats: bread, buns, pasta, breading, flour-thickened sauces, beer.',
      es: 'Trigo, centeno, cebada, avena: pan, panecillos, pasta, empanados, salsas con harina, cerveza.',
      it: 'Frumento, segale, orzo, avena: pane, panini, pasta, panature, salse legate con farina, birra.',
      de: 'Weizen, Roggen, Gerste, Hafer: Brot, Brötchen, Pasta, Panade, mehlgebundene Saucen, Bier.',
      ru: 'Пшеница, рожь, ячмень, овёс: хлеб, булочки, паста, панировка, мучные соусы, пиво.'
    }
  },
  crustaceans: {
    icon: '🦐', short: { uk: 'РК', en: 'CR', es: 'CR', it: 'CR', de: 'KR', ru: 'РК' },
    t: { uk: 'Ракоподібні', en: 'Crustaceans', es: 'Crustáceos', it: 'Crostacei', de: 'Krebstiere', ru: 'Ракообразные' },
    note: {
      uk: 'Креветки, лобстер, краб — і сушені креветки в соусі XO.',
      en: 'Prawns, lobster, crab — and the dried shrimp in XO sauce.',
      es: 'Gambas, bogavante, cangrejo — y las gambas secas de la salsa XO.',
      it: 'Gamberi, astice, granchio — e i gamberi essiccati della salsa XO.',
      de: 'Garnelen, Hummer, Krabbe — und die getrockneten Garnelen in der XO-Sauce.',
      ru: 'Креветки, лобстер, краб — и сушёные креветки в соусе XO.'
    }
  },
  eggs: {
    icon: '🥚', short: { uk: 'ЯЙ', en: 'EG', es: 'HU', it: 'UO', de: 'EI', ru: 'ЯЙ' },
    t: { uk: 'Яйця', en: 'Eggs', es: 'Huevos', it: 'Uova', de: 'Eier', ru: 'Яйца' },
    note: {
      uk: 'Майонез, айолі, голландський соус, беарнез, тісто, білок у коктейлях.',
      en: 'Mayonnaise, aioli, hollandaise, béarnaise, batters, egg white in cocktails.',
      es: 'Mayonesa, alioli, holandesa, bearnesa, masas, clara en cócteles.',
      it: 'Maionese, aioli, olandese, bernese, impasti, albume nei cocktail.',
      de: 'Mayonnaise, Aioli, Hollandaise, Béarnaise, Teige, Eiweiß in Cocktails.',
      ru: 'Майонез, айоли, голландский соус, беарнез, тесто, белок в коктейлях.'
    }
  },
  fish: {
    icon: '🐟', short: { uk: 'РИ', en: 'FI', es: 'PE', it: 'PE', de: 'FI', ru: 'РЫ' },
    t: { uk: 'Риба', en: 'Fish', es: 'Pescado', it: 'Pesce', de: 'Fisch', ru: 'Рыба' },
    note: {
      uk: 'Також анчоуси в соусі «Цезар» та у вустерському соусі.',
      en: 'Including the anchovies in Caesar dressing and Worcestershire sauce.',
      es: 'Incluidas las anchoas de la salsa César y de la salsa Worcestershire.',
      it: 'Comprese le acciughe della salsa Caesar e della salsa Worcestershire.',
      de: 'Auch die Sardellen im Caesar-Dressing und in der Worcestershire-Sauce.',
      ru: 'В том числе анчоусы в соусе «Цезарь» и в вустерском соусе.'
    }
  },
  peanuts: {
    icon: '🥜', short: { uk: 'АР', en: 'PN', es: 'CA', it: 'AR', de: 'ER', ru: 'АР' },
    t: { uk: 'Арахіс', en: 'Peanuts', es: 'Cacahuetes', it: 'Arachidi', de: 'Erdnüsse', ru: 'Арахис' },
    note: {
      uk: 'У поточному меню страв з арахісом не заявлено.',
      en: 'No dish on the current menu declares peanuts.',
      es: 'Ningún plato de la carta actual declara cacahuetes.',
      it: 'Nessun piatto del menu attuale dichiara arachidi.',
      de: 'Kein Gericht der aktuellen Karte weist Erdnüsse aus.',
      ru: 'В текущем меню блюд с арахисом не заявлено.'
    }
  },
  soya: {
    icon: '🫘', short: { uk: 'СО', en: 'SY', es: 'SO', it: 'SO', de: 'SO', ru: 'СО' },
    t: { uk: 'Соя', en: 'Soybeans', es: 'Soja', it: 'Soia', de: 'Soja', ru: 'Соя' },
    note: {
      uk: 'Соєвий соус, місо, соус XO, соєвий лецитин у шоколаді.',
      en: 'Soy sauce, miso, XO sauce, soya lecithin in chocolate.',
      es: 'Salsa de soja, miso, salsa XO, lecitina de soja en el chocolate.',
      it: 'Salsa di soia, miso, salsa XO, lecitina di soia nel cioccolato.',
      de: 'Sojasauce, Miso, XO-Sauce, Sojalecithin in Schokolade.',
      ru: 'Соевый соус, мисо, соус XO, соевый лецитин в шоколаде.'
    }
  },
  milk: {
    icon: '🥛', short: { uk: 'МО', en: 'MK', es: 'LE', it: 'LA', de: 'MI', ru: 'МО' },
    t: { uk: 'Молоко', en: 'Milk', es: 'Leche', it: 'Latte', de: 'Milch', ru: 'Молоко' },
    note: {
      uk: 'Вершкове масло, вершки, сири, морозиво. Стейки часто фінішують маслом.',
      en: 'Butter, cream, cheeses, ice cream. Steaks are often finished with butter.',
      es: 'Mantequilla, nata, quesos, helado. Los filetes suelen terminarse con mantequilla.',
      it: 'Burro, panna, formaggi, gelato. Le bistecche sono spesso rifinite al burro.',
      de: 'Butter, Sahne, Käse, Eis. Steaks werden oft mit Butter vollendet.',
      ru: 'Сливочное масло, сливки, сыры, мороженое. Стейки часто финишируют маслом.'
    }
  },
  nuts: {
    icon: '🌰', short: { uk: 'ГО', en: 'NT', es: 'FS', it: 'FG', de: 'NÜ', ru: 'ОР' },
    t: { uk: 'Горіхи', en: 'Tree nuts', es: 'Frutos secos de cáscara', it: 'Frutta a guscio', de: 'Schalenfrüchte', ru: 'Орехи' },
    note: {
      uk: 'Мигдаль і мигдалевий сироп. Кокос у частині країн також класифікують як горіх.',
      en: 'Almonds and almond (orgeat) syrup. Coconut is classed as a nut in some countries.',
      es: 'Almendras y sirope de almendra (orgeat). En algunos países el coco se clasifica como fruto seco.',
      it: 'Mandorle e sciroppo di mandorla (orgeat). In alcuni paesi il cocco è classificato come frutta a guscio.',
      de: 'Mandeln und Mandelsirup (Orgeat). Kokos gilt in manchen Ländern als Schalenfrucht.',
      ru: 'Миндаль и миндальный сироп. В ряде стран кокос также относят к орехам.'
    }
  },
  celery: {
    icon: '🥬', short: { uk: 'СЕ', en: 'CE', es: 'AP', it: 'SE', de: 'SE', ru: 'СЕ' },
    t: { uk: 'Селера', en: 'Celery', es: 'Apio', it: 'Sedano', de: 'Sellerie', ru: 'Сельдерей' },
    note: {
      uk: 'Корінь селери, бульйони, слоу, суміші спецій (у т.ч. кейджун).',
      en: 'Celeriac, stocks, slaws, spice blends (including Cajun).',
      es: 'Apionabo, caldos, ensaladas de col, mezclas de especias (incluida la cajún).',
      it: 'Sedano rapa, brodi, insalate di cavolo, mix di spezie (anche cajun).',
      de: 'Knollensellerie, Fonds, Krautsalate, Gewürzmischungen (auch Cajun).',
      ru: 'Корень сельдерея, бульоны, слоу, смеси специй (в т.ч. каджун).'
    }
  },
  mustard: {
    icon: '🟡', short: { uk: 'ГІ', en: 'MU', es: 'MO', it: 'SE', de: 'SF', ru: 'ГО' },
    t: { uk: 'Гірчиця', en: 'Mustard', es: 'Mostaza', it: 'Senape', de: 'Senf', ru: 'Горчица' },
    note: {
      uk: 'Діжонська гірчиця, заправки, BBQ-соус, майонез.',
      en: 'Dijon mustard, dressings, BBQ sauce, mayonnaise.',
      es: 'Mostaza de Dijon, aliños, salsa BBQ, mayonesa.',
      it: 'Senape di Digione, condimenti, salsa BBQ, maionese.',
      de: 'Dijon-Senf, Dressings, BBQ-Sauce, Mayonnaise.',
      ru: 'Дижонская горчица, заправки, BBQ-соус, майонез.'
    }
  },
  sesame: {
    icon: '⚪', short: { uk: 'КУ', en: 'SE', es: 'SÉ', it: 'SS', de: 'SA', ru: 'КУ' },
    t: { uk: 'Кунжут', en: 'Sesame', es: 'Sésamo', it: 'Sesamo', de: 'Sesam', ru: 'Кунжут' },
    note: {
      uk: 'Кунжутна олія, тахіні в хумусі, чорний кунжут, булочки з посипкою.',
      en: 'Sesame oil, tahini in hummus, black sesame, seeded buns.',
      es: 'Aceite de sésamo, tahini en el hummus, sésamo negro, panecillos con semillas.',
      it: 'Olio di sesamo, tahini nell’hummus, sesamo nero, panini ai semi.',
      de: 'Sesamöl, Tahini im Hummus, schwarzer Sesam, Brötchen mit Saaten.',
      ru: 'Кунжутное масло, тахини в хумусе, чёрный кунжут, булочки с посыпкой.'
    }
  },
  sulphites: {
    icon: '🍷', short: { uk: 'СУ', en: 'SU', es: 'SU', it: 'SO', de: 'SU', ru: 'СУ' },
    t: { uk: 'Сульфіти (SO₂)', en: 'Sulphur dioxide & sulphites', es: 'Dióxido de azufre y sulfitos', it: 'Anidride solforosa e solfiti', de: 'Schwefeldioxid & Sulfite', ru: 'Сульфиты (SO₂)' },
    note: {
      uk: 'Вино, оцет, в’ялені та копчені м’ясні вироби, сушені фрукти, оброблена картопля.',
      en: 'Wine, vinegar, cured and smoked meats, dried fruit, processed potatoes.',
      es: 'Vino, vinagre, embutidos y carnes ahumadas, fruta seca, patata procesada.',
      it: 'Vino, aceto, salumi e carni affumicate, frutta secca, patate lavorate.',
      de: 'Wein, Essig, Pökel- und Räucherwaren, Trockenobst, verarbeitete Kartoffeln.',
      ru: 'Вино, уксус, вяленые и копчёные мясные изделия, сухофрукты, обработанный картофель.'
    }
  },
  lupin: {
    icon: '🌸', short: { uk: 'ЛЮ', en: 'LU', es: 'AL', it: 'LU', de: 'LU', ru: 'ЛЮ' },
    t: { uk: 'Люпин', en: 'Lupin', es: 'Altramuces', it: 'Lupini', de: 'Lupinen', ru: 'Люпин' },
    note: {
      uk: 'У поточному меню страв з люпином не заявлено.',
      en: 'No dish on the current menu declares lupin.',
      es: 'Ningún plato de la carta actual declara altramuces.',
      it: 'Nessun piatto del menu attuale dichiara lupini.',
      de: 'Kein Gericht der aktuellen Karte weist Lupinen aus.',
      ru: 'В текущем меню блюд с люпином не заявлено.'
    }
  },
  molluscs: {
    icon: '🦪', short: { uk: 'МЛ', en: 'MO', es: 'MO', it: 'MO', de: 'WT', ru: 'МЛ' },
    t: { uk: 'Молюски', en: 'Molluscs', es: 'Moluscos', it: 'Molluschi', de: 'Weichtiere', ru: 'Моллюски' },
    note: {
      uk: 'Устриці, гребінці, восьминіг; сушений гребінець у соусі XO.',
      en: 'Oysters, scallops, octopus; cured scallop in XO sauce.',
      es: 'Ostras, vieiras, pulpo; vieira curada en la salsa XO.',
      it: 'Ostriche, capesante, polpo; capasanta stagionata nella salsa XO.',
      de: 'Austern, Jakobsmuscheln, Oktopus; gepökelte Jakobsmuschel in der XO-Sauce.',
      ru: 'Устрицы, гребешки, осьминог; вяленый гребешок в соусе XO.'
    }
  }
};

const ALLERGEN_KEYS = Object.keys(ALLERGENS);

const aName  = (k, lang) => ALLERGENS[k].t[lang] || ALLERGENS[k].t.en;
const aShort = (k, lang) => ALLERGENS[k].short[lang] || ALLERGENS[k].short.en;
const aNote  = (k, lang) => ALLERGENS[k].note[lang] || ALLERGENS[k].note.en;
