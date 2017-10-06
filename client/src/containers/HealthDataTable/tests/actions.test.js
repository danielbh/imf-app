import {
  addEntry,
  deleteEntries,
  receiveDeleteEntries,
  invalidateEntries,
  receiveEntries,
  requestEntries,
  fetchEntries,
  fetchEntriesIfNeeded
} from '../actions';

import axios from 'axios'

const addEntryPartial = addEntry({
  date: '2017-May-1',
  duration: '11',
  weight: '69',
  bodyFat: '14'
});

const deleteEntriesPartial = deleteEntries(['id1', 'id2', 'id3']);

describe('HealthDataTable actions', () => {

  describe('Add Entry Action', () => {
    it('calls dispatch twice on POST request success', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn((url) => Promise.resolve(''));
      await addEntryPartial(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it('calls REQUEST_ADD_ENTRY action', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn((url) => Promise.resolve(''));
      await addEntryPartial(dispatch);
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'REQUEST_ADD_ENTRY' });
    });

    it('makes a POST request with the correct URL', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn((url) => Promise.resolve(''));
      await addEntryPartial(dispatch);
      expect(axios.post)
        .toHaveBeenCalledWith('api/entries', {
          bodyFat: '14', date: 1493589600000, duration: '11', weight: '69'
        });
    });

    it('calls RECEIVE_NEW_ENTRY action on success', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn((url) => Promise.resolve({ id: 'fake-id' }));
      await addEntryPartial(dispatch);
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: 'RECEIVE_NEW_ENTRY',
        id: 'fake-id',
        date: 1493589600000,
        duration: '11',
        weight: '69',
        bodyFat: '14'
      });
    });

    it('returns error on failed POST request', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn(() => Promise.reject(new Error('Error!')));
      await expect(addEntryPartial(dispatch)).resolves.toEqual(new Error('Error!'));
    });
  });

  describe('Delete Entry Action', () => {
    it('calls dispatch twice on DELETE request success', async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn(url => Promise.resolve(''));
      await deleteEntriesPartial(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it('calls REQUEST_DELETE_ENTRIES action', async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn((url) => Promise.resolve(''));
      await deleteEntriesPartial(dispatch);
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'REQUEST_DELETE_ENTRIES' });
    });

    it('makes a DELETE request with the correct URL', async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn((url) => Promise.resolve(''));
      await deleteEntriesPartial(dispatch);
      expect(axios.delete)
        .toHaveBeenCalledWith('api/entries', {ids: ['id1', 'id2', 'id3']});
    });

    it('calls RECEIVE_DELETE_ENTRIES action on success', async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn((url) => Promise.resolve({ ids: ['id1', 'id2', 'id3'] }));
      await deleteEntriesPartial(dispatch);
      expect(dispatch.mock.calls[1][0])
        .toEqual({ type: 'RECEIVE_DELETED_ENTRY_IDS', ids: ['id1', 'id2', 'id3'] });
    });

    it('creates the correct result for RECEIVE_DELETE_ENTRIES', () => {
      expect(receiveDeleteEntries({ type: 'RECEIVE_DELETED_ENTRY_IDS', ids: ['id1', 'id2', 'id3'] }))
        .toEqual({ type: 'RECEIVE_DELETED_ENTRY_IDS', ids: ['id1', 'id2', 'id3'] })
    });

    it('returns error on failed DELETE request', async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn(() => Promise.reject(new Error('Error!')));
      await expect(deleteEntriesPartial(dispatch)).resolves.toEqual(new Error('Error!'));
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

      it('makes the GET request with the correct url', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve(''));
        await fetchEntries()(dispatch);
        expect(axios.get).toHaveBeenCalledWith('api/entries');
      });

      it('calls requestEntries on fetch attempt', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve(''));
        await fetchEntries()(dispatch);
        expect(dispatch.mock.calls[0]).toEqual([{"type": "REQUEST_ENTRIES"}]);
      });

      it('calls receiveEntries with correct data on success', async () => {
        const dispatch = jest.fn();
        axios.get = jest.fn((url) => Promise.resolve({data: ['entry1', 'entry2'] }));
        Date.now = jest.fn(() => 1);
        await fetchEntries()(dispatch);
        expect(dispatch.mock.calls[1][0])
          .toEqual({entries: ['entry1', 'entry2'], receivedAt: 1, type: 'RECEIVE_ENTRIES'});
      });

      it('returns error on unsuccessful fetch attempt', async () => {
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