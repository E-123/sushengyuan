/**
 * @file demo login container
 * @author hancong
 * @date 2016-10-25
 */

import {connect} from 'react-redux';
import {Register} from '../../components';
import * as actionCreators from '../../actions/app';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
