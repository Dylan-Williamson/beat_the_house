class UsersController < ApplicationController
    def index
        @users = User.all
        render json: UserSerializer.new(@users)
    end

    def create
        user = User.find_or_create_by(username: params[:username], balance: 1000.00)
        render json: user, except: [:created_at, :updated_at]
    end
end
