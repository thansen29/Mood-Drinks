import React from 'react';
import DrinkItem from './drink_item';
import * as _ from 'lodash';

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
        if (newProps.drinks && newProps.loading) {
            this.props.stopLoading();
        }

    }

    render() {
        let drinks;
        if (this.state.drinks.length) {
            drinks = _.map(this.state.drinks, drink => {
                return (
                    <div className="col-wrapper" key={ drink.drink.id }>
                        <div className="col">
                            <li className="drink-item">
                                <DrinkItem 
                                    name={ drink.drink.name }
                                    imageUrl={ drink.drink.imageUrl } 
                                    id={ drink.drink.id } />
                            </li>
                        </div>
                    </div>
                )
            })
        }
        return (
            <section className="drink-index-container">
                { this.props.loading
                ?
                    <div className="loader">Loading...</div>  
                :
                    <ul className="drink-list">
                        { drinks }
                    </ul>
                }

            </section>
        );
    }
}

export default DrinksIndex;