json.array! @drinks do |drink|
    json.name drink.name
    json.imageUrl drink.image.url
    json.directions drink.directions
    json.tips drink.tips
    json.genres drink.genres.pluck(:name)
end 