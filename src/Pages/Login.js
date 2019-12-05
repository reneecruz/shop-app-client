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
            this.props.history.push('/account')
          };
        
          render() {
            const { username, password } = this.state;
            return (
              <>
              <div className="content">
                
                <form onSubmit={this.handleSubmit} style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
                <h1>Login</h1>
                  <div style={{'display': 'flex', 'flex-direction': 'column', 'text-align': 'center'}}>
                    
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={username}
                      onChange={this.handleChange}
                      style={{'width': '200px'}}
                    />
                  </div>
                  <div style={{'display': 'flex', 'flex-direction': 'column', 'text-align': 'center'}}>
                    
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={this.handleChange}
                      style={{'width': '200px', 'margin-bottom': '12px'}}
                    />
                  </div>
                  <div style={{'display': 'flex', 'justify-content': 'start', 'width': '200px'}}><button className="show-button" type="submit" style={{'margin': '0'}}>Login</button></div>
                </form>
              </div> 
              </>
            );
          }

}

const mapDispatchToProps = {
    loginUserToAPI: userActions.loginUserToAPI
}

export default connect(null, mapDispatchToProps)(Login);