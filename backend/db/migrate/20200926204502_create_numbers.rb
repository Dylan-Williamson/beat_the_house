class CreateNumbers < ActiveRecord::Migration[6.0]
  def change
    create_table :numbers do |t|
      t.integer :num
      t.string :color
      t.string :oddeven
      t.string :highlow
      t.integer :column
      t.integer :dozen
      t.integer :street

      t.timestamps
    end
  end
end
