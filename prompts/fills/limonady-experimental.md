# ЛЫТКАРИНЪ — ПРОМПТЫ ДЛЯ ЭТИКЕТОК (ЛИМОНАДЫ)

**Дата:** 4 июня 2026
**Линейка:** лимонады ЛЫТКАРИНЪ — те же банки 449 мл, что и пиво, другой дизайн.
**Стиль (утверждён рендером):** «Стиль 08» из пивного файла — светлое цветное поле + **золотая фольга** монограмма `Л+Ъ` по центру + золотой `ЛЫТКАРИНЪ` дугой + фольга-мотив; **кремовая нижняя плашка** с названием вкуса и инфо-строкой. Премиум-минимал, дорого выглядит.
3 SKU: **Тархун · Дюшес · Лимонад**

---

## ТЕХ-ПАРАМЕТРЫ

**Банка:** 449 мл (0.45 л) стандартная, бумажная наклеенная этикетка.
**Модель:** `nano_banana_2`. `aspect_ratio: 2:3`. `resolution: 2k` превью / `4k` печать. text-to-image.
```
generate_image(model="nano_banana_2", prompt="<ниже>", aspect_ratio="2:3", resolution="2k")
```
Лимонад = безалкогольная газировка → **без % ABV**, дескриптор «лимонад / натуральный».

> ⚠️ Кириллицу проверять глазами (`ЛЫТКАРИНЪ`, `Ъ`). Цвет половины/поля — главный различитель вкуса.

---

## 1 — ТАРХУН · травянисто-зелёный
```
Photoreal product shot, 449ml can with a GLUED PAPER LABEL, light TARRAGON-GREEN paper (herbal, slightly more vivid than sage), matte, fine grain, visible edge. Premium-craft minimal: a large GOLD-FOIL 'Л+Ъ' monogram centered, gold-foil 'ЛЫТКАРИНЪ' (Ъ) arched below it, a small gold-foil tarragon sprig. A CREAM bottom band with 'ТАРХУН' large in dark type and a fine line 'НАТУРАЛЬНЫЙ ЛИМОНАД · ЛЫТКАРИНО · EST. 2012 · 449 МЛ'. Tarragon-green + gold + cream. Sharp.
```

## 2 — ДЮШЕС · грушево-золотистый
```
Photoreal product shot, 449ml can with a GLUED PAPER LABEL, warm PALE-PEAR-YELLOW (soft honey) paper, matte, fine grain, visible edge. Premium-craft minimal: a large GOLD-FOIL 'Л+Ъ' monogram centered, gold-foil 'ЛЫТКАРИНЪ' (Ъ) arched below, a small gold-foil pear with a leaf. A CREAM bottom band with 'ДЮШЕС' large in dark type and a fine line 'ГРУШЕВЫЙ ЛИМОНАД · ЛЫТКАРИНО · EST. 2012 · 449 МЛ'. Pear-gold + gold + cream. Sharp.
```

## 3 — ЛИМОНАД · лимонно-жёлтый
```
Photoreal product shot, 449ml can with a GLUED PAPER LABEL, light LEMON-YELLOW paper (fresh, cool), matte, fine grain, visible edge. Premium-craft minimal: a large GOLD-FOIL 'Л+Ъ' monogram centered, gold-foil 'ЛЫТКАРИНЪ' (Ъ) arched below, a small gold-foil lemon with a slice. A CREAM bottom band with 'ЛИМОНАД' large in dark type and a fine line 'КЛАССИЧЕСКИЙ ЛИМОНАД · ЛЫТКАРИНО · EST. 2012 · 449 МЛ'. Lemon-yellow + gold + cream. Sharp.
```

---

## ИДЕЙКИ-АЛЬТЕРНАТИВЫ
- **Отстройка от пива:** лимонады можно сделать ярче/насыщеннее пива (пиво приглушённое), чтобы на полке линейки не путались.
- **Цвет фольги:** для лимонадов попробовать серебряную фольгу вместо золота — свежее, «газировочнее».
- **Мотив:** вместо одного фрукта — пара листьев/пузырьки газа фольгой, чтобы читалось «напиток», а не «пиво».

---

## ДАЛЬШЕ
1. Прогнать 3 промпта (~6 кр) → выбрать, докрутить цвета.
2. Развёртка в плоскую этикетку для типографии (`3:2`, схема как `ФИЛЛС_ПРОМПТЫ_ЭТИКЕТКИ.md`).
3. Пиво — основной файл `ЛЫТКАРИНЪ_ПРОМПТЫ_ЭТИКЕТКИ.md` (стиль 14 утверждён).
