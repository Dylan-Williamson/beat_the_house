class AddImgToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :img, :string
  end
end
