# 06. Vercel — деплой и нюансы

---

## Репозиторий и домен

- GitHub: `github.com/hosjpps/fills-research`
- Vercel: `fills-research.vercel.app`
- Vercel смотрит на корень репо. `index.html` в корне = главная страница лендинга.
- Деплой автоматический: `git push origin main` → Vercel собирает и публикует.

---

## Что в корне доступно по URL

Всё, что лежит в корне репо, доступно напрямую через Vercel-URL:

| Файл | URL |
|---|---|
| `index.html` | `fills-research.vercel.app/` |
| `logo_lytkarin.png` | `fills-research.vercel.app/logo_lytkarin.png` |
| `klubnika-bazilik.webp` | `fills-research.vercel.app/klubnika-bazilik.webp` |
| ... (остальные .webp) | аналогично |

Файлы из подпапок тоже доступны по пути: `fills-research.vercel.app/assets/fills_crop.png`.

---

## Что НЕЛЬЗЯ двигать из корня

Эти файлы подключены в `index.html` через relative-пути — сдвиг сломает лендинг:

```
index.html
logo_lytkarin.png
klubnika-bazilik.webp
vinograd-krem-soda.webp
ogurec-limon-laim.webp
klubnika-arbuz.webp
klyukva-apelsin-rozmarin.webp
granat-klubnika-grapefruit-chili.webp
assets/           (целиком — JS внутри index.html обращается к файлам через DOM)
```

Перед сдвигом любого из этих файлов — открыть `index.html` и найти все вхождения имени файла.

---

## Что можно перемещать в подпапки (не влияет на лендинг)

- Все `.md` файлы (исследования, промпты, аналитика)
- `design/`, `production/`, `scratch/`, `docs/`
- `scripts/` (JSX-скрипты Photoshop — в прод не нужны, но в git лежат)

---

## Скрипты в git — не проблема

`scripts/*.jsx` деплоятся на Vercel и доступны по URL, но это не критично — они не подключены в HTML и никуда не вызываются. Просто тихо лежат.

---

## Локальная проверка перед деплоем

```bash
cd "/Users/mac/Documents/ЛытракинЪ продукция /"
python3 -m http.server 8000
# открыть http://localhost:8000
```

Проверить: загружаются ли изображения, работают ли все разделы лендинга, нет ли 404 в консоли браузера.

---

## Деплой

```bash
# Добавить файлы
git add -A

# Коммит
git commit -m "chore: краткое описание"

# Пуш = автодеплой на Vercel
git push origin main
```

Vercel строит preview для каждого пуша на отдельную ветку. Продакшн = только `main`.

---

## Важно: два отдельных Vercel-проекта

- `fills-research.vercel.app` — этот репо (ФИЛЛС + общий лендинг)
- `lytkarin-beer-research.vercel.app` — отдельный репо (пиво ЛыткаринЪ)

Не путать. Изменения в этом репо не попадают в lytkarin-beer-research и наоборот.
