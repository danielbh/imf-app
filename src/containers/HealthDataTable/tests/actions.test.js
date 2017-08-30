import {
  addEntry,
  deleteEntry
} from '../actions';

import {
  ADD_ENTRY,
  DELETE_ENTRY
} from '../constants';

import uuid from 'node-uuid'

const addEntryFactory = () => addEntry('1-May-17', '11', '69', '14');

describe('HealthDataTable actions', () => {

  describe('Add Entry Action', () => {

    it('receives an action type', () => {
      expect(addEntry().type).toEqual('ADD_ENTRY');
    });

    it('creates entry with new id', () => {
      uuid.v4 = jest.fn().mockReturnValueOnce('fake-id');
      expect(addEntry().id).toEqual('fake-id');
    });

    it('creates a new entry with a date', () => {
      expect(addEntryFactory().date).toEqual('1-May-17')
    });

    it('creates a new entry with a duration', () => {
      expect(addEntryFactory().duration).toEqual('11')
    });

    it('creates a new entry with weight', () => {
      expect(addEntryFactory().weight).toEqual('69')
    });

    it('creates a new entry with body fat', () => {
      expect(addEntryFactory().bodyFat).toEqual('14')
    });
  });

  describe('Delete Entry Action', () => {

    it('receives an action type', () => {
      expect(deleteEntry().type).toEqual('DELETE_ENTRY')
    });

    it('passes an id into action', () => {
      expect(deleteEntry('fake-id').id).toEqual('fake-id')
    });
  });

});