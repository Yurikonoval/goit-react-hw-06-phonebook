import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
// import types from './types';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;

//     default:
//       return state;
//   }
// };
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return state.find(
//         contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//       )
//         ? alert(`${payload.name} is already in contacts`)
//         : [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
