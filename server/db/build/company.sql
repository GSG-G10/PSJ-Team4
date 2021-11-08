BEGIN;

Drop TABLE IF EXISTS company CASCADE;

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    location TEXT NOT NULL,
    profile_img TEXT DEFAULT 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    start_work_time TEXT,
    end_work_time TEXT,
    location_lat VARCHAR(50),
    location_lon VARCHAR(50)
);


COMMIT;
-- 1 | Rhynyx| jcarruth0@howstuffworks.com | kgqhS5Lu| gaza| https://robohash.org/estutid.png?size=50x50&set=set1 | 3:43 AM | 
-- 1:59 AM| 51.6522585| 17.1688525
