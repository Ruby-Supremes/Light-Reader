class GenresController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :create_error
  
  # GET /genres
    def index
      genres = Genre.all
      render json: genres
    end
  
    # create genre
    def create
      genre = Genre.create!(create_genre_params)
      render json: genre, status: 201
    end

    # get/genres/id
    def show
        genre = find_genre
        render json: genre
    end

    # update genres
    def update
        genre = find_genre
        genre.update!(genre_params)
        render json: genre
    end

    # delete genres
    def destroy
        genre = find_genre
        genre.destroy
        head :no_content
    end
    
  
    private 
    
    def genre_params
      params.permit(:name)
    end
  
    def create_genre_params
        params.permit(:name)
    end

    def find_genre
      Genre.find(params[:id])
    end
    
    def render_not_found_response
      render json: { error: "genre not found" }, status: 404
    end
  
    def create_error
      render json: { error:  ["validation errors"]}, status: 422
    end

end
