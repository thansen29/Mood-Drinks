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
        this.props.clearSelected();
    }


    render() {
        const { name, imageUrl, ingredients, tools, directions, tips } = this.props.drink;
        let drinkIngredients;
        let drinkTools;
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

        if (tools) {
            drinkTools = _.map(tools, (tool, idx) => {
                return (
                    <li className="content-item" key={ idx }>
                        { tool }
                    </li>
                );
            });
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

                        <section className="details-container">
                            <section className="detail-section">
                                <header className="section-header">
                                    INGREDIENTS:
                                </header>
                                <ul>
                                    { drinkIngredients }
                                </ul>
                            </section>

                            { tools instanceof Array && tools.length
                            ?
                            <section className="detail-section">
                                <header className="section-header">
                                    TOOLS:
                                </header>

                                <ul>
                                    { drinkTools }
                                </ul>
                            </section>
                            : null 
                            }

                            <section className="detail-section">
                                <header className="section-header">
                                    DIRECTIONS:
                                </header>

                                <p className="content-item">
                                    { directions }
                                </p>
                            </section>

                            { tips 
                            ?     
                                <section className="detail-section">
                                    <header className="section-header">
                                        TIPS:
                                    </header>

                                    <p className="content-item">
                                        { tips }
                                    </p>
                                </section>
                            : null 
                            }
                        </section>

                    </section>                        

                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MFqLaG2Qw2g" allowFullScreen></iframe> */}
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