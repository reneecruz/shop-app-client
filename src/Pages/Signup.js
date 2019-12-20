import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

class Signup extends Component {

    state = {
    username: '',
    password: '',
    email: '',
    img_url: '',
    first_name: '',
    last_name: ''
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
    e.preventDefault();
    this.props.createNewUserToAPI(this.state);
    this.setState({
      username: '',
      password: '',
      email: '',
      img_url: '',
      first_name: '',
      last_name: ''
    })
    this.props.history.push('/account')
    };

        render() {
            const { username, password, email, img_url, first_name, last_name } = this.state;
            return (
              <>
                <div className="content">
                  <form onSubmit={this.handleSubmit}>
                    <h1>Signup for an Account</h1>
                    <div style={{'display': 'flex', 'flex-direction': 'row'}}>
                      <div style={{'display': 'flex', 'flex-direction': 'column', 'margin-right': '24px'}}>
                        <label>First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="first name"
                          value={first_name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div style={{'display': 'flex', 'flex-direction': 'column'}}>
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="last name"
                          value={last_name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div style={{'display': 'flex', 'flex-direction': 'row'}}>
                      <div style={{'display': 'flex', 'flex-direction': 'column', 'margin-right': '24px'}}>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </div>
                    
                      <div style={{'display': 'flex', 'flex-direction': 'column'}}>
                        <label>username</label>
                        <input
                          type="text"
                          name="username"
                          placeholder="username"
                          value={username}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div style={{'display': 'flex', 'flex-direction': 'row'}}>
                      <div style={{'display': 'flex', 'flex-direction': 'column', 'margin-right': '24px'}}>
                        <label>Image</label>
                        <input
                          type="text"
                          name="img_url"
                          placeholder="image url"
                          value={img_url}
                          onChange={this.handleChange}
                        />
                      </div>
                    
                      <div style={{'display': 'flex', 'flex-direction': 'column'}}>
                        <label>password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <input type="submit" />
                  </form>
                </div>
              </>
            );
          }
}
    
const mapDispatchToProps = {
        createNewUserToAPI: userActions.createNewUserToAPI
        };
        
export default connect(null, mapDispatchToProps)(Signup);