import styles from "./SelectedButton.module.css";
import Link from "next/link";

function SelectedButton(props) {
    return (
        <div className={styles.container}>
            <Link href={props.link} className={styles.text}>{props.text}</Link>
        </div>
    )
}

export default SelectedButton;