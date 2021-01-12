select "customers"."firstName" as "First", "customers"."lastName" as "Last", "payments"."amount"
from "customers"
join "payments" using ("customerId")
order by amount desc
