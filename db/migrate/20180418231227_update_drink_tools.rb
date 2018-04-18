class UpdateDrinkTools < ActiveRecord::Migration[5.1]
  def change
    remove_column :drink_tools, :ingredient_id
    add_column :drink_tools, :tool_id, :integer
  end
end
