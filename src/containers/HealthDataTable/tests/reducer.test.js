import { healthDataTable } from '../reducer';

import importedData from '../../../data.json';


describe('healthDataReducer', () => {

  it('returns initial state', () => {
    expect(healthDataTable(undefined, {})).toEqual(importedData);
  });

  it('adds an entry', () => {
    const newEntry = {
      id: 'id',
      date: '2017-09-22',
      duration: '11',
      weight: '69',
      bodyFat: '14'
    };

    // Table form submit formats date differently so we need to account for this in action creator
    const addedEntry = {
      id: 'id',
      date: '22-Sep-17',
      duration: '11',
      weight: '69',
      bodyFat: '14'
    };

    const expected = [...importedData, addedEntry];

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

