import styles from "./Button.module.css";
import Link from "next/link";
function Button(props) {
    return (
        <div className={styles.container}>
            <Link href={`${props.link}`} className={styles.text}>{props.text}</Link>
        </div>
    )
}

export default Button;