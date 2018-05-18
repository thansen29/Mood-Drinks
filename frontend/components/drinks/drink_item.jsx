import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class DrinkItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            hovered: false
        }

        this.hover = this.hover.bind(this);
        this.unhover = this.unhover.bind(this);
    }

    hover() {
        this.setState({ hovered: true });
    }

    unhover() {
        this.setState({ hovered: false });
    }

    render() {
        const { name, imageUrl, id } = this.props;
        const { hovered } = this.state;
        
        return (
            <Link to={`/drink/${id}`}
                className="drink-item-content"
                onMouseEnter={ this.hover }
                onMouseLeave={ this.unhover }>

                    <div className={ hovered ? "screen-in" : "screen-out" }></div>
            
                    <img src={ imageUrl } alt={ `${name} image` } />

                    { hovered ? <span className="name-in">{ name.toUpperCase() }</span> : null }
            </Link>
        );
    }
}

export default withRouter(connect(null, null)(DrinkItem));
