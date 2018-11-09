export const CLIENTS_FETCH_LIST = 'CLIENTS_FETCH_LIST';
export const CLIENTS_FETCH_LIST_SUCCESS = 'CLIENTS_FETCH_LIST_SUCCESS';
export const CLIENTS_FETCH_LIST_ERROR = 'CLIENTS_FETCH_LIST_ERROR';

export const CLIENTS_SET_VIEWABLE_CLIENT_BY_ID = 'CLIENTS_SET_VIEWABLE_CLIENT_BY_ID';

export const CLIENTS_UPDATE_SEARCH_QUERY = 'CLIENTS_UPDATE_SEARCH_QUERY';
export const CLIENTS_APPLY_SEARCH = 'CLIENTS_APPLY_SEARCH';

export const CLIENTS_UPDATE_CLIENT_BY_ID = 'CLIENTS_UPDATE_CLIENT_BY_ID';


export const fetchClientsList = payload => ({
    type: CLIENTS_FETCH_LIST,
    payload,
});
export const fetchClientsListSuccess = payload => ({
    type: CLIENTS_FETCH_LIST_SUCCESS,
    payload,
});
export const fetchClientsListError = payload => ({
    type: CLIENTS_FETCH_LIST_ERROR,
    payload,
});

export const setViewableClientById = payload => ({
    type: CLIENTS_SET_VIEWABLE_CLIENT_BY_ID,
    payload,
});

export const updateClientsSearchQuery = payload => ({
    type: CLIENTS_UPDATE_SEARCH_QUERY,
    payload,
});

export const applyClientsSearch = payload => ({
    type: CLIENTS_APPLY_SEARCH,
    payload,
});

export const updateClientById = payload => ({
    type: CLIENTS_UPDATE_CLIENT_BY_ID,
    payload,
});