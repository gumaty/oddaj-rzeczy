'use client'

import styles from "./LoginContainer.module.css";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
function LoginContainer(props) {
    return (
        <div className={styles.container}>
            <Header text={"Zaloguj się"} />
            <LoginForm setEmail={props.setEmail} setPassword={props.setPassword} handleSubmit={props.handleSubmit} />
            <button className={styles.newUser}>
                <Link href={"/newuser"}>Załóż konto</Link>
            </button>
        </div>
    )
}

export default LoginContainer;