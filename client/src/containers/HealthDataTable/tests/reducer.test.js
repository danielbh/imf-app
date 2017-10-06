import { entries } from '../reducer';

describe('HealthDataTable reducer', () => {

  it('returns initial state', () => {
    expect(entries()).toEqual({
      isFetching: false,
      didInvalidate: false,
      items: []
    });
  });


  it('deletes an entry', () => {
    const initialState = {
      isFetching: false,
      didInvalidate: false,
      items: [
        { id: 'id1', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
        { id: 'id2', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
        { id: 'id3', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
        { id: 'id4', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' }
      ]};

    const expectedStateAfter = {
      isFetching: false,
      didInvalidate: false,
      items: [
        { id: 'id1', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
        { id: 'id2', date: '1-May-17', duration: '11', weight: '69', bodyFat: '14' },
      ]
    };

    expect(entries(initialState, { ids: ['id3', 'id4'], type: 'RECEIVE_DELETED_ENTRY_IDS' }))
      .toEqual(expectedStateAfter);
  });

  describe('Get entries', () => {
    it('requests entries', () => {
      expect(entries({
        isFetching: false,
        didInvalidate: true,
        items: []
      }, { type: 'REQUEST_ENTRIES' })).toEqual({
        isFetching: true,
        didInvalidate: false,
        items: []
      })
    });

    it('receives entries', () => {
      expect(entries({
        isFetching: true,
        didInvalidate: true,
        items: []
      }, { type: 'RECEIVE_ENTRIES', receivedAt: 1, entries: ['entries yay!'] })).toEqual({
        isFetching: false,
        didInvalidate: false,
        items: ['entries yay!'],
        lastUpdated: 1
      })
    });

    it('invalidates entries', () => {
      expect(entries({
        didInvalidate: false,
      }, { type: 'INVALIDATE_ENTRIES'  })).toEqual({
        didInvalidate: true,
      })
    });
  });

  describe('Add new entries', () => {
    it('successfully adds an entry', () => {
      const newState = {
        id: 'id',
        date: 1505344302,
        duration: '11',
        weight: '69',
        bodyFat: '14'
      };

      // Table form submit formats date differently so we need to account for this in action creator
      const expected = {
        didInvalidate: false,
        isFetching: false,
        items: [{bodyFat: '14', date: 1505344302, duration: '11', id: 'id', weight: '69'}]};

      expect(entries(undefined, { ...newState, type: 'RECEIVE_NEW_ENTRY' })).toEqual(expected);
    });

    it('attempts to add an entry', () => {
      // TODO: Do later for optimistic rendering and offline storage
    });
  });
});

