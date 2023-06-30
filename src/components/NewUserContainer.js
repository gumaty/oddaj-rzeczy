import styles from "./NewUserContainer.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import NewUserForm from "@/components/NewUserForm";
function NewUserContainer() {
    return (
        <div className={styles.container}>
            <Header text={"Załóż konto"} />
            <NewUserForm />
            <button className={styles.newUser}>
                <Link href={"/login"}>Zaloguj się</Link>
            </button>
        </div>
    )
}

export default NewUserContainer;