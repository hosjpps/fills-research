# ЛЫТКАРИНЪ — ПРОМПТЫ ДЛЯ ВИЗИТОК (Nano Banana Pro 2)

**Дата:** 7 мая 2026
**Назначение:** генерация дизайн-концептов визиток для согласования с заказчиком, потом — flat layout под печать

---

## ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ

**Формат визитки (стандарт РФ/ЕС):** 85 × 55 мм → пропорции **17:11 ≈ 3:2**
- В Higgsfield → `aspect_ratio: "3:2"`

**Модель:** `nano_banana_2` (Nano Banana Pro) — лучшая по типографике и кириллице
**Resolution:** `2k` (для печати — `4k`)
**Формат входа:** image-to-image — даём `logo_lytkarin.png` как brand reference

**Стоимость:** ~2 кредита/штуку × 2 стороны × 4 концепта = **16 кредитов** на превью всех вариантов

---

## ПРИМЕЧАНИЕ ПО КИРИЛЛИЦЕ

Nano Banana Pro 2 в целом справляется с кириллицей, в том числе с контактами на оборотной стороне. Если на каком-то результате коверкнёт 1-2 буквы — перегенерить с тем же промтом (часто следующий заход уже чистый).

---

## ПЕРСОНАЛЬНЫЕ ДАННЫЕ (для подстановки)

```
1) Карманова Кира Ивановна
   Руководитель производства
   +7 (912) 149-96-18
   k.karmanova@lytkarin.ru
   Telegram: @kira_lvanovna

2) Котельникова Анжела Руслановна
   Заместитель генерального директора
   +7 (977) 700-79-79
   a.kotelnikova@lytkarin.ru
   Telegram: @AnzhelaRuslanovna

3) Себко Петр Леонидович
   Главный технолог
   +7 (967) 054-45-98
   petr.sebko@lytkarin.ru

4) Живаев Алексей Александрович
   Генеральный директор
   +7 (925) 354-46-18
   a.zhivaev@lytkarin.ru
   Telegram: @ZhivaevCFO
```

Для превью используем **Карманову К. И.** (как пример).

---

## КАК ИСПОЛЬЗОВАТЬ

1. Загружаешь `logo_lytkarin.png` через `media_upload` → получаешь `media_id`
2. Берёшь промт нужного концепта ниже
3. В `medias[].value` вставляешь `media_id` лого
4. `aspect_ratio: "3:2"`, `resolution: "2k"`, `model: "nano_banana_2"`

---

# КОНЦЕПТ A — КЛАССИКА: ТЁМНО-ЗЕЛЁНЫЙ МЕДАЛЬОН

**Настроение:** солидный корпоративный стиль, золотое тиснение на тёмно-зелёной фактуре. Параллель к референсу БРЮПРОМТ. Под топ-менеджмент.

## A.1 — Лицевая сторона (для всех 4 человек одинаковая)

```
Premium business card, top-down photography, photorealistic.

Background: clean uniform light neutral surface — soft warm off-white paper or light beige (#f0ece5), evenly lit, very soft minimal shadow under the card so the card visually floats. NO wooden desk, NO objects, NO props — pure light studio backdrop.

The card is a horizontal 3:2 rectangle (85×55 mm proportions) made of thick textured paper with a deep forest green color (#1a4d2e). Subtle paper grain visible on the surface.

Centered on the card: the provided round logo treated as a gold-foil emblem — embossed metallic gold (#d4a574) version of the brewery seal showing 'ЛЫТКАРИНЪ' arched at top, 'КРАФТОВАЯ МАНУФАКТУРА' arched at bottom, central illustration of a brewery building with smoke stacks, beer bottle, hops, gear and citrus, 'EST. 2012' banner. The logo glints with light reflection, like real foil stamp.

Inner thin gold rectangular border 4mm from card edges. Matte texture overall. No other text on this side.

Sharp 4K detail, clean professional product photography against the light neutral backdrop, entire card in crisp focus.
```

## A.2 — Оборотная сторона (общая база)

Базовый шаблон оборота — одинаковый для всех 4 человек, меняется только блок «имя + должность + контакты». Ниже даны 4 готовых промта целиком, копируешь нужный.

**Общие правила оборота:**
- Background: clean uniform light neutral surface (#f0ece5), soft minimal shadow under the card
- Card: horizontal 3:2, deep forest green (#1a4d2e) textured paper, thin gold (#d4a574) inner rectangular border 4mm from edges
- Gold foil for name and labels (#d4a574), white (#ffffff) for body text
- Top-right corner: small gold round stamp version of the brewery logo (~18mm)
- Bottom row: gold foil text — left «Лыткарино · Россия», right «Est. 2012»
- Sharp 4K, photorealistic, all Cyrillic crisp and correctly spelled

---

## A.2.1 — КАРМАНОВА К. И.

```
Premium business card, top-down photography, photorealistic. Background: clean uniform light neutral surface (#f0ece5), evenly lit, very soft minimal shadow under the card. NO desk, NO props, pure studio backdrop.

The card: horizontal 3:2 rectangle (85×55 mm), deep forest green (#1a4d2e) thick textured paper, thin gold (#d4a574) rectangular inner border 4mm from edges.

LAYOUT (padded 28px from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, gold foil #d4a574, ~22pt, weight 800):
  «Карманова»
Line 2 (same style, directly under):
  «Кира Ивановна»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «РУКОВОДИТЕЛЬ ПРОИЗВОДСТВА»
Below role: a thin 50mm gold horizontal line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (912) 149-96-18»
  «EMAIL»     «k.karmanova@lytkarin.ru»
  «TELEGRAM»  «@kira_lvanovna»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small embossed gold-foil round brewery logo stamp, ~18mm diameter.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

All Cyrillic text MUST be crisp and correctly rendered. Sharp 4K, photorealistic.
```

---

## A.2.2 — КОТЕЛЬНИКОВА А. Р.

```
Premium business card, top-down photography, photorealistic. Background: clean uniform light neutral surface (#f0ece5), evenly lit, very soft minimal shadow under the card. NO desk, NO props, pure studio backdrop.

The card: horizontal 3:2 rectangle (85×55 mm), deep forest green (#1a4d2e) thick textured paper, thin gold (#d4a574) rectangular inner border 4mm from edges.

LAYOUT (padded 28px from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, gold foil #d4a574, ~22pt, weight 800):
  «Котельникова»
Line 2 (same style, directly under):
  «Анжела Руслановна»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ЗАМЕСТИТЕЛЬ ГЕНЕРАЛЬНОГО ДИРЕКТОРА»
Below role: a thin 50mm gold horizontal line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (977) 700-79-79»
  «EMAIL»     «a.kotelnikova@lytkarin.ru»
  «TELEGRAM»  «@AnzhelaRuslanovna»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small embossed gold-foil round brewery logo stamp, ~18mm diameter.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

All Cyrillic text MUST be crisp and correctly rendered. Sharp 4K, photorealistic.
```

---

## A.2.3 — СЕБКО П. Л.

```
Premium business card, top-down photography, photorealistic. Background: clean uniform light neutral surface (#f0ece5), evenly lit, very soft minimal shadow under the card. NO desk, NO props, pure studio backdrop.

The card: horizontal 3:2 rectangle (85×55 mm), deep forest green (#1a4d2e) thick textured paper, thin gold (#d4a574) rectangular inner border 4mm from edges.

LAYOUT (padded 28px from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, gold foil #d4a574, ~22pt, weight 800):
  «Себко»
Line 2 (same style, directly under):
  «Петр Леонидович»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ГЛАВНЫЙ ТЕХНОЛОГ»
Below role: a thin 50mm gold horizontal line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (967) 054-45-98»
  «EMAIL»     «petr.sebko@lytkarin.ru»
  «САЙТ»      «lytkarin.ru»

(no Telegram line — list is 3 items, slightly more whitespace below)

TOP-RIGHT corner: small embossed gold-foil round brewery logo stamp, ~18mm diameter.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

All Cyrillic text MUST be crisp and correctly rendered. Sharp 4K, photorealistic.
```

---

## A.2.4 — ЖИВАЕВ А. А.

```
Premium business card, top-down photography, photorealistic. Background: clean uniform light neutral surface (#f0ece5), evenly lit, very soft minimal shadow under the card. NO desk, NO props, pure studio backdrop.

The card: horizontal 3:2 rectangle (85×55 mm), deep forest green (#1a4d2e) thick textured paper, thin gold (#d4a574) rectangular inner border 4mm from edges.

LAYOUT (padded 28px from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, gold foil #d4a574, ~22pt, weight 800):
  «Живаев»
Line 2 (same style, directly under):
  «Алексей Александрович»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ГЕНЕРАЛЬНЫЙ ДИРЕКТОР»
Below role: a thin 50mm gold horizontal line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (925) 354-46-18»
  «EMAIL»     «a.zhivaev@lytkarin.ru»
  «TELEGRAM»  «@ZhivaevCFO»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small embossed gold-foil round brewery logo stamp, ~18mm diameter.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

All Cyrillic text MUST be crisp and correctly rendered. Sharp 4K, photorealistic.
```

## A.3 — FLAT ARTWORK ПОД ПЕЧАТЬ (готовое к типографии)

**Тех. требования к печати (для типографии):**
- Формат: 90×60 мм с вылетами 2,5 мм, итог обрезной 85×55 мм
- Разрешение: 300 dpi минимум, в Higgsfield ставим `resolution: "4k"`
- Цветовая модель: CMYK (Higgsfield отдаёт RGB → конвертация в CMYK перед печатью обязательна)
- В промте просим **flat 2D, без теней, без перспективы, без фона**, заливка edge-to-edge

`aspect_ratio: "3:2"`, `resolution: "4k"`, `model: "nano_banana_2"`

---

## A.3.0 — ЛИЦЕВАЯ (одна на всех 4 человек)

```
FLAT 2D BUSINESS CARD ARTWORK, print-ready CMYK layout. Horizontal 3:2 rectangle filled edge-to-edge, no surrounding background, no shadows, no perspective, no photographic effects, no studio mockup.

The card surface:
- Solid deep forest green fill (#1a4d2e), entire rectangle
- Thin gold (#d4a574) rectangular inner border, 4mm offset from card edges, ~0.5pt stroke

Centered on the card: the provided round brewery seal logo rendered as a flat metallic gold-foil emblem (#d4a574 base, subtle metallic shimmer only — no drop shadow, no 3D embossing protrusion). The seal shows 'ЛЫТКАРИНЪ' arched at top, 'КРАФТОВАЯ МАНУФАКТУРА' arched at bottom, central illustration of brewery building, beer bottle, hops, gear, citrus, with 'EST. 2012' banner. Logo size: ~60% of card height, vertically and horizontally centered.

No other text. Solid colors only. Pure flat vector-style print layout, ready for offset/digital printing. CMYK-ready output.
```

---

## A.3.1 — ОБОРОТ КАРМАНОВА К. И. (print-ready)

```
FLAT 2D BUSINESS CARD ARTWORK, print-ready CMYK layout. Horizontal 3:2 rectangle filled edge-to-edge, no surrounding background, no shadows, no perspective, no photographic effects.

Card surface:
- Solid deep forest green fill (#1a4d2e)
- Thin gold (#d4a574) rectangular inner border, 4mm from edges, ~0.5pt stroke

LAYOUT (28px padding from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (bold sans-serif Cyrillic, gold #d4a574, ~22pt, weight 800):
  «Карманова»
Line 2 (same):
  «Кира Ивановна»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «РУКОВОДИТЕЛЬ ПРОИЗВОДСТВА»
Below role: thin 50mm horizontal gold line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (912) 149-96-18»
  «EMAIL»     «k.karmanova@lytkarin.ru»
  «TELEGRAM»  «@kira_lvanovna»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small flat round brewery logo (~18mm), metallic gold-foil look, no 3D, no shadow.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

Pure flat 2D print layout, no shadows, no perspective, no photographic effects. All Cyrillic must be crisp and correctly spelled. CMYK-ready.
```

---

## A.3.2 — ОБОРОТ КОТЕЛЬНИКОВА А. Р. (print-ready)

```
FLAT 2D BUSINESS CARD ARTWORK, print-ready CMYK layout. Horizontal 3:2 rectangle filled edge-to-edge, no surrounding background, no shadows, no perspective, no photographic effects.

Card surface:
- Solid deep forest green fill (#1a4d2e)
- Thin gold (#d4a574) rectangular inner border, 4mm from edges, ~0.5pt stroke

LAYOUT (28px padding from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (bold sans-serif Cyrillic, gold #d4a574, ~22pt, weight 800):
  «Котельникова»
Line 2 (same):
  «Анжела Руслановна»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ЗАМЕСТИТЕЛЬ ГЕНЕРАЛЬНОГО ДИРЕКТОРА»
Below role: thin 50mm horizontal gold line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (977) 700-79-79»
  «EMAIL»     «a.kotelnikova@lytkarin.ru»
  «TELEGRAM»  «@AnzhelaRuslanovna»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small flat round brewery logo (~18mm), metallic gold-foil look, no 3D, no shadow.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

Pure flat 2D print layout, no shadows, no perspective, no photographic effects. All Cyrillic must be crisp and correctly spelled. CMYK-ready.
```

---

## A.3.3 — ОБОРОТ СЕБКО П. Л. (print-ready)

```
FLAT 2D BUSINESS CARD ARTWORK, print-ready CMYK layout. Horizontal 3:2 rectangle filled edge-to-edge, no surrounding background, no shadows, no perspective, no photographic effects.

Card surface:
- Solid deep forest green fill (#1a4d2e)
- Thin gold (#d4a574) rectangular inner border, 4mm from edges, ~0.5pt stroke

LAYOUT (28px padding from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (bold sans-serif Cyrillic, gold #d4a574, ~22pt, weight 800):
  «Себко»
Line 2 (same):
  «Петр Леонидович»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ГЛАВНЫЙ ТЕХНОЛОГ»
Below role: thin 50mm horizontal gold line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (967) 054-45-98»
  «EMAIL»     «petr.sebko@lytkarin.ru»
  «САЙТ»      «lytkarin.ru»

(no Telegram line — 3 contact items, slightly more whitespace below)

TOP-RIGHT corner: small flat round brewery logo (~18mm), metallic gold-foil look, no 3D, no shadow.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

Pure flat 2D print layout, no shadows, no perspective, no photographic effects. All Cyrillic must be crisp and correctly spelled. CMYK-ready.
```

---

## A.3.4 — ОБОРОТ ЖИВАЕВ А. А. (print-ready)

```
FLAT 2D BUSINESS CARD ARTWORK, print-ready CMYK layout. Horizontal 3:2 rectangle filled edge-to-edge, no surrounding background, no shadows, no perspective, no photographic effects.

Card surface:
- Solid deep forest green fill (#1a4d2e)
- Thin gold (#d4a574) rectangular inner border, 4mm from edges, ~0.5pt stroke

LAYOUT (28px padding from card edges):

TOP-LEFT BLOCK — name and role:
Line 1 (bold sans-serif Cyrillic, gold #d4a574, ~22pt, weight 800):
  «Живаев»
Line 2 (same):
  «Алексей Александрович»
Line 3 (uppercase Cyrillic, white #ffffff, ~10pt, letter-spacing 1.5px, 7mm below name):
  «ГЕНЕРАЛЬНЫЙ ДИРЕКТОР»
Below role: thin 50mm horizontal gold line.

CENTER-LEFT — contacts (two-column list, gold uppercase label + white value, ~11pt sans-serif Cyrillic, line height 7mm):
  «ТЕЛЕФОН»   «+7 (925) 354-46-18»
  «EMAIL»     «a.zhivaev@lytkarin.ru»
  «TELEGRAM»  «@ZhivaevCFO»
  «САЙТ»      «lytkarin.ru»

TOP-RIGHT corner: small flat round brewery logo (~18mm), metallic gold-foil look, no 3D, no shadow.

BOTTOM ROW — gold-foil small caps spanning card width:
  Left: «Лыткарино · Россия»     Right: «Est. 2012»

Pure flat 2D print layout, no shadows, no perspective, no photographic effects. All Cyrillic must be crisp and correctly spelled. CMYK-ready.
```

---

## ПОДГОТОВКА К ПЕЧАТИ (после генерации)

После того как Higgsfield отдал PNG/JPG:

1. **Открыть в Photoshop** (или Affinity Photo / GIMP)
2. **Image Mode → CMYK Color** — конвертировать из RGB в CMYK (типография примет только так)
3. **Image Size:** проверить разрешение 300 dpi при размере 90×60 мм (с вылетами). Если меньше — отресайзить с ресемплингом
4. **Добавить вылеты (bleed):** залить фоном на 2,5 мм за обрезной край с каждой стороны (если AI отрендерил впритык). Самое простое — расширить холст на 5×5 мм и продублировать края цвета
5. **Метки реза (trim marks):** добавить через File → Print → Marks (или вручную — 4 угловые линии)
6. **Сохранить как PDF/X-1a** или **TIFF 300 dpi CMYK** — это два формата, которые точно примут в любой типографии РФ

**Что отдавать в типографию по человеку:**
- 1 PDF/TIFF лицевой (одинаковый для всех)
- 1 PDF/TIFF оборота (свой для каждого)
- Указать тираж (например, 100 шт/чел = 400 шт всего), бумагу (рекомендую дизайнерскую матовую 300 г/м², кремовую или плотную белую), отделку (можно «золотое тиснение» на лого — будет соответствовать дизайну, но дороже)

---

# КОНЦЕПТ B — ПРЕМИУМ: КРАФТОВАЯ БУМАГА + ЗЕЛЁНЫЙ УГОЛ

**Настроение:** ремесленный, «крафтовый», подарочный. Бежевая текстурная бумага, сургучная печать, диагональный зелёный угол. Универсально для всех, особенно красиво у директора и зам.ген.

## B.1 — Лицевая (mockup)

```
Premium artisan business card photographed top-down on a rough linen tablecloth, warm afternoon sunlight, soft natural shadows.

Horizontal 3:2 card made of thick uncoated cream-beige craft paper (#f8f6f0) with visible fiber texture and slight cotton bond grain.

TOP-RIGHT corner: a deep forest green (#1a4d2e) triangular wedge cutting diagonally into the card from the top-right corner, covering about 30% of the card area.

LEFT-CENTER area: large bold sans-serif Cyrillic wordmark 'ЛЫТКАРИНЪ' in deep forest green, letter-spacing 3px, font weight 800. Below it in smaller italic serif: 'Крафтовая мануфактура · с 2012' in copper-gold (#c09560).

Floating over the diagonal seam (half on cream, half on green), centered vertically: the provided round brewery logo treated as a wax seal — copper-bronze tones, slightly raised 3D embossed look, real wax-stamp aesthetic with tiny imperfections, about 30mm diameter, casting a subtle drop shadow on the paper.

Bottom-left corner: small uppercase Cyrillic line 'НАТУРАЛЬНОЕ ПИВОВАРЕНИЕ · ПОДМОСКОВЬЕ' in dark gray (#1a1a1a), letter-spacing 3px, font size 7pt.

Photorealistic, sharp 4K, magazine-quality product photography.
```

## B.2 — Оборотная (mockup с контактами)

```
Same craft paper business card, photographed top-down on rough linen tablecloth, warm afternoon sunlight, photorealistic.

Now showing the BACK side: thick uncoated cream-beige craft paper (#f8f6f0) with visible fiber texture and slight cotton bond grain.

LEFT EDGE: thick vertical solid bar in deep forest green (#1a4d2e), 6mm wide, running full height of the card.

MAIN AREA layout, padded 32mm from left edge of paper, 28mm from top:

TOP BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, deep forest green #1a4d2e, ~24pt, weight 800):
  «Карманова»
Line 2 (same style, under):
  «Кира Ивановна»
Line 3 (italic serif Cyrillic in copper-gold #c09560, ~13pt, 6mm below name):
  «Руководитель производства»

DIVIDER: thin 60mm horizontal gold line below role.

CONTACT BLOCK (one column, line height 8mm, sans-serif Cyrillic ~12pt, dark gray #1a1a1a body with deep forest green #1a4d2e bold key labels):
  «Телефон    +7 (912) 149-96-18»
  «Email      k.karmanova@lytkarin.ru»
  «Telegram   @kira_lvanovna»
  «Сайт       lytkarin.ru»

BOTTOM-RIGHT corner: small round brewery seal logo, ~14mm diameter, copper-bronze tones, photographed as a wax stamp impression with slight 3D embossed feel.

All Cyrillic text MUST be crisp, correctly spelled, sharp 4K, photorealistic warm tones.
```

## B.3 — Flat artwork (лицевая)

```
Convert this concept into a FLAT 2D BUSINESS CARD ARTWORK (print-ready).

Horizontal 3:2 rectangle filled edge-to-edge:
- Cream-beige background (#f8f6f0) with subtle paper grain texture preserved
- Top-right diagonal triangular wedge in solid deep forest green (#1a4d2e), covering ~30% of card area
- Left-center: bold Cyrillic 'ЛЫТКАРИНЪ' wordmark, deep forest green, sans-serif, letter-spacing 3px, weight 800
- Below wordmark: italic serif 'Крафтовая мануфактура · с 2012' in copper-gold (#c09560)
- Center-right (over the diagonal seam): the provided round brewery logo as a flat copper-bronze stamp/seal, no 3D, no shadows
- Bottom-left: uppercase 'НАТУРАЛЬНОЕ ПИВОВАРЕНИЕ · ПОДМОСКОВЬЕ' in dark gray, letter-spacing 3px, 7pt
- No photographic effects, no shadows, no perspective — pure flat 2D print layout
- CMYK-ready output
```

---

# КОНЦЕПТ C — МИНИМАЛИЗМ: МНОГО ВОЗДУХА, АКЦЕНТ НА СЛОГАНЕ

**Настроение:** редакторский, чистый, типографический. Белая бумага, маленький лого в углу, большой слоган. Под технологов и креатив (Себко, маркетинг).

## C.1 — Лицевая (mockup)

```
Minimalist business card photographed top-down on a smooth concrete surface, soft diffused studio lighting, very subtle shadow.

Horizontal 3:2 card made of crisp natural white paper (#fafaf8), uncoated matte finish, slight fibrous grain visible.

TOP-LEFT area: the provided round brewery seal logo, small (about 20mm diameter), copper-bronze tones, sitting like a quiet stamp.

To the right of the logo: bold sans-serif Cyrillic wordmark 'ЛЫТКАРИНЪ' in deep forest green (#1a4d2e), font weight 800, letter-spacing 4px, font size aligned to logo height.
Below in smaller italic serif: 'Крафтовая мануфактура' in copper-gold (#c09560).

CENTER-LEFT (lots of empty space around it): an italic serif tagline in 3 lines, deep forest green ink:
«Натуральное пиво
и лимонады, сваренные
в Лыткарино»

BOTTOM ROW: thin horizontal line, very subtle. Below the line, two corners:
- Bottom-left: small caps 'EST. 2012' in copper-gold (#c09560)
- Bottom-right: small caps 'lytkarin.ru' in dark gray

Massive whitespace overall, editorial magazine aesthetic, photorealistic 4K, gallery-quality.
```

## C.2 — Оборотная (mockup с контактами)

```
Same minimalist card, top-down on smooth concrete surface, soft diffused studio lighting, very subtle shadow, photorealistic.

BACK side: crisp natural white paper (#fafaf8), uncoated matte, slight fibrous grain.

Generous whitespace, editorial layout. Padded 28mm from top, 32mm from left.

TOP BLOCK — name and role:
Line 1 (large bold sans-serif Cyrillic, dark off-black #1a1a1a, ~24pt, weight 800):
  «Карманова»
Line 2 (same style):
  «Кира Ивановна»
Line 3 (uppercase Cyrillic sans-serif, deep forest green #1a4d2e, ~10pt, letter-spacing 2px, 8mm below name):
  «РУКОВОДИТЕЛЬ ПРОИЗВОДСТВА»

CONTACT BLOCK (24mm below role, sans-serif Cyrillic ~12pt, line height 9mm, dark gray #333):
  «·  +7 (912) 149-96-18»
  «·  k.karmanova@lytkarin.ru»
  «·  Telegram   @kira_lvanovna»
The «·» bullet should be in copper-gold (#c09560).

BOTTOM EDGE: thin gradient horizontal line, ~3mm tall, smooth gradient from deep forest green (#1a4d2e) → copper-gold (#d4a574) → forest green, spanning full card width.

No other elements, lots of breathing room. All Cyrillic text crisp, correctly rendered. Sharp 4K, gallery-quality photo.
```

## C.3 — Flat artwork (лицевая)

```
Convert into a FLAT 2D BUSINESS CARD ARTWORK (print-ready).

Horizontal 3:2 rectangle:
- Off-white paper background (#fafaf8) with very subtle grain
- Top-left: provided round brewery logo, small flat copper-bronze stamp, ~20mm diameter
- Right of logo: 'ЛЫТКАРИНЪ' in deep forest green sans-serif, weight 800, letter-spacing 4px; 'Крафтовая мануфактура' italic serif in copper-gold below
- Center-left: 3-line italic serif tagline in deep forest green:
  «Натуральное пиво / и лимонады, сваренные / в Лыткарино»
- Bottom: thin separator line; corners 'EST. 2012' (copper-gold) and 'lytkarin.ru' (dark gray)
- No shadows, no perspective, pure flat 2D print artwork, CMYK-ready
```

---

# КОНЦЕПТ D — СОВРЕМЕННЫЙ: ДВУХЧАСТНЫЙ (ЗЕЛЁНОЕ + КРЕМОВОЕ)

**Настроение:** строгий современный брендинг, чёткая структура, удобное сканирование контактов. Универсально для всей команды.

## D.1 — Лицевая (mockup)

```
Modern business card photographed top-down on a matte black surface, single soft overhead light, clean shadow.

Horizontal 3:2 card divided into two horizontal sections:

TOP 62%: solid deep forest green (#1a4d2e), centered: the provided round brewery logo treated as embossed gold-foil emblem, ~50mm diameter, copper-gold tones with metallic sheen, casting subtle inner shadow into the paper. Thin gold inner border 1mm thick along top and side edges of this section.

BOTTOM 38%: cream-beige paper (#f8f6f0), separated from top section by a 3mm thick gold horizontal stripe.

In the bottom section:
- Left side: bold sans-serif Cyrillic 'ЛЫТКАРИНЪ' in deep forest green, letter-spacing 4px, weight 800, ~28pt
- Right side: italic serif Cyrillic in 2 lines, copper-gold (#c09560), right-aligned:
  'Крафтовая мануфактура
   Лыткарино · с 2012'

Photorealistic 4K, premium print finish look, gold foil shimmer visible.
```

## D.2 — Оборотная (mockup с контактами)

```
Same modern card, top-down on matte black surface, single soft overhead light, clean shadow, photorealistic.

BACK side: cream-beige paper (#f8f6f0) full bleed.

LEFT EDGE: vertical thick gold (#d4a574) bar, 4mm wide, full card height.

Padded 28mm from top, 36mm from left.

NAME BLOCK (with thin gold vertical accent bar to its left, 4mm wide, height of name+role):
Line 1 (bold sans-serif Cyrillic, deep forest green #1a4d2e, ~22pt, weight 800):
  «Карманова Кира Ивановна»
Line 2 (uppercase Cyrillic sans-serif, dark gray #1a1a1a 70% opacity, ~10pt, letter-spacing 1.5px, 6mm below):
  «РУКОВОДИТЕЛЬ ПРОИЗВОДСТВА»

CONTACT GRID — 2 columns × 2 rows, 24mm below name block, gap 14mm × 24mm:

  Slot 1 (top-left):
    Label (deep forest green #1a4d2e, uppercase, ~9pt, letter-spacing 2px, weight 700): «ТЕЛЕФОН»
    Value (dark off-black, ~12pt, weight 500): «+7 (912) 149-96-18»

  Slot 2 (top-right):
    Label: «TELEGRAM»
    Value: «@kira_lvanovna»

  Slot 3 (bottom-left):
    Label: «EMAIL»
    Value: «k.karmanova@lytkarin.ru»

  Slot 4 (bottom-right):
    Label: «САЙТ»
    Value: «lytkarin.ru»

FOOTER: thin horizontal divider line, light gray, 18mm from bottom. Below the line, two ends:
  Left (uppercase, dark gray, letter-spacing 2px, ~9pt): «ЛЫТКАРИНЪ»
  Right (same style): «ЛЫТКАРИНО · РОССИЯ»

All Cyrillic text MUST be crisp and correctly rendered. Sharp 4K, photorealistic, premium print finish.
```

## D.3 — Flat artwork (лицевая)

```
Convert into FLAT 2D BUSINESS CARD ARTWORK (print-ready).

Horizontal 3:2 rectangle, two-section layout:
- Top 62%: solid deep forest green (#1a4d2e). Centered: provided round brewery logo as flat copper-gold metallic stamp, ~50mm diameter
- Thin 1mm gold (#d4a574) inner border on top and side edges of green section
- 3mm thick gold horizontal stripe separator
- Bottom 38%: cream-beige (#f8f6f0). Left: 'ЛЫТКАРИНЪ' bold sans-serif deep forest green, letter-spacing 4px, weight 800. Right: 2 lines italic serif copper-gold 'Крафтовая мануфактура / Лыткарино · с 2012', right-aligned

No shadows, no perspective, no photographic effects. Pure flat 2D CMYK-ready print artwork.
```

---

## СВАПНУТЬ НА ОСТАЛЬНЫХ 3 ЧЕЛОВЕК

В любом из обратных промтов (X.2) меняешь блоки `«Карманова»`, `«Кира Ивановна»`, должность, телефон, email, telegram на нужные. Готовые блоки замены ниже — копируй целиком вместо строк Кармановой:

### Котельникова А. Р. (Заместитель ген.директора)
```
  «Котельникова»
  «Анжела Руслановна»
  «ЗАМЕСТИТЕЛЬ ГЕНЕРАЛЬНОГО ДИРЕКТОРА»

  «ТЕЛ»     «+7 (977) 700-79-79»
  «EMAIL»   «a.kotelnikova@lytkarin.ru»
  «TELEGRAM»  «@AnzhelaRuslanovna»
```

### Себко П. Л. (Главный технолог) — без telegram
```
  «Себко»
  «Петр Леонидович»
  «ГЛАВНЫЙ ТЕХНОЛОГ»

  «ТЕЛ»     «+7 (967) 054-45-98»
  «EMAIL»   «petr.sebko@lytkarin.ru»
```
*(в концептах A/D вместо строки Telegram добавить «САЙТ — lytkarin.ru», чтобы не было пустого слота)*

### Живаев А. А. (Генеральный директор)
```
  «Живаев»
  «Алексей Александрович»
  «ГЕНЕРАЛЬНЫЙ ДИРЕКТОР»

  «ТЕЛ»     «+7 (925) 354-46-18»
  «EMAIL»   «a.zhivaev@lytkarin.ru»
  «TELEGRAM»  «@ZhivaevCFO»
```

---

## РЕКОМЕНДУЕМЫЙ ПОРЯДОК ДЕЙСТВИЙ

1. **Загрузить лого** через `media_upload` → запомнить `media_id`
2. **Сгенерить 4 лицевых стороны** (A.1, B.1, C.1, D.1) — ~8 кредитов, превью клиенту
3. **Скинуть клиенту** в стиле «вот 4 концепта, какой?»
4. После выбора концепта — **сгенерить оборот** на Кармановой (X.2) + flat-версию (X.3) под печать
5. **Размножить оборот** на остальных 3-х: тот же промт, свапнуть блок данных из секции выше
6. Если на каком-то результате коверкнуло букву — перегенерить тот же промт ещё раз

**Итого по кредитам на полный комплект:**
- 4 лицевых × 1 (одинаковый бренд) = 4 шт × 2 кр = **8 кр**
- 4 оборота × 4 человека (выбран один концепт) = 16 шт × 2 кр = **32 кр**
- flat artwork под печать = 1 шт × 2 кр = **2 кр**
- **≈ 42 кредита** на полную линейку, готовую к типографии
