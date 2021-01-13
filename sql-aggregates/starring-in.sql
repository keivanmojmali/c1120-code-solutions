select count("actors"."actorId"), "categories"."name" as "Genre"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where  "lastName" = 'Monroe'
group by "Genre"
