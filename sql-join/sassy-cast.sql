select "actors"."firstName" as "First", "actors"."lastName" as "Last", "films"."title"
from "films"
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "films"."title" = 'Jersey Sassy'
