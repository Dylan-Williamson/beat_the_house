class AddGameIdToStrategies < ActiveRecord::Migration[6.0]
  def change
    add_column :strategies, :game_id, :integer
  end
end
