import { tab } from "../reducer";
import { DURATION, BODY_FAT } from "../constants";


describe('ChartTabs reducer', () => {
  it('returns a reducer with default action', () => {
    expect(tab()).toEqual('DURATION');
  });

  it('returns a reducer with passed in action', () => {
    expect(tab(undefined, { type: BODY_FAT })).toEqual('BODY_FAT');
  });

});