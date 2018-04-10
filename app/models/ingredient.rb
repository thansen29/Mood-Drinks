class Ingredient < ApplicationRecord
  validates :name, :amount, presence: true
end
