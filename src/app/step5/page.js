import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step5Container from "@/components/Step5Container";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <Step5Container />
        <Contact id="contact" />
    </main>
  )
}
