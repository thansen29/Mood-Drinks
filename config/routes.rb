Rails.application.routes.draw do
  root to: 'static_pages#root'

  post 'search', to: 'search#search'
end
