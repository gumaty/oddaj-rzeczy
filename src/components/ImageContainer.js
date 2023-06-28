import styles from "./ImageContainer.module.css";

function ImageContainer() {
    return (
            <div className={styles.imageContainer}>
                <img src={"../assets/people.jpg"} className={styles.aboutImage}/>
            </div>
        )
}

export default ImageContainer;