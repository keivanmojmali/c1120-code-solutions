select "films"."releaseYear" as "Release Year",
"categories"."name" as "Genre"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie'
