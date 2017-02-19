import {connect} from 'react-redux';
import {IngredientsDetail} from '../components';
import * as actionCreators from '../actions/app';

const mapStateToProps = state => {
    return {
        ingredientsDetail: state.app.ingredientsDetail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIngredientsDetail(item) {
            dispatch(actionCreators.getIngredientsDetail(item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsDetail);
