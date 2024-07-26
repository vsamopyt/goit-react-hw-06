// export const filterReducer =( state= {name:""}, action) => {
//     switch (action.type) {
//         default:
//         return state;
//     }

// }

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";




// STEP 3

const slice = createSlice ({   
        name: "filter",
        initialState: {name: ""},
        reducers: {
            changeFilter(state, action) {
                // return {
                //     items: state.items.filter((item) => item.id !== action.payload),
                    
                //   };
console.log(action.payload);
                // name = state.action.payload;
                // console.log(state);
                return {name: action.payload};
               
            }, 
        }
    
    }
)

export const {changeFilter} = slice.actions;
export default slice.reducer