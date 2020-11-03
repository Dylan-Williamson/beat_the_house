Rails.application.routes.draw do
  resources :games, only: [:index, :show]
  resources :strategies, only: [:create, :index, :show]
  resources :users, only: [:create, :update] do
    resources :strategies, only: [:index, :show]
  end
  resources :numbers, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
