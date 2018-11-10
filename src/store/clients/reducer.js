import { fromJS } from 'immutable';

import {
  CLIENTS_FETCH_LIST_SUCCESS,
  CLIENTS_SET_VIEWABLE_CLIENT_BY_ID,
  CLIENTS_UPDATE_SEARCH_QUERY,
  CLIENTS_UPDATE_CLIENT_BY_ID,
} from './actions';

const initialState = fromJS({
  list: [],
  editableClient: {
    general: {
      firstName: '',
      lastName: '',
      avatar: '',
    },
    job: {
      company: '',
      title: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    address: {
      street: '',
      city: '',
      zipCode: '',
      country: '',
    },
  },
  currentViewableClientID: null,
  searchQuery: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENTS_FETCH_LIST_SUCCESS: {
      return state.set('list', fromJS(action.payload));
    }

    case CLIENTS_SET_VIEWABLE_CLIENT_BY_ID: {
      return state.set('currentViewableClientID', action.payload);
    }
    case CLIENTS_UPDATE_SEARCH_QUERY: {
      return state.set('searchQuery', action.payload);
    }
    case CLIENTS_UPDATE_CLIENT_BY_ID: {
      return state.updateIn(['list'], list =>
        list.map(client => {
          if (client.get('id') === action.payload.id) {
            return fromJS(action.payload);
          }
          return client;
        }),
      );
    }

    default: {
      return state;
    }
  }
};
