import styles from "@/components/Menu.module.css";
import Link from "next/link";

function Menu(){
    return (
        <div className={styles.wrapper}>
            <Link href={'/'} className={styles.link}>Start</Link>
            <Link href={'/'} className={styles.link}>O co chodzi?</Link>
            <Link href={'/'} className={styles.link}>O nas</Link>
            <Link href={'/'} className={styles.link}>Fundacja i organizacje</Link>
            <Link href={'/'} className={styles.link}>Kontakt</Link>
        </div>
    )
}
export default Menu;