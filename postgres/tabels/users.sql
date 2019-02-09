BEGIN TRANSACTION;
CREATE TABLE users (
    id serial PRIMARY KEY,
    user_name VARCHAR(100),
    email text UNIQUE NOT NULL,
    joinTime TIMESTAMP NOT NULL
);
COMMIT;