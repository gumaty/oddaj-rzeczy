import styles from "./Step1Container.module.css";
import Step1Form from "@/components/Step1Form";
function Step1Container() {
    return (
        <div className={styles.container}>
            <Step1Form />
        </div>
    )
}

export default Step1Container;