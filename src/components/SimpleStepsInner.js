import styles from "./SimpleStepsInner.module.css";
import Info from "@/components/Info";
import SimpleStep from "@/components/SimpleStep";
function SimpleStepsInner() {

    const steps = [
        {
            id: 1,
            title: "Wybierz rzeczy",
            description: "ubrania, zabawki, sprzęt i inne",
            image:"icon-1.svg"

        },
        {
            id: 2,
            title: "Spakuj je",
            description: "skorzystaj z worków na śmieci",
            image:"icon-2.svg"

        },
        {
            id: 3,
            title: "Zdecyduj komu chcesz pomóc",
            description: "wybierz zaufane miejsce",
            image:"icon-3.svg"

        },
        {
            id: 4,
            title: "Zamów kuriera",
            description: "kurier przyjedzie w dogodnym terminie",
            image:"icon-4.svg"

        }
    ]

    return (
        <div className={styles.container}>
            {steps.map(step => (
                <SimpleStep key={step.id} step={step}/>
            ))}
        </div>
    )
}

export default SimpleStepsInner;