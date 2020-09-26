class NumbersController < ApplicationController
    def index
        @numbers = Number.all
        render json: @numbers
    end
end
