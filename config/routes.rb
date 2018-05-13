Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :drinks, only: [:index, :show], defaults: { format: :json }
  post 'search', to: 'search#search'
  post 'search/cache', to: 'search#cache_info'
  post 'fetchSong', to: 'search#fetchSong'
  
end
