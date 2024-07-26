import initialContacts from "../../contacts.json";
import { configureStore } from "@reduxjs/toolkit";
// import {contactsReducer } from "./contactsSlice"
import contactsReducer  from "./contactsSlice"
import filterReducer  from "./filtersSlice"

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


export const store = configureStore({
    reducer : {
        contacts: contactsReducer,
        filter: filterReducer
    }

})

