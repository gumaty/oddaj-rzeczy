import Link from "next/link";
import styles from "./UserService.module.css";

function UserService() {
    return (
        <div className={styles.wrapper}>
            <Link href={'/login'} className={styles.link}>Zaloguj</Link>
            <Link href={'/newuser'} className={styles.borderedLink}>Załóż konto</Link>
        </div>
    )
}

export default UserService;