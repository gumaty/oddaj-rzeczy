import styles from "./HeroSteps.module.css";
import StepsContent from "@/components/StepsContent";
import MainHeader from "@/components/MainHeader";

function HeroSteps() {
    return (
        <div id="start" className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={"../assets/form-hero-image.jpg"} className={styles.heroImage}/>
            </div>
            <div className={styles.inner}>
                <MainHeader />
                <StepsContent />
            </div>


        </div>

    )

}
export default HeroSteps;