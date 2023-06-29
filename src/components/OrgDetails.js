import styles from "./OrgDetails.module.css";

function OrgDetails(props) {
    return(
        <div className={styles.container}>
            <div>
                <p className={styles.textName}>Fundacja "{props.fund.name}"</p>
                <p className={styles.textMission}>Cel i misja: {props.fund.mission}</p>
            </div>

            <p className={styles.textStuff}>{props.fund.stuff}</p>
        </div>
    )
}

export default OrgDetails;