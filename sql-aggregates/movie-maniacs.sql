select sum("payments"."amount") as "Total Paid",
 "customers"."firstName" as "First", "customers"."lastName" as "Last", "customers"."customerId" as "ID"
from "customers"
join "payments" using ("customerId")
group by "ID"
order by "Total Paid" desc
