BEGIN;

DROP TABLE IF EXISTS jobs CASCADE;

CREATE TABLE jobs (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
company TEXT NOT NULL,
location TEXT NOT NULL,
timepart TEXT NOT NULL,
salary TEXT NOT NULL,
skills TEXT NOT NULL,
category TEXT NOT NULL,
date TEXT NOT NULL
);


insert into jobs (title, company, location, timepart, salary, skills,category, date) 
values ('front end developer', 'GSG', 'Gaza', 'full', '30 - 44', '["senior","senior","senior"]',
'Web Developer',
'Mon Nov 08 2021 13:25:31 GMT+0200 (توقيت إسرائيل الرسمي)');

insert into jobs (title, company, location, timepart, salary, skills,category, date) 
values ('Editor', 'Yodo', 'Clyde Gallagher Place', 'part', '900 - 1500', '["Shotokan Karate","Video Editing","Business Rules"]',
'Editor',
'Mon Nov 08 2021 13:25:31 GMT+0200 (توقيت إسرائيل الرسمي)');


COMMIT;
