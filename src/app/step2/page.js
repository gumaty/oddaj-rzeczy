"use client"

import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step2Container from "@/components/Step2Container";
import {useRouter} from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
    const router = useRouter();
    const user = useSelector((state) => state.user.email);

    if (user === "") {
        router.push('/login');
    } else {
        return (
            <main className={styles.main}>
                <HeroSteps id="start"/>
                <InfoStepsContainer
                    remark={"Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}/>
                <Step2Container/>
                <Contact id="contact"/>
            </main>
        )
    }
}
