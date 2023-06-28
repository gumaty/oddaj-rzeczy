import styles from "./SimpleStep.module.css";
function SimpleStep(props) {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={`../assets/${props.step.image}`} alt={`Ikona ${props.step.title}`}/>
            <p className={styles.textTitle}>{props.step.title}</p>
            <p className={styles.textDescription}>{props.step.description}</p>
        </div>
    )
}
export default SimpleStep;