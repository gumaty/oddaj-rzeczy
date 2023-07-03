import styles from "./NewUserContainer.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import NewUserForm from "@/components/NewUserForm";
function NewUserContainer(props) {
    return (
        <div className={styles.container}>
            <Header text={"Załóż konto"} />
            <NewUserForm setEmail={props.setEmail} setPassword={props.setPassword} handleSubmit={props.handleSubmit} />
            <button className={styles.newUser}>
                <Link href={"/login"}>Zaloguj się</Link>
            </button>
        </div>
    )
}

export default NewUserContainer;