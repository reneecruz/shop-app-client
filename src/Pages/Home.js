import React, { Component } from 'react';
import Card from '../Components/Card';
import { connect } from 'react-redux';


class Home extends Component {

    renderCards = () => {
        const { items } = this.props;
        if (items.length) {
            return items.map(item => <Card key={item.id} item={item}/>)
        }
    }

    render() { 
        console.log(this.props)
        return (
            <div className="card-container">{this.renderCards()}</div>
        )
            
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer
    }
    
}


export default connect(mapStateToProps)(Home);