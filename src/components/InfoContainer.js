import styles from "./InfoContainer.module.css";
import Info from "@/components/Info";
function InfoContainer() {

    const infos = [
        {
            id: 1,
            quantity: 10,
            text: "ODDANYCH WORKÓW",
            description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."

        },
        {
            id: 2,
            quantity: 5,
            text: "WSPARTYCH ORGANIZACJI",
            description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."

        },
        {
            id: 3,
            quantity: 7,
            text: "ZORGANIZOWANYCH ZBIÓREK",
            description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."

        }
    ]

    return (
        <div className={styles.container}>
            {infos.map(info => (
                <Info key={info.id} info={info}/>
            ))}
        </div>
    )
}

export default InfoContainer;