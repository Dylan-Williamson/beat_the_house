class NumbersController < ApplicationController
    def index
        numbers = Number.all
        render json: NumberSerializer.new(@numbers)
    end
end
