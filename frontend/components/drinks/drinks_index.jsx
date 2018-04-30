import React from 'react';

class DrinksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDrinks();
    }

    render() {
        return (
            <div>hi</div>
        );
    }
}

export default DrinksIndex;