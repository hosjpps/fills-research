# ЛыткаринЪ продукция — инструкции для Claude Code

Репозиторий-зонтик пивзавода ЛыткаринЪ. **4 продукта** в параллельной разработке: ФИЛЛС (лимонады), ЛыткаринЪ пиво, BrewPrompt (премиум пиво), ЛыткаринЪ лимонады (массовый).

## Перед началом — читай

1. [README.md](README.md) — общая навигация
2. [docs/01-overview.md](docs/01-overview.md) — обзор 4 продуктов
3. [docs/02-architecture.md](docs/02-architecture.md) — карта папок
4. [docs/07-workflow-rules.md](docs/07-workflow-rules.md) — правила работы

Если задача про конкретный бренд — `docs/brands/<brand>.md`.
Если задача про дизайн/Claude Design — `docs/04-claude-design-setup.md`.

## Контекст в Obsidian Vault

- `~/Documents/Obsidian Vault/20-Projects/Lytkarin-Brewery/Продукция-Research.md` — обзор исследования, артефакты, антипаттерны, уроки
- `~/Documents/Obsidian Vault/20-Projects/Lytkarin-Brewery/Project-Overview.md` — связанный лендинг brewery
- `~/Documents/Obsidian Vault/MANIFEST.md` — индекс vault

Универсальные паттерны (если нужны):
- `~/Documents/Obsidian Vault/40-Knowledge/Programming/Workflows/Generator-Verifier-Pair.md` — генератор + критик
- `Jarvis-Workflows/Three-Clean-Reviews.md` — 3 перепроверки данных перед фиксацией

## Жёсткие правила

1. **Папку проекта НЕ переименовывать** — `/Users/mac/Documents/ЛытракинЪ продукция /` содержит опечатку "ЛытрА" (правильно "ЛытКА") + хвостовой пробел. Менять нельзя — сломаются ссылки из Obsidian.
2. **Один источник истины** — не плодить `_V2`, `_ФИНАЛ`, `_РЕАЛЬНЫЕ_ДАННЫЕ` в именах. Версионность через `git diff`.
3. **Банка 0.45 л** — не 0.5. На 0.5 сложно найти подрядчика.
4. **Перепроверять данные конкурентов 3 раза** перед фиксацией.
5. **Vercel-критичные файлы не двигать**: `index.html`, `logo_lytkarin.png`, 6 `.webp` в корне, `assets/`. Двигать можно `.md`, `design/`, `production/`, `scratch/`.
6. **AI-генерация изображений** — промпты в `prompts/<бренд>/`, не разбрасывать.

## Деплой

- Репозиторий: `github.com/hosjpps/fills-research` → Vercel: `fills-research.vercel.app`
- Триггер: `git push origin main`
- Превью локально: `python3 -m http.server 8000` в корне → `http://localhost:8000`

## Тон работы

- Заказчик — владелец завода. Прямой коммуникатор, жёсткий по существу. Лесть и пустоту убирать.
- Если данные собирались (исследования) — указывать источник (сайт конкурента, Ozon-карточка и т.д.), не выдумывать.
- Для крупных задач — сначала план, потом исполнение. Brainstorming перед дизайном/большими правками.
- Для исследований и сводок — использовать субагентов sonnet (модель `sonnet`) на разведку и верификацию.
