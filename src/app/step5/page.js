"use client"

import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step5Container from "@/components/Step5Container";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

export default function Home() {
    const router = useRouter();
    const user = useSelector((state) => state.user.email);

    if (user === "") {
        router.push('/login');
    } else {
        return (
            <main className={styles.main}>
                <HeroSteps id="start"/>
                <Step5Container/>
                <Contact id="contact"/>
            </main>
        )
    }
}
