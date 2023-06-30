import styles from "@/components/LoginForm.module.css";

function LoginForm() {
    return (
        <form className={styles.container}>
            <div className={styles.inputsContainer}>
                <div className={styles.inputControl}>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className={styles.inputControl}>
                    <label>Hasło</label>
                    <input type="password"/>
                </div>
            </div>
            <div className={styles.buttonControl}>
                <button type="submit">Zaloguj się</button>
            </div>
        </form>
    )
}

export default LoginForm;