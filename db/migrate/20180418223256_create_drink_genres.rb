class CreateDrinkGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :drink_genres do |t|
      t.integer :drink_id
      t.integer :genre_id
      t.timestamps
    end
  end
end
