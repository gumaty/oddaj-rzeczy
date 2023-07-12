"use client"

import Link from "next/link";
import styles from "./UserService.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/user";
import {useRouter} from "next/navigation";

function UserService() {
    const user = useSelector((state) => state.user.email);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(logout());
        router.push('/logout');
    }

    if (user === "") {
        return (
            <div className={styles.wrapper}>
                <Link href={'/login'} className={styles.link}>Zaloguj</Link>
                <Link href={'/newuser'} className={styles.borderedLink}>Załóż konto</Link>
            </div>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <p>Cześć {user}!</p>
                <Link href={'/step1'} className={styles.borderedLink}>Oddaj rzeczy</Link>
                <button className={styles.btn} onClick={handleSubmit}>Wyloguj</button>
            </div>
        )
    }


}

export default UserService;