const initialState = {
    userInfo: {},
    ingredientsCategoryItems: [],
    ingredientsDetail: {}
};

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'setUserInfo':
            return Object.assign({}, state, {
                userInfo: action.payload
            });
        case 'setIngredientsCategoryItems':
            return Object.assign({}, state, {
                ingredientsCategoryItems: action.payload
            });
        case 'setIngredientsDetail':
            return Object.assign({}, state, {
                ingredientsDetail: action.payload
            });
        default:
            return state;
    }
}
