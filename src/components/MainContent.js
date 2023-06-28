import styles from "./MainContent.module.css";
import Image from "next/image";
import ButtonsContainer from "@/components/ButtonsContainer";
import Header from "@/components/Header";
function MainContent() {
    return (
        <div className={styles.container}>
            <Header text={"Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"}/>
            <ButtonsContainer />
        </div>
    )
}

export default MainContent;