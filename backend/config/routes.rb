Rails.application.routes.draw do
  resources :strategies, only: [:index, :show]
  resources :users, only: [:create]
  resources :numbers, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
