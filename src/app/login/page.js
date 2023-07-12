'use client'

import styles from "@/app/page.module.css";
import MainHeader from "@/components/MainHeader";
import LoginContainer from "@/components/LoginContainer";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/lib/db";
import {useState} from "react";
import {useRouter} from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";


function Page() {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.email);
                dispatch(login(user.email))
                router.push('/');
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <main className={styles.main}>
            <MainHeader />
            <LoginContainer setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}/>
        </main>
    )
}
export default Page;