
with cte_revenue as (
  select "rentalRate"*"rentalDuration" as "revenue", "replacementCost" as "cost", "title" as "Title"
  from "films"
  group by "filmId"
)

select "Title", "revenue"-"cost" as "Profit"
from cte_revenue
order by "Profit" desc
limit 5
