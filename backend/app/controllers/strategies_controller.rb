class StrategiesController < ApplicationController
    def index
        if params[:user_id] == nil
            strategies = Strategy.all
        else
            strategies = Strategy.where(user_id: params[:user_id])
        end
        render json: StrategySerializer.new(strategies)
    end

    def create
        strategy = Strategy.create(strategy_params)
        render json: strategy, except: [:created_at, :updated_at]
    end

    def show
        strategy = Strategy.find(params[:id])
        render json: StrategySerializer.new(strategy)
    end

    def update
        strategy = Strategy.find(params[:id])
        strategy.update(strategy_params)
        render json: strategy
    end

    def destroy
        strategy = Strategy.find(params[:id])
        strategy.destroy
    end

    def strategy_params
        params.require(:strategy).permit(:name, :min_balance, :starting_bet, :description, :user_id, :game_id)
    end
end
