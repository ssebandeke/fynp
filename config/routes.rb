Rails.application.routes.draw do

  resources :charges
  get 'category/index'
  get 'home/reports'
  get 'home/about'
  get 'home/contact'
  get 'home/help'
  get 'home/lawrence'
  get 'home/nassif'
  get 'home/ken'
  get 'home/solo'
  get 'home/terms'
  get 'products/transaction'
  get 'products/comings'
  get 'bids/create'
  root 'products#index'
  get 'orders/express_new'
  resources :orders,:new => {:express => :get}
  resources :products do
    resources :bids
    collection do
      get 'search'
    end
  end
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

end
