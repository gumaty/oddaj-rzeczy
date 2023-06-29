import styles from "./OrgContainer.module.css";
import OrgDetails from "@/components/OrgDetails";
function OrgContainer() {

    const funds = [
        {
            id: 1,
            name: "Dbam o Zdrowie",
            mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 2,
            name: "Dla dzieci",
            mission: "Pomoc dzieciom z ubogich rodzin.",
            stuff: "ubrania, meble, zabawki"
        },
        {
            id: 3,
            name: "Bez domu",
            mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            stuff: "ubrania, jedzenie, ciepłe koce"
        }
    ]

    return (
        <div className={styles.container}>
            {funds.map(fund => (
                <OrgDetails key={fund.id} fund={fund}/>
            ))}
        </div>
    )
}

export default OrgContainer;