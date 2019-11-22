import React, { Component } from 'react';


class Login extends Component {
    
        state = {
            username: '',
            password: ''
          };
        
          handleChange = e => this.setState({ [e.target.name]: e.target.value });
        
          handleSubmit = e => {
            e.preventDefault();
            this.props.loginUserToAPI(this.state);
          };
        
          render() {
            const { username, password } = this.state;
            return (
              <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <input type="submit" />
                </form>
              </>
            );
          }

}

export default Login;