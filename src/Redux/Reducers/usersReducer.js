let defaultState = {
    active_order: {
        order_items: []
    }
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'SET_USER':    
            return payload;
        case 'CLEAR_USER':
            return {};
        default: 
        return state;
    }
};