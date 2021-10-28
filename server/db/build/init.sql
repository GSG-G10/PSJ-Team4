BEGIN

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    location TEXT,
    profile_img TEXT,
    work_time INT
)


COMMIT;
