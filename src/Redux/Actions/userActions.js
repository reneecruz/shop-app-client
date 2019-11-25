const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});

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
  

export default {
    loginUserToAPI,
    createNewUserToAPI
};



