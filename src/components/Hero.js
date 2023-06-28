import styles from "./Hero.module.css";
import UserService from "@/components/UserService";
import Menu from "@/components/Menu";
import MainContent from "@/components/MainContent";
import ButtonsContainer from "@/components/ButtonsContainer";

function Hero() {
    return (
        <div className={styles.container}>
            <div>
                <UserService />
                <Menu />
                <MainContent />
            </div>


        </div>

    )

}
export default Hero;