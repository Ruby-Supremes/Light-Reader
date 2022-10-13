class UsersController < ApplicationController

        skip_before_action :authenticate, only: [:create]
    
        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end
    
        def show
            user = User.find(session[:user_id])
            render json: user, status: :created
        end
    
        private
    
        def user_params
            params.permit(:username, :email, :password, :password_confirmation)
        end

        # def record_invalid(invalid)
        #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        # end
    
        # def not_found
        #     render json: {error: "User Not Found"}, status: :unauthorized
        # end
    
end
