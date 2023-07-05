'use client'

import styles from "./Step4Form.module.css";
import { Formik, Field, Form } from 'formik';
import {useRouter} from "next/router";

function Step4Form() {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <div className={styles.container}>
            <p className={styles.step}>Krok 4/4</p>
            <h3 className={styles.header}>Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>
            <Formik className={styles.container}
                initialValues={{
                    street: '',
                    city: '',
                    zipcode: '',
                    phone: '',
                    date: '',
                    time: '',
                    remarks: '',
                }}

                onSubmit={async values => {
                    await sleep(1000);
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (

                    <Form className={styles.formContainer}>
                        <div className={styles.boxesContainer}>
                            <div>
                                <h3 className={styles.sectionHeader}>Adres odbioru</h3>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="street" className={styles.labelText}>Ulica</label>
                                    <Field id="street" type="text" name="street" className={styles.textField} />
                                </div>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="city" className={styles.labelText}>Miasto</label>
                                    <Field id="city" type="text" name="city" className={styles.textField} />
                                </div>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="zipcode" className={styles.labelText}>Kod pocztowy</label>
                                    <Field id="zipcode" type="text" name="zipcode" className={styles.textField} />
                                </div>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="phone" className={styles.labelText}>Numer telefonu</label>
                                    <Field id="phone" type="text" name="phone" className={styles.textField} />
                                </div>
                            </div>
                            <div>
                                <h3 className={styles.sectionHeader}>Termin odbioru</h3>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="date" className={styles.labelText}>Data</label>
                                    <Field id="date" type="text" name="date" className={styles.textField} />
                                </div>
                                <div className={styles.inputsContainer}>
                                    <label htmlFor="time" className={styles.labelText}>Godzina</label>
                                    <Field id="time" type="text" name="time" className={styles.textField} />
                                </div>
                                <div className={styles.textFieldContainer}>
                                    <label htmlFor="remarks" className={styles.labelText}>Uwagi do kuriera</label>
                                    <textarea id="remarks" type="text" name="remarks" className={styles.textField} rows={4} />
                                </div>
                            </div>
                        </div>
                        <button className={styles.button} type="submit" disabled={isSubmitting}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Step4Form;