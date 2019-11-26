// Redux User Actions

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});

const clearUserAction = () => ({
    type: 'CLEAR_USER'
});

// Fetch

const loginUserToAPI = userCredentials => dispatch => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userCredentials)
    })
    .then(res => res.json())
    .then(data => {
        dispatch(setUserAction(data.user));
        localStorage.token = data.token;
     });
};

const persistUserFromAPI = () => dispatch => {
    fetch('http://localhost:3000/persist', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.token
      }
    })
      .then(r => r.json())
      .then(userObj => {
        console.log(userObj)
        dispatch(setUserAction(userObj));
      });
  };

const createNewUserToAPI = userInfo => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    };
    fetch('http://localhost:3000/users', config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data.user));
        localStorage.token = data.token;
      });
  };
  
const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
}

export default {
    loginUserToAPI,
    persistUserFromAPI,
    createNewUserToAPI,
    logoutUser
};



