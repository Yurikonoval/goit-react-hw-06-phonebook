export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  const normilizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normilizedFilter),
  );
};

// export const getVisibleContacts = (allContacts, filter) => {
//   const normilizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normilizedFilter),
//   );
// };
