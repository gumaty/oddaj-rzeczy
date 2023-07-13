"use client"

import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step1Container from "@/components/Step1Container";
import {useRouter} from "next/navigation";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

export default function Home() {

    const [email, setEmail] = useState('');

    const router = useRouter();
    const user = useSelector((state) => state.user.email);
    console.log(user);

    useEffect(() => {
        if (user) {
            setEmail(user)
        } else {
            router.push('/login');
        }
    })

    if (email) {

        return (
            <main className={styles.main}>
                <HeroSteps id="start"/>
                <InfoStepsContainer remark={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}/>
                <Step1Container />
                <Contact id="contact" />
            </main>
        )}
}
