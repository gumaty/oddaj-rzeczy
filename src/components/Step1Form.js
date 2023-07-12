'use client'

import styles from "./Step1Form.module.css";
import { Formik, Field, Form } from 'formik';

function Step1Form() {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <div  className={styles.container}>
            <p className={styles.step}>Krok 1/4</p>
            <h3 className={styles.header}>Zaznacz co chcesz oddać:</h3>
            <Formik  className={styles.container}
                initialValues={{
                    checked: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form  className={styles.formContainer} >
                        <div className={styles.inputsContainer} role="group" aria-labelledby="radio-group">
                            <label className={styles.labelText}>
                                <Field className={styles.input} type="radio" name="checked" value="cloths" />
                                ubrania, które nadają się do ponownego użycia
                                <span className={styles.span} ></span>
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="radio" name="checked" value="trashCloths" />
                                ubrania, do wyrzucenia
                                <span className={styles.span} ></span>
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="radio" name="checked" value="toys" />
                                zabawki
                                <span className={styles.span} ></span>
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="radio" name="checked" value="books" />
                                książki
                                <span className={styles.span} ></span>
                            </label>
                            <label className={styles.labelText}>
                                <Field className={styles.input}  type="radio" name="checked" value="other" />
                                Inne
                                <span className={styles.span} ></span>
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