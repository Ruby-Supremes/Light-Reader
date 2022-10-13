Rails.application.routes.draw do
  resources :reviews
  resources :books
  resources :genres
  resources :users


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "homebooks", to: "books#homebooks"
end
