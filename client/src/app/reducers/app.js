import _ from 'lodash';

const initialState = {
    userInfo: {},
    ingredientsCategoryItems: [],
    ingredientsDetail: {}
};

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'setUserInfo':
            return _.assign({}, state, {
                userInfo: action.payload
            });
        case 'setIngredientsCategoryItems':
            return _.assign({}, state, {
                ingredientsCategoryItems: action.payload
            });
        case 'setIngredientsDetail':
            return _.assign({}, state, {
                ingredientsDetail: action.payload
            });
        default:
            return state;
    }
}
