## Технологии

- **React 19** + **TypeScript**
- **Redux Toolkit**
- **Axios**
- **FSD-inspired архитектура**
- **react-intersection-observer**
- **framer-motion**

## Запуск проекта

```bash
pnpm install
pnpm run dev
```

## Архитектура

- `features/news` — логика и данные новостей (slice, thunk, типы)
- `widgets/` — UI-компоненты: Header, Sidebar, NewsList
- `shared/` — API, утилиты, форматирование дат, Loader
- `pages/Home.tsx` — главная страница и вся логика


