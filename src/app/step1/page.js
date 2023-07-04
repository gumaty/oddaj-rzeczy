import styles from '@/app/page.module.css';
import HeroSteps from "@/components/HeroSteps";
import InfoContainer from "@/components/InfoContainer";
import SimpleSteps from "@/components/SimpleSteps";
import About from "@/components/About";
import Helps from "@/components/Helps";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
        <HeroSteps id="start"/>
        <InfoContainer />
        <SimpleSteps id="happen"/>
        <About id="about"/>
        <Helps id="orgs" type={'funds'}/>
        <Contact id="contact" />
    </main>
  )
}
