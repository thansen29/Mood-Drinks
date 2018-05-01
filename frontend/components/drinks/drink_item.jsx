import React from 'react';
import { Link } from 'react-router-dom';

class DrinkItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            hovered: false
        }

        this.triggerHover = this.triggerHover.bind(this);
    }

    triggerHover() {
        this.setState({ hovered: !this.state.hovered });
    }

    render() {
        const { name, imageUrl, id } = this.props;
        const { hovered } = this.state;
        
        return (
            <Link to={`/drink/${id}`}
                className="drink-item-content"
                onMouseEnter={ this.triggerHover }
                onMouseLeave={ this.triggerHover }>

                    <div className={ hovered ? "screen-in" : "screen-out" }></div>

                    <img src={ imageUrl } alt={ `${name} image` } />

                    { hovered ? <span className="name-in">{ name.toUpperCase() }</span> : null }
                </Link>
        );
    }
}

export default DrinkItem;
