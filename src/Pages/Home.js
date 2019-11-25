import React, { Component } from 'react';
import Card from '../Components/Card';


class Home extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(items => this.setState({
            items: items
        }))
    }

    renderCards = () => {
        const { items } = this.state;
        if (items.length) {
            return items.map(item => <Card key={item.id} item={item}/>)
        }
    }

    render() { 
        return (
            <div className="card-container">{this.renderCards()}</div>
        )
            
    }

}

export default Home;