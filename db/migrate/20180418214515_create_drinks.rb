class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.attachment :image
      t.text :directions, null: false
      t.text :tips
      t.timestamps
    end
  end
end
