# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Genre.destroy_all

pop = Genre.create('name': 'pop')
punk = Genre.create('name': 'punk')
rock = Genre.create('name': 'rock')
metal = Genre.create('name': 'metal')

Artist.destroy_all

thrice = Artist.create('name': 'Thrice')

ArtistGenre.create('artist_id': thrice.id, 'genre_id': punk.id)
ArtistGenre.create('artist_id': thrice.id, 'genre_id': rock.id)
ArtistGenre.create('artist_id': thrice.id, 'genre_id': metal.id)
