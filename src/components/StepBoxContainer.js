import styles from "./StepBoxContainer.module.css";
import StepBox from "@/components/StepBox";

function StepBoxContainer() {
    return (
        <div className={styles.container}>
            <StepBox number={"1"} text={"Wybierz rzeczy"}/>
            <StepBox number={"2"} text={"Spakuj je w worki"}/>
            <StepBox number={"3"} text={"Wybierz fundację"}/>
            <StepBox number={"4"} text={"Zamów kuriera"}/>
        </div>
    )
}

export default StepBoxContainer;