Rails.application.routes.draw do
  resources :games, only: [:index, :show]
  resources :strategies, only: [:index, :show]
  resources :users, only: [:create, :update] do
    resources :strategies, only: [:create, :index, :update, :show, :destroy]
  end
  resources :numbers, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
