class StrategySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :min_balance, :starting_bet
end
