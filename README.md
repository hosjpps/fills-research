# ЛыткаринЪ — продукция завода

Репозиторий-зонтик пивзавода **ЛыткаринЪ** (Лыткарино МО, ребрендинг "Здоровое пространство" → "ЛыткаринЪ"). Четыре продукта в параллельной разработке:

| # | Бренд | Категория | Цена | Статус |
|---|---|---|---|---|
| 1 | **ФИЛЛС** | Лимонады, банка 0.45 | 65-85 ₽ | Этикетки в типографию |
| 2 | **ЛыткаринЪ пиво** | Среднее пиво, банка 0.45 | 100-130 ₽ | В доработке |
| 3 | **BrewPrompt** | Премиум-крафт пиво | 200-300 ₽ | Концепт |
| 4 | **ЛыткаринЪ лимонады** | Массовый ретро-лимонад | 45-65 ₽ | Концепт |

Действующие бренды завода: Чиж & Co, Ослиная, Caspary Brau, ВДНХ, 13K Functional.
Активы: 260+ сваренных рецептов, лаборатория с ИТМО, тапрум при заводе.

---

## Быстрая навигация

| Что ищу | Куда идти |
|---|---|
| **Обзор всего проекта** | [docs/01-overview.md](docs/01-overview.md) |
| **Карта папок (где что)** | [docs/02-architecture.md](docs/02-architecture.md) |
| **Профиль бренда ФИЛЛС** | [docs/brands/fills.md](docs/brands/fills.md) |
| **Профиль пива ЛыткаринЪ** | [docs/brands/lytkarin-beer.md](docs/brands/lytkarin-beer.md) |
| **Профиль BrewPrompt** | [docs/brands/brewprompt.md](docs/brands/brewprompt.md) |
| **Профиль массовых лимонадов** | [docs/brands/lytkarin-lemonades.md](docs/brands/lytkarin-lemonades.md) |
| **Что грузить в Claude Design** | [docs/04-claude-design-setup.md](docs/04-claude-design-setup.md) |
| **Каталог ассетов** | [docs/05-assets-index.md](docs/05-assets-index.md) |
| **Vercel — что не трогать** | [docs/06-vercel-deployment.md](docs/06-vercel-deployment.md) |
| **Правила работы** | [docs/07-workflow-rules.md](docs/07-workflow-rules.md) |

---

## Структура репозитория

```
/
├── docs/                    ← документация (читай первой)
├── research/                ← маркетинговые исследования (МД)
│   ├── fills/               ← konkurenty.md, strategiya.md
│   ├── lytkarin-beer/
│   └── archive/             ← устаревшие версии
├── prompts/                 ← промпты для AI-генерации
│   ├── fills/
│   └── lytkarin-beer/
├── design/                  ← дизайн-исходники
│   ├── fills/
│   │   ├── razvertki/       ← PNG развёртки банок (печать)
│   │   ├── final-cmyk/      ← PDF CMYK (в типографию)
│   │   ├── editable-ai/     ← Illustrator-исходники
│   │   └── preview/         ← локальные превью
│   └── lytkarin-beer/
│       └── vizitki/         ← визитки завода
├── production/              ← техданные для типографии
│   └── fills/tehnolog/      ← КБЖУ, штрих-коды, состав
├── scratch/                 ← тесты, эксперименты
│   └── hf-tests/            ← Higgsfield-рендеры
├── assets/                  ← рендеры банок для лендинга
├── scripts/                 ← Photoshop JSX-скрипты
├── index.html               ← Vercel root, лендинг ФИЛЛС
├── *.webp (6)               ← иконки SKU для лендинга
└── logo_lytkarin.png        ← логотип завода
```

Подробная карта — [docs/02-architecture.md](docs/02-architecture.md).

---

## Деплой

- **Репозиторий:** `github.com/hosjpps/fills-research`
- **Vercel:** `fills-research.vercel.app`
- Триггер: `git push origin main`

Что **нельзя** двигать (Vercel сломается):

- `index.html`
- `logo_lytkarin.png`
- 6 `.webp` в корне (подключены через relative-пути)
- `assets/` (может использоваться JS внутри index.html)

Детали — [docs/06-vercel-deployment.md](docs/06-vercel-deployment.md).

---

## Правила

1. **Банка 0.45 л** (не 0.5 — сложно найти подрядчика).
2. **Перепроверять данные 3 раза** перед фиксацией (для исследований конкурентов критично).
3. **Один источник истины** — не плодить `_V2`, `_ФИНАЛ` в именах файлов. Версионность через git.
4. **Папку проекта не переименовывать** (`/Users/mac/Documents/ЛытракинЪ продукция /` — есть опечатка "ЛытрА" и хвостовой пробел, но ссылки из Obsidian Vault на неё завязаны).
5. **Каждый бренд = свой проект в Claude Design** (не путать ФИЛЛС с ЛыткаринЪ-пивом).

Подробнее — [docs/07-workflow-rules.md](docs/07-workflow-rules.md).

---

## Что готово прямо сейчас

**ФИЛЛС:**
- 6 SKU финализированы (Клубника+Базилик, Виноград+Крем-сода, Клюква+Апельсин+Розмарин, Клубника+Арбуз, Огурец+Лимон+Лайм, Гранат+Клубника+Грейпфрут+Чили)
- Все этикетки в `design/fills/final-cmyk/` готовы к печати
- Состав + КБЖУ + штрих-коды — `production/fills/tehnolog/состав.md`
- Лендинг исследования живёт на Vercel
- Полный анализ 50+ конкурентов — `research/fills/konkurenty.md`

**ЛыткаринЪ пиво:**
- Стратегия + конкуренты — `research/lytkarin-beer/`
- Промпты этикеток + визиток — `prompts/lytkarin-beer/`
- 4 варианта визиток — `design/lytkarin-beer/vizitki/vizitki.html`

**BrewPrompt / ЛыткаринЪ лимонады:**
- Только концепты в `docs/brands/`. Материалов в репо нет.

---

## Связанные репозитории

- `github.com/hosjpps/fills-research` ← этот репозиторий (зонтик)
- `github.com/hosjpps/lytkarin-beer-research` ← отдельный мини-репо с пивным исследованием на Vercel
- `github.com/hosjpps/Lytkarin-brewery` ← основной лендинг brewery (приватный?)

## Связанные документы (вне репо)

- Obsidian Vault: `~/Documents/Obsidian Vault/20-Projects/Lytkarin-Brewery/`
  - `Продукция-Research.md` — обзор + антипаттерны + уроки
  - `Project-Overview.md` — связанный лендинг brewery
