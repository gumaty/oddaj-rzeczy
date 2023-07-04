import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step1Container from "@/components/Step1Container";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <InfoStepsContainer remark={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}/>
        <Step1Container />
        <Contact id="contact" />
    </main>
  )
}
