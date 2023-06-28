import styles from "./Hero.module.css";
import UserService from "@/components/UserService";
import Menu from "@/components/Menu";
import MainContent from "@/components/MainContent";
import ButtonsContainer from "@/components/ButtonsContainer";

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={"../assets/home-hero-image.jpg"} className={styles.heroImage}/>
            </div>
            <div className={styles.inner}>
                <UserService />
                <Menu />
                <MainContent />
            </div>


        </div>

    )

}
export default Hero;