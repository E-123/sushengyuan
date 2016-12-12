import {connect} from 'react-redux';
import {Register} from '../../components';
import * as actionCreators from '../../actions/app';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	getVercode(phone) {
    		dispatch(actionCreators.getVercode(phone));
    	},
    	confirmRegister(object) {
    		dispatch(actionCreators.confirmRegister(object));
    	}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
