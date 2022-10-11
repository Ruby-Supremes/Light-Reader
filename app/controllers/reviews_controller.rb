class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :create_error
  
  # GET /reviews
    def index
      reviews = Review.all
      render json: reviews
    end
  
    # create reviews
    def create
      review = Review.create!(create_review_params)
      render json: review, status: 201
    end

    # get/reviews/id
    def show
        review = find_review
        render json: review
    end

    # update reviews
    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    # delete reviews
    def destroy
        review = find_review
        review.destroy
        head :no_content
    end
    
  
    private 
    
    def review_params
      params.permit(:title, :description, :rating)
    end
  
    def create_review_params
        params.permit(:title, :description, :rating, :user_id, :book_id)
    end

    def find_reviews
      Review.find(params[:id])
    end
    
    def render_not_found_response
      render json: { error: "reviews not found" }, status: 404
    end
  
    def create_error
      render json: { error:  ["validation errors"]}, status: 422
    end
end
