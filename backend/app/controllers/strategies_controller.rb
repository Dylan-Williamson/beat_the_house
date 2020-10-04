class StrategiesController < ApplicationController
    def index
        @strategies = Strategy.all
        render json: StrategySerializer.new(@strategies)
    end

    def create
        strategy = Strategy.find_or_create_by(name: params[:name], min_balance: params[:min_balance], starting_bet: params[:starting_bet])
        render json: strategy, except: [:created_at, :updated_at]
    end
end
