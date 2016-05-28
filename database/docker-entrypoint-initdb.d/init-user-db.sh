#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER waterpower_user;
    CREATE DATABASE waterpower_db;
    GRANT ALL PRIVILEGES ON DATABASE waterpower_db TO waterpower_user;
EOSQL
