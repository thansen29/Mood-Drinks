class DrinksController < ApplicationController
    def index
        @drinks = Drink.all.includes(:genres)
    end 
end 