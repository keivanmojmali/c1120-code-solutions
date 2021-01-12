select "addresses"."line1" as "Address","addresses"."district" as "District","cities"."name" as "Cities","countries"."name" as "Countries"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
