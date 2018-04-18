class Drink < ApplicationRecord
  validates :name, :directions, presence: true, uniqueness: true

  has_attached_file :image, default_url: "default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :drink_genres
  has_many :genres, through: :drink_genres

end
