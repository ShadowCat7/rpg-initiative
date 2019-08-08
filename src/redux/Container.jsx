import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './actions.js';

const mapStateToProps = (state, ownProps) => {
    return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: { ...bindActionCreators({ ...actions }, dispatch) }};
};

export default connect(mapStateToProps, mapDispatchToProps);