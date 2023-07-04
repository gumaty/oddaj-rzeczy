import styles from "./InfoStepsContainer.module.css";
function InfoStepsContainer(props) {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Ważne!</h3>
            <p className={styles.text}>{props.remark}</p>
        </div>
    )
}

export default InfoStepsContainer;