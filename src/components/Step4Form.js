'use client'

import styles from "./Step3Form.module.css";
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
                    location: [],
                    forWhom: '',
                    name: '',
                }}

                onSubmit={async values => {
                    await sleep(1000);
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (

                    <Form className={styles.formContainer}>
                        <div>
                            <h3 className={styles.sectionHeader}>Adres odbioru</h3>
                            <div>
                                <label htmlFor="street" className={styles.selectLabel}>Ulica</label>
                                <Field id="street" type="text" name="street" className={styles.textField} />
                            </div>
                            <div>
                                <label htmlFor="city" className={styles.selectLabel}>Miasto</label>
                                <Field id="city" type="text" name="city" className={styles.textField} />
                            </div>
                            <div>
                                <label htmlFor="zipcode" className={styles.selectLabel}>Kod pocztowy</label>
                                <Field id="zipcode" type="text" name="zipcode" className={styles.textField} />
                            </div>
                            <div>
                                <label htmlFor="phone" className={styles.selectLabel}>Numer telefonu</label>
                                <Field id="phone" type="text" name="phone" className={styles.textField} />
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.sectionHeader}>Termin odbioru</h3>
                            <div>
                                <label htmlFor="date" className={styles.selectLabel}>Data</label>
                                <Field id="date" type="text" name="date" className={styles.textField} />
                            </div>
                            <div>
                                <label htmlFor="time" className={styles.selectLabel}>Godzina</label>
                                <Field id="time" type="text" name="time" className={styles.textField} />
                            </div>
                            <div>
                                <label htmlFor="remarks" className={styles.selectLabel}>Uwagi do kuriera</label>
                                <textarea id="remarks" type="text" name="remarks" className={styles.textField} />
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