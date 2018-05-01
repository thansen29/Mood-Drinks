import React from 'react';
import DrinkItem from './drink_item';
import * as _ from 'lodash';

class DrinksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        }
    }

    componentDidMount() {
        this.props.fetchDrinks();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.drinks) {
            this.setState({ drinks: newProps.drinks });
        }
    }

    // sometimes no results are found
    render() {
        let drinks;
        if (this.state.drinks) {
            drinks = _.map(this.state.drinks, drink => {
                return (
                    <li key={ drink.drink.id } className="drink-item">
                        <DrinkItem 
                            name={ drink.drink.name }
                            imageUrl={ drink.drink.imageUrl }
                            directions={ drink.drink.directions }
                            tips={ drink.drink.tips }
                            ingredients={ drink.drink.ingredients }
                            tools={ drink.drink.tools } />
                    </li>
                )
            })
        }
        
        return (
            <section className="drink-index-container">
                <ul className="drink-list">
                    { drinks }
                </ul>
                
            </section>
        );
    }
}

export default DrinksIndex;