import { healthDataTable } from '../reducer';

describe('HealthDataTable reducer', () => {

  it('returns initial state', () => {
    expect(healthDataTable()).toEqual([]);
  });

  it('adds an entry', () => {
    const newEntry = {
      id: 'id',
      date: 1505344302,
      duration: '11',
      weight: '69',
      bodyFat: '14'
    };

    // Table form submit formats date differently so we need to account for this in action creator
    const addedEntry = {
      id: 'id',
      date: 1505344302,
      duration: '11',
      weight: '69',
      bodyFat: '14'
    };

    const expected = [addedEntry];

    expect(healthDataTable(undefined, { ...newEntry, type: 'ADD_ENTRY' })).toEqual(expected);
  });

  it('deletes an entry', () => {
    const initialState = [
      { id: 'id1', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
      { id: 'id2', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
      { id: 'id3', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
      { id: 'id4', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' }
    ];

    const expected = ([first, second] = initialState) => ([first, second]);

    expect(healthDataTable(initialState, { ids: ['id3', 'id4'], type: 'DELETE_ENTRY' }))
      .toEqual(expected());
  });
});
