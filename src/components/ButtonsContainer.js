import styles from "./ButtonContainer.module.css";
import Button from "@/components/Button";

function ButtonsContainer() {
    return (
        <div className={styles.container}>
            <Button text={"Oddaj rzeczy"} link={"/step1"}/>
            <Button text={"Zorganizuj zbiórkę"} link={"/"}/>
        </div>
    )
}

export default ButtonsContainer;