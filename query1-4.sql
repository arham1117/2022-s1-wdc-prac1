SELECT DISTINCT address
FROM address
INNER JOIN customer
      ON address.address_id = customer.address_id
INNER JOIN inventory
      ON customer.store_id = inventory.store_id
WHERE film_id = 918;