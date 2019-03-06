DROP KEYSPACE IF EXISTS bearei_db;

CREATE KEYSPACE bearei_db WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

USE bearei_db;

CREATE TABLE bearei_db.products ("itemId" int PRIMARY KEY, "companyName" varchar, "productName" varchar);
CREATE TABLE bearei_db.reviews (rating tinyint, title varchar, text varchar, recommend boolean, name varchar, fit tinyint, "itemId" int, helpful tinyint, "notHelpful" tinyint, flag boolean, "createdAt" date, productID UUID PRIMARY KEY);

COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/1.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/2.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/3.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/4.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/5.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/6.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/7.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/8.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/9.csv' WITH HEADER = TRUE;
COPY bearei_db.products ("itemId", "companyName", "productName") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/products/10.csv' WITH HEADER = TRUE;

COPY bearei_db.products (rating, title, text, recommend, name, fit, "itemId", helpful, "notHelpful", flag, "createdAt") FROM '/Users/thomashsu/Dropbox/HRR36/fec4-reviews/server/db/data/reviews/1.csv' WITH HEADER = TRUE;

