## Технологии

- **React 18** + **TypeScript**
- **Redux Toolkit**
- **Axios** — запросы к New York Times API
- **FSD-inspired архитектура**
- **Автообновление каждые 30 секунд**
- **Группировка новостей по дате**
- **Мобильная адаптивная верстка**

## Запуск проекта

```bash
pnpm install
pnpm run dev
```

Если есть CORS-проблемы — временно можно использовать CORS-прокси:

```ts
const url = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/...'
```

## Архитектура

- `features/news` — логика и данные новостей (slice, thunk, типы)
- `widgets/` — UI-компоненты: Header, Sidebar, NewsList
- `shared/` — API, утилиты, форматирование дат, Loader
- `pages/Home.tsx` — главная страница и вся логика

## Обновление новостей

Новостной список обновляется каждые **30 секунд**. Новые статьи подгружаются из текущего месяца и отображаются наверху.

## API

New York Times Archive API
`rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP`

Пример запроса:
```
https://api.nytimes.com/svc/archive/v1/2024/6.json?api-key=...
```
