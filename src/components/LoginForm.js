'use client'

import styles from "@/components/LoginForm.module.css";
import {Formik} from "formik";
import {useState} from "react";

function LoginForm(props) {

    const [isSuccess, setIsSuccess] = useState(false);

    // console.log(props)

    let status;

    // function handleSubmit(values, { setSubmitting }) {
    //
    //     if(!status) {
    //         setIsSuccess( true )
    //         setTimeout(() => {
    //             setIsSuccess( false );
    //         }, 3000);
    //     }
    //     setSubmitting(false);
    // }

    return (

        // <Formik
        //     initialValues={{ email: '', password: '' }}
        //     validate={values => {
        //         const errors = {};
        //         if (!values.email) {
        //             errors.email = 'Required';
        //         } else if (
        //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //         ) {
        //             errors.email = 'Podany email jest nieprawidłowy';
        //         }
        //
        //         if (!values.password) {
        //             errors.password = 'Required';
        //         } else if (values.password.length < 8){
        //             errors.password = 'Hasło musi mieć conajmniej 8 znaków';
        //         }
        //
        //         status = errors.length;
        //         return errors;
        //     }}
        //
        //     onSubmit={props.handleSubmit}
        // >
        //     {({
        //           values,
        //           errors,
        //           touched,
        //           handleChange,
        //           handleSubmit,
        //           isSubmitting
        //           /* and other goodies */
        //
        //       }) => (
        //
        //         <form className={styles.container} onSubmit={handleSubmit}>
        //             { isSuccess && (
        //                 <div className={styles.successContainer}>
        //                     <p>Wiadomość została wysłana! Wkrótce się skontaktujemy</p>
        //                 </div>
        //             )
        //             }
        //             <div className={styles.inputsContainer}>
        //
        //
        //                 <div className={styles.inputControl}>
        //                     <label>Email</label>
        //                     <input type="email"
        //                            name="email"
        //                            onChange={e=> {
        //                                e.preventDefault();
        //                                props.setEmail(e.target.value)
        //                            }}
        //                            value={values.email}
        //                            required/>
        //                     {errors.email && touched.email && (
        //                         <div className={styles.error}>
        //                             <p>{errors.email}</p>
        //                         </div>
        //                     )}
        //                 </div>
        //                 <div className={styles.inputControl}>
        //                     <label>Password</label>
        //                     <input type="password"
        //                            name="password"
        //                            onChange={e=> props.setPassword(e.target.value)}
        //                            value={values.password}
        //                            required/>
        //                     {errors.password && touched.password && (
        //                         <div className={styles.error}>
        //                             <p>{errors.password}</p>
        //                         </div>
        //                     )}
        //                 </div>
        //             </div>
        //             <div className={styles.buttonControl}>
        //                 <button type="submit" disabled={isSubmitting}>Zaloguj się</button>
        //             </div>
        //         </form>
        //     )}
        // </Formik>


        <form onSubmit={props.handleSubmit} className={styles.container}>
            <div className={styles.inputsContainer}>
                <div className={styles.inputControl}>
                    <label>Email</label>
                    <input type="email" onChange={e=> props.setEmail(e.target.value)}/>
                </div>
                <div className={styles.inputControl}>
                    <label>Hasło</label>
                    <input type="password" onChange={e=> props.setPassword(e.target.value)}/>
                </div>
            </div>
            <div className={styles.buttonControl}>
                <button type="submit">Zaloguj się</button>
            </div>
        </form>
    )
}

export default LoginForm;