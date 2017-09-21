import { tab } from "../reducer";
import { SELECT_DURATION, SELECT_BODY_FAT } from "../constants";


describe('ChartTabs reducer', () => {
  it('returns a reducer with default action', () => {
    expect(tab()).toEqual('SELECT_DURATION');
  });

  it('returns a reducer with passed in action', () => {
    expect(tab(undefined, { type: SELECT_BODY_FAT })).toEqual('SELECT_BODY_FAT');
  });
});