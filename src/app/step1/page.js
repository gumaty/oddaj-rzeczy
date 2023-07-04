import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import SimpleSteps from "@/components/SimpleSteps";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <InfoStepsContainer remark={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}/>
        <SimpleSteps id="happen"/>
        <Contact id="contact" />
    </main>
  )
}
