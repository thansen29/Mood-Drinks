require 'rest-client'

class SearchController < ApplicationController
  def search
    token = self.authorize()
    artist = params['artist']

    # check if artist already exists
    searched_artist = Artist.find_by(name: artist) 
    # if it does, just return their genres
    if searched_artist 
      render json: { genres: searched_artist.genres.pluck(:name), cache: false }
      return;
    else 
      # # create a new artist row
      # new_artist = Artist.create(name: artist)
      genres_query = RestClient.get("https://api.spotify.com/v1/search?q=#{artist}&type=artist",
                              {"Authorization" => "Bearer #{token}"})
  
      @genres = JSON.parse(genres_query.body)['artists']['items'][0]['genres']

      render json: { genres: @genres, cache: true }

      # @genres.each do |genre|
      #   # see if genre already exists
      #   searched_genre = Genre.find_by(name: genre)
      #   if searched_genre
      #     # create the new row with that genre and the new artist
      #     ArtistGenre.create(genre_id: searched_genre.id, artist_id: new_artist.id)
      #   else 
      #     # create new genre, create row with that genre and new artist
      #     new_genre = Genre.create(name: genre)
      #     ArtistGenre.create(genre_id: new_genre.id, artist_id: new_artist.id)          
      #   end 
      # end 
    end 

  end

  def authorize
    client_id = '7c4536cf355f48158c3b16701da1d677';
    client_secret = '76d7f6ea2566494bb80a7c8484489a27';

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
