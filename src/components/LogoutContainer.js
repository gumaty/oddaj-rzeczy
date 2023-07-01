import styles from "./LogoutContainer.module.css";
import Header from "@/components/Header";
import Link from "next/link";
function LogoutContainer() {
    return (
        <div className={styles.container}>
            <Header text={"Wylogowanie nastąpiło pomyślnie!"} />
            <button className={styles.button}>
                <Link href={"/"}>Strona główna</Link>
            </button>
        </div>
    )
}

export default LogoutContainer;