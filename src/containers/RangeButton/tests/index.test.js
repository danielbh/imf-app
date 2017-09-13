import React from 'react';
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../index";

describe('<RangeButton />', () => {

  describe('mapDispatchToProps', () => {
    it('should inject onClick()', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onClick).toBeDefined();
    });

    it('dispatches setDateRange when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch, { dateRange: 'YEAR' });
      result.onClick();
      expect(dispatch).toHaveBeenCalledWith({ range: 'YEAR', type: 'SET_DATE_RANGE' });
    });
  });

  describe('mapStateToProps', () => {
    describe('active prop', () => {
      it('returns true when ownProp.range === state.dateRange', () => {
        expect(mapStateToProps({dateRange: 'ALL'}, {range: 'ALL' })).toEqual({ active: true })
      });

      it('returns false when ownProp.range !== state.dateRange', () => {
        expect(mapStateToProps({dateRange: 'WEEK'}, {range: 'ALL'})).toEqual({ active: false })
      });
    });
  });

  describe('test connect', () => {
    // TODO: Write test later
  });
});