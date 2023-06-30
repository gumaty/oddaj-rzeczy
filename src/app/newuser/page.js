import styles from "@/app/page.module.css";
import MainHeader from "@/components/MainHeader";
import NewUserContainer from "@/components/NewUserContainer";

function Page() {
    return (
        <main className={styles.main}>
            <MainHeader />
            <NewUserContainer />
        </main>
    )
}
export default Page;