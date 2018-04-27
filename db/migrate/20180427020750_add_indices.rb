class AddIndices < ActiveRecord::Migration[5.1]
  def change
    add_index :artist_genres, :artist_id
    add_index :artist_genres, :genre_id

    add_index :drink_genres, :drink_id
    add_index :drink_genres, :genre_id

    add_index :drink_ingredients, :drink_id
    add_index :drink_ingredients, :ingredient_id

    add_index :drink_tools, :drink_id
    add_index :drink_tools, :tool_id
  end
end
