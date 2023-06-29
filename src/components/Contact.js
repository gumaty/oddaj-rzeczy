import styles from "./Contact.module.css";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Header text={"Skontaktuj się z nami"}/>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;