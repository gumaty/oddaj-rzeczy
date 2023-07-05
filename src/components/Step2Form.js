'use client'

import styles from "./Step3Form.module.css";
import { Formik, Field, Form } from 'formik';
import {useRouter} from "next/router";

function Step2Form() {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <div className={styles.container}>
            <p className={styles.step}>Krok 2/4</p>
            <h3 className={styles.header}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <Formik className={styles.container}
                initialValues={{
                    location: [],
                }}

                onSubmit={async values => {
                    await sleep(1000);
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (

                    <Form className={styles.formContainer}>
                        <div className={styles.inputsContainer}>
                            <label className={styles.labelText} htmlFor="bags">Liczba 60l worków:</label>
                            <Field className={styles.input}
                                   component="select"
                                   id="bags"
                                   name="bags"
                                   multiple={false}
                            >
                                <option value="0">--- wybierz ---</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Field>
                        </div>
                        <button className={styles.button} type="submit" disabled={isSubmitting}>Dalej</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Step2Form;