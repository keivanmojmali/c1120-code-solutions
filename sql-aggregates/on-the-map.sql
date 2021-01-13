select count("cities"."countryId"), "countries"."name" as "Country"
from "cities"
join "countries" using ("countryId")
group by "countries"."name"
