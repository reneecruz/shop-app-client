export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            console.log(payload)
            
            return payload;
        case 'CLEAR_USER':
            return {};
        default: 
        return state;
    }
};