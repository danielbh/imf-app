import uuid from 'node-uuid';

import {
  addEntry,
  deleteEntry,
  invalidateEntries,
  receiveEntries,
  requestEntries,
  fetchEntries,
  fetchEntriesIfNeeded
} from '../actions';

import axios from 'axios'

const addEntryFactory = () => addEntry({
  date: '2017-May-1',
  duration: '11',
  weight: '69',
  bodyFat: '14'
});

describe('HealthDataTable actions', () => {

  describe('Add Entry Action', () => {
    it('receives an action with the correct value', () => {
      uuid.v4 = jest.fn().mockReturnValueOnce('fake-id');
      expect(addEntryFactory()).toEqual({
        type: 'ADD_ENTRY',
        id: 'fake-id',
        date: 1493589600000,
        duration: '11',
        weight: '69',
        bodyFat: '14'
      });
    });
  });

  describe('Delete Entry Action', () => {
    it('receives an action with the correct value', () => {
      expect(deleteEntry('fake-id')).toEqual({ type: 'DELETE_ENTRY', id: 'fake-id' });
    });
  });

  describe('Request Entries Action', () => {
    expect(requestEntries()).toEqual({type: 'REQUEST_ENTRIES'})
  });

  describe('Receive Entries Action', () => {
    expect(receiveEntries({ items: ['fake-items'] }, 1493589600000)).toEqual({
      type: 'RECEIVE_ENTRIES',
      entries: {items: ['fake-items'] },
      receivedAt: 1493589600000
    });
  });

  describe('fetchEntriesIfNeeded', () => {
    describe('dispatch', () => {
      it('calls dispatch when there are no items', () => {
        const dispatch = jest.fn();
        const getState = () => ({ entries: { items: [] } });
        fetchEntriesIfNeeded()(dispatch, getState);
        expect(dispatch).toHaveBeenCalled();
      });

      it('does not call dispatch when already fetching data', () => {
        const dispatch = jest.fn();
        const getState = () => ({ entries: { items: [''], isFetching: true } });
        fetchEntriesIfNeeded()(dispatch, getState);
        expect(dispatch).not.toHaveBeenCalled();
      });

      it('calls dispatch when entries are invalidated by a data update', () => {
        const dispatch = jest.fn();
        const getState = () => ({ entries: { items: [''], isFetching: false, didInvalidate: true } });
        fetchEntriesIfNeeded()(dispatch, getState);
        expect(dispatch).toHaveBeenCalled();
      });
    });

    describe('fetchEntries', () => {
      it('calls dispatch twice on fetch success', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve(''));
        await fetchEntries()(dispatch);
        expect(dispatch.mock.calls.length).toEqual(2);
      });

      it('calls requestEntries on fetch attempt', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve(''));
        await fetchEntries()(dispatch);
        expect(dispatch.mock.calls[0]).toEqual([{"type": "REQUEST_ENTRIES"}]);
      });

      it('calls receiveEntries with correct data on success', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve(''));
        Date.now = jest.fn(() => 1);
        await fetchEntries()(dispatch);
        expect(dispatch.mock.calls[1]).toEqual([{"entries": undefined, "receivedAt": 1, "type": "RECEIVE_ENTRIES"}]);
      });

      it('return error on unsuccessful fetch attempt', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn(() => Promise.reject(new Error('Error!')));
        await expect(fetchEntries()(dispatch)).resolves.toEqual(new Error('Error!'));
      });
    });
  });

  describe('Invalidate Entries Action', () => {
    it('returns expected result', () => {
      expect(invalidateEntries()).toEqual({type: 'INVALIDATE_ENTRIES'});
    });
  });
});