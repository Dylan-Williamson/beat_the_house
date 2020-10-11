class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(@users)
    end

    def create
        user = User.find_or_create_by(username: params[:username]) do |user|
            user.balance = 1000
        end
        render json: user, except: [:created_at, :updated_at]
    end
end
