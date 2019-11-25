import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

class Signup extends Component {

    state = {
    username: '',
    password: ''
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
    e.preventDefault();
    this.props.createNewUserToAPI(this.state);
    };

        render() {
            const { username, password } = this.state;
            return (
              <>
                
                <form onSubmit={this.handleSubmit}>
                <h1>Signup for an Account</h1>

                <label>username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <br/>

                  <label>password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <br/>


                  <input type="submit" />
                </form>
              </>
            );
          }
}
    
const mapDispatchToProps = {
        createNewUserToAPI: userActions.createNewUserToAPI
        };
        
export default connect(null, mapDispatchToProps)(Signup);