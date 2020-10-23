class AddDescriptionToStrategy < ActiveRecord::Migration[6.0]
  def change
    add_column :strategies, :description, :text
  end
end
