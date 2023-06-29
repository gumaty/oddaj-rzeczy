import HelpsButton from "@/components/HelpsButton";
import styles from "./HelpsButtons.module.css";

function HelpsButtons() {
    return (
        <div className={styles.container}>
            <HelpsButton text={"Fundacjom"}/>
            <HelpsButton text={"Organizacjom pozarządowym"}/>
            <HelpsButton text={"Lokalnym zbiórkom"}/>
        </div>
    )
}

export default HelpsButtons;