"use client"

import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step4Container from "@/components/Step4Container";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


export default function Home() {
    const router = useRouter();
    const user = useSelector((state) => state.user.email);

    const [email, setEmail] = useState('');

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
                <InfoStepsContainer remark={"Podaj adres oraz termin odbioru rzeczy."}/>
                <Step4Container/>
                <Contact id="contact"/>
            </main>
        )
    }
}
