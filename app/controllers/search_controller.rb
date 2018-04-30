require 'rest-client'

class SearchController < ApplicationController

  def search
    token = self.authorize()

    artist = params['artist']#.split(' ').join('+')

    # thr yields []
    # empty gives 400
    # so dont let search unless some form of data is entered
    # can even not let search unless they select an item
    genres_query = RestClient.get("https://api.spotify.com/v1/search?q=#{artist}&type=artist",
                            {"Authorization" => "Bearer #{token}"})

    @genres = JSON.parse(genres_query.body)['artists']['items'][0]['genres']
    render json: { genres: @genres }
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
end
