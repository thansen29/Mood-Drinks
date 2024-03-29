# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180517163059) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artist_genres", force: :cascade do |t|
    t.integer "artist_id"
    t.integer "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_genres_on_artist_id"
    t.index ["genre_id"], name: "index_artist_genres_on_genre_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "drink_genres", force: :cascade do |t|
    t.integer "drink_id"
    t.integer "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["drink_id"], name: "index_drink_genres_on_drink_id"
    t.index ["genre_id"], name: "index_drink_genres_on_genre_id"
  end

  create_table "drink_ingredients", force: :cascade do |t|
    t.integer "drink_id"
    t.integer "ingredient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["drink_id"], name: "index_drink_ingredients_on_drink_id"
    t.index ["ingredient_id"], name: "index_drink_ingredients_on_ingredient_id"
  end

  create_table "drink_tools", force: :cascade do |t|
    t.integer "drink_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "tool_id"
    t.index ["drink_id"], name: "index_drink_tools_on_drink_id"
    t.index ["tool_id"], name: "index_drink_tools_on_tool_id"
  end

  create_table "drinks", force: :cascade do |t|
    t.string "name", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.text "directions", null: false
    t.text "tips"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "video_url"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "unit"
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "amount"
  end

  create_table "tools", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
