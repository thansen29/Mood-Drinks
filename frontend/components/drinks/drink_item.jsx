import React from 'react';
// import { Link } from 'react-router';
// name, imageUrl,directions, tips, ingredients.asd, tools
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
        const { name, imageUrl } = this.props;
        const { hovered } = this.state;
        
        return (
            <main 
                className="drink-item-content"
                onMouseEnter={ this.triggerHover }
                onMouseLeave={ this.triggerHover }>

                <div className={ hovered ? "screen-in" : "screen-out" }></div>

                <img src={ imageUrl } alt={ `${name} image` } />

                { hovered ? <span className="name-in">{ name.toUpperCase() }</span> : null }
            </main>
        );
    }
}

export default DrinkItem;
