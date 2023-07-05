import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoStepsContainer from "@/components/InfoStepsContainer";
import Contact from "@/components/Contact";
import Step3Container from "@/components/Step3Container";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <InfoStepsContainer remark={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}/>
        <Step3Container />
        <Contact id="contact" />
    </main>
  )
}
