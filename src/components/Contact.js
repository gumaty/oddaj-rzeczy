import styles from "./Contact.module.css";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Header text={"Skontaktuj się z nami"}/>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;