'use client'

import styles from "./Step3Form.module.css";
import { Formik, Field, Form } from 'formik';
import {useRouter} from "next/router";

function Step3Form() {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <div className={styles.container}>
            <p className={styles.step}>Krok 3/4</p>
            <h3 className={styles.header}>Lokalizacja:</h3>
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
                            <div className={styles.inputsContainer}>
                                <Field className={styles.input}
                                       component="select"
                                       id="location"
                                       name="location"
                                       multiple={false}
                                >
                                    <option value="0">--- wybierz ---</option>
                                    <option value="katowice">Katowice</option>
                                    <option value="krakow">Kraków</option>
                                    <option value="poznan">Poznań</option>
                                    <option value="warszawa">Warszawa</option>
                                    <option value="wroclaw">Wrocław</option>
                                </Field>
                            </div>
                            <h3 className={styles.sectionHeader}>Komu chcesz pomóc?</h3>
                            <div className={styles.inputsContainer} role="group" aria-labelledby="my-radio-group">
                                <label className={styles.selectLabel}>
                                    <Field className={styles.selectSize} id="kids" type="radio" name="forWhom" value="kids" />
                                    dzieciom
                                </label>
                                <label className={styles.selectLabel}>
                                    <Field className={styles.selectSize} id="mothers" type="radio" name="forWhom" value="mothers" />
                                    samotnym matkom
                                </label>
                                <label className={styles.selectLabel}>
                                    <Field className={styles.selectSize} id="homeless" type="radio" name="forWhom" value="homeless" />
                                    bezdomnym
                                </label>
                                <label className={styles.selectLabel}>
                                    <Field className={styles.selectSize} id="disabled" type="radio" name="forWhom" value="disabled" />
                                    niepełnosprawnym
                                </label>
                                <label className={styles.selectLabel}>
                                    <Field className={styles.selectSize} id="elderly" type="radio" name="forWhom" value="elderly" />
                                    osobom starszym
                                </label>
                            </div>
                            <h3 className={styles.sectionHeader}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            <Field type="text" name="name" className={styles.textField} />
                        </div>
                        <button className={styles.button} type="submit" disabled={isSubmitting}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Step3Form;