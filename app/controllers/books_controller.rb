class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :create_error

    skip_before_action :authenticate, only: [:homebooks]

    def homebooks
      books = Book.limit(3)
      render json: books
    end

  # GET /books
    def index
      books = Book.all
      render json: books
    end
  
    # create book
    def create
      book = Book.create!(create_book_params)
      render json: book, status: 201
    end

    # get/books/id
    def show
        book = find_book
        render json: book
    end

    # update books
    def update
        book = find_book
        book.update!(book_params)
        render json: book
    end

    # delete books
    def destroy
        book = find_book
        book.destroy
        head :no_content
    end
    
  
    private 
    
    def book_params
      params.permit(:title, :coverpage, :description, :bookurl)
    end
  
    def create_book_params
        params.permit(:title, :coverpage, :description, :bookurl, :genre_id)
    end

    def find_book
      Book.find(params[:id])
    end
    
    def render_not_found_response
      render json: { error: "book not found" }, status: 404
    end
  
    def create_error
      render json: { error:  ["validation errors"]}, status: 422
    end
  
end
