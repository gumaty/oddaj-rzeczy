import styles from "@/components/SimpleSteps.module.css";
import Header from "@/components/Header";
import SimpleStepsInner from "@/components/SimpleStepsInner";
import Button from "@/components/Button";

function SimpleSteps() {
    return (
        <div className={styles.container}>
            <Header text={"Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"}/>
            <SimpleStepsInner />
            <Button text={"Oddaj rzeczy"}/>
        </div>
    )
}

export default SimpleSteps;