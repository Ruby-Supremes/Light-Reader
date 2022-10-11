Rails.application.routes.draw do
  resources :reviews
  resources :books
  resources :genres
  resources :users
end
