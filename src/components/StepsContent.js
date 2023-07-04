import styles from "./StepsContent.module.css";
import Image from "next/image";
import ButtonsContainer from "@/components/ButtonsContainer";
import Header from "@/components/Header";
import StepBoxContainer from "@/components/StepBoxContainer";
function StepsContent() {
    return (
        <div className={styles.container}>
            <Header text={"Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM"}/>
            <p className={styles.lead}>Wystarczą 4 proste kroki:</p>
            <StepBoxContainer />
        </div>
    )
}

export default StepsContent;