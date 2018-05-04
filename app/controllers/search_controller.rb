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

      render json: { genres: @genres, cache: true }
    end 

      # track = RestClient.get("https://api.spotify.com/v1/search?q=black%20honey&type=track",
      #                         {"Authorization" => "Bearer #{token}"})
      # JSON.parse(track.body)['tracks']['items'][0]

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
