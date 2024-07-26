import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from "../../redux/filtersSlice"
import css from "./SearchBox.module.css";
import { useId } from "react";

// redux ----------------
// export default function SearchBox({ value, onFilter }) {
//   const searchBoxId = useId();

//   const handleFilter = (event) => {
//     onFilter(event.target.value);
//   };
//   return (
//     <div className={css.searchBoxWraper}>
//       <label className={css.searchBoxLabel} htmlFor={searchBoxId}>
//         Find contact by name
//       </label>
//       <input
//         className={css.serchBoxInput}
//         type="text"
//         name="searchBoxId"
//         id={searchBoxId}
//         value={value}
//         onChange={handleFilter}
//       />
//     </div>
//   );
// }




export default function SearchBox() {
  // useSelector((state) =>state.contacts)
  useSelector ((state) =>state.filter.name);
  const dispatch = useDispatch()
    const searchBoxId = useId();
   let value;
  
    // const handleFilter = (event) => {
    //   onFilter(event.target.value);


    // };

      const handleFilter = (event) => {
        // dispatch({
        //   type: "filter/name",
        //   payload: event.target.value
        // })
      // onFilter(event.target.value);
      dispatch(changeFilter(event.target.value))
      value =event.target.value;

    };
    return (
      <div className={css.searchBoxWraper}>
        <label className={css.searchBoxLabel} htmlFor={searchBoxId}>
          Find contact by name
        </label>
        <input
          className={css.serchBoxInput}
          type="text"
          name="searchBoxId"
          id={searchBoxId}
          value={value}
          onChange={handleFilter}
        />
      </div>
    );
  }