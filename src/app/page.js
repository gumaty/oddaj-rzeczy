import styles from './page.module.css'
import Hero from "@/components/Hero";
import InfoContainer from "@/components/InfoContainer";
import SimpleSteps from "@/components/SimpleSteps";
import About from "@/components/About";
import Helps from "@/components/Helps";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero id="start"/>
        <InfoContainer />
        <SimpleSteps id="happen"/>
        <About id="about"/>
        <Helps id="orgs" type={'funds'}/>
        <Contact id="contact" />
    </main>
  )
}
