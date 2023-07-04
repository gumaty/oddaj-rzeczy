'use client'

import styles from "./Step1Form.module.css";
import { Formik, Field, Form } from 'formik';

function Step1Form() {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <div>
            <p className={styles.step}>Krok 1/4</p>
            <h3 className={styles.header}>Zaznacz co chcesz oddać:</h3>
            <Formik
                initialValues={{
                    toggle: false,
                    checked: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className={styles.inputsContainer} role="group" aria-labelledby="checkbox-group">
                            <label className={styles.labelText}>
                                <Field className={styles.input} type="checkbox" name="checked" value="cloths" />
                                ubrania, które nadają się do ponownego użycia
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="checkbox" name="checked" value="trashCloths" />
                                ubrania, do wyrzucenia
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="checkbox" name="checked" value="toys" />
                                zabawki
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="checkbox" name="checked" value="books" />
                                książki
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="checkbox" name="checked" value="other" />
                                Inne
                            </label>
                        </div>

                        <button className={styles.button} type="submit">Dalej</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Step1Form;