class Strategy < ApplicationRecord
  belongs_to :user
  belongs_to :game
  validates :name, :min_balance, :starting_bet, :user_id, :game_id, presence: true
  validates :name, uniqueness: true
end
