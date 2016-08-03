Rails.application.routes.draw do
  root 'home#index'
  get 'users/new'
end
