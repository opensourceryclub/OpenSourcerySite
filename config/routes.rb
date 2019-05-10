Rails.application.routes.draw do
  root 'home#index'
  get '/sponsors', to: 'home#sponsors'
  get '/projects', to: 'home#projects'

  # config/routes.rb

  %w( 401 404 422 500 ).each do |code|
    get code, controller: :application, action: :error, code: code
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
