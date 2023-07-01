import styles from "@/app/page.module.css";
import MainHeader from "@/components/MainHeader";
import LogoutContainer from "@/components/LogoutContainer";

function Page() {
    return (
        <main className={styles.main}>
            <MainHeader />
            <LogoutContainer />
        </main>
    )
}
export default Page;