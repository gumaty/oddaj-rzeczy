import styles from "./OrgContainer.module.css";
import OrgDetails from "@/components/OrgDetails";
function OrgContainer(props) {

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

    const orgs = [
        {
            id: 1,
            name: "Lorem Ipsum 1",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            stuff: "Egestas, sed, tempus"
        },
        {
            id: 2,
            name: "Lorem Ipsum 2",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet"
        },
        {
            id: 3,
            name: "Lorem Ipsum 3",
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            stuff: "Mi, quis, hendrerit, dolor"
        }
    ]

    const local = [
        {
            id: 1,
            name: "Lorem Ipsum 1",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            stuff: "Egestas, sed, tempus"
        },
        {
            id: 2,
            name: "Lorem Ipsum 2",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            stuff: "Ut, aliquam, purus, sit, amet"
        },
        {
            id: 3,
            name: "Lorem Ipsum 3",
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            stuff: "Mi, quis, hendrerit, dolor"
        }
    ]

    return (
        <div className={styles.container}>
            {props.type === 'funds' ? (funds.map(fund => ( <OrgDetails key={fund.id} type={props.type} fund={fund}/> ))) : props.type === 'orgs' ? (orgs.map(fund => ( <OrgDetails key={fund.id} type={props.type} fund={fund}/> ))) : props.type === 'local' ? (local.map(fund => ( <OrgDetails key={fund.id} type={props.type} fund={fund}/> ))): ""}
        </div>
    )
}

export default OrgContainer;