import React, { Component } from 'react';
import Card from '../Components/Card';


class Home extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(data => this.setState({
            items: data
        }))
    }

    renderCards = () => {
        const { items } = this.state;
        if (items.length) {
            return items.map(item => <Card key={item.id} data={item}/>)
        }
    }

    render() { 
        return (
            <div classname="card-container">{this.renderCards()}</div>
        )
            
    }

}

export default Home;