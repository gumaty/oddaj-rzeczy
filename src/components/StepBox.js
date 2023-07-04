import styles from "./StepBox.module.css";
function StepBox(props) {
    return (
        <div className={styles.container}>
            <p className={styles.number}>{props.number}</p>
            <p className={styles.text}>{props.text}</p>
            <span className={styles.square} />
        </div>
    )
}

export default StepBox;