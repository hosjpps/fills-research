# 02 — Карта проекта (Architecture)

Этот файл объясняет структуру репозитория: где что лежит и почему. Читай перед тем, как что-то переименовывать или создавать.

---

## Дерево папок

```
ЛытракинЪ продукция /           ← корень (пробел и «ЛытрА» — не трогать, ссылки из Obsidian)
│
├── index.html                  ← Vercel root, лендинг ФИЛЛС-исследования
├── *.webp (6 файлов)           ← изображения, захардкожены в index.html
├── logo_lytkarin.png           ← используется в vizitki.html
├── CLAUDE.md                   ← инструкции для Claude Code (этот проект)
│
├── assets/                     ← рендеры банок и фоны для лендинга
│   ├── fills_*.png             ← рендеры банок ФИЛЛС (3–5 МБ)
│   ├── фон_*.png               ← фоны (11–14 МБ)
│   ├── barcode.jpg, qr.jpg     ← общий штрих + QR
│   └── barcodes/               ← штрих-коды по SKU (для Photoshop)
│
├── scripts/                    ← Photoshop JSX-скрипты
│   ├── fills_label_editable.jsx
│   ├── fills_label_v2_clean.jsx
│   ├── clone_flavors.jsx
│   ├── clone_klukva.jsx
│   └── add_back_info.jsx
│
├── docs/                       ← документация (читай первым)
│   ├── 01-overview.md          ← обзор проекта
│   ├── 02-architecture.md      ← ЭТОТ ФАЙЛ
│   ├── brands/
│   │   ├── fills.md            ← всё про ФИЛЛС (лимонады)
│   │   ├── lytkarin-beer.md    ← всё про ЛыткаринЪ пиво
│   │   ├── brewprompt.md       ← всё про BrewPrompt (премиум)
│   │   └── lytkarin-lemonades.md  ← массовый лимонад (концепт)
│   ├── 04-claude-design-setup.md  ← что грузить в Claude Design под каждый бренд
│   ├── 05-assets-index.md      ← каталог ассетов
│   ├── 06-vercel-deployment.md ← Vercel-нюансы, что не трогать
│   └── 07-workflow-rules.md    ← правила работы (3 перепроверки, банка 0.45)
│
├── research/                   ← маркетинговые исследования
│   ├── fills/
│   │   ├── konkurenty.md       ← конкуренты ФИЛЛС (бывш. ФИЛЛС_ВСЕ_КОНКУРЕНТЫ_ФИНАЛ.md, 224 КБ)
│   │   └── strategiya.md       ← стратегия (бывш. ФИЛЛС_ЛИМОНАДЫ_ИССЛЕДОВАНИЕ.md, 60 КБ)
│   ├── lytkarin-beer/
│   │   ├── konkurenty.md       ← конкуренты пива (бывш. ЛЫТКАРИНЪ_АНАЛИЗ_КОНКУРЕНТОВ_ПИВО.md, 76 КБ)
│   │   └── strategiya.md       ← стратегия пива (бывш. ЛЫТКАРИНЪ_ПИВО_ИССЛЕДОВАНИЕ.md, 20 КБ)
│   └── archive/
│       └── ИССЛЕДОВАНИЕ_ЛЫТКАРИНЪ_ПРОДУКЦИЯ_2026.md  ← старый общий; заменён выше
│
├── prompts/                    ← промпты для AI-генерации (MidJourney / Higgsfield / NanoBananoPro)
│   ├── fills/
│   │   ├── etiketki.md         ← промпты для этикеток лимонадов
│   │   ├── generaciya.md       ← промпты для фото и видео (NB Pro / Higgsfield)
│   │   └── limonady-experimental.md  ← эксперименты (бывш. ЛЫТКАРИНЪ_ПРОМПТЫ_ЛИМОНАДЫ)
│   └── lytkarin-beer/
│       ├── etiketki.md         ← промпты для этикеток пива (40 КБ, v3)
│       └── vizitki.md          ← промпты для визиток
│
├── design/                     ← дизайн-исходники (НЕ деплоятся на Vercel)
│   ├── fills/
│   │   ├── razvertki/          ← 6 PNG-развёрток банок (~8 МБ каждая, RGB)
│   │   ├── final-cmyk/         ← 7 PDF (6 SKU + сводный «6 SKU.pdf») для типографии
│   │   ├── editable-ai/        ← 6 AI-файлов Illustrator (~220 МБ суммарно)
│   │   └── preview/
│   │       └── etiketka-preview.html  ← локальная утилита превью этикетки
│   └── lytkarin-beer/
│       └── vizitki/
│           └── vizitki.html    ← 4 варианта визиток ЛыткаринЪ
│
├── production/                 ← техдата для типографии и производства
│   └── fills/
│       └── tehnolog/
│           ├── состав.md       ← состав + КБЖУ для печати (источник истины)
│           ├── штрих *.jpg × 6 ← физические штрих-коды (фото)
│           └── Снимок экрана *.png × 5  ← скриншоты КБЖУ-калькуляции
│
└── scratch/
    └── hf-tests/               ← 6 Higgsfield тест-рендеров (не критично, можно удалить)
```

---

## Принципы организации

### Корень — только Vercel-обязательное

В корне живёт ровно то, что нужно Vercel для деплоя лендинга:
- `index.html` — точка входа
- `assets/` — изображения, на которые ссылается index.html
- `scripts/` — JSX-скрипты (Photoshop, не Vercel, но лежат здесь исторически)
- `*.webp` × 6 и `logo_lytkarin.png` — захардкожены в index.html / vizitki.html

Всё остальное (docs, research, design, production, prompts) Vercel игнорирует.

### docs/ — читай первым

Индекс проекта. Новый участник начинает с `01-overview.md`, потом этот файл. Остальные docs — справочники по брендам, ассетам и правилам.

### research/ — маркетинг

Только Markdown. Один файл = один источник истины. Нет `_V2`, `_ФИНАЛ` — для этого git.

### prompts/ — AI-генерация

Промпты для MidJourney, Higgsfield, NanoBananoPro. Разбиты по бренду. Не путать с docs/04-claude-design-setup.md (там — что грузить в Claude Design).

### design/ — исходники

Тяжёлые файлы (AI, PDF, PNG). Не деплоятся. `final-cmyk/` — финал для типографии, `editable-ai/` — редактируемые исходники.

### production/ — техдата

Состав, КБЖУ, штрих-коды. Только для ФИЛЛС. Передаётся технологу и в типографию.

### scratch/ — черновик

Тестовые рендеры, одноразовые эксперименты. Можно удалить без потерь.

---

## Где что искать

| Ищу | Иду сюда |
|---|---|
| Лендинг (HTML + изображения) | `index.html`, `assets/`, `*.webp` в корне |
| Промпты для Higgsfield / фото | `prompts/fills/generaciya.md` |
| Промпты для этикеток пива | `prompts/lytkarin-beer/etiketki.md` |
| Промпты для этикеток лимонадов | `prompts/fills/etiketki.md` |
| Конкуренты ФИЛЛС | `research/fills/konkurenty.md` |
| Конкуренты пива ЛыткаринЪ | `research/lytkarin-beer/konkurenty.md` |
| Стратегия по лимонадам | `research/fills/strategiya.md` |
| Стратегия по пиву | `research/lytkarin-beer/strategiya.md` |
| PDF для типографии | `design/fills/final-cmyk/` |
| Illustrator-исходники | `design/fills/editable-ai/` |
| Развёртки банок (RGB PNG) | `design/fills/razvertki/` |
| Состав и КБЖУ | `production/fills/tehnolog/состав.md` |
| Штрих-коды (фото) | `production/fills/tehnolog/штрих *.jpg` |
| Визитки ЛыткаринЪ | `design/lytkarin-beer/vizitki/vizitki.html` |
| Превью этикетки | `design/fills/preview/etiketka-preview.html` |
| Photoshop-скрипты | `scripts/` |
| Описание бренда ФИЛЛС | `docs/brands/fills.md` |
| Описание BrewPrompt | `docs/brands/brewprompt.md` |
| Что грузить в Claude Design | `docs/04-claude-design-setup.md` |
| Правила workflow | `docs/07-workflow-rules.md` |

---

## Что НЕ переименовывать

| Объект | Причина |
|---|---|
| `ЛытракинЪ продукция ` (папка, с пробелом) | Ссылки из Obsidian Vault; смена пути ломает vault |
| `index.html` | Vercel entrypoint, задан в настройках деплоя |
| `assets/` | Путь захардкожен в index.html |
| `scripts/` | Исторически связано с index.html |
| `*.webp` в корне (6 файлов) | `src="klubnika-bazilik.webp"` и т.д. захардкожены в index.html |
| `logo_lytkarin.png` | Используется в vizitki.html |

---

## Правила именования новых файлов

- **Папки и MD-файлы в git** — транслит латиницей (`research/`, `prompts/`, `konkurenty.md`). CLI и git работают без проблем с пробелами и кириллицей, но транслит читабельнее в терминале.
- **Контентные PDF/PNG** — кириллица допустима (читаемость для дизайнеров и технологов важнее).
- **Никаких суффиксов** `_V2`, `_ФИНАЛ`, `_РЕАЛЬНЫЕ_ДАННЫЕ` — один файл на тему, история изменений в git.
- **Новый исходник или исследование** — сначала спроси: нет ли уже файла по этой теме в `research/` или `design/`.
