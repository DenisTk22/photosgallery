# React + Vite
- приложение Photo Gallery для отображения фотографий с сервера directus и их просмотра на React + Vite
- запуск приложения из командной строки: npm run dev
- вход в directus       ADMIN_EMAIL: "admin@example.com"
                        ADMIN_PASSWORD: "d1r3ctu5"
- чтобы увеличить фото, нужно кликнуть по нему, для уменьшения - кликнуть по нему повторно или по любой другой области

Не реализовано:
- подключение frontend к backend

Реализовано:
- подключение github репозитория
- развертывание сервера directus с помощью docker
- отображение галерии фотографий из локальной папки
- стилизация галерии, sass, адаптив под мобильную версию
- state manager mobX

**Развертывание сервера directus на docker**
- создать папку directus в корне проекта
- в папке directus создать три папки: database, extentions, uploads и файл docker-compose.yml (содержание файла docker-compose.yml взять из документации directus)
- перейти в командной строке в папку directus и запустить команду> docker compose up

**Ввод пароля:**
http://localhost:8055/admin/login?redirect=/settings/project
JSON галереи
http://localhost:8055/items/photosgallery
JSON элемента по id
http://localhost:8055/items/photosgallery/1
получение фото по photo:2d241d76-2ba1-4e93-9d62-e6392a93c5b6
http://localhost:8055/assets/2d241d76-2ba1-4e93-9d62-e6392a93c5b6
