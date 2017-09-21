import { selectTab } from "../actions";


describe('ChartTabs actions', () => {
  describe('selectTab', () => {
    it('returns SELECT_DURATION action type on 1', () => {
        expect(selectTab(1).type).toEqual('DURATION');
    });

    it('returns SELECT_WEIGHT action type on 2', () => {
      expect(selectTab(2).type).toEqual('WEIGHT');
    });

    it('returns SELECT_BODY_FAT action type on 3', () => {
      expect(selectTab(3).type).toEqual('BODY_FAT');
    });

    it('returns SELECT_DURATION action type by default', () => {
      expect(selectTab().type).toEqual('DURATION');
    });
  });
});