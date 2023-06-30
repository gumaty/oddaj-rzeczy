import styles from "@/app/page.module.css";
import MainHeader from "@/components/MainHeader";
import LoginContainer from "@/components/LoginContainer";

function Page() {
    return (
        <main className={styles.main}>
            <MainHeader />
            <LoginContainer />
        </main>
    )
}
export default Page;