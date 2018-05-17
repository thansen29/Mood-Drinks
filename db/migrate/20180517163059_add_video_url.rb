class AddVideoUrl < ActiveRecord::Migration[5.1]
  def change
    add_column :drinks, :video_url, :string
  end
end
