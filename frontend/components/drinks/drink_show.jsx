import React from 'react';
import { connect } from 'react-redux';
import { fetchDrink } from '../../actions/drink_actions';
import Navbar from '../navbar/navbar';

class DrinkShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchDrink(id);
    }


    render() {
        const { name } = this.props.drink;
        return (
            <section className="whole-container">
                <Navbar />
                <header className="header-stripe">
                    { name ? name.toUpperCase() : null}
                </header>
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
        fetchDrink: (id) => dispatch(fetchDrink(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);