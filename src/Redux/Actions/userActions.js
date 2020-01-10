// Redux User Actions
const BASE_URL = "http://localhost:3000"
const HEROKU_URL = "https://safe-mesa-89786.herokuapp.com" 

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});

const clearUserAction = () => ({
    type: 'CLEAR_USER'
});

const addToCartAction = (order_item) => ({
    type: 'ADD_TO_CART',
    payload: order_item
});

const removeFromCartAction = (order_item) => ({
  type: 'REMOVE_FROM_CART',
})

const submitOrderAction = (active_order) => ({
    type: 'SUBMIT_ORDER',
    payload: active_order  
})


// Fetch

const loginUserToAPI = userCredentials => dispatch => {
    fetch(`${HEROKU_URL}/login`, {
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
    fetch(`${HEROKU_URL}/persist`, {
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
    fetch(`${HEROKU_URL}/users`, config)
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

const createOrderItem = (item_id, active_order_id) => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            item_id: item_id, 
            order_id: active_order_id})
    };
    fetch(`${HEROKU_URL}/order_items`, config)
    .then(res => res.json())
    .then(data => {
      // debugger 
        dispatch(addToCartAction(data))
    });   
}

const removeOrderItem = (item) => dispatch => {
  const config = {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token 
    }, 
    body: JSON.stringify({
      order_item: item
    })
  };
  fetch(`${HEROKU_URL}/persist/order_items/${item.id}`, config)
  .then(res => res.json())
  .then(data => {
    console.log(data)

  });
}

const submitOrder = (active_order) => dispatch => {

  const config = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
  };
    fetch(`${HEROKU_URL}/persist/checkout`, config)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(submitOrderAction(data))
    });
}



export default {
    loginUserToAPI,
    persistUserFromAPI,
    createNewUserToAPI,
    logoutUser, 
    createOrderItem,
    removeOrderItem,
    submitOrder
};



