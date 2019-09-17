Rails.application.routes.draw do
  namespace :guild do
    get 'dashboard/index'
    get 'dashboard/dash'
    get 'dashboard/signin'
    get 'dashboard/signup'
    get 'dashboard/signout'
  end
  # Landing Pages
  root 'home#index'
  # get '/get-involved', to: 'home#get_involved'
  # get '/sponsors', to: 'home#sponsors'
  # get '/projects', to: 'home#projects'

  # Error pages
  %w( 401 404 422 500 ).each do |code|
		get code, controller: :application, action: :error, code: code
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
