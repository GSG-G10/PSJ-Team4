BEGIN;

Drop TABLE IF EXISTS company CASCADE;

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    location TEXT,
    profile_img TEXT,
    start_work_time TEXT,
    end_work_time TEXT,
    location_lat VARCHAR(50),
    location_lon VARCHAR(50),
);


COMMIT;