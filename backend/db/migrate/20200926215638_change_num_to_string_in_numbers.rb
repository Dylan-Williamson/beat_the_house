class ChangeNumToStringInNumbers < ActiveRecord::Migration[6.0]
  def change
    change_column :numbers, :num, :string
  end
end
