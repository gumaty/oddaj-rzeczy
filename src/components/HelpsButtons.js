import HelpsButton from "@/components/HelpsButton";
import styles from "./HelpsButtons.module.css";
import OrgDetails from "@/components/OrgDetails";
import SelectedButton from "@/components/SelectedButton";

function HelpsButtons(props) {
    return (
        <div className={styles.container}>
            {props.type === 'funds' ? <SelectedButton link={'/'} text={"Fundacjom"}/> : <HelpsButton link={'/'} text={"Fundacjom"}/>}
            {props.type === 'orgs' ? <SelectedButton link={'/orgs'} text={"Organizacjom pozarządowym"}/> : <HelpsButton link={'/orgs'} text={"Organizacjom pozarządowym"}/>}
            {props.type === 'local' ? <SelectedButton link={'/local'} text={"Lokalnym zbiórkom"}/> : <HelpsButton link={'/local'} text={"Lokalnym zbiórkom"}/>}
        </div>
    )
}

export default HelpsButtons;