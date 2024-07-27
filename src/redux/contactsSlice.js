import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import initialContacts from "../../contacts.json";
import { nanoid } from 'nanoid';

//STEP 2 AND STEP 1 

// export const addContact = createAction("contacts/add");
// export const deleteContact = createAction("contacts/delete");


// STEP 3

const slice = createSlice ({   
        name: "contacts",
        initialState: {items: initialContacts},
        reducers: {
            deleteContact(state,action) {
                return {
                    items: state.items.filter((item) => item.id !== action.payload),
                  };
            }, 

            // addContact(state, action) {
            //     state.items.push(action.payload)
            // }

              addContact: {
                reducer (state, action) {
                    state.items.push(action.payload)
                },
                prepare (value) {
                    return {
                        payload: {id:nanoid(5), ...value}
                            // id:nanoid(5),
                            ,
                        
                    }
                },
                 
              } 

        }
    
    }
)

export const {deleteContact, addContact} = slice.actions;
export default slice.reducer



//  STEP 2

// export const contactsReducer= createReducer({ items: initialContacts }, builder =>{
//     builder.addCase(deleteContact, (state, action)=>{
//         return {
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     })
//       .addCase(addContact, (state, action) =>{
//         // return { items: [...state.items, action.payload] };
//        state.items.push(action.payload)
//       })
// })


// STEP 3

// export const contactsReducer = (state = { items: initialContacts }, action) => {
//     console.log(action.payload);
  
//     switch (action.type) {
//       case deleteContact.type: // instead of "contacts/delete"
//         console.log(action.payload);
//         console.log(state.items);
  
//         return {
//           items: state.items.filter((item) => item.id !== action.payload),
//         };
  
//       case addContact.type: // instead of "contacts/add"
//         return { items: [...state.items, action.payload] };
  
//       default:
//         return state;
//     }
//   };