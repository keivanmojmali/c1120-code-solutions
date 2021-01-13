
with cte_revenue as (
  select "rentalRate"*"rentalDuration" as "Revenue"
  from "films"
  group by "filmId"
), cte_cost as (
  select "replacementCost" as "Cost", "title" as "Title"
  from "films"
  group by "filmId"
)

select "films"."title" as "Film", cte_cost - cte_revenue as "Profit"
from "films"
order by "profit" desc
limit 5
