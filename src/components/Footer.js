import styles from "./Footer.module.css";
import Image from "next/image";
function Footer() {
    return(
        <footer className={styles.container}>
            <p>Copyright by Coders Lab</p>
            <div className={styles.icons}>
                <Image src={"/assets/facebook.svg"} alt={"Ikona Facebook"} width={30} height={30} />
                <Image src={"/assets/instagram.svg"} alt={"Ikona Instagram"} width={30} height={30} />
            </div>
        </footer>
    )

}

export default Footer;