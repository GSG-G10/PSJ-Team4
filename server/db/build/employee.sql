BEGIN;

DROP TABLE IF EXISTS employee CASCADE;

CREATE TABLE employee (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(320) UNIQUE NOT NULL,
password TEXT NOT NULL,
age	INT,
profile_img	TEXT DEFAULT 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
cover_img TEXT DEFAULT 'https://www.gigsy.in/static/media/default-cover.cfb7a6a2.gif',
location TEXT,
phone_number VARCHAR(15),
status	VARCHAR(50)	DEFAULT 'Available'
);

SET client_encoding TO 'UTF8';

COMMIT;
