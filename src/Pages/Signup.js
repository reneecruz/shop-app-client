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
    };

        render() {
            const { username, password, email, img_url, first_name, last_name } = this.state;
            return (
              <>
                
                <form onSubmit={this.handleSubmit}>
                <h1>Signup for an Account</h1>

                <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="first name"
                    value={first_name}
                    onChange={this.handleChange}
                  />
                  <br/>

                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="last name"
                    value={last_name}
                    onChange={this.handleChange}
                  />
                  <br/>

                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <br/>

                  <label>username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <br/>

                <label>Image</label>
                  <input
                    type="text"
                    name="img_url"
                    placeholder="image url"
                    value={img_url}
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