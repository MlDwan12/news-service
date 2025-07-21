# News Service

Мини-сервис управления новостями на базе Express, TypeScript и SQLite с использованием TypeORM.

---

## Функционал

- Получить все новости — `GET /news`
- Получить новость по ID — `GET /news/:id`
- Создать новость — `POST /news`
- Обновить новость — `PATCH /news/:id`
- Удалить новость — `DELETE /news/:id`

---

## Технологии

- Node.js + Express
- TypeScript
- SQLite (через TypeORM)
- Валидация запросов (например, с express-validator или Zod)
- Чистая архитектура (контроллеры, сервисы, маршруты)

---

## Установка и запуск

1. Клонировать репозиторий

```bash
git clone <URL_репозитория>
cd <папка_проекта>
```

2. Установка зависимостей

```bash
npm install
```

3. Добавить переменные окружения пример .env.example

4. Запустить проект в режиме разработки

```bash
npm run dev
```

## Структура проекта

src/
├── app.ts # Инициализация Express
├── server.ts # Точка входа, подключение БД и запуск сервера
├── config/
│ └── database.config.ts # Настройка подключения к БД
├── controllers/
│ └── news.controller.ts # Контроллеры
├── services/
│ └── news.service.ts # Логика работы с данными
├── models/
│ └── news.model.ts # Сущность News
├── routes/
│ └── news.routes.ts # Роуты
├── middlewares/
│ └── validation.middleware.ts # Валидация и обработка ошибок
