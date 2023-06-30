import styles from "./ContactForm.module.css";
function ContactForm() {

    return (
        <form>
            <div className={styles.inputsContainer}>
                <div className={styles.inputControl}>
                    <label>Wpisz swoje imię</label>
                    <input type="text" placeholder={"Imię"}/>
                </div>
                <div className={styles.inputControl}>
                    <label>Wpisz swój email</label>
                    <input type="email" placeholder={"email"}/>
                </div>
            </div>
            <div className={styles.textareaControl}>
                <label>Wpisz swoją wiadomość</label>
                <textarea rows={4} placeholder={"Wiadomość"}></textarea>
            </div>
            <div className={styles.buttonControl}>
                <button type="submit">Wyślij</button>
            </div>
        </form>
        )
}

export default ContactForm;