Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'search', to: 'search#search'
end
