import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import Contact from "@/components/Contact";
import Step6Container from "@/components/Step6Container";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <Step6Container />
        <Contact id="contact" />
    </main>
  )
}
