json.id @drink.id
json.name @drink.name
json.imageUrl @drink.image.url
json.directions @drink.directions
json.tips @drink.tips
json.genres @drink.genres.pluck(:name)
json.ingredients @drink.ingredients
json.tools @drink.tools.pluck(:name)
