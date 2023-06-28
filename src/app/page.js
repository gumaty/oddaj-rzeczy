import styles from './page.module.css'
import Hero from "@/components/Hero";
import InfoContainer from "@/components/InfoContainer";
import SimpleSteps from "@/components/SimpleSteps";
import About from "@/components/About";

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
        <InfoContainer />
        <SimpleSteps />
        <About />
    </main>
  )
}
