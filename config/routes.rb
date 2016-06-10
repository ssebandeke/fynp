Rails.application.routes.draw do
  get 'home/about'
  get 'home/contact'
  get 'home/help'
  get 'home/lawrence'
  get 'home/nassif'
  get 'home/ken'
  get 'home/solo'

  get 'products/transaction'
  get 'bids/create'
  root 'products#index'
  get 'orders/express_new'
  resources :orders,:new => {:express => :get}
  resources :products do
    resources :bids
  end
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

end