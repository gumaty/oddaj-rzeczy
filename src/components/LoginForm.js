'use client'

import styles from "@/components/LoginForm.module.css";

function LoginForm(props) {

    return (
        
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