import {connect} from 'react-redux';
import Layout from '../components/Layout';
import * as actionCreators from '../actions/app';
require('es6-promise').polyfill();
require('es6-promise/auto');

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	getUser() {
    		dispatch(actionCreators.getUser())
    	}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
