const initialState = {
    userInfo: {}
};

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'setUserInfo':
            return Object.assign({}, state, {
                userInfo: action.payload
            });
        default:
            return state;
    }
}
