class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :artist_genres
  has_many :genres, through: :artist_genres
end
