class StrategySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :min_balance, :starting_bet, :description, :user_id, :game_id
end
