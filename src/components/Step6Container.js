import styles from "./Step6Container.module.css";
import Header from "@/components/Header";

function Step6Container() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Header text={"Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze."}/>
            </div>
        </div>
    )
}

export default Step6Container;