require 'rest-client'
require 'i18n'

class SearchController < ApplicationController
  def search
    artist = I18n.transliterate(params['artist'])
    searched_artist = Artist.find_by(name: artist) 

    if searched_artist 
      render json: { genres: searched_artist.genres.pluck(:name), cache: false }
      return;
    else 
      token = self.authorize()      

      genres_query = RestClient.get("https://api.spotify.com/v1/search?q=#{artist}&type=artist",
                              {"Authorization" => "Bearer #{token}"})

      # should do some error check in the case where the search fails for whatever reason
  
      @genres = JSON.parse(genres_query.body)['artists']['items'][0]['genres']
      if @genres.length == 0 
        @drink = Drink
          .includes(:genres)
          .includes(:ingredients)
          .includes(:tools)
          .find_by(name: 'Sea of Clouds (negroni)')
          render partial: 'drink.json.jbuilder'
          return
      end 

      render json: { genres: @genres, cache: true }
    end 

  end

  def fetchSong
    token = self.authorize()
    song = I18n.transliterate(params['song'])
    # can do some caching for each track

    track = RestClient.get("https://api.spotify.com/v1/search?q=#{song}&type=track",
                        {"Authorization" => "Bearer #{token}"})

    parsed = JSON.parse(track.body)['tracks']['items']
    if parsed.length > 0 
      preview_url = parsed[0]['preview_url']
    else 
      preview_url = ''
    end 
    
    render json: { previewUrl: preview_url }

  end 
  
  def authorize
    client_id = ENV['client_id']
    client_secret = ENV['client_secret']    

    grant = Base64.strict_encode64("#{client_id}:#{client_secret}")

    response = RestClient.post('https://accounts.spotify.com/api/token',
                              {'grant_type' => 'client_credentials'},
                              {"Authorization" => "Basic #{grant}"})

    token = JSON.parse(response.body)['access_token']

    return token
  end

  def cache_info
    artist = params['artist']
    # create a new artist row
    new_artist = Artist.create(name: artist)

    @genres = params['genres']

    @genres.each do |genre|
      # see if genre already exists
      searched_genre = Genre.find_by(name: genre)
      if searched_genre
        # create the new row with that genre and the new artist
        ArtistGenre.create(genre_id: searched_genre.id, artist_id: new_artist.id)
      else 
        # create new genre, create row with that genre and new artist
        new_genre = Genre.create(name: genre)
        ArtistGenre.create(genre_id: new_genre.id, artist_id: new_artist.id)          
      end 
    end
  end
end 
