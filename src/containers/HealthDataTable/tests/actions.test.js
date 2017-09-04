import uuid from 'node-uuid';

import {
  addEntry,
  deleteEntries
} from '../actions';

const addEntryFactory = () => addEntry({
  date: '1-May-17',
  duration: '11',
  weight: '69',
  bodyFat: '14'
});

describe('HealthDataTable actions', () => {

  describe('Add Entry Action', () => {

    it('receives an action type', () => {
      expect(addEntryFactory().type).toEqual('ADD_ENTRY');
    });

    it('creates entry with new id', () => {
      uuid.v4 = jest.fn().mockReturnValueOnce('fake-id');
      expect(addEntryFactory().id).toEqual('fake-id');
    });

    it('creates a new entry with a date', () => {
      expect(addEntryFactory().date).toEqual('1-May-17');
    });

    it('creates a new entry with a duration', () => {
      expect(addEntryFactory().duration).toEqual('11');
    });

    it('creates a new entry with weight', () => {
      expect(addEntryFactory().weight).toEqual('69');
    });

    it('creates a new entry with body fat', () => {
      expect(addEntryFactory().bodyFat).toEqual('14');
    });
  });

  describe('Delete Entry Action', () => {
    it('receives an action type', () => {
      expect(deleteEntries().type).toEqual('DELETE_ENTRY');
    });

    it('passes an id into action', () => {
      expect(deleteEntries('fake-id').ids).toEqual('fake-id');
    });
  });

});