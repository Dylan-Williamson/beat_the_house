class StrategiesController < ApplicationController
    def index
        strategies = Strategy.all
        render json: StrategySerializer.new(strategies)
    end

    def create
        # byebug
        strategy = Strategy.create(strategy_params)
        render json: strategy, except: [:created_at, :updated_at]
    end

    def show
        strategy = Strategy.find(params[:id])
        render json: StrategySerializer.new(strategy)
    end

    def strategy_params
        params.require(:strategy).permit(:name, :min_balance, :starting_bet, :description, :user_id, :game_id)
    end
end
