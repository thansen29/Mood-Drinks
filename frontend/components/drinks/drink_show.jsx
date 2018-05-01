import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { fetchDrink, clearSelected } from '../../actions/drink_actions';
import Navbar from '../navbar/navbar';
import DrinkIngredients from './drink_ingredients';

class DrinkShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchDrink(id);
    }

    componentWillUnmount() {
        console.log('dismounting');
        
        this.props.clearSelected();
    }


    render() {
        const { name, imageUrl, ingredients, tools, directions, tips } = this.props.drink;
        let drinkIngredients;
        if (ingredients) {
            drinkIngredients = _.map(ingredients, ingredient => {
                return (
                <li key={ ingredient.id }>
                    <DrinkIngredients 
                        name={ ingredient.name }
                        amount={ ingredient.amount } 
                        unit={ ingredient.unit } />
                </li>

                )
            })
        }

        return (
            <section className="whole-container">
                <Navbar />

                <main className="drink-show-container">
                    <header className="header-stripe">
                        { name ? name.toUpperCase() : null}
                    </header>
            
                    <section className="show-section">

                        { name ? <img 
                            className="drink-show-img"
                            src={ imageUrl } 
                            alt={ `${name} image` }/> : null }

                        <section className="ingredients-container">
                            <header className="ingredients-header">
                                INGREDIENTS:
                            </header>
                            <ul>
                                { drinkIngredients }
                            </ul>
                        </section>
                        
                    </section>                        

                </main>
            </section>
        );        
    }
}

const mapStateToProps = (state, ownProps) => {
    const drink = state.drinks.selectedDrink;
    return {
        drink
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDrink: (id) => dispatch(fetchDrink(id)),
        clearSelected: () => dispatch(clearSelected())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);