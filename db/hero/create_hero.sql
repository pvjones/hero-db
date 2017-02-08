INSERT INTO Hero
(name, origin, hometown, imageurl)
values
($1, $2, $3, $4)
RETURNING *; --RETURNS the created object






-- INSERT INTO product
-- (name, origin, hometown, imageUrl)
-- values
-- ($1, $2, $3, $4)
