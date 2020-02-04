CREATE TABLE dragon(
  id           SERIAL PRIMARY KEY,
  birthdate    TIMESTAMP NOT NULL,
  nickname     VARCHAR(64),
  generationid INTEGER,
  FOREIGN KEY (generationid) REFERENCES generation(id)
);