Rails.application.routes.draw do
  root 'home#index'
  resources :users
  post 'store_user', to: 'users#store_user', as: 'store_user'
end
