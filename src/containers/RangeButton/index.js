import { connect } from 'react-redux';
import { setDateRange } from './actions';
import Link from '../../components/Link';

export const mapStateToProps = (state, ownProps) => ({
  active: state.dateRange === ownProps.dateRange,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setDateRange(ownProps.dateRange));
  },
});

export const RangeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default RangeButton;
