UPDATE Hero
SET 
  name = COALESCE($2, name), --This allows you to handle partial update requests. COALESCE will use $2 if it is not null. If $2 IS null, then COALESCE will use the old 'name' value
  origin = COALESCE($3, name),
  hometown = COALESCE($4, name),
  imageurl = COALESCE($5, name)
WHERE heroId = $1
RETURNING *;
/*If you want to return the updated value*/




-- UPDATE Hero
-- SET 
--   name = $2,
--   origin = $3,
--   hometown = $4,
--   imageurl = $5
-- WHERE heroId = $1
-- RETURNING *;
-- /*If you want to return the updated value*/
