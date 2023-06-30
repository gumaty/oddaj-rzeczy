import UserService from "@/components/UserService";
import Menu from "@/components/Menu";
import styles from "./MainHeader.module.css";

function MainHeader() {
    return (
        <div className={styles.container}>
            <UserService />
            <Menu />
        </div>
    )
}

export default MainHeader;