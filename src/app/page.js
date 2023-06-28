import styles from './page.module.css'
import Hero from "@/components/Hero";
import InfoContainer from "@/components/InfoContainer";

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
        <InfoContainer />
    </main>
  )
}
