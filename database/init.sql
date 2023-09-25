CREATE TABLE fighters (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  country_id INT NOT NULL,
  style VARCHAR(50) NOT NULL
);

INSERT INTO fighters (first_name, last_name, country_id, style) VALUES ('Bruce', 'Lee', 2, 'Jeet Kune Do'), ('Chuck', 'Norris', 34, 'Chunk Kuk Do'), ('Jackie', 'Chan', 54, 'Kung Fu'), ('Hari', 'San', 89, 'JavaScript Kune Do');