import styles from "./Helps.module.css";
import Header from "@/components/Header";
import HelpsButtons from "@/components/HelpsButtons";
import OrgContainer from "@/components/OrgContainer";


function Helps() {

    return (
        <div className={styles.container}>
            <Header text={"Komu pomagamy?"}/>
            <HelpsButtons />
            <p className={styles.lead}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <OrgContainer />
        </div>
    )
}

export default Helps;