# 05. Каталог ассетов

Каталог всех файлов в репозитории: где находятся, для чего используются.

---

## ФИЛЛС — развёртки и PDF

### `design/fills/razvertki/`
6 PNG-развёрток — промежуточный формат между редактируемым AI и финальным CMYK.
- Виноград крем-сода.png
- Гранат клубника грейпфрут чили.png
- Клубника арбуз.png
- Клубника базилик.png
- Клюква апельсин розмарин.png
- Огурец лимон-лайм.png

Параметры: RGB, ~8 МБ каждый. В типографию не идут — только для проверки и правок.

### `design/fills/final-cmyk/`
7 PDF — финальный формат для типографии.
- 6 PDF по SKU (имена соответствуют развёрткам)
- `6 SKU.pdf` — сводный файл со всеми этикетками

Параметры: CMYK, отступы под вылеты, ключи цветоделения.

### `design/fills/editable-ai/`
6 файлов Adobe Illustrator (.ai) — редактируемые исходники.
- 29-44 МБ каждый
- Для правок в цвете, тексте, иерархии
- В git через LFS (иначе репо пухнет)

### `design/fills/preview/etiketka-preview.html`
Chrome bevel gradient — живой превью этикетки в браузере.
Цвета для копирования: `#e89685`, `#f2d7c2`, `#ecede8`, `#ebeae6`, `#dd8b73`, `#d49580`, `#d4a690`.

---

## ФИЛЛС — фото и рендеры банок

### `assets/fills_*.png` (6 шт)
High-res рендеры банок — по одному на SKU.
Файлы: `fills_klubnika_bazilik.png`, `fills_виноград-крем-сода.png` и аналогичные.
Размер: 2.3–5.5 МБ. Используются для полиграфии и презентаций.

### `assets/фон_*.png` (5 шт)
Фоновые изображения для печатной продукции.
Размер: 11–14 МБ каждый. Тяжёлые — не подключать в лендинг напрямую.

### `assets/fills_crop.png`, `assets/fills_crop_transparent.png`
Кроп банки — для плашек, карточек, мокапов.

### Корень репо — 6 `.webp` (лёгкие иконки SKU)
```
klubnika-bazilik.webp
vinograd-krem-soda.webp
ogurec-limon-laim.webp
klubnika-arbuz.webp
klyukva-apelsin-rozmarin.webp
granat-klubnika-grapefruit-chili.webp
```
Размер: 28–64 КБ. Подключены в `index.html` через relative-пути. Двигать нельзя — сломается лендинг.

---

## ФИЛЛС — штрих-коды и QR

### `assets/barcode.jpg`, `assets/qr.jpg`
Общие баркод и QR — для промо-материалов.

### `assets/barcodes/`
5 штрих-кодов по SKU:
- arbuz, granat, klukva, ogurec, vinograd

### `production/fills/tehnolog/штрих *.jpg`
6 физических фотографий от технолога с официальными штрих-кодами.
Это первичные данные — сверяться именно с ними при верстке.

---

## ЛыткаринЪ пиво

### `logo_lytkarin.png` (корень репо)
Логотип завода. Размер: 1.8 МБ.
Место: корень — доступен по URL на Vercel.

### `design/lytkarin-beer/vizitki/vizitki.html`
4 варианта визиток. Интерактивный HTML, открывается в браузере.

---

## Photoshop-скрипты

### `scripts/`
JSX-скрипты для автоматизации Photoshop:
- `fills_label_editable.jsx` — редактируемый шаблон этикетки
- `fills_label_v2_clean.jsx` — чистая версия v2
- `clone_flavors.jsx` — клонирование вкусов из базового шаблона
- `clone_klukva.jsx` — клонирование SKU Клюква
- `add_back_info.jsx` — добавление оборота этикетки (КБЖУ, состав, штрих)

В продакшн не нужны. В git есть, на Vercel деплоятся, но доступны только по URL (не критично).

---

## Скретч и тесты

### `scratch/hf-tests/`
6 файлов `hf_20260505_*.jpg` — Higgsfield-тесты май 2026.
Промежуточные результаты генерации. Источник истины — не они, а финальные рендеры в `assets/`.

---

## Быстрый поиск: "ищу X — иду сюда"

| Что нужно | Где искать |
|---|---|
| Логотип завода | Корень: `logo_lytkarin.png` |
| Лёгкая иконка SKU для лендинга | Корень: `*.webp` |
| High-res рендер банки | `assets/fills_*.png` |
| Превью этикетки в браузере | `design/fills/preview/etiketka-preview.html` |
| Развёртка для правок | `design/fills/razvertki/*.png` |
| Финальный PDF для типографии | `design/fills/final-cmyk/*.pdf` |
| Редактируемый Illustrator | `design/fills/editable-ai/*.ai` |
| Штрих-код для верстки | `assets/barcodes/` или `production/fills/tehnolog/штрих *.jpg` |
| QR-код | `assets/qr.jpg` |
| КБЖУ, состав, аллергены | `production/fills/tehnolog/состав.md` |
| Скрипты Photoshop | `scripts/*.jsx` |
| Визитки завода | `design/lytkarin-beer/vizitki/vizitki.html` |
| Тестовые генерации (черновики) | `scratch/hf-tests/` |
