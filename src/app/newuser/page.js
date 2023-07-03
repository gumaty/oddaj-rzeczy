'use client'

import styles from "@/app/page.module.css";
import MainHeader from "@/components/MainHeader";
import NewUserContainer from "@/components/NewUserContainer";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/db";
import {useState} from "react";
import {useRouter} from "next/navigation";

function Page() {

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
        <main className={styles.main}>
            <MainHeader />
            <NewUserContainer setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}/>
        </main>
    )
}
export default Page;