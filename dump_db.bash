#!/bin/bash

# Загружаем переменные из .env файла
export $(grep -v '^#' .env | xargs)

# Проверка, что все переменные заданы
if [[ -z "$DB_HOST" || -z "$DB_PORT" || -z "$DB_NAME" || -z "$DB_USER" || -z "$DB_PASSWORD" ]]; then
  echo "Не заданы все необходимые переменные (DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD)"
  exit 1
fi

# Создаем папку для дампов, если ее нет
DUMP_DIR="./dumps/$(date +%Y-%m-%d)"
mkdir -p "$DUMP_DIR"

# Имя дампа с текущей датой и временем
DUMP_FILE="$DUMP_DIR/dump_$(date +%H-%M-%S).sql"

# Выполняем дамп базы данных
PGPASSWORD=$DB_PASSWORD pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME > "$DUMP_FILE"

if [ $? -eq 0 ]; then
  echo "Дамп базы данных успешно сохранен в $DUMP_FILE"
else
  echo "Ошибка при создании дампа"
  exit 1
fi

# Далее выполнить
# crontab -e
# 0 0 * * * /path/to/project/dump_db.sh
# chmod +x /path/to/project/dump_db.sh