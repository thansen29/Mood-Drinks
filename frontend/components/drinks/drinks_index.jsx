import React from 'react';
import DrinkItem from './drink_item';
import * as _ from 'lodash';

// clearing the store on the nav bar clears it but it says no results
class DrinksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            noResults: false,
        }
    }

    componentDidMount() {
        this.props.fetchDrinks();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.cleared) {
            this.setState({ drinks: [], noResults: false });
        } else if (newProps.drinks) {
            this.setState({ drinks: newProps.drinks, noResults: false });
        } else {
            this.setState({ drinks: [], noResults: true })
        }

    }

    render() {
        let drinks;
        if (this.state.drinks.length) {
            drinks = _.map(this.state.drinks, drink => {
                return (
                    <li key={ drink.drink.id } className="drink-item">
                        <DrinkItem 
                            name={ drink.drink.name }
                            imageUrl={ drink.drink.imageUrl } 
                            id={ drink.drink.id } />
                    </li>
                )
            })
        }
        return (
            <section className="drink-index-container">
                { this.state.noResults 
                ? 
                <div className="no-results">
                    Sorry, we couldn't find any drinks for that one 
                </div>
                : null}

                <ul className="drink-list">
                    { drinks }
                </ul>
                
            </section>
        );
    }
}

export default DrinksIndex;