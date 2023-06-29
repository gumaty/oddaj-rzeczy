import styles from "./About.module.css";
import Header from "@/components/Header";
import ImageContainer from "@/components/ImageContainer";
function About() {
    return (
        <div  className={styles.container}>
            <div className={styles.inner}>
                <Header text={"O nas"}/>
                <p className={styles.textDescription}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className={styles.image} src={"/assets/signature.svg"} alt={`Podpis`}/>
            </div>
            <ImageContainer />
        </div>

    )
}

export default About;