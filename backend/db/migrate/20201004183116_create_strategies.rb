class CreateStrategies < ActiveRecord::Migration[6.0]
  def change
    create_table :strategies do |t|
      t.string :name
      t.decimal :min_balance, precision: 8, scale: 2
      t.decimal :starting_bet, precision: 8, scale: 2
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
