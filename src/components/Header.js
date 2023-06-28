import styles from "./Header.module.css";
import Image from "next/image";
function Header(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                {props.text}
            </h1>
            <Image src={"/assets/decoration.svg"} alt={"Wzór dekoracyjny"} width={253} height={33} />
        </div>
    )

}
export default Header;