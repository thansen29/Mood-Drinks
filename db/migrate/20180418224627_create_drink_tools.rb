class CreateDrinkTools < ActiveRecord::Migration[5.1]
  def change
    create_table :drink_tools do |t|
      t.integer :drink_id
      t.integer :ingredient_id
      t.timestamps
    end
  end
end
