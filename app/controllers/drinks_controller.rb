class DrinksController < ApplicationController
    def index
        @drinks = Drink.all
            .includes(:genres)
            .includes(:ingredients)
            .includes(:tools)
    end 

    def show
        @drink = Drink
            .includes(:genres)
            .includes(:ingredients)
            .includes(:tools)
            .find(params[:id])
    end 
end 