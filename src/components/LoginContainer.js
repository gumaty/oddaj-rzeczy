import styles from "./LoginContainer.module.css";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
function LoginContainer() {
    return (
        <div className={styles.container}>
            <Header text={"Zaloguj się"} />
            <LoginForm />
            <button className={styles.newUser}>
                <Link href={"/newuser"}>Załóż konto</Link>
            </button>
        </div>
    )
}

export default LoginContainer;