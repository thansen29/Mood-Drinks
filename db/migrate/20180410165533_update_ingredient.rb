class UpdateIngredient < ActiveRecord::Migration[5.1]
  def change
    remove_column :ingredients, :amount
    add_column :ingredients, :amount, :float
  end
end
