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
rap = Genre.create('name': 'rap')
post_teen_pop = Genre.create('name': 'post-teen pop')
viral_pop = Genre.create('name': 'viral pop')
edm = Genre.create('name': 'edm')
disco = Genre.create('name': 'disco')
#
# Artist.destroy_all
#
# thrice = Artist.create('name': 'Thrice')
#
# ArtistGenre.create('artist_id': thrice.id, 'genre_id': punk.id)
# ArtistGenre.create('artist_id': thrice.id, 'genre_id': rock.id)
# ArtistGenre.create('artist_id': thrice.id, 'genre_id': metal.id)
#
# Tool.destroy_all
#
# blender = Tool.create('name': 'Blender')
# bar_spoon = Tool.create('name': 'Bar Spoon')
# boston_shaker = Tool.create('name': 'Boston Shaker')
# hawthorne_strainer = Tool.create('name': 'Hawthorne Strainer')
# zester = Tool.create('name': 'Zester/Grater')
# jigger = Tool.create('name': 'Jigger')
# mixing_glass = Tool.create('name': 'Mixing Glass')
# citrus_peeler = Tool.create('name': 'Citrus Peeler')
# glass_rimmer = Tool.create('name': 'Glass Rimmer')
# fruit_pick = Tool.create('name': 'Fruit Pick')
# muddler = Tool.create('name': 'Muddler')
# pint_glass = Tool.create('name': 'Pint Glass')
#
# Ingredient.destroy_all
#
# spice_base = 'Spice Base'
# horseradish = 'Ground Horseradish'
# tomato_juice = 'Tomato Juice'
# apple_brandy = 'Copper & Kings Un-Aged Apple Brandy'
#
# immature_brandy = 'Immature Brandy'
# lime_juice = 'Freshly squeezed lime juice'
# angostura_bitters = 'angostura bitters'
#
# celery = Ingredient.create('name': 'Celery')
# olives = Ingredient.create('name': 'Olives')
# peppers = Ingredient.create('name': 'Peppers')
# citrus = Ingredient.create('name': 'Citrus')
# meat = Ingredient.create('name': 'Meat')
# two_apple_brandy = Ingredient.create('name': apple_brandy, 'amount': 2, 'unit': 'oz')
# four_tomato_juice = Ingredient.create('name': tomato_juice, 'amount': 4, 'unit': 'oz')
# one_spice_base = Ingredient.create('name': spice_base, 'amount': 1, 'unit': 'oz')
# one_horseradish = Ingredient.create('name': horseradish, 'amount': 1, 'unit': 'tsp')
#
# ginger_ale = Ingredient.create('name': 'Ginger Ale')
# two_immature = Ingredient.create('name': immature_brandy, 'amount': 2, 'unit': 'oz')
# sm_lime = Ingredient.create('name': lime_juice, 'amount': 0.25, 'unit': 'oz')
# three_angs = Ingredient.create('name': angostura_bitters, 'amount': 3, 'unit': 'drops')

Drink.destroy_all

gt_image = File.open('app/assets/images/ginTonic.jpg')
gin_and_tonic = Drink.create('name': 'Gin & Tonic', 'directions': 'Pour immature
   brandy over ice in a chilled cocktail glass. Add tonic to taste. Finish with a
   squeeze of lime.', 'tips': 'Try Jack Rudy small batch or Wilks & Wilson for full on tonic assault.',
'image': gt_image)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': punk.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': post_teen_pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': viral_pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': edm.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': disco.id)
