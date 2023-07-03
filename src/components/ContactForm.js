'use client'

import styles from "./ContactForm.module.css";
import {Formik} from "formik";
import {useState} from "react";
import {Alert} from "@mui/material";
function ContactForm() {



    const [isSuccess, setIsSuccess] = useState(false);

    let status;

    function handleSubmit(values, { setSubmitting }) {

        if(!status) {
            setIsSuccess( true )
            setTimeout(() => {
                setIsSuccess( false );
            }, 3000);
        }
        setSubmitting(false);
    }

    return (

        <Formik
            initialValues={{ name: '', message: '', email: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Podany email jest nieprawidłowy';
                }

                if (!values.name) {
                    errors.name = 'Required';
                } else if (values.name.length < 3){
                    errors.name = 'Podane imię jest nieprawidłowe';
                }

                if (!values.message) {
                    errors.message = 'Required';
                } else if (values.message.length < 120){
                    errors.message = 'Wiadomość musi mieć conajmniej 120 znaków';
                }

                status = errors.length;
                return errors;
            }}

            onSubmit={handleSubmit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting
                  /* and other goodies */

              }) => (

                    <form className={styles.container} onSubmit={handleSubmit}>
                        { isSuccess && (
                            <div className={styles.successContainer}>
                                <p>Wiadomość została wysłana! Wkrótce się skontaktujemy</p>
                            </div>
                            // <Alert variant="filled" severity="success" sx={{my: 2}}>
                            //
                            // </Alert>
                        )
                        }
                        <div className={styles.inputsContainer}>

                            <div className={styles.inputControl}>
                                <label>Wpisz swoje imię</label>
                                <input type="text"
                                       placeholder={"Imię"}
                                       name="name"
                                       onChange={handleChange}
                                       value={values.name}
                                       required/>
                                {errors.name && touched.name && (
                                    <div className={styles.error}>
                                        <p>{errors.name}</p>
                                    </div>
                                )}
                            </div>
                            <div className={styles.inputControl}>
                                <label>Wpisz swój email</label>
                                <input type="email"
                                       placeholder={"email"}
                                       name="email"
                                       onChange={handleChange}
                                       value={values.email}
                                       required/>
                                {errors.email && touched.email && (
                                    <div className={styles.error}>
                                        <p>{errors.email}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.textareaControl}>
                            <label>Wpisz swoją wiadomość</label>
                            <textarea rows={4}
                                      placeholder={"Wiadomość"}
                                      name="message"
                                      onChange={handleChange}
                                      value={values.message}
                                      required
                            ></textarea>
                            {errors.message && touched.message && (
                                <div className={styles.error}>
                                    <p>{errors.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.buttonControl}>
                            <button type="submit" disabled={isSubmitting}>Wyślij</button>
                        </div>
                    </form>
           )}
        </Formik>
        )
}

export default ContactForm;