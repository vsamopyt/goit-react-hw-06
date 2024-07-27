
import { configureStore } from "@reduxjs/toolkit";
// import {contactsReducer } from "./contactsSlice"

// import { persistStore, persistReducer } from 'redux-persist';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer  from "./contactsSlice";
import filterReducer  from "./filtersSlice";


// const initialValue = {
//   contacts: initialContacts,
// };

// const rootReducer = (state = initialValue, action) => {
//   console.log(action.payload);

//   switch (action.type) {
//     case "contacts/delete":
//       console.log(action.payload);
//       console.log(state.contacts);

//       return {
//         contacts: state.contacts.filter((item) => item.id !== action.payload),
//       };

//     case "contacts/add":
//       return { contacts: [...state.contacts, action.payload] };

//     case "contacts/filter":
//       console.log(action.payload);
//       return {
//         contacts: state.contacts.filter((item) =>
//           item.name.toLowerCase().includes(action.payload)
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export const store = configureStore({ reducer: rootReducer });

//  new reducer

// const contactsReducer = (state = { items: initialContacts }, action) => {
//   console.log(action.payload);

//   switch (action.type) {
//     case "contacts/delete":
//       console.log(action.payload);
//       console.log(state.items);

//       return {
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

 

//     case "contacts/add":
//       return { items: [...state.items, action.payload] };

//     default:
//       return state;
//   }
// };

// const filterReducer =( state= {name:""}, action) => {
//     switch (action.type) {
//         default:
//         return state;
//     }

// }

const persistConfig = {
    key: 'phonebookContacts',
    storage,
    // whitelist: ['contacts']
  }
  const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)



// export const store = configureStore({
//     reducer : {
//         contacts: contactsReducer,
//         filter: filterReducer
//     }

// })

export const store = configureStore({
    reducer : {
        contacts: persistedContactsReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),

})

export const  persistor = persistStore(store)