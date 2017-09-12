import { connect } from 'react-redux';
import { setDateRange } from './actions';
import Link from '../../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.range === state.dateRange,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setDateRange(ownProps.dateRange));
  },
});

const RangeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default RangeButton;
