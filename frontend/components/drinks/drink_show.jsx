import React from 'react';
import { connect } from 'react-redux';
import { fetchDrink, clearSelected } from '../../actions/drink_actions';
import Navbar from '../navbar/navbar';

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
        const { name, imageUrl } = this.props.drink;

        return (
            <section className="whole-container">
                <Navbar />

                <main className="drink-show-container">
                    <header className="header-stripe">
                        { name ? name.toUpperCase() : null}
                    </header>

                    { name ? <img 
                        className="drink-show-img"
                        src={ imageUrl } 
                        alt={ `${name} image` }/> : null }

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