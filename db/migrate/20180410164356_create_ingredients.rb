class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.float :amount, null: false
      t.string :unit
      t.string :name, null: false
      t.timestamps
    end
  end
end
