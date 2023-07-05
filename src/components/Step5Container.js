import styles from "./Step5Container.module.css";

function Step5Container() {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Podsumowanie Twojej darowizny:</h3>
            <h3 className={styles.sectionHeader}>Oddajesz:</h3>
            <div className={styles.inputsContainer}>
                <img className={styles.image} src={`/assets/icon-1.svg`} alt={`Ikona Wybierz rzeczy`}/>
                <p className={styles.textDescription}>4 worki, ubrania w dobrym stanie, dzieciom</p>
            </div>
            <div className={styles.inputsContainer}>
                <img className={styles.image} src={`/assets/icon-4.svg`} alt={`Ikona Zamów kuriera`}/>
                <p className={styles.textDescription}>dla lokalizacji: Warszawa</p>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.boxesContainer}>
                    <div>
                        <h3 className={styles.sectionHeader}>Adres odbioru</h3>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Ulica</p>
                            <p className={styles.textField} >Prosta 51</p>
                        </div>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Miasto</p>
                            <p className={styles.textField} >Warszawa</p>
                        </div>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Kod pocztowy</p>
                            <p className={styles.textField} >90-209</p>
                        </div>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Numer telefonu</p>
                            <p className={styles.textField} >473 839 483</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sectionHeader}>Termin odbioru</h3>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Data</p>
                            <p className={styles.textField} >17.10.2019</p>
                        </div>
                        <div className={styles.inputsContainer}>
                            <p className={styles.labelText} >Godzina</p>
                            <p className={styles.textField} >17:30</p>
                        </div>
                        <div className={styles.textFieldContainer}>
                            <p className={styles.labelText} >Uwagi do kuriera</p>
                            <p className={styles.textField} ></p>
                        </div>
                    </div>
                </div>
                <button className={styles.button} type="submit" >Potwierdzam</button>
            </div>
        </div>
    )
}

export default Step5Container;