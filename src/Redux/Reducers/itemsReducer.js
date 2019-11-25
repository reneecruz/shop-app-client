// const initialState = {
//     items: [],
// }
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEMS':  
            console.log("ITEM REDUCER" , action.payload)  
            return action.payload 
        default: 
        return state;
    }
};