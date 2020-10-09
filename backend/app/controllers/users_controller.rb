class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(@users)
    end

    def create
        if User.find_by(username: params[:username]) == nil
            user = User.create(username: params[:username], balance: 1000)
        else
            user = User.find_by(username: params[:username])
        end
        render json: user, except: [:created_at, :updated_at]
    end
end
