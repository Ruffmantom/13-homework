CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    burger_id int auto_increment NOT NULL,
    burger_name VARCHAR(50),
    devoured boolean,
    primary key(burger_id)
)