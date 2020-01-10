// Redux Item Actions 

// const getItemsAction = items => ({ type: 'GET_ITEMS', payload: items });

// FETCH ITEMS

// const fetchItemsFromAPI = () => dispatch => {
//     return fetch('http://localhost:3000/items')
//     .then(res => res.json())
//     .then(itemsArr => {
//         dispatch(getItemsAction(itemsArr));
//     });
// };


export const fetchItemsFromAPI = () => {
    return (dispatch) => {
        return fetch('https://safe-mesa-89786.herokuapp.com/items')
            .then(res => res.json())
            .then(itemsArr => {
                console.log('ITEM ACTIONS' , itemsArr)
                dispatch({type: 'GET_ITEMS', payload: itemsArr})
            })
    }
}

// export const showItemFetch = () => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/items/${item.id}`)
//         .then(res => res.json())
//         .then(data => console.log('SHOW ITEM ACTION',data))
//     }
// }


// // EXPORT 
// export default {
//     fetchItemsFromAPI,
// };