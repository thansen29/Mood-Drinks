# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DrinkTool.destroy_all
DrinkIngredient.destroy_all
DrinkGenre.destroy_all

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
salsa = Genre.create('name': 'salsa')
folk = Genre.create('name': 'folk')
regional_mexican = Genre.create('name': 'regional mexican')
latin = Genre.create('name': 'Latin')
black_metal = Genre.create('name': 'black metal')
death_metal = Genre.create('name': 'death metal')
trap_francais = Genre.create('name': 'trap francais')
metalcore = Genre.create('name': 'metalcore')
hard_stoner_rock = Genre.create('name': 'hard stoner rock')
spanish = Genre.create('name': 'spanish')
latin_rock = Genre.create('name': 'latin rock')
cabaret = Genre.create('name': 'cabaret')
r_b = Genre.create('name': 'R&B')
hip_hop = Genre.create('name': 'hip hop')
smooth_jazz = Genre.create('name': 'smooth jazz')
quiet_storm = Genre.create('name': 'quiet storm')




Artist.destroy_all

thrice = Artist.create('name': 'Thrice')

ArtistGenre.create('artist_id': thrice.id, 'genre_id': punk.id)
ArtistGenre.create('artist_id': thrice.id, 'genre_id': rock.id)
ArtistGenre.create('artist_id': thrice.id, 'genre_id': metal.id)

Tool.destroy_all

blender = Tool.create('name': 'Blender')
bar_spoon = Tool.create('name': 'Bar Spoon')
boston_shaker = Tool.create('name': 'Boston Shaker')
hawthorne_strainer = Tool.create('name': 'Hawthorne Strainer')
zester = Tool.create('name': 'Zester/Grater')
jigger = Tool.create('name': 'Jigger')
mixing_glass = Tool.create('name': 'Mixing Glass')
citrus_peeler = Tool.create('name': 'Citrus Peeler')
glass_rimmer = Tool.create('name': 'Glass Rimmer')
fruit_pick = Tool.create('name': 'Fruit Pick')
muddler = Tool.create('name': 'Muddler')
pint_glass = Tool.create('name': 'Pint Glass')



Ingredient.destroy_all

spice_base = 'Spice Base'
horseradish = 'Ground Horseradish'
tomato_juice = 'Tomato Juice'
apple_brandy = 'Copper & Kings Un-Aged Apple Brandy'

immature_brandy = 'Immature Brandy'
lime_juice = 'Freshly squeezed lime juice'
angostura_bitters = 'angostura bitters'


club_soda = Ingredient.create('name': 'Club Soda')
tonic = Ingredient.create('name': 'Tonic')
lime = Ingredient.create('name': 'Lime')
mint = Ingredient.create('name': 'Mint')
lemon = Ingredient.create('name': 'Lemon')
celery = Ingredient.create('name': 'Celery')
olives = Ingredient.create('name': 'Olives')
peppers = Ingredient.create('name': 'Peppers')
citrus = Ingredient.create('name': 'Citrus')
meat = Ingredient.create('name': 'Meat')
two_apple_brandy = Ingredient.create('name': apple_brandy, 'amount': 2, 'unit': 'oz')
four_tomato_juice = Ingredient.create('name': tomato_juice, 'amount': 4, 'unit': 'oz')
one_spice_base = Ingredient.create('name': spice_base, 'amount': 1, 'unit': 'oz')
one_horseradish = Ingredient.create('name': horseradish, 'amount': 1, 'unit': 'tsp')
ginger_ale = Ingredient.create('name': 'Ginger Ale')
two_immature = Ingredient.create('name': immature_brandy, 'amount': 2, 'unit': 'oz')
sm_lime = Ingredient.create('name': lime_juice, 'amount': 0.25, 'unit': 'oz')
three_angs = Ingredient.create('name': angostura_bitters, 'amount': 3, 'unit': 'drops')
red_table_wine = Ingredient.create('name': 'Red table win', 'amount': 750, 'unit': 'ML')
sprig_mint = Ingredient.create('name': 'Sprig of mint')
two_mixed_berry = Ingredient.create('name': 'Mixed Berries', 'amount': 2, 'unit': 'cups')
grapefruit = Ingredient.create('name': 'Grapefruit, sliced', 'amount': 1)
lemon_sliced = Ingredient.create('name': 'Lemon, thinly sliced', 'amount': 1)
quarter_honey = Ingredient.create('name': 'Honey', 'amount': 0.25, 'unit': 'cup')
american_brandy = Ingredient.create('name': 'American craft brandy', 'amount': 0.25, 'unit': 'cup')
absinthe_blanche = Ingredient.create('name': 'Absinthe Blanche', 'amount': 1, 'unit': 'oz')
superfine_sugar = Ingredient.create('name': 'Superfine Sugar', 'amount': 0.5, 'unit': 'tsp')
one_water = Ingredient.create('name': 'Water', 'amount': 1, 'unit': 'oz')
absinthe_blanche_onefive = Ingredient.create('name': 'Absinthe Blanche', 'amount': 1.5, 'unit': 'oz')
brut_champagne = Ingredient.create('name': 'Brut Champagne', 'amount': 4, 'unit': 'oz')
american_gin = Ingredient.create('name': 'American Dry Gin', 'amount': 2, 'unit': 'oz')
four_tonic = Ingredient.create('name': 'Tonic Water', 'amount': 4, 'unit': 'oz')
two_american_brandy = Ingredient.create('name': 'Copper & Kings American Craft Brandy', 'amount': 2, 'unit': 'oz')
creme_cacao = Ingredient.create('name': 'Crème de Cacao', 'amount': 0.75, 'unit': 'oz')
cream = Ingredient.create('name': 'Cream', 'amount': 0.75, 'unit': 'oz')
grated_nutmeg = Ingredient.create('name': 'Freshly grated nutmeg')


Drink.destroy_all

brandy_alexander_image = File.open('app/assets/images/brandyAlexander.jpg')
brandy_alexander = Drink.create('name': 'Brandy Alexander', 'directions': '
  Add all the ingredients to a mixing glass and fill with ice. Shake well with a
  Boston shaker and strain into a chilled coupe. Garnish with freshly grated nutmeg.',
'image': brandy_alexander_image)
DrinkGenre.create('drink_id': brandy_alexander.id, 'genre_id': r_b.id)
DrinkGenre.create('drink_id': brandy_alexander.id, 'genre_id': hip_hop.id)
DrinkGenre.create('drink_id': brandy_alexander.id, 'genre_id': rap.id)
DrinkGenre.create('drink_id': brandy_alexander.id, 'genre_id': smooth_jazz.id)
DrinkGenre.create('drink_id': brandy_alexander.id, 'genre_id': quiet_storm.id)
DrinkIngredient.create('drink_id': brandy_alexander.id, 'ingredient_id': two_american_brandy.id)
DrinkIngredient.create('drink_id': brandy_alexander.id, 'ingredient_id': creme_cacao.id)
DrinkIngredient.create('drink_id': brandy_alexander.id, 'ingredient_id': cream.id)
DrinkIngredient.create('drink_id': brandy_alexander.id, 'ingredient_id': grated_nutmeg.id)
DrinkTool.create('drink_id': brandy_alexander.id, 'tool_id': boston_shaker.id)
DrinkTool.create('drink_id': brandy_alexander.id, 'tool_id': hawthorne_strainer.id)
DrinkTool.create('drink_id': brandy_alexander.id, 'tool_id': zester.id)

death_in_afternoon_image = File.open('app/assets/images/deathInAfternoon.jpg')
death_in_afternoon = Drink.create('name': 'Death In The Afternoon', 'directions': '
  Pour absinthe into a champagne flute and add cold brut champagne until it clouds up. Garnish with a lemon twist.',
'image': death_in_afternoon_image)
DrinkGenre.create('drink_id': death_in_afternoon.id, 'genre_id': hard_stoner_rock.id)
DrinkGenre.create('drink_id': death_in_afternoon.id, 'genre_id': spanish.id)
DrinkGenre.create('drink_id': death_in_afternoon.id, 'genre_id': latin_rock.id)
DrinkGenre.create('drink_id': death_in_afternoon.id, 'genre_id': cabaret.id)
DrinkGenre.create('drink_id': death_in_afternoon.id, 'genre_id': metalcore.id)
DrinkIngredient.create('drink_id': death_in_afternoon.id, 'ingredient_id': absinthe_blanche_onefive.id)
DrinkIngredient.create('drink_id': death_in_afternoon.id, 'ingredient_id': brut_champagne.id)
DrinkIngredient.create('drink_id': death_in_afternoon.id, 'ingredient_id': lemon.id)
DrinkTool.create('drink_id': death_in_afternoon.id, 'tool_id': jigger.id)

absinthe_frappe_image = File.open('app/assets/images/absintheFrappe.jpg')
absinthe_frappe = Drink.create('name': 'Absinthe Frappe', 'directions': 'Pour the
   absinthe, sugar, and the water into a blender. Blend for a moment to dissolve
   the sugar and then, with the blender running, add 3 or 4 ice cubes through the
   hole in the top, pausing between cubes to let them get crushed. Blend until smooth. Garnish with lemon/mint',
'image': absinthe_frappe_image)
DrinkGenre.create('drink_id': absinthe_frappe.id, 'genre_id': metal.id)
DrinkGenre.create('drink_id': absinthe_frappe.id, 'genre_id': black_metal.id)
DrinkGenre.create('drink_id': absinthe_frappe.id, 'genre_id': death_metal.id)
DrinkGenre.create('drink_id': absinthe_frappe.id, 'genre_id': trap_francais.id)
DrinkGenre.create('drink_id': absinthe_frappe.id, 'genre_id': metalcore.id)
DrinkIngredient.create('drink_id': absinthe_frappe.id, 'ingredient_id': mint.id)
DrinkIngredient.create('drink_id': absinthe_frappe.id, 'ingredient_id': lemon.id)
DrinkIngredient.create('drink_id': absinthe_frappe.id, 'ingredient_id': one_water.id)
DrinkIngredient.create('drink_id': absinthe_frappe.id, 'ingredient_id': superfine_sugar.id)
DrinkIngredient.create('drink_id': absinthe_frappe.id, 'ingredient_id': absinthe_blanche.id)
DrinkTool.create('drink_id': absinthe_frappe.id, 'tool_id': blender.id)

gt_image = File.open('app/assets/images/ginTonic.jpg')
gin_and_tonic = Drink.create('name': 'Gin & Tonic', 'directions': 'Combine ingredients
  in an ice filled highball glass or wine goblet. Garnish with a lime, Juniper Berries,
  Grapefruit. Get creative with the garnish. Also try seasonal berries, cucumber or Rosemary',
'image': gt_image)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': punk.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': post_teen_pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': viral_pop.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': edm.id)
DrinkGenre.create('drink_id': gin_and_tonic.id, 'genre_id': disco.id)
DrinkIngredient.create('drink_id': gin_and_tonic.id, 'ingredient_id': american_gin.id)
DrinkIngredient.create('drink_id': gin_and_tonic.id, 'ingredient_id': four_tonic.id)

rs_image = File.open('app/assets/images/redSangria.jpg')
red_sangria = Drink.create('name': 'Red Sangria', 'directions': 'Combine brandy
   & honey in a large pitcher and stir until honey is dissolved. Add fruit and
   mash gently with the back of a wooden spoon to release juices. Add wine and stir.
   Cover and refrigerate for at least 8 hours and up to 48 hours. Top with soda & mint.
   Serve in ice-filled glasses.','image': rs_image)
DrinkGenre.create('drink_id': red_sangria.id, 'genre_id': salsa.id)
DrinkGenre.create('drink_id': red_sangria.id, 'genre_id': folk.id)
DrinkGenre.create('drink_id': red_sangria.id, 'genre_id': regional_mexican.id)
DrinkGenre.create('drink_id': red_sangria.id, 'genre_id': latin.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': red_table_wine.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': sprig_mint.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': two_mixed_berry.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': grapefruit.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': quarter_honey.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': lemon_sliced.id)
DrinkIngredient.create('drink_id': red_sangria.id, 'ingredient_id': american_brandy.id)
