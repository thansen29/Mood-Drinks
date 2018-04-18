class DrinkGenre < ApplicationRecord
  belongs_to :drink
  belongs_to :genre
end
