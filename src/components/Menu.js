import styles from "@/components/Menu.module.css";
import Link from "next/link";

// import { Link } from "react-scroll";

function Menu(){
    return (
        <div className={styles.wrapper}>
            {/*<Link className={styles.link} to="start" spy={true} smooth={true} offset={50} duration={500} delay={1000}>*/}
            {/*    Start*/}
            {/*</Link>*/}
            {/*<Link className={styles.link} to="happen" spy={true} smooth={true} offset={50} duration={500} delay={1000}>*/}
            {/*    O co chodzi?*/}
            {/*</Link>*/}
            {/*<Link className={styles.link} to="about" spy={true} smooth={true} offset={50} duration={500} delay={1000}>*/}
            {/*    O nas*/}
            {/*</Link>*/}
            {/*<Link className={styles.link} to="orgs" spy={true} smooth={true} offset={50} duration={500} delay={1000}>*/}
            {/*    Fundacja i organizacje*/}
            {/*</Link>*/}
            {/*<Link className={styles.link} to="contact" spy={true} smooth={true} offset={50} duration={500} >*/}
            {/*    Kontakt*/}
            {/*</Link>*/}

            <Link href={'/'} className={styles.link}>Start</Link>
            <Link href={'/'} className={styles.link}>O co chodzi?</Link>
            <Link href={'/'} className={styles.link}>O nas</Link>
            <Link href={'/'} className={styles.link}>Fundacja i organizacje</Link>
            <Link href={'/'} className={styles.link}>Kontakt</Link>
        </div>
    )
}
export default Menu;