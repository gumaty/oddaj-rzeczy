import styles from "./HelpsButton.module.css";
import Link from "next/link";

function HelpsButton(props) {
    return (
        <div className={styles.container}>
            <Link href={"/"} className={styles.text}>{props.text}</Link>
        </div>
    )
}

export default HelpsButton;