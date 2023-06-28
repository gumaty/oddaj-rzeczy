import styles from "./Info.module.css";
function Info(props) {
    return(
        <div className={styles.container}>
            <p className={styles.textQuantity}>{props.info.quantity}</p>
            <p className={styles.textText}>{props.info.text}</p>
            <p className={styles.textDescription}>{props.info.description}</p>
        </div>
    )
}
export default Info;