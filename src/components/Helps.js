import styles from "./Helps.module.css";
import Header from "@/components/Header";
import HelpsButtons from "@/components/HelpsButtons";
import OrgContainer from "@/components/OrgContainer";


function Helps(props) {

    return (
        <div className={styles.container}>
            <Header text={"Komu pomagamy?"}/>
            <HelpsButtons type={props.type}/>
            {props.type === 'funds' ? (<p className={styles.lead}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>) : props.type === 'orgs' ? (<p className={styles.lead}>W naszej bazie znajdziesz listę zweryfikowanych Organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>) : (<p className={styles.lead}>W naszej bazie znajdziesz listę zweryfikowanych Zbiórek publicznych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>)}
            <OrgContainer type={props.type}/>
        </div>
    )
}

export default Helps;