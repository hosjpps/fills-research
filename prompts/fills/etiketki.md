# ФИЛЛС — ПРОМПТЫ ДЛЯ ГЕНЕРАЦИИ ЭТИКЕТОК (FLAT LABEL ARTWORK)

**Дата:** 6 мая 2026
**Назначение:** развёртка дизайна банки в плоский прямоугольник для отправки заказчику/типографии

---

## ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ

**Slim Can 330ml (стандарт):**
- Окружность (длина развёртки): ~182 мм
- Высота печатной зоны: ~115 мм
- **Пропорции этикетки: ~3:2** (горизонтальный прямоугольник)
- В Higgsfield → выбирать `aspect_ratio: "3:2"`

**Модель для генерации:** `nano_banana_2` (Nano Banana Pro) — лучшая по тексту и точности
**Resolution:** `2k` (минимум, для дальнейшей печати лучше `4k`)
**Формат входа:** image-to-image — даём готовую банку как референс

---

## КАК ИСПОЛЬЗОВАТЬ

1. Загружаешь финальную банку через `media_upload` → получаешь `media_id`
2. Берёшь промпт ниже под нужный вкус
3. Вставляешь `media_id` банки в `medias[].value`
4. Запускаешь `generate_image` с `aspect_ratio: "3:2"`, `resolution: "2k"`

**Стоимость:** 2 кредита за этикетку × 6 вкусов = **12 кредитов** на всю линейку.

---

## ОБЩИЙ ПАТТЕРН ПРОМПТА (база для всех 6 вкусов)

```
Convert this 3D photo of an aluminum soda can into a FLAT LABEL ARTWORK — the design unrolled from the cylindrical can surface into a flat rectangular label, as it would appear printed on paper before being applied to the can.

Requirements:
- COMPLETELY FLAT 2D rectangular layout, no 3D perspective, no curvature, no cylinder effect
- NO can shape visible, NO metallic top lid, NO metallic bottom rim, NO can edges
- NO photographic shadows, NO highlights, NO reflections from the can body
- NO background scene (no fruits, no kitchen, no studio backdrop) — pure label only
- The label must fill the ENTIRE 3:2 rectangle frame, edge-to-edge, no margins
- Preserve EXACTLY the original design elements:
  * Same color gradient (top→middle→bottom of original can = left-to-right or top-to-bottom of label)
  * Same '{FLAVOR_NAME}' subtitle text in the same position and style
  * Same 3D semi-transparent embossed 'ФИЛЛС' Cyrillic lettering (centered, large)
  * Same '330мл' text
  * Same heavy film grain texture across entire surface
  * Same matte aesthetic
- Output looks like a printable label artwork ready for production / dieline preview
- High resolution, sharp print-ready quality
```

---

## ВКУС 1 — КЛУБНИКА БАЗИЛИК

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from coral pink (top) → warm cream-white luminous center → mint green (bottom)
- Heavy film grain texture across entire surface (preserve and intensify the grain from the source)
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can)
- Subtitle 'КЛУБНИКА БАЗИЛИК' in two thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no background, no fruits, no kitchen — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## ВКУС 2 — ВИНОГРАД КРЕМ-СОДА

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from deep purple (top) → soft lavender luminous center → warm beige cream (bottom)
- Heavy film grain texture across entire surface
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can)
- Subtitle 'ВИНОГРАД КРЕМ-СОДА' in two thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no background — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## ВКУС 3 — КЛЮКВА АПЕЛЬСИН РОЗМАРИН

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from deep cranberry burgundy (top) → vibrant warm orange luminous center → muted sage rosemary green (bottom)
- Heavy film grain texture across entire surface
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can)
- Subtitle 'КЛЮКВА АПЕЛЬСИН РОЗМАРИН' in three thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no dark studio background — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## ВКУС 4 — КЛУБНИКА АРБУЗ

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from strawberry pink (top) → coral watermelon-flesh luminous center → light watermelon-rind green (bottom)
- Heavy film grain texture across entire surface
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can)
- Subtitle 'КЛУБНИКА АРБУЗ' in two thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no background — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## ВКУС 5 — ОГУРЕЦ ЛИМОН ЛАЙМ

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from cool lime green (top) → pale icy cucumber-white luminous center → soft pale lemon yellow (bottom)
- Heavy film grain texture across entire surface
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can — this can is the etalon for the typography)
- Subtitle 'ОГУРЕЦ ЛИМОН ЛАЙМ' in three thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no kitchen background, no cucumber/lemon/lime fruits — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## ВКУС 6 — ГРАНАТ КЛУБНИКА ГРЕЙПФРУТ ЧИЛИ

```
Convert this 3D can photo into a FLAT LABEL ARTWORK (flat 2D rectangular print layout).

The label is a horizontal 3:2 rectangle filled edge-to-edge with this design:
- Vertical gradient from deep pomegranate burgundy (top) → rich red-pink with fiery internal glow center → hot terracotta chili orange (bottom)
- Heavy film grain texture across entire surface
- Massive 3D semi-transparent embossed Cyrillic 'ФИЛЛС' lettering centered on the label, raised/frosted-glass effect with soft drop shadow (preserve exactly the lettering style from the source can)
- Subtitle 'ГРАНАТ КЛУБНИКА ГРЕЙПФРУТ ЧИЛИ' in four thin Cyrillic lines below 'ФИЛЛС'
- Small Cyrillic '330мл' near the bottom edge
- Matte finish look

CRITICAL: completely flat 2D layout with no can shape, no metallic edges, no photographic shadows, no dark studio background — pure printable label artwork only, filling the entire frame edge-to-edge.
```

---

## АЛЬТЕРНАТИВНЫЙ ВАРИАНТ — С DIELINE РАЗМЕТКОЙ

Если заказчику нужна именно типографическая развёртка с метками реза/bleed — добавь в конец любого промпта:

```
ALSO ADD a thin black dashed border line 5mm inside the rectangle frame (representing the safe zone / cut line). Add a thin solid black border at the very edge of the rectangle (representing the bleed line). Add a small text label '182mm × 115mm | 330ml slim can label dieline | bleed: 3mm' in the top-left corner outside the design area on a white margin.
```

Но это редко используется в AI-генерации — обычно dieline-разметку добавляют в Illustrator поверх готового artwork.

---

## АЛЬТЕРНАТИВЫ AI-ГЕНЕРАЦИИ

**Если AI плохо справится с развёрткой** (Nano Banana Pro может оставить намёк на цилиндр или искажения), есть более надёжные пути:

1. **Photoshop / Illustrator вручную** — взять одну банку, в Photoshop через Filter → Distort → Spherize (отрицательное значение) или Edit → Transform → Warp "распрямить" этикетку. Лучший результат, но 30-60 минут на банку.

2. **Mockup-сервисы (placeit.net, mockupworld.co)** — у них есть готовые шаблоны slim can 330ml с PSD-файлом, где этикетка лежит как Smart Object. Кладёшь свой dieline в этот Smart Object — получаешь и flat label, и 3D-mockup одновременно. Подписка ~$10/мес.

3. **Канва / Figma** — для проверки дизайна на печать. Создать рамку 1820×1150 px (в масштабе 10:1 от мм), вписать туда финальный artwork.

**Самый правильный для типографии:** заказчику обычно нужен векторный PDF/AI с dieline. AI-генерация даст растровую картинку — её хватит для **превью/одобрения дизайна**, но для печати нужен оригинал в Illustrator. Если у заказчика будет дизайнер на типографии — он перерисует под печать на основе превью.

---

## ЧТО ДЕЛАТЬ С ПОЛУЧЕННЫМИ ЭТИКЕТКАМИ

1. Скачать 6 PNG-файлов в папку проекта
2. Открыть в Photoshop / Figma / Preview — проверить читаемость и точность шрифта
3. Собрать в один файл-композицию (PDF или PNG) "Линейка ФИЛЛС — 6 этикеток" для отправки
4. Приложить к письму заказчику с пометкой: "*Превью дизайна этикеток. Финальные векторные файлы — после согласования.*"

---

*Дополнение к ФИЛЛС_ПРОМПТЫ_ГЕНЕРАЦИЯ.md*
