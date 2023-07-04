import styles from "./Step2Container.module.css";
import Step2Form from "@/components/Step2Form";
function Step2Container() {
    return (
        <div className={styles.container}>
            <Step2Form />
        </div>
    )
}

export default Step2Container;