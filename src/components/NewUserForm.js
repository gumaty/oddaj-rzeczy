import styles from "@/components/NewUserForm.module.css";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/db";

function NewUserForm() {


    const [error, setError] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword (auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                router.push('/');
            })
            .catch((error) => {
                setError(true)
            });
    }
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.inputsContainer}>
                <div className={styles.inputControl}>
                    <label>Email</label>
                    <input type="email" onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className={styles.inputControl}>
                    <label>Hasło</label>
                    <input type="password" onChange={e=> setPassword(e.target.value)} />
                </div>
                <div className={styles.inputControl}>
                    <label>Powtórz hasło</label>
                    <input type="password"/>
                </div>
            </div>
            <div className={styles.buttonControl}>
                <button type="submit">Załóż konto</button>
            </div>
        </form>
    )
}

export default NewUserForm;