@drinks.each do |drink|
  json.set! drink.id do
    json.partial! 'drink', drink: drink
  end
end
