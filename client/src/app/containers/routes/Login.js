import {connect} from 'react-redux';
import {Login} from '../../components';
import * as actionCreators from '../../actions/app';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	login(object) {
    		dispatch(actionCreators.login(object));
    	}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
