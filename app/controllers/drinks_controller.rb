class DrinksController < ApplicationController
    def index
        @drinks = Drink.all
            .includes(:genres)
            .includes(:ingredients)
            .includes(:tools)
    end 
end 