import styles from "@/components/SimpleSteps.module.css";
import Header from "@/components/Header";
import SimpleStepsInner from "@/components/SimpleStepsInner";
import Button from "@/components/Button";

function SimpleSteps() {
    return (
        <div className={styles.container}>
            <Header text={"Wystarczą 4 proste kroki"}/>
            <SimpleStepsInner />
            <Button text={"Oddaj rzeczy"}/>
        </div>
    )
}

export default SimpleSteps;