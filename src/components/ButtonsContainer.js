import styles from "./ButtonContainer.module.css";
import Button from "@/components/Button";

function ButtonsContainer() {
    return (
        <div className={styles.container}>
            <Button text={"Oddaj rzeczy"}/>
            <Button text={"Zorganizuj zbiórkę"}/>
        </div>
    )
}

export default ButtonsContainer;