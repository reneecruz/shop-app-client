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
            <>
            <header className="App-header">
                <h1>Coffee Shop.</h1>
            {/* <img src="http://static1.squarespace.com/static/55ecfe19e4b01667f1806baa/576ee47e414fb5ee3416f081/5ac782b0aa4a9945f3969be8/1523116221923/BlogHeader_Template_Decaf.jpg?format=1500w" alt="coffee shop"/> */}
            </header>
            <div className="card-container">
                {this.renderCards()}
            </div>
            </>
        )
            
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer
    }
    
}


export default connect(mapStateToProps)(Home);