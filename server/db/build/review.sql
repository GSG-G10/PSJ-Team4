BEGIN;

DROP TABLE IF EXISTS review CASCADE;

CREATE TABLE review (
    employee_id INTEGER REFERENCES employee(id) ON DELETE CASCADE,
    review_content TEXT NOT NULL,
    rate INT DEFAULT 0,
    company_id INTEGER REFERENCES company(id) ON DELETE CASCADE,
    is_anonymous Boolean NOT NULL,
    PRIMARY KEY (employee_id, company_id)
);

COMMIT;
