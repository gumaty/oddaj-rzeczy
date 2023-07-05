import styles from "./Hero.module.css";
import MainContent from "@/components/MainContent";
import MainHeader from "@/components/MainHeader";

function Hero() {
    return (
        <div className={styles.container} id="start">
            <div className={styles.imageContainer}>
                <img src={"../assets/home-hero-image.jpg"} className={styles.heroImage}/>
            </div>
            <div className={styles.inner}>
                <MainHeader />
                <MainContent />
            </div>
        </div>
    )

}
export default Hero;