Rails.application.routes.draw do
  root to: 'static_pages#root'

  post 'search', to: 'search#search'
  post 'search/cache', to: 'search#cache_info'
end
