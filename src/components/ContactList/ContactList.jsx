import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";




// export default function ContactList({ array, onDelete }) {
//   return (
//     <ul className={css.contactList}>
//       {array.map(item => {
//         return (
//           <li key={item.id} className={css.itemWraper}>
//             <Contact item={item}
//             onDelete ={onDelete}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// redux -------

export default function ContactList() {
    // const contactList =useSelector ((state) =>state.contacts);
    const contactList =useSelector ((state) =>state.contacts.items);
    const selectNameFilter = useSelector ((state) =>state.filter.name);
    console.log(selectNameFilter);

    const selectedContactList= contactList.filter(item => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()))

    console.log(selectedContactList);

    // const dispatch = useDispatch();
console.log(contactList);

  return (
    // <ul className={css.contactList}>
    //   {contactList.map(item => {
    //     return (
    //       <li key={item.id} className={css.itemWraper}>
    //          <Contact item ={item}/>    
    //       </li>
    //     );
    //   })}
    // </ul>

    <ul className={css.contactList}>
      {selectedContactList.map(item => {
        return (
          <li key={item.id} className={css.itemWraper}>
             <Contact item ={item}/>    
          </li>
        );
      })}
    </ul>
  );
}