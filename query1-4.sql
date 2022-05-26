SELECT DISTINCT address
FROM address
INNER JOIN store
      ON address.address_id = store.address_id
INNER JOIN inventory
      ON store.store_id = inventory.store_id
WHERE film_id = 918;