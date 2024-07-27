import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import {addContact} from "../../redux/contactsSlice"
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const contacFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'too short')
    .max(100, 'too Long')
    .required('Required'),
  number: Yup.string().length(9, 'should be 9 ').required('Required'),
});

// export default function ContactForm({ onAdd }) {




//   const nameId = useId();
//   const phoneId = useId();

//   function handleSubmit(values, actions) {
//     onAdd({
//       id: nanoid(5),
//       ...values,
//     });

//     actions.resetForm();
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={contacFormSchema}
//     >
//       <Form className={css.contactFormWraper}>
//         <label className={css.contactFormLabel} htmlFor={nameId}>
//           Name
//         </label>
//         <Field
//           className={css.contactFormInput}
//           type="text"
//           name="name"
//           id={nameId}
//         />
//         <ErrorMessage name="name" component="span" />
//         <label className={css.contactFormLabel} htmlFor={phoneId}>
//           Number
//         </label>
//         <Field
//           className={css.contactFormInput}
//           type="text"
//           name="number"
//           id={phoneId}
//           placeholder="xxx-xx-xx"
//         />
//         <ErrorMessage name="number" component="span" />
//         <button className={css.userFormButton} type="submit">
//           Submit
//         </button>
//       </Form>
//     </Formik>
//   );
// }


// redux 
export default function ContactForm() {
    const nameId = useId();
    const phoneId = useId();

    useSelector ((state) =>state.contacts);
    const dispatch = useDispatch();
  
    function handleSubmit(values, actions) {

      // dispatch({
      //   type: "contacts/add",
      //   payload : {
      //     id: nanoid(5),
      //     ...values,
      //   }
      // })
     
  // dispatch (
  //   addContact({
  //         id: nanoid(5),
  //         ...values,
  //       })
  // )

 dispatch (
    addContact({
          
          ...values,
        })
  )
  
      actions.resetForm();
    }
  
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contacFormSchema}
      >
        <Form className={css.contactFormWraper}>
          <label className={css.contactFormLabel} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage name="name" component="span" />
          <label className={css.contactFormLabel} htmlFor={phoneId}>
            Number
          </label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="number"
            id={phoneId}
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage name="number" component="span" />
          <button className={css.userFormButton} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    );
  }