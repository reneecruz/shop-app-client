const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});

const loginUserToAPI = userCredentials => dispatch => {
    fetch('http://localhost:3000/login')


}

