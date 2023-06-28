import styles from "./MainContent.module.css";
import Image from "next/image";
import ButtonsContainer from "@/components/ButtonsContainer";
function MainContent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Zacznij pomagać!<br />
                Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <Image src={"/assets/decoration.svg"} alt={"Wzór dekoracyjny"} width={253} height={33} />
            <ButtonsContainer />
        </div>
    )
}

export default MainContent;