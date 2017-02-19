import {connect} from 'react-redux';
import {IngredientsCategory} from '../components';
import * as actionCreators from '../actions/app';

const mapStateToProps = state => {
    return {
        ingredientsCategoryItems: state.app.ingredientsCategoryItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIngredientsCategoryItems(category) {
            dispatch(actionCreators.getIngredientsCategoryItems(category));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsCategory);
