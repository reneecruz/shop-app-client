import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../Redux/Actions/userActions';


class Login extends Component {

        state = {
            username: '',
            password: ''
          };
        
          handleChange = e => this.setState({ [e.target.name]: e.target.value });
        
          handleSubmit = e => {
            e.preventDefault();
            this.props.loginUserToAPI(this.state);
            this.setState({
              username: '',
              password: ''
            })
          };
        
          render() {
            const { username, password } = this.state;
            return (
              <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

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
    loginUserToAPI: userActions.loginUserToAPI
}

export default connect(null, mapDispatchToProps)(Login);