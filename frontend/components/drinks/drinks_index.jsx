import React from 'react';

class DrinksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDrinks();
    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps);
    }

    // sometimes no results are found
    render() {
        const { drinks } = this.props
        console.log(drinks);
        return (
            <div>hi</div>
        );
    }
}

export default DrinksIndex;