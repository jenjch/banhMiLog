### Schema

CREATE DATABASE banhmi_db;
USE banhmi_db;

CREATE TABLE banhmi
(
	id int NOT NULL AUTO_INCREMENT,
	banhmi_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
