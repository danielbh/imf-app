import { healthDataTableReducer } from '../reducer'
import {
  addEntry,
  deleteEntry
} from "../actions";

import importedData from '../../../data.json';


describe('healthDataReducer', () => {

  it('returns initial state', () => {
    expect(healthDataTableReducer(undefined, {})).toEqual(importedData)
  });

  it('adds an entry', () => {
    const expected = {
      id: 'id',
      date: '1-May-17',
      duration: '11',
      weight: '69',
      bodyFat: '14'
    };

    expect(healthDataTableReducer(undefined, {...expected, type: 'ADD_ENTRY'})).toEqual(expected)

  });

  it('deletes an entry', () => {

    const initialState = [
      {id: 'id', date: '1-May-17',  duration: '11', weight: '69', bodyFat: '14'},
      {id: 'id2', date: '1-May-17',  duration: '11', weight: '69', bodyFat: '14'},
      {id: 'id3', date: '1-May-17',  duration: '11', weight: '69', bodyFat: '14'},
      {id: 'id4', date: '1-May-17',  duration: '11', weight: '69', bodyFat: '14'}
    ];

    const expected = ([first, second, third]) => ([first, second, third])

    expect(healthDataTableReducer(initialState, {id: 'id4', type: 'DELETE_ENTRY'})).toEqual(expected(initialState))
  });
});