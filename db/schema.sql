CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    burger_id int auto_increment NOT NULL,
    burger_name VARCHAR(50),
    devoured boolean,
    primary key(burger_id)
) -- keep this for the heroku connection
-- Username
-- b5fe3fa986313a
-- Password
-- bcdae33f
-- Host
-- us-cdbr-iron-east-04.cleardb.net