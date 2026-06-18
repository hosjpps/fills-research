# ЛЫТКАРИНЪ — ПРОМПТЫ ДЛЯ ЭТИКЕТОК (ПИВО) · v3

**Дата:** 4 июня 2026
**Линейка:** ЛЫТКАРИНЪ — бюджетное пиво (~Жигули), но этикетка **красивая и оригинальная**.
**Техника:** дизайн = **бумажная наклеенная этикетка** на банке (как на крафте клеят бумагу), фактура бумаги, виден край, матовая. НЕ печать по голому металлу.

**Формат:** **20 стилей × 2 вкуса = 40 промптов.** Каждый стиль — свой мир: **свой доминирующий цвет + своя композиция**. Гоняешь по 2 генерации на стиль → смотришь.

5 SKU: Пшеничное · Нулёвка · Светлое · Подмосковное · Охмеленное

---

## ТЕХ-ПАРАМЕТРЫ (общие)

**Банка:** 449 мл (0.45 л) стандартная, на ней наклеена бумажная этикетка.
**Модель:** `nano_banana_2`. `aspect_ratio: 2:3`. `resolution: 2k` превью / `4k` печать. text-to-image.
```
generate_image(model="nano_banana_2", prompt="<ниже>", aspect_ratio="2:3", resolution="2k")
```
В каждом промпте: вордмарк `ЛЫТКАРИНЪ`, монограмма `Л+Ъ`, вкус, тип пива, `449 МЛ`, `ЛЫТКАРИНО`, %, декор. Много инфы, не пусто.

> ⚠️ **Кириллица.** Nano Banana коверкает русский (особ. `ЛЫТКАРИНЪ` и `Ъ` на конце). Проверяй глазами, мелочь добивай в редакторе. ABV черновые — сверить с `production/fills/tehnolog/состав.md`.

---

# 20 СТИЛЕЙ

---

## 01 — ВИНТАЖ КУПЕЧЕСКІЙ · фон ЧЁРНЫЙ + золото
*Глубоко-чёрная бумага, золотая гравированная рамка, овальный медальон, симметрия.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte deep-BLACK paper, visible glued edge. Pre-revolutionary Imperial Russian merchant design: ornate GOLD engraved frame, central oval medallion, symmetric hops-and-barley filigree. Gold old-Slavonic serif 'ЛЫТКАРИНЪ' (Ъ) arched, gold 'Л+Ъ' monogram in the oval, 'СВЕТЛОЕ', 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 1912 · 449 МЛ · 4.5%'. Black + gold + cream. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte deep-BLACK paper, visible edge. Imperial Russian engraved label, ornate gold frame, shield medallion full of engraved hop cones. Gold serif 'ЛЫТКАРИНЪ', 'Л+Ъ' monogram, 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 1912 · 449 МЛ · 5.2%'. Black + gold + amber. Sharp.
```

## 02 — БОТАНИЧЕСКАЯ ГРАВЮРА · фон КРЕМ + шалфей
*Кремовая аптекарская бумага, детальная гравюра растения, тонкая линия.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, cream botanical paper, matte, visible edge. Vintage herbarium engraving: detailed wheat ears and stalks, fine hatching, elegant thin serif, oval vignette, latin 'Triticum'. 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Cream + wheat-gold + soft brown. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, ivory botanical paper, matte. Herbarium engraving: birch branch + barley, fine linework, elegant serif, thin double-rule frame. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%'. Cream + muted sage-green + birch-white. Sharp.
```

## 03 — СОВЕТСКОЕ РЕТРО · фон КРАФТ-КОРИЧНЕВЫЙ + красно-бирюзовый
*Крафт-бумага, гротеск-кириллица, горизонтальные цветные полосы, простая эмблема.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, warm KRAFT-BROWN paper, matte, visible edge. Soviet midcentury beer label, elevated: bold grotesque Cyrillic, horizontal brick-red and teal colour bands, a circular wheat-and-star emblem. 'ПИВО ЛЫТКАРИНЪ', 'СВЕТЛОЕ', 'ЛЫТКАРИНСКIЙ ПИВЗАВОДЪ · 449 МЛ · 4.5%', faux 'ГОСТ' line. Kraft + brick-red + teal + cream. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, kraft-brown paper, matte. Soviet retro label, midcentury: chunky grotesque type, a sparkling-glass emblem, bold '0.0%' roundel. 'ПИВО ЛЫТКАРИНЪ', 'НУЛЁВКА', 'БЕЗАЛКОГОЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 0.0%'. Kraft + light teal + red + cream. Sharp.
```

## 04 — АР-ДЕКО · фон ИЗУМРУД + золото
*Самоцветный фон, золотая симметричная геометрия (веер/лучи), деко-капсы.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, smooth EMERALD-GREEN paper, matte, visible edge. Art-Deco 1920s: symmetric gold sunburst/fan motif, stepped geometric frame, elegant deco capitals. Gold deco 'ЛЫТКАРИНЪ' (Ъ), geometric 'Л+Ъ' monogram, 'СВЕТЛОЕ', 'ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Deep emerald + gold + cream. Luxe, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, smooth deep WINE-BURGUNDY paper, matte. Art-Deco: bold gold geometric hop motif in a fan frame, deco capitals. 'ЛЫТКАРИНЪ', 'Л+Ъ' monogram, 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Wine-red + gold + cream. Sharp.
```

## 05 — НОВАЯ ВОЛНА / МАКСИМАЛИЗМ · фон ЯРКИЙ МУЛЬТИ
*Ризограф, чанки-дисплей, слоёные яркие формы, хаотично-смело.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte uncoated paper, riso texture, visible edge. Bold new-wave craft maximalism: chunky playful display type, a graphic explosion of hop cones, layered bright shapes filling the whole label. Big 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, giant 'ОХМЕЛЕННОЕ', '+ХМЕЛЬ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Electric lime + hot pink + orange. Loud, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, riso texture. New-wave craft maximalism: bubbly playful type, fizzy splash + droplet graphic, big '0.0'. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, big 'НУЛЁВКА', 'БЕЗ АЛКОГОЛЯ 0.0% · ЛЫТКАРИНО · 449 МЛ'. Bright cyan + mint + lemon. Fresh, sharp.
```

## 06 — МИНИМАЛ СОЛИД · фон ОДНОЦВЕТНЫЙ заливкой
*Огромное поле одного смелого цвета, крошечная иллюстрация в углу, маленький блок текста, воздух.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte BURNT-ORANGE solid-colour paper, visible edge. Modern minimalism: huge flat colour field, one tiny line-illustration of a hop cone in a corner, generous whitespace, clean small sans. 'ЛЫТКАРИНЪ' wordmark, 'Л+Ъ' mark, 'СВЕТЛОЕ', 'ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Burnt-orange + cream type. Airy, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DUSTY-BLUE solid-colour paper, visible edge. Modern minimalism: large flat colour field, one tiny wheat-ear line icon, lots of negative space, clean small sans. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Dusty-blue + cream type. Sharp.
```

## 07 — ЕВРОПЕЙСКАЯ ГЕРАЛЬДИКА · фон БЕЛЫЙ + красно-сине-золотой
*Бело-кремовая бумага, гербовый медальон, ленты, медали-награды.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, bright IVORY paper, matte, visible edge. Bavarian/Czech premium lager label: central heraldic crest, red and gold ribbon banners, navy accents, two gold award medals. Serif 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' crest monogram, 'СВЕТЛОЕ' / 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Ivory + red + gold + navy. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, warm white paper, matte. European lager crest with a regional shield (river + pine forest), gold ribbon scrolls. Serif 'ЛЫТКАРИНЪ', 'Л+Ъ' monogram, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%'. White + bottle-green + gold + red. Sharp.
```

## 08 — ЗЕЛЁНЫЙ КРАФТ (СВЕТЛЕЕ) + золотая фольга · ПРОБНЫЙ
*Светло-шалфейная бумага, золотая фольга монограмма+вордмарк, аккуратно с инфой.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, light SAGE-GREEN paper (not dark), matte, fine grain, visible edge. Premium-craft minimal-with-substance: GOLD-FOIL 'Л+Ъ' monogram centered, gold-foil 'ЛЫТКАРИНЪ' arched, single foil hop cone. 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · КРАФТОВАЯ МАНУФАКТУРА · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Sage + gold + cream. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, pale MOSS-GREEN paper, matte. Gold-foil 'Л+Ъ' monogram, gold 'ЛЫТКАРИНЪ', small foil birch-leaf. 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · EST. 2012 · 449 МЛ · 4.2%'. Light green + gold + cream. Sharp.
```

## 09 — ЧЁРНЫЙ ПРЕМИУМ + НЕОН · фон ЧЁРНЫЙ + кислотный акцент
*Матово-чёрная бумага, современная асимметричная сетка, неоновый акцент.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte BLACK paper, visible edge. Modern dark premium craft: off-center asymmetric grid layout, bold condensed sans, one NEON-LIME accent shape and a sharp hop-cone glyph. Big 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ОХМЕЛЕННОЕ', '+ХМЕЛЬ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Black + neon-lime + white. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte CHARCOAL-BLACK paper, visible edge. Modern dark craft: clean asymmetric grid, condensed sans, one NEON-ORANGE accent bar. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'СВЕТЛОЕ', 'ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Black + neon-orange + white. Sharp.
```

## 10 — АКВАРЕЛЬ ПАСТЕЛЬ · фон МЯГКИЙ ЦВЕТНОЙ wash
*Акварельная бумага, полноцветная мягкая заливка, рукописный шрифт.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, textured watercolor paper, matte, visible edge. Full-bleed soft watercolor wash of citrus + mint with gentle bleeds. Hand-lettered script 'ЛЫТКАРИНЪ' (Ъ), small 'Л+Ъ' mark, caps 'НУЛЁВКА', 'БЕЗАЛКОГОЛЬНОЕ 0.0% · ЛЫТКАРИНО · 449 МЛ'. Soft mint + sky-blue + pale yellow. Pretty, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, watercolor paper, matte. Full-bleed soft watercolor of golden wheat field at sunset, painterly. Script 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, caps 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Warm gold + amber + soft pink. Sharp.
```

## 11 — МОРСКОЙ ВИНТАЖ / СТАРАЯ КАРТА · фон ТЁМНО-СИНИЙ + крем
*Глубоко-синяя бумага, картуш как старая карта, компас-роза, золото.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, deep NAVY paper, matte, visible edge. Vintage old-map / nautical style: a cream cartouche with antique-map texture, a small compass rose, golden rope frame. Serif 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%'. Navy + cream + gold. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, dark TEAL-BLUE paper, matte. Vintage cartographic style: aged cream map-cartouche, compass star, fine gold border. Serif 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'СВЕТЛОЕ', 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Teal-blue + cream + gold. Sharp.
```

## 12 — БЛАГОРОДНЫЙ ВИННЫЙ · фон БОРДО + золото
*Глубоко-бордовая бумага, классическая вертикаль, овальный портрет-виньетка, золото.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, deep BURGUNDY paper, matte, visible edge. Noble classic vertical layout: a central oval vignette with an engraved brewery building, gold double-rule frame, refined serif. 'ЛЫТКАРИНЪ' (Ъ) arched, 'Л+Ъ' monogram, 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 1912 · 449 МЛ · 5.2%'. Burgundy + gold + cream. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, deep OXBLOOD-RED paper, matte. Noble vertical layout: oval vignette with engraved hops, gold filigree frame, serif type. 'ЛЫТКАРИНЪ', 'Л+Ъ' monogram, 'СВЕТЛОЕ', 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Oxblood + gold + cream. Sharp.
```

## 13 — ЗЕМЛЯНОЙ / КЕРАМИКА · фон ТЕРРАКОТ + крем
*Терракотовая бумага, ручная штамп-эстетика, органичные формы, как глиняная посуда.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, warm TERRACOTTA-CLAY paper, matte, visible edge. Earthy hand-stamped ceramic aesthetic: organic hand-drawn wheat motif, imperfect stamped texture, warm rustic sans. 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' stamp mark, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Terracotta + cream + olive. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, muted CLAY-OCHRE paper, matte. Earthy ceramic vibe: organic hand-drawn birch + river motif, hand-stamped texture, rustic sans. 'ЛЫТКАРИНЪ', 'Л+Ъ' stamp, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО · 449 МЛ · 4.2%'. Clay-ochre + cream + sage. Sharp.
```

## 14 — ГЕРБЪ ДВУХТОННЫЙ ДИАГОНАЛЬ · фон ДВУЦВЕТНЫЙ split
*Этикетка разбита по диагонали на два цвета, щит-герб поверх, лента.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into FOREST-GREEN and CREAM halves, visible edge. A central heraldic shield (pine + river) overlapping the split, a ribbon banner. Serif 'ЛЫТКАРИНЪ' (Ъ) arched, 'Л+Ъ' on shield, 'ПОДМОСКОВНОЕ' on banner, 'СВЕТЛОЕ · ЛЫТКАРИНО · 449 МЛ · 4.2%'. Green + cream + gold. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-RED and CREAM halves, visible edge. Central crest with crossed barley + hop, ribbon scroll. Serif 'ЛЫТКАРИНЪ', 'Л+Ъ' on shield, 'СВЕТЛОЕ' on scroll, 'ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Red + cream + gold. Sharp.
```

## 15 — КОНСТРУКТИВИЗМ / АВАНГАРД · фон КРАСНЫЙ + чёрный
*Родченко-эстетика: диагональная динамика, жирный гротеск, гео-формы, красно-чёрно-кремовый.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, Russian Constructivist / Rodchenko aesthetic: bold diagonal composition, heavy black grotesque Cyrillic set on an angle, red and black geometric shapes, a graphic hop wedge. Big 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ОХМЕЛЕННОЕ', '+ХМЕЛЬ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Bright red + black + cream. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, Constructivist avant-garde: dynamic diagonal layout, bold grotesque type, black + mustard geometric blocks, a graphic wheat shape. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'СВЕТЛОЕ', 'ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Mustard-yellow + black + cream. Sharp.
```

## 16 — ЯПОНСКИЙ КРАФТ МИНИМАЛ · фон ОФФ-ВАЙТ + индиго
*Огромный воздух, вертикальный текст, один мазок кистью, дзен.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, soft OFF-WHITE washi-style paper, matte, visible edge. Japanese-craft minimalism: huge negative space, one expressive INDIGO brushstroke forming a hop/leaf, small vertical Cyrillic column. 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'НУЛЁВКА', 'БЕЗАЛКОГОЛЬНОЕ 0.0% · ЛЫТКАРИНО · 449 МЛ'. Off-white + indigo + a touch of red. Zen, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, off-white washi paper, matte. Japanese-craft minimalism: vast whitespace, one bold CHARCOAL brushstroke (barley), small vertical type column, red seal stamp. 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'СВЕТЛОЕ', 'ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Off-white + charcoal + red seal. Sharp.
```

## 17 — РУССКИЙ ФОЛК / ЛУБОК · фон ЯРКИЙ ОРНАМЕНТ
*Хохлома/лубок: симметричный цветочный орнамент, красно-жёлто-зелёный по тёмному.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, Russian folk khokhloma aesthetic: symmetric ornamental floral border (red, gold, green) on a deep-black ground, decorative hand-painted look. Ornamental Cyrillic 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' folk emblem, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Black + red + gold + green. Festive, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, Russian lubok folk style: bright symmetric floral-and-leaf ornament framing the label on a warm red ground, naive illustration of birches. 'ЛЫТКАРИНЪ', 'Л+Ъ' emblem, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО · 449 МЛ · 4.2%'. Warm red + gold + green + cream. Sharp.
```

## 18 — НЕОН-САЙБЕР МОДЕРН · фон ТЁМНЫЙ ГРАДИЕНТ + свечение
*Тёмный градиент, неоновый светящийся шрифт, футуризм (эксперимент-контраст).*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper printed with a dark PURPLE-TO-BLUE gradient, visible edge. Modern neon-cyber look: glowing CYAN + MAGENTA neon-tube lettering, a glowing hop-cone outline, subtle grid. Neon 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' glow mark, 'НУЛЁВКА', 'БЕЗ АЛКОГОЛЯ 0.0% · ЛЫТКАРИНО · 449 МЛ'. Purple-blue + cyan + magenta glow. Sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper, dark TEAL-TO-BLACK gradient, visible edge. Neon-cyber modern: glowing ORANGE + PINK neon type, glowing hop glyph, fine grid. 'ЛЫТКАРИНЪ', 'Л+Ъ' glow mark, 'ОХМЕЛЕННОЕ', '+ХМЕЛЬ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Teal-black + neon-orange + pink. Sharp.
```

## 19 — ТИПОГРАФИКА «ВСЁ ТЕКСТ» · фон ГОРЧИЦА / охра
*Шрифт = весь дизайн: гигантский сжатый вордмарк во всю этикетку, минимум графики.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte MUSTARD-YELLOW paper, visible edge. Typography-driven design: a GIANT bold condensed Cyrillic 'ЛЫТКАРИНЪ' (Ъ) filling the whole label as the hero, layered with smaller text. 'Л+Ъ' mark, 'СВЕТЛОЕ', 'КЛАССИЧЕСКИЙ ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Mustard + black type + cream. Bold, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte deep OCHRE paper, visible edge. Typography-driven: giant condensed 'ЛЫТКАРИНЪ' wordmark as the whole composition, stacked secondary text. 'Л+Ъ' mark, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Ochre + dark-brown type + cream. Sharp.
```

## 20 — СЕПИЯ ФОТО-ВИНТАЖ · фон СТАРОЕ ФОТО
*Старинная фотография завода/Лыткарино в сепии под рамкой-этикеткой.*
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, aged paper, matte, visible edge. Vintage photograph aesthetic: a SEPIA old photo of an early-1900s brewery building / Lytkarino town as the label background, an ornate cream frame and banner over it. Serif 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ПОДМОСКОВНОЕ', 'СВЕТЛОЕ · ЛЫТКАРИНО · 1912 · 449 МЛ · 4.2%'. Sepia-brown + cream + gold. Nostalgic, sharp.
```
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, aged paper, matte. Vintage photo aesthetic: a sepia old photo of brewers / a hop field as the label background, cream cartouche frame and ribbon over it. Serif 'ЛЫТКАРИНЪ', 'Л+Ъ' mark, 'СВЕТЛОЕ', 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 1912 · 449 МЛ · 4.5%'. Sepia + cream + gold. Sharp.
```

---

## 21 — ЗЕЛЁНЫЙ САЙТА + ЗОЛОТО · углублённый блок (по запросу) · 8 вариаций
*То, что ты изначально хотел. Зелёный сайта = `--accent-green: #34d399` (изумруд). База — тёмная версия этого зелёного (deep emerald), акцент — яркий `#34d399` + золото/золотая фольга. Бумажная наклеенная этикетка, разные композиции — выбрать.*

**21.1 — Светлое · минимал + золотая фольга**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DEEP-EMERALD paper (a dark version of the brand site green #34d399), fine paper grain, visible glued edge. Minimal premium: a large GOLD-FOIL 'Л+Ъ' monogram centered, gold-foil 'ЛЫТКАРИНЪ' (Ъ) arched above, a single gold hop cone, a thin gold frame. 'СВЕТЛОЕ', 'КЛАССИЧЕСКИЙ ЛАГЕР · КРАФТОВАЯ МАНУФАКТУРА · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Deep emerald + gold + a bright emerald (#34d399) hairline accent. Looks expensive, sharp.
```

**21.2 — Охмеленное · купеческая золотая гравюра**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DARK-EMERALD-GREEN paper, visible edge. Imperial Russian engraved label: ornate GOLD engraved frame, central oval medallion overflowing with gold-engraved hop cones, symmetric filigree. Gold old-Slavonic serif 'ЛЫТКАРИНЪ' (Ъ) arched, gold 'Л+Ъ' monogram, 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 1912 · 449 МЛ · 5.2%'. Deep green + gold + cream. Sharp.
```

**21.3 — Светлое · тёмно-зелёный + изумрудное свечение (модерн)**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DEEP-FOREST-GREEN paper, visible edge. Modern premium craft: clean asymmetric layout, gold thin lines, one bright EMERALD (#34d399) glowing accent shape and a sharp gold hop glyph, condensed elegant serif. Gold 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'СВЕТЛОЕ', 'ЛАГЕР · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Dark green + gold + bright emerald accent. Sharp.
```

**21.4 — Пшеничное · золотая типографика во всю этикетку**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DEEP-EMERALD paper, visible edge. Typography-driven: a GIANT gold condensed Cyrillic 'ЛЫТКАРИНЪ' (Ъ) filling the label as the hero, secondary text stacked, thin gold rules. 'Л+Ъ' gold mark, 'ПШЕНИЧНОЕ', 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%'. Dark green + gold + cream. Bold, sharp.
```

**21.5 — Подмосковное · золотой гербъ на зелёном**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DARK-GREEN paper, visible edge. Heraldic crest in gold: a shield (pine + river of the Moscow region), gold ribbon banner, gold laurel. Gold serif 'ЛЫТКАРИНЪ' (Ъ) arched, 'Л+Ъ' on the shield, 'ПОДМОСКОВНОЕ' on the banner, 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%'. Deep green + gold + cream. Sharp.
```

**21.6 — Охмеленное · золотая ботаническая гравюра хмеля**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DEEP-EMERALD paper, visible edge. Gold botanical-engraving style: a detailed GOLD line-engraving of a hop plant (cones + leaves) like an old herbarium plate, fine gold hatching, elegant gold serif, latin 'Humulus lupulus'. 'ЛЫТКАРИНЪ' (Ъ), 'Л+Ъ' mark, 'ОХМЕЛЕННОЕ', 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 5.2%'. Dark green + gold. Refined, sharp.
```

**21.7 — Светлое · ар-деко золото на тёмно-зелёном**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DEEP-EMERALD paper, visible edge. Art-Deco: symmetric GOLD sunburst/fan motif, stepped gold geometric frame, elegant deco capitals. Gold deco 'ЛЫТКАРИНЪ' (Ъ), geometric 'Л+Ъ' monogram, 'СВЕТЛОЕ', 'КЛАССИЧЕСКIЙ ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%'. Deep emerald + gold + cream. Luxe, sharp.
```

**21.8 — Нулёвка · тёмно-зелёный + золото + изумрудный «0.0»**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte DARK-GREEN paper, visible edge. Premium minimal: gold thin frame, a gold 'Л+Ъ' monogram, a fresh bright EMERALD (#34d399) round '0.0%' seal badge, a small gold sprig. Gold 'ЛЫТКАРИНЪ' (Ъ), 'НУЛЁВКА', 'БЕЗАЛКОГОЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 0.0%'. Deep green + gold + bright emerald badge + cream. Sharp.
```

---

## ВЫБРАН — СТИЛЬ 14 (диагональ-split + золотой гербъ) · ВСЯ ЛИНЕЙКА

*Заказчик утвердил 14.2 (красный+крем). Шаблон зафиксирован: диагональный split на ЦВЕТНУЮ + КРЕМОВУЮ половины, центральный ЗОЛОТОЙ геральдический щит с 'Л+Ъ', лента-свиток, золотые колосья/корона. **Крем + золото = константа линейки. Меняется только цвет половины + эмблема на щите + название.** Бумажная наклеенная этикетка.*

**Л-Светлое (эталон, утверждён) — КРАСНЫЙ**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-RED and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, crossed barley + a hop cone, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the red half, 'СВЕТЛОЕ' on the scroll, 'ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%' dark on the cream half. Deep red + cream + gold. Sharp.
```

**Л-Пшеничное — ЗОЛОТО / ЯНТАРЬ**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into WARM-GOLDEN-AMBER and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, a sheaf of wheat behind it, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the amber half, 'ПШЕНИЧНОЕ' on the scroll, 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%' dark on the cream half. Golden-amber + cream + gold. Sharp.
```

**Л-Нулёвка — БИРЮЗА / ЛЁД-ГОЛУБОЙ**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into FRESH-TEAL (ice-blue) and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, a sparkling water droplet and a small gold '0.0%' emblem, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the teal half, 'НУЛЁВКА' on the scroll, 'БЕЗАЛКОГОЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 0.0%' dark on the cream half. Teal-blue + cream + gold. Sharp.
```

**Л-Подмосковное — ЛЕСНОЙ ЗЕЛЁНЫЙ**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into FOREST-GREEN and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, a pine tree and a wavy river (Moscow-region motif) with small barley, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the green half, 'ПОДМОСКОВНОЕ' on the scroll, 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%' dark on the cream half. Forest-green + cream + gold. Sharp.
```

**Л-Охмеленное — МЕДЬ / КАШТАН**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-COPPER (chestnut-brown) and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield overflowing with hop cones, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the copper half, 'ОХМЕЛЕННОЕ' on the scroll, 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 5.2%' dark on the cream half. Copper-chestnut + cream + gold. Sharp.
```

**Идейки-альтернативы по цвету (если базовый расклад не зайдёт):**
- **Инверсия** (твоё «наоборот белый на другой»): крем-половину красить в светлый тон вкуса (бледно-золото / мятный / салатовый), а цветную оставить насыщенной — мягче, пастельнее.
- **Глубокие тёмные** вместо ярких: бордо / тёмно-изумруд / графит-синий / шоколад / тёмно-янтарь — премиальнее, дороже выглядит.
- **Диагональ-направление** менять по вкусу (влево/вправо) или угол круче — чтобы линейка на полке играла, а не была под копирку.
- **Цвет ленты-свитка** тоже можно красить под вкус (сейчас золото-константа).

---

## 🅰️ СТИЛЬ 14 — НАБОР ИНВЕРСИЯ (насыщенная + бледная половина того же вкуса)
*Вместо кремовой половины — БЛЕДНЫЙ тон вкуса. Цветная половина насыщенная. Золотой гербъ Л+Ъ + лента. Мягче, пастельнее.*

**Светлое — красный + блаш-розовый**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-RED and SOFT-BLUSH-PINK (a pale tint of the same red) halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, crossed barley + a hop cone, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) light on the red half, 'СВЕТЛОЕ' on the scroll, 'ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%' dark on the blush half. Red + blush-pink + gold. Sharp.
```

**Пшеничное — янтарь + бледно-золото**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into WARM-GOLDEN-AMBER and PALE-CREAM-GOLD (a light tint of the amber) halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a sheaf of wheat, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) light on the amber half, 'ПШЕНИЧНОЕ' on the scroll, 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%' dark on the pale half. Amber + pale gold + gold. Sharp.
```

**Нулёвка — бирюза + бледно-мятный**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into FRESH-TEAL and PALE-MINT (a light tint of the teal) halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a sparkling droplet and a small gold '0.0%' emblem, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) light on the teal half, 'НУЛЁВКА' on the scroll, 'БЕЗАЛКОГОЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 0.0%' dark on the mint half. Teal + pale mint + gold. Sharp.
```

**Подмосковное — зелёный + бледно-салатовый**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into FOREST-GREEN and PALE-SAGE (a light tint of the green) halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a pine tree + a wavy river, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) light on the green half, 'ПОДМОСКОВНОЕ' on the scroll, 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%' dark on the sage half. Forest-green + pale sage + gold. Sharp.
```

**Охмеленное — медь + бледно-песочный**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-COPPER (chestnut) and PALE-SAND-PEACH (a light tint of the copper) halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on a shield overflowing with hop cones, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) light on the copper half, 'ОХМЕЛЕННОЕ' on the scroll, 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 5.2%' dark on the sand half. Copper + pale sand + gold. Sharp.
```

---

## 🅱️ СТИЛЬ 14 — НАБОР ГЛУБОКИЕ ТЁМНЫЕ (премиум, дорого)
*Яркие тона → тёмные благородные. Крем + золотой гербъ Л+Ъ держим — золото ярко играет на тёмном.*

**Светлое — бордо**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-BORDEAUX-WINE and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on the shield, crossed barley + a hop cone, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the bordeaux half, 'СВЕТЛОЕ' on the scroll, 'ЛАГЕРЪ · ЛЫТКАРИНО · 449 МЛ · 4.5%' dark on the cream half. Deep bordeaux + cream + gold. Premium, sharp.
```

**Пшеничное — тёмный янтарь / бронза**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DARK-BRONZE-AMBER and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a sheaf of wheat, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the bronze half, 'ПШЕНИЧНОЕ' on the scroll, 'НЕФИЛЬТРОВАННОЕ · ЛЫТКАРИНО · 449 МЛ · 4.8%' dark on the cream half. Dark bronze-amber + cream + gold. Premium, sharp.
```

**Нулёвка — графит-синий**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DEEP-GRAPHITE-NAVY (dark teal-blue) and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a sparkling droplet and a small gold '0.0%' emblem, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the navy half, 'НУЛЁВКА' on the scroll, 'БЕЗАЛКОГОЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 0.0%' dark on the cream half. Graphite-navy + cream + gold. Premium, sharp.
```

**Подмосковное — тёмный изумруд**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DARK-EMERALD-PINE and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ', a pine tree + a wavy river, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the emerald half, 'ПОДМОСКОВНОЕ' on the scroll, 'СВЕТЛОЕ · ЛЫТКАРИНО ПОДМОСКОВЬЕ · 449 МЛ · 4.2%' dark on the cream half. Dark emerald + cream + gold. Premium, sharp.
```

**Охмеленное — тёмный шоколад**
```
Photoreal product shot, 449ml beer can with a GLUED PAPER LABEL, matte paper split diagonally into DARK-CHOCOLATE-BROWN and CREAM halves, visible edge. Central GOLD heraldic crest with 'Л+Ъ' on a shield overflowing with hop cones, gold ribbon scroll. Serif 'ЛЫТКАРИНЪ' (Ъ) cream on the chocolate half, 'ОХМЕЛЕННОЕ' on the scroll, 'ПОЛНОХМЕЛЬНОЕ · ЛЫТКАРИНО · 449 МЛ · 5.2%' dark on the cream half. Dark chocolate + cream + gold. Premium, sharp.
```

---

# ДАЛЬШЕ

1. **Сейчас (по команде):** прогнать все 40 (~80 кредитов из 416) → пачками скину, выберешь стиль(и).
2. Выбранный стиль → дотянуть на все 5 SKU (image-to-image от утверждённой банки).
3. Развёртка в плоскую этикетку для типографии (`3:2`, схема как `ФИЛЛС_ПРОМПТЫ_ЭТИКЕТКИ.md`).
4. **Лимонады ЛЫТКАРИНЪ** (Тархун · Дюшес · Лимонад) — те же банки, отдельный файл.
5. **BrewPrompt** — премиум, ждёт вкусы.
