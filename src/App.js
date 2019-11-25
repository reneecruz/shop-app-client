import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from './Redux/Actions/userActions';
import itemActions from './Redux/Actions/itemActions';
import Nav from './Components/Nav';
import { fetchItemsFromAPI } from './Redux/Actions/itemActions'


class App extends React.Component {

  componentDidMount() {
    if (localStorage.token) {
      this.props.persistUserFromAPI();
    }
    // const { fetchItemsFromAPI } = this.props;
    // fetchItemsFromAPI();
    this.props.fetchItemsFromAPI()
  }

  

  
  render(){
    console.log("APP JS", this.props)
    return (
      <>
      <Router>
        <Nav />
        <Routes />
      </Router>
      </>
     );
  }
  
}


// const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItemsFromAPI: () => dispatch(fetchItemsFromAPI()),
    persistUserFromAPI: () => dispatch(userActions.persistUserFromAPI())
  }
}

export default connect(
  null, 
  mapDispatchToProps)
  (App);
