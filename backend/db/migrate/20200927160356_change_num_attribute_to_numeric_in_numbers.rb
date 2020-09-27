class ChangeNumAttributeToNumericInNumbers < ActiveRecord::Migration[6.0]
  def change
    rename_column :numbers, :num, :numeric
  end
end
