let defaultState = {
    active_order: {
        order_items: []
    }
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'SET_USER':    
            return {...state, ...payload};
        case 'CLEAR_USER':
            return {};
        case 'ADD_TO_CART':
            return {...state, 
                active_order: {
                    ...state.active_order, 
                    order_items: [...state.active_order.order_items, payload]
                }
            };
        case 'SUBMIT_ORDER': 
            return payload;
        default: 
        return state;
    }
};